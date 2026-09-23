import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "FAQ | NexaWorks Customer Intelligence",
  description: "Frequently asked questions about NexaWorks customer intelligence consulting, pricing, and process.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "We have no case studies yet — why should we trust you?",
      a: "We are a 1-year-old firm, which means you get direct, dedicated access to the founder. We don't hand your project off to junior associates. We offer a scoped, fixed-price 10-day Blueprint so you can evaluate our work on your own data before committing to a larger pilot."
    },
    {
      q: "How is this different from our Gainsight health scores?",
      a: "Gainsight health scores often rely on structured product metrics and lagging indicators. We build intelligence pipelines that read unstructured data—support tickets, Gong transcripts, and emails—to find the nuance and sentiment that health scores miss."
    },
    {
      q: "What data access do you need?",
      a: "For the Blueprint, we typically need read-only access to a subset of your CRM (e.g., Salesforce), your support desk (e.g., Zendesk), and call recordings (e.g., Gong). We do not require write access."
    },
    {
      q: "Do you replace our CS platform?",
      a: "No. We augment your existing tools. Our intelligence can be delivered via Slack, email, or written directly back into your CRM/CS platform via API as custom fields or notes."
    },
    {
      q: "What does the pilot cost?",
      a: "The Customer Intelligence Pilot is currently offered at a fixed founding-client price of $15,000 in exchange for your feedback and permission to publish a measured case study. Once we have 3-5 measurable client outcomes, standard pricing will begin at $25,000+."
    },
    {
      q: "How does the Blueprint credit work?",
      a: "If you start with the $3,500 Customer Revenue Intelligence Blueprint, that entire fee is fully credited toward the $15,000 Pilot if you decide to proceed with implementation. You carry no financial risk to evaluate the architecture."
    },
    {
      q: "Who owns the work — do you need our engineers?",
      a: "We build and run the initial pipeline. We require your IT/Ops team for initial API provisioning (usually 1-2 hours of their time), but we do the heavy lifting. At the end of the pilot, we provide the architecture so your team can own it long-term if desired."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            FAQ
          </p>
          <h1 className="mb-16" style={{ color: "var(--nw-ink)" }}>Frequently Asked Questions</h1>
          
          <div className="mb-16 p-8" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
            <h3 className="mb-4" style={{ color: "var(--nw-ink)" }}>What is customer intelligence consulting?</h3>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>Customer intelligence consulting is a specialized service that helps B2B SaaS companies unify their unstructured customer data (calls, emails, support tickets) with CRM records to proactively identify churn risks and expansion opportunities before they happen.</p>
          </div>

          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-12" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                <h3 className="mb-4 text-2xl" style={{ color: "var(--nw-ink)" }}>{faq.q}</h3>
                <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "var(--nw-ink-soft)" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 text-center" style={{ backgroundColor: "var(--nw-dark)", color: "white" }}>
            <h2 className="mb-6">Still have questions?</h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--nw-dark-soft)" }}>The best way to figure out if we can help is to show us your workflow.</p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
