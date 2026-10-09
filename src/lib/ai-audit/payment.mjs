export const PLANS = Object.freeze({
  audit: {
    amount: 499900,
    currency: "INR",
    title: "AI Visibility Audit",
    days: 3,
  },
  detailed: {
    amount: 999900,
    currency: "INR",
    title: "Detailed AI Visibility Audit",
    days: 5,
  },
});
const enc = new TextEncoder();
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      ...headers,
    },
  });
}
export async function hmac(secret, value) {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return [
    ...new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(value))),
  ]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}
export function equal(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length)
    return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
async function body(request) {
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    throw new HttpError(400, "Expected JSON.");
  if (Number(request.headers.get("content-length")) > 8192)
    throw new HttpError(400, "Request too large.");
  const text = await request.text();
  if (text.length > 8192) throw new HttpError(400, "Request too large.");
  let input;
  try {
    input = JSON.parse(text);
  } catch {
    throw new HttpError(400, "Invalid JSON.");
  }
  if (!input || typeof input !== "object" || Array.isArray(input))
    throw new HttpError(400, "Expected a JSON object.");
  return input;
}
function clean(value, label, required = true, max = 256) {
  if (
    typeof value !== "string" ||
    value.trim().length > max ||
    (required && !value.trim())
  )
    throw new HttpError(400, `Please provide a valid ${label}.`);
  return value.trim();
}
function customer(input) {
  const c = input?.customer;
  if (!c || typeof c !== "object")
    throw new HttpError(400, "Please provide your business details.");
  const out = {
    name: clean(c.name, "name", true, 100),
    email: clean(c.email, "email", true, 150),
    company: clean(c.company, "company", true, 150),
    website: clean(c.website, "website"),
    category: clean(c.category, "category"),
    competitors: clean(c.competitors ?? "", "competitors", false),
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(out.email))
    throw new HttpError(400, "Please provide a valid email.");
  try {
    const u = new URL(out.website);
    if (!["https:", "http:"].includes(u.protocol)) throw 0;
  } catch {
    throw new HttpError(
      400,
      "Use a complete website URL, starting with https://.",
    );
  }
  return out;
}
async function razorpay(env, path, method = "GET", data, fetcher = fetch) {
  let r;
  try {
    r = await fetcher(`https://api.razorpay.com/v1/${path}`, {
      method,
      headers: {
        Authorization: `Basic ${btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`)}`,
        "Content-Type": "application/json",
      },
      ...(data ? { body: JSON.stringify(data) } : {}),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw new HttpError(
      500,
      "Payment service is unavailable. Please try again.",
    );
  }
  if (r.status === 401)
    throw new HttpError(
      401,
      "Razorpay could not authenticate the configured keys. Please contact hello@nexaworks.tech.",
    );
  if (!r.ok)
    throw new HttpError(
      500,
      "Razorpay could not process this request. Please try again or contact us.",
    );
  return r.json();
}
function cookieName(order) {
  return `nexa_${order}`;
}
function cookie(request, name) {
  return request.headers
    .get("cookie")
    ?.split(";")
    .map((x) => x.trim())
    .find((x) => x.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}
async function seal(env, payload) {
  const value = btoa(JSON.stringify(payload));
  return `${value}.${await hmac(env.RAZORPAY_KEY_SECRET, `checkout:${value}`)}`;
}
async function unseal(env, value) {
  if (!value)
    throw new HttpError(
      400,
      "Checkout session is missing. Please restart checkout.",
    );
  const [encoded, signature] = value.split(".");
  if (
    !equal(
      await hmac(env.RAZORPAY_KEY_SECRET, `checkout:${encoded}`),
      signature,
    )
  )
    throw new HttpError(400, "Invalid checkout session.");
  let p;
  try {
    p = JSON.parse(atob(encoded));
  } catch {
    throw new HttpError(400, "Invalid checkout session.");
  }
  if (p.expires < Date.now())
    throw new HttpError(
      400,
      "Checkout session expired. Please contact us with your payment reference.",
    );
  return p;
}
export async function paymentRoute(request, env, fetcher = fetch) {
  try {
    const url = new URL(request.url);
    if (request.method !== "POST")
      throw new HttpError(405, "Use POST for this endpoint.");
    const origin = request.headers.get("origin");
    if (origin !== url.origin)
      throw new HttpError(403, "Request origin is not allowed.");
    if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET)
      throw new HttpError(
        503,
        "Checkout is temporarily unavailable. Please contact hello@nexaworks.tech.",
      );
    const input = await body(request);
    if (url.pathname === "/api/create-order") {
      const plan = PLANS[input.plan];
      if (
        !plan ||
        Object.hasOwn(input, "amount") ||
        Object.hasOwn(input, "currency")
      )
        throw new HttpError(400, "Choose one of the available audits.");
      if (!Number.isInteger(plan.amount) || plan.amount < 100)
        throw new HttpError(400, "Invalid payment amount.");
      const details = customer(input);
      const receipt = `geo_${crypto.randomUUID().replaceAll("-", "").slice(0, 28)}`;
      const order = await razorpay(
        env,
        "orders",
        "POST",
        {
          amount: plan.amount,
          currency: plan.currency,
          receipt,
          notes: { ...details, plan: input.plan, product: "nexaworks_geo" },
          partial_payment: false,
        },
        fetcher,
      );
      if (
        !/^order_[A-Za-z0-9]+$/.test(order.id) ||
        order.amount !== plan.amount ||
        order.currency !== plan.currency
      )
        throw new HttpError(
          500,
          "Unexpected order response. Please contact us.",
        );
      const token = await seal(env, {
        order_id: order.id,
        plan: input.plan,
        expires: Date.now() + 3600000,
      });
      return json(
        {
          order_id: order.id,
          amount: plan.amount,
          currency: plan.currency,
          key_id: env.RAZORPAY_KEY_ID,
          title: plan.title,
          test_mode: env.RAZORPAY_KEY_ID.startsWith("rzp_test_"),
        },
        200,
        {
          "set-cookie": `${cookieName(order.id)}=${token}; HttpOnly; SameSite=Strict; Path=/api; Max-Age=3600${url.protocol === "https:" ? "; Secure" : ""}`,
        },
      );
    }
    if (url.pathname === "/api/verify-payment") {
      const {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
      } = input;
      if (
        !/^order_[A-Za-z0-9]+$/.test(orderId ?? "") ||
        !/^pay_[A-Za-z0-9]+$/.test(paymentId ?? "") ||
        !/^[a-f0-9]{64}$/.test(signature ?? "")
      )
        throw new HttpError(
          400,
          "Missing or invalid payment verification fields.",
        );
      const session = await unseal(env, cookie(request, cookieName(orderId)));
      if (session.order_id !== orderId || !PLANS[session.plan])
        throw new HttpError(400, "Order does not match this checkout.");
      const expected = await hmac(
        env.RAZORPAY_KEY_SECRET,
        `${session.order_id}|${paymentId}`,
      );
      if (!equal(expected, signature))
        throw new HttpError(
          400,
          "Payment signature did not match. Payment has not been confirmed.",
        );
      const [payment, order] = await Promise.all([
        razorpay(env, `payments/${paymentId}`, "GET", undefined, fetcher),
        razorpay(env, `orders/${session.order_id}`, "GET", undefined, fetcher),
      ]);
      const plan = PLANS[session.plan];
      if (
        payment.order_id !== session.order_id ||
        payment.amount !== plan.amount ||
        payment.currency !== plan.currency ||
        order.amount !== plan.amount ||
        order.currency !== plan.currency ||
        order.notes?.plan !== session.plan ||
        order.notes?.product !== "nexaworks_geo"
      )
        throw new HttpError(
          400,
          "Payment details did not match the selected audit.",
        );
      if (payment.status !== "captured" || order.status !== "paid")
        return json(
          {
            success: false,
            pending: payment.status === "authorized",
            message:
              payment.status === "authorized"
                ? "Payment is authorized and awaiting capture. Please check again shortly."
                : "Payment has not been captured. Please contact us with your reference.",
          },
          409,
        );
      return json({
        success: true,
        payment_id: paymentId,
        order_id: session.order_id,
        title: plan.title,
        days: plan.days,
        amount: plan.amount,
        currency: plan.currency,
        customer: {
          name: order.notes?.name ?? "",
          email: order.notes?.email ?? "",
          company: order.notes?.company ?? "",
          website: order.notes?.website ?? "",
          category: order.notes?.category ?? "",
          competitors: order.notes?.competitors ?? "",
        },
        test_mode: env.RAZORPAY_KEY_ID.startsWith("rzp_test_"),
      });
    }
    throw new HttpError(404, "Endpoint not found.");
  } catch (error) {
    return json(
      {
        success: false,
        error:
          error instanceof HttpError
            ? error.message
            : "Payment service error. Please try again.",
      },
      error instanceof HttpError ? error.status : 500,
    );
  }
}
