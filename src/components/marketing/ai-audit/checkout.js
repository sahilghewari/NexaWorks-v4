export default function mountCheckout(root) {
  const lifecycle = new AbortController();
  let activeCheckout;
  const listen = (target, event, handler) =>
    target.addEventListener(event, handler, { signal: lifecycle.signal });
  const plans = {
    audit: { title: "AI Visibility Audit", price: "₹4,999", days: 3 },
    detailed: {
      title: "Detailed AI Visibility Audit",
      price: "₹9,999",
      days: 5,
    },
  };
  const dialog = root.querySelector("#checkout-dialog"),
    form = root.querySelector("#checkout-form"),
    status = root.querySelector("#checkout-status"),
    payButton = root.querySelector("#pay-button"),
    retry = root.querySelector("#retry-verification");
  let selected = "audit",
    busy = false,
    verification = null;
  function showStatus(message, error = false) {
    status.textContent = message;
    status.classList.toggle("error", error);
  }
  function setBusy(value) {
    busy = value;
    payButton.disabled = value;
    payButton.textContent = value
      ? "Please wait…"
      : `Pay ${plans[selected].price} securely ↗`;
    dialog.querySelector(".dialog-close").disabled = value;
  }
  function open(plan) {
    if (!plans[plan]) throw new Error("Unknown audit plan.");
    if (busy) return;
    selected = plan;
    verification = null;
    retry.hidden = true;
    form.hidden = false;
    showStatus("");
    setBusy(false);
    root.querySelector("#checkout-title").textContent =
      "Let’s meet your brand.";
    root.querySelector("#checkout-plan").textContent =
      `${plans[plan].title} · ${plans[plan].price} INR · One-time payment`;
    if (!dialog.open) dialog.showModal();
  }
  root
    .querySelectorAll(".purchase")
    .forEach((button) =>
      listen(button, "click", () => open(button.dataset.plan)),
    );
  listen(dialog.querySelector(".dialog-close"), "click", () => dialog.close());
  listen(dialog, "cancel", (e) => {
    if (busy) e.preventDefault();
  });
  async function post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      signal: lifecycle.signal,
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(data),
    });
    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error(
        "The payment service returned an unexpected response. Please try again.",
      );
    }
    if (!response.ok) {
      const err = new Error(
        result.error || result.message || "Payment could not be completed.",
      );
      err.pending = result.pending;
      throw err;
    }
    return result;
  }
  async function verify() {
    if (lifecycle.signal.aborted) return;
    if (!dialog.open) dialog.showModal();
    setBusy(true);
    showStatus("Verifying your payment…");
    try {
      const result = await post("/api/verify-payment", verification);
      if (!result.success) throw new Error("Payment has not been confirmed.");
      form.hidden = true;
      retry.hidden = true;
      root.querySelector("#checkout-title").textContent = result.test_mode
        ? "Test payment verified."
        : "Payment confirmed.";
      showStatus(
        `${result.test_mode ? "This was a test payment; no real audit order is fulfilled." : "Thank you for purchasing the order. Our team will reach out to you shortly regarding the service."} Payment reference: ${result.payment_id}. Keep this reference for your records.`,
      );
    } catch (error) {
      if (lifecycle.signal.aborted) return;
      showStatus(
        `${error.message} Keep your payment reference and contact hello@nexaworks.tech if needed. Do not pay again while checking this payment.`,
        true,
      );
      retry.hidden = false;
      form.hidden = true;
    } finally {
      if (!lifecycle.signal.aborted) setBusy(false);
    }
  }
  listen(retry, "click", verify);
  listen(form, "submit", async (event) => {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    if (!window.Razorpay) {
      showStatus(
        "Razorpay checkout could not load. Check your connection or reload the page.",
        true,
      );
      return;
    }
    setBusy(true);
    showStatus("Creating your secure order…");
    try {
      const customer = Object.fromEntries(new FormData(form));
      const order = await post("/api/create-order", {
        plan: selected,
        customer,
      });
      root.querySelector("#test-notice").hidden = !order.test_mode;
      const checkout = (activeCheckout = new window.Razorpay({
        key: order.key_id,
        order_id: order.order_id,
        amount: order.amount,
        currency: order.currency,
        name: "NexaWorks",
        description: order.title,
        prefill: { name: customer.name, email: customer.email },
        theme: { color: "#0e766e" },
        handler: async (response) => {
          verification = response;
          await verify();
        },
        modal: {
          ondismiss: () => {
            if (lifecycle.signal.aborted) return;
            if (!verification) {
              if (!dialog.open) dialog.showModal();
              setBusy(false);
              showStatus(
                "Checkout closed. No payment has been confirmed. You can try again.",
              );
            }
          },
        },
      }));
      checkout.on("payment.failed", () => {
        showStatus(
          "Payment failed. Try another payment method in Razorpay, or close checkout and try again.",
          true,
        );
      });
      showStatus("Complete your payment in the Razorpay window.");
      dialog.close();
      checkout.open();
    } catch (error) {
      if (lifecycle.signal.aborted) return;
      if (!dialog.open) dialog.showModal();
      setBusy(false);
      showStatus(error.message, true);
    }
  });
  return () => {
    lifecycle.abort();
    activeCheckout?.close();
    if (dialog.open) dialog.close();
  };
}
