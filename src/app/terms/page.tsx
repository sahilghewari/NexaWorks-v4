export const metadata = {
  title: "Terms of Service | NexaWorks",
  description:
    "The terms under which NexaWorks provides its AI visibility audits, snapshots, and customer intelligence consulting services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    h: "1. Who we are",
    p: [
      "NexaWorks (“we”, “us”) is a consulting practice operated by Sahil Sanjay Ghewari, based in Mumbai, India. These terms govern your use of nexaworks.tech and any paid engagement with us, including the AI Visibility Audit, Account Risk Snapshot, Signal Stack Audit, Intelligence Blueprint, and Intelligence Pilot (collectively, the “Services”).",
    ],
  },
  {
    h: "2. What we sell",
    p: [
      "We sell fixed-scope, expert-delivered digital services: audits, snapshots, diagnostics, and consulting engagements. Each engagement’s scope, deliverables, and delivery timeline are confirmed in writing (email or proposal) before payment.",
      "The free AI Visibility Snapshot is provided as-is for informational purposes and does not constitute a paid engagement.",
    ],
  },
  {
    h: "3. Payment",
    p: [
      "Paid engagements are billed upfront in INR or USD as quoted. Payments are processed securely through Razorpay; we never see or store your card, UPI, or bank credentials.",
      "Work begins only after payment is confirmed. Prices quoted are exclusive of any applicable taxes unless stated otherwise.",
    ],
  },
  {
    h: "4. No refunds",
    p: [
      "All payments are final. Because our Services are custom, expert-delivered digital work that begins immediately upon payment, we do not offer refunds once a payment is completed. See our Refund Policy for the full statement.",
    ],
  },
  {
    h: "5. Your responsibilities",
    p: [
      "You agree to provide accurate information requested for the engagement (company details, competitors, access needed for diagnostics) and to respond to reasonable follow-up questions within the engagement window. Delays on your side may extend delivery timelines.",
      "You agree not to misuse the site, attempt to disrupt the Services, or misrepresent our work as your own.",
    ],
  },
  {
    h: "6. Intellectual property",
    p: [
      "Deliverables created specifically for you (audit reports, snapshots, briefs) are yours to use internally once paid in full. Our underlying methods, frameworks, scoring models, and templates remain our intellectual property.",
      "You may not resell or redistribute our deliverables as a competing commercial product without written permission.",
    ],
  },
  {
    h: "7. Limitation of liability",
    p: [
      "Our Services provide analysis and recommendations; business decisions remain yours. To the maximum extent permitted by law, our total liability for any engagement is limited to the fee paid for that engagement. We are not liable for indirect, incidental, or consequential losses.",
    ],
  },
  {
    h: "8. Changes and contact",
    p: [
      "We may update these terms; the version in force at the time of your purchase applies to that purchase. For questions, contact hello@nexaworks.tech or +91 83569 54152.",
      "These terms are governed by the laws of India, with jurisdiction in Mumbai, Maharashtra.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
      <div className="container-nw max-w-4xl pt-16 pb-24">
        <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
          Legal
        </p>
        <h1 className="mb-4" style={{ color: "var(--nw-ink)" }}>
          Terms of Service
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
