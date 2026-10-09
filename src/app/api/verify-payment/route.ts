import nodemailer from "nodemailer";
import { paymentRoute } from "@/lib/ai-audit/payment.mjs";
export const runtime = "nodejs";

function mailer() {
  const host =
    process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = process.env.SMTP_PORT || process.env.EMAIL_PORT || "465";
  const user =
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.EMAIL ||
    process.env.MAIL_USER;
  const pass =
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS ||
    process.env.EMAIL_PASSWORD ||
    process.env.MAIL_PASS;
  if (!user || !pass) return null;
  return {
    user,
    transport: nodemailer.createTransport({
      host,
      port: Number(port),
      secure: String(port) === "465",
      auth: { user, pass },
    }),
  };
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const response = await paymentRoute(request, {
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  });
  // Best-effort order emails: a mail failure must never break payment
  // confirmation, so everything here is guarded and silent on error.
  try {
    const data = await response.clone().json();
    if (data?.success && !data?.test_mode && data?.customer?.email) {
      const mail = mailer();
      if (mail) {
        const c = data.customer;
        const amount =
          typeof data.amount === "number"
            ? `₹${(data.amount / 100).toLocaleString("en-IN")}`
            : "";
        const when = new Date().toISOString();
        // 1. Notify the founder with the full buyer record.
        await mail.transport.sendMail({
          from: `"NexaWorks Orders" <${mail.user}>`,
          to: "sahil@nexaworks.tech",
          replyTo: c.email,
          subject: `New paid order: ${data.title} — ${c.name} (${c.company})`,
          html: `
            <h2>New paid audit order</h2>
            <p><strong>Plan:</strong> ${esc(data.title)}${amount ? ` — ${esc(amount)}` : ""}</p>
            <p><strong>Payment ID:</strong> ${esc(data.payment_id)}</p>
            <p><strong>Order ID:</strong> ${esc(data.order_id)}</p>
            <p><strong>Name:</strong> ${esc(c.name)}</p>
            <p><strong>Email:</strong> ${esc(c.email)}</p>
            <p><strong>Company:</strong> ${esc(c.company)}</p>
            <p><strong>Website:</strong> ${esc(c.website)}</p>
            <p><strong>Category:</strong> ${esc(c.category)}</p>
            <p><strong>Competitors:</strong> ${esc(c.competitors) || "—"}</p>
            <p><strong>Delivery promise:</strong> ${esc(String(data.days))} business days</p>
            <p><strong>Time:</strong> ${esc(when)}</p>
          `,
        });
        // 2. Confirm the order to the buyer (receipt + what happens next).
        await mail.transport.sendMail({
          from: `"NexaWorks" <${mail.user}>`,
          to: c.email,
          subject: `Your NexaWorks order is confirmed — ${data.title}`,
          html: `
            <p>Hi ${esc(c.name)},</p>
            <p>Thank you for purchasing the order. Our team will reach out to you shortly regarding the service.</p>
            <h3>Order summary</h3>
            <p><strong>Plan:</strong> ${esc(data.title)}${amount ? ` — ${esc(amount)}` : ""}</p>
            <p><strong>Payment reference:</strong> ${esc(data.payment_id)}</p>
            <p><strong>Order date:</strong> ${esc(when)}</p>
            <p>Your audit will be prepared within ${esc(String(data.days))} business days and delivered to this email address.</p>
            <p>Questions? Reply to this email or write to hello@nexaworks.tech. Our <a href="https://nexaworks.tech/refund-policy">refund policy</a> and <a href="https://nexaworks.tech/terms">terms</a> apply.</p>
            <p>— Team NexaWorks</p>
          `,
        });
      }
    }
  } catch (error) {
    console.error("order email failed:", error);
  }
  return response;
}
