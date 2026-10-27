import Link from "next/link";

export const metadata = {
  title: "FAQ — Signal Seat",
  description: "Frequently asked questions about NexaWorks Signal Seat: the daily 8am Risk Brief, pricing, the 14-day free trial, data access and cancellation.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Signal Seat, in one line?",
      a: "Your daily churn early-warning system. Every working morning at 8am, each CSM gets their top 5 at-risk accounts in Slack or email — with the exact signals, the renewal date and one recommended next move."
    },
    {
      q: "What does it cost?",
      a: "Signal Seat is $50 per CSM per month, flat — ₹3,999 per CSM per month in India. Unlimited accounts, no per-account fees, $0 implementation, month-to-month. The first 14 days are free and no card is needed to start."
    },
    {
      q: "What is the 3-Risk Promise?",
      a: "If, in the first 14 days, we do not flag at least 3 genuine risks your team had not already caught, month 1 is free too — and we show you exactly what we checked."
    },
    {
      q: "How is this different from our Gainsight health scores?",
      a: "Health scores mostly weight structured, lagging metrics. Signal Seat reads the unstructured signals too — champion changes, call and ticket patterns, usage narrowing — and ranks accounts by risk and renewal date every morning. It sits on top of the platform you already own; it does not replace it."
    },
    {
      q: "What data access do you need?",
      a: "Read-only access to your CRM (HubSpot or Salesforce), your support desk, call transcripts and product usage data — or you can start from CSV exports. We never need write access, and your data is never used to train models."
    },
    {
      q: "How fast can we start?",
      a: "After a short connect call and access (or a CSV) being in place, the first Risk Brief lands within 48 hours. There is no implementation project and no new dashboard for your team to learn."
    },
    {
      q: "Does Signal Seat ever message our customers?",
      a: "Never automatically. For every flagged account we prepare a ready draft — a save email, a QBR outline or an internal escalation note — and the CSM always reviews, edits and sends it themselves."
    },
    {
      q: "Can we cancel?",
      a: "Yes. Signal Seat is month-to-month and you can cancel in one click — no annual lock-in and no exit call. On cancellation we delete your data within 7 days and confirm it in writing."
    },
    {
      q: "Who is it for?",
      a: "B2B SaaS teams with roughly 100–500 staff, 5–30 CSMs and 100–1,000 customer accounts, already using HubSpot or Salesforce with Slack and a support desk. If you have under 50 accounts, a spreadsheet is honestly fine."
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
            <h3 className="mb-4" style={{ color: "var(--nw-ink)" }}>What is NexaWorks Signal Seat?</h3>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>Signal Seat is a daily churn early-warning service for B2B SaaS customer success teams. It watches your CRM, tickets, calls and product usage, and sends each CSM a short brief at 8am with the accounts that need attention that day — before the renewal is already lost.</p>
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
            <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--nw-dark-soft)" }}>The fastest way to judge Signal Seat is to see it on your own accounts. The first 14 days are free, with no card.</p>
            <Link
              href="/signal-seat#trial"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
            >
              Start your 14 free days
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
