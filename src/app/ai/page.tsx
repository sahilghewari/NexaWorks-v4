import type { Metadata } from "next";
import AuditLanding from "@/components/marketing/ai-audit/AuditLanding";
import "./audit.css";

export const metadata: Metadata = {
  title: "AI Visibility Audits",
  description:
    "See how ChatGPT, Perplexity, Gemini and Claude describe your brand. Choose a $49 visibility diagnosis or a $99 detailed audit and prioritized action plan.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "AI Visibility Audits | NexaWorks",
    description:
      "Evidence-backed AI visibility audits. Diagnosis from $49; detailed action plan from $99.",
    url: "/ai",
  },
  twitter: {
    title: "AI Visibility Audits | NexaWorks",
    description: "Understand your brand's visibility across four AI engines.",
  },
};

export default function AiAuditPage() {
  return (
    <AuditLanding
      testMode={process.env.RAZORPAY_KEY_ID?.startsWith("rzp_test_") ?? false}
    />
  );
}
