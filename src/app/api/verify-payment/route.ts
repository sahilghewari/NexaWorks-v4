import { paymentRoute } from "@/lib/ai-audit/payment.mjs";
export const runtime = "nodejs";
export async function POST(request: Request) {
  return paymentRoute(request, {
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  });
}
