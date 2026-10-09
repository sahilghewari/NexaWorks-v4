export const metadata = {
  title: "Cancellation Policy | NexaWorks",
  description:
    "NexaWorks cancellation policy: paid engagements cannot be cancelled for a refund once payment is completed.",
  alternates: { canonical: "/cancellation-policy" },
};

const sections = [
  {
    h: "Paid engagements cannot be cancelled for a refund",
    p: [
      "Once payment for an engagement (AI Visibility Audit, Account Risk Snapshot, Signal Stack Audit, Intelligence Blueprint, or Intelligence Pilot) is completed, the engagement cannot be cancelled in exchange for a refund. Our work begins immediately and the effort is committed to your account.",
      "If you need to pause an engagement for a genuine reason (team unavailability, data access delays), write to hello@nexaworks.tech — we will make a reasonable effort to reschedule delivery, but the fee remains non-refundable.",
    ],
  },
  {
    h: "Before payment",
    p: [
      "You may cancel or decline any proposed engagement at any time before paying, with no charge and no obligation. A discovery call or proposal is never a commitment.",
    ],
  },
  {
    h: "Free snapshot requests",
    p: [
      "The free AI Visibility Snapshot can be withdrawn at any time — just email hello@nexaworks.tech and we will delete your request and any associated data.",
    ],
  },
  {
    h: "Cancellation by us",
    p: [
      "In the rare case we cannot deliver an engagement (for example, a conflict of interest or inability to access required data through no fault of yours), we will cancel and refund the payment in full. This is the only circumstance in which a refund is issued.",
    ],
  },
  {
    h: "Questions",
    p: [
      "hello@nexaworks.tech or +91 83569 54152.",
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
      <div className="container-nw max-w-4xl pt-16 pb-24">
        <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
          Legal
        </p>
        <h1 className="mb-4" style={{ color: "var(--nw-ink)" }}>
          Cancellation Policy
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
