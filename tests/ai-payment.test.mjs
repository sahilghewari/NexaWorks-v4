import test from "node:test";
import assert from "node:assert/strict";
import { paymentRoute, hmac } from "../src/lib/ai-audit/payment.mjs";
const env = {
  RAZORPAY_KEY_ID: "rzp_test_example",
  RAZORPAY_KEY_SECRET: "test-only-secret",
};
const customer = {
  name: "Test Buyer",
  email: "buyer@example.com",
  company: "Example",
  website: "https://example.com",
  category: "Test software",
  competitors: "",
};
function request(path, data, cookie, origin = "https://site.example") {
  return new Request("https://site.example" + path, {
    method: "POST",
    headers: {
      origin,
      "Content-Type": "application/json",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(data),
  });
}
async function create(plan = "audit", extra = {}) {
  let sent;
  const r = await paymentRoute(
    request("/api/create-order", { plan, customer, ...extra }),
    env,
    async (url, opts) => {
      sent = JSON.parse(opts.body);
      return Response.json({
        id: "order_test123",
        amount: sent.amount,
        currency: sent.currency,
      });
    },
  );
  return { r, cookie: r.headers.get("set-cookie")?.split(";")[0], sent };
}
async function verify(cookie, overrides = {}, paymentStatus = "captured") {
  const data = {
    razorpay_order_id: "order_test123",
    razorpay_payment_id: "pay_test123",
    razorpay_signature: await hmac(
      env.RAZORPAY_KEY_SECRET,
      "order_test123|pay_test123",
    ),
    ...overrides,
  };
  return paymentRoute(
    request("/api/verify-payment", data, cookie),
    env,
    async (url) =>
      Response.json(
        url.includes("/payments/")
          ? {
              order_id: "order_test123",
              amount: 499900,
              currency: "INR",
              status: paymentStatus,
            }
          : {
              amount: 499900,
              currency: "INR",
              status: paymentStatus === "captured" ? "paid" : "attempted",
              notes: { plan: "audit", product: "nexaworks_geo" },
            },
      ),
  );
}
test("plan amounts are server-owned and buyer details retained in order notes", async () => {
  for (const [plan, amount] of [
    ["audit", 499900],
    ["detailed", 999900],
  ]) {
    const { r, sent, cookie } = await create(plan);
    assert.equal(r.status, 200);
    assert.equal(sent.amount, amount);
    assert.equal(sent.notes.email, customer.email);
    assert.ok(cookie);
    assert.match(
      r.headers.get("set-cookie"),
      /HttpOnly.*SameSite=Strict.*Secure/,
    );
    assert.equal((await r.json()).key_id, env.RAZORPAY_KEY_ID);
  }
});
test("rejects client prices, unknown plans and missing fields before provider call", async () => {
  for (const data of [
    { plan: "audit", customer, amount: 100 },
    { plan: "bogus", customer },
    { plan: "audit", customer: {} },
  ]) {
    const r = await paymentRoute(request("/api/create-order", data), env, () =>
      assert.fail("must not call Razorpay"),
    );
    assert.equal(r.status, 400);
  }
});
test("rejects cross-origin requests", async () =>
  assert.equal(
    (
      await paymentRoute(
        request(
          "/api/create-order",
          { plan: "audit", customer },
          undefined,
          "https://other.example",
        ),
        env,
      )
    ).status,
    403,
  ));
test("uses the browser host when Next.js uses an internal request hostname", async () => {
  const r = await paymentRoute(
    new Request("http://localhost:4180/api/create-order", {
      method: "POST",
      headers: {
        host: "127.0.0.1:4180",
        origin: "http://127.0.0.1:4180",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: "audit", customer }),
    }),
    env,
    async () =>
      Response.json({
        id: "order_test123",
        amount: 499900,
        currency: "INR",
      }),
  );
  assert.equal(r.status, 200);
});
test("rejects another origin even when forwarded host claims it is allowed", async () => {
  const r = await paymentRoute(
    new Request("https://internal.example/api/create-order", {
      method: "POST",
      headers: {
        host: "site.example",
        origin: "https://other.example",
        "x-forwarded-host": "other.example",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: "audit", customer }),
    }),
    env,
    () => assert.fail("must not call Razorpay"),
  );
  assert.equal(r.status, 403);
});
test("auth failure returns 401 without upstream credentials or response", async () => {
  const r = await paymentRoute(
    request("/api/create-order", { plan: "audit", customer }),
    env,
    async () => new Response("secret provider detail", { status: 401 }),
  );
  assert.equal(r.status, 401);
  assert.ok(!(await r.text()).includes("secret provider detail"));
});
test("captured payment with signed server session verifies", async () => {
  const { cookie } = await create();
  const r = await verify(cookie);
  assert.equal(r.status, 200);
  assert.equal((await r.json()).success, true);
});
test("invalid signature never marks payment paid", async () => {
  const { cookie } = await create();
  const r = await verify(cookie, { razorpay_signature: "0".repeat(64) });
  assert.equal(r.status, 400);
  assert.equal((await r.json()).success, false);
});
test("missing or forged checkout context rejected", async () => {
  assert.equal((await verify(undefined)).status, 400);
  assert.equal((await verify("nexa_order_test123=forged.abcdef")).status, 400);
  assert.equal(
    (await verify(undefined, { razorpay_payment_id: "" })).status,
    400,
  );
});
test("authorized but uncaptured payment remains pending", async () => {
  const { cookie } = await create();
  const r = await verify(cookie, {}, "authorized");
  assert.equal(r.status, 409);
  const data = await r.json();
  assert.equal(data.success, false);
  assert.equal(data.pending, true);
});
test("amount mismatch rejected even with valid signature", async () => {
  const { cookie } = await create();
  const data = {
    razorpay_order_id: "order_test123",
    razorpay_payment_id: "pay_test123",
    razorpay_signature: await hmac(
      env.RAZORPAY_KEY_SECRET,
      "order_test123|pay_test123",
    ),
  };
  const r = await paymentRoute(
    request("/api/verify-payment", data, cookie),
    env,
    async () =>
      Response.json({
        amount: 100,
        currency: "INR",
        order_id: "order_test123",
        status: "captured",
      }),
  );
  assert.equal(r.status, 400);
});
