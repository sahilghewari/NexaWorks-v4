import Link from "next/link";
import { MUSTER_FAQS } from "@/components/marketing/muster-home/faqs";

export const metadata = {
  title: "FAQ: Muster AI",
  description: "Frequently asked questions about Muster AI, the AI customer success manager: approvals, setup, health scores, integrations and data.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqs = MUSTER_FAQS;

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
            <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--nw-dark-soft)" }}>The fastest way to judge Muster is to see it on your own accounts.</p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
