export const metadata = {
  title: "Refund Policy | NexaWorks",
  description:
    "NexaWorks refund policy: all payments for our audits and consulting engagements are final and non-refundable.",
  alternates: { canonical: "/refund-policy" },
};

const sections = [
  {
    h: "No refunds",
    p: [
      "All payments made to NexaWorks are final. We do not offer refunds once a payment has been completed — no exceptions for change of mind, delayed internal review, or results you disagree with.",
      "This is because our work is custom, expert-delivered digital service: the AI Visibility Audit, Account Risk Snapshot, Signal Stack Audit, Intelligence Blueprint, and Intelligence Pilot all begin immediately upon payment confirmation, and the effort cannot be recovered or resold.",
    ],
  },
  {
    h: "Before you pay",
    p: [
      "To make sure the engagement is right for you before any money changes hands, we offer a free AI Visibility Snapshot and a pre-purchase discovery call. Please use them — and ask every question you have — before paying, because the payment cannot be reversed afterward.",
    ],
  },
  {
    h: "Duplicate or erroneous charges",
    p: [
      "If you were charged twice for the same engagement due to a technical error on our side, write to hello@nexaworks.tech within 7 days with your payment receipt. Genuine duplicate charges will be corrected; this is not a refund of the engagement itself.",
    ],
  },
  {
    h: "Chargebacks",
    p: [
      "Initiating a chargeback or payment dispute with your bank instead of contacting us first is a violation of these terms and will end the engagement immediately, with no deliverable owed.",
    ],
  },
  {
    h: "Questions",
    p: [
      "If anything about scope, timeline, or deliverables is unclear before you pay, ask us first: hello@nexaworks.tech or +91 83569 54152.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
      <div className="container-nw max-w-4xl pt-16 pb-24">
        <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
          Legal
        </p>
        <h1 className="mb-4" style={{ color: "var(--nw-ink)" }}>
          Refund Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: "var(--nw-ink-soft)" }}>
          Last updated: October 8, 2026
        </p>
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.h} className="pb-12" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
              <h3 className="mb-4 text-2xl" style={{ color: "var(--nw-ink)" }}>
                {s.h}
              </h3>
              {s.p.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed max-w-3xl mb-4" style={{ color: "var(--nw-ink-soft)" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
