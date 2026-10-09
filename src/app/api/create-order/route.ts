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
  // Best-effort lead capture: the buyer filled the checkout form, so notify
  // the founder even if they abandon before paying. Never breaks the order.
  try {
    const data = await response.clone().json();
    if (data?.order_id && data?.customer?.email && !data?.test_mode) {
      const mail = mailer();
      if (mail) {
        const c = data.customer;
        const amount =
          typeof data.amount === "number"
            ? `₹${(data.amount / 100).toLocaleString("en-IN")}`
            : "";
        await mail.transport.sendMail({
          from: `"NexaWorks Leads" <${mail.user}>`,
          to: "sahil@nexaworks.tech",
          replyTo: c.email,
          subject: `Checkout started: ${c.name} (${c.company}) — ${data.title}`,
          html: `
            <h2>Checkout started (payment pending)</h2>
            <p>Someone filled the checkout form. Follow up if they don't complete payment.</p>
            <p><strong>Plan:</strong> ${esc(data.title)}${amount ? ` — ${esc(amount)}` : ""}</p>
            <p><strong>Order ID:</strong> ${esc(data.order_id)}</p>
            <p><strong>Name:</strong> ${esc(c.name)}</p>
            <p><strong>Email:</strong> ${esc(c.email)}</p>
            <p><strong>Company:</strong> ${esc(c.company)}</p>
            <p><strong>Website:</strong> ${esc(c.website)}</p>
            <p><strong>Category:</strong> ${esc(c.category)}</p>
            <p><strong>Competitors:</strong> ${esc(c.competitors) || "—"}</p>
            <p><strong>Time:</strong> ${esc(new Date().toISOString())}</p>
          `,
        });
      }
    }
  } catch (error) {
    console.error("checkout lead email failed:", error);
  }
  return response;
}
