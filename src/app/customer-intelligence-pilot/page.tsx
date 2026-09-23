import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Customer Intelligence Pilot",
  description: "A 4-6 week flagship engagement to build and run a human-reviewed intelligence pipeline on your data.",
};

export default function PilotPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Flagship • 4-6 Weeks • $15,000 Fixed
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>Customer Intelligence Pilot</h1>
          
          <p className="text-xl leading-relaxed mb-4" style={{ color: "var(--nw-ink-soft)" }}>
            One workflow. 20–50 strategic accounts. 3–5 source systems. We build and run a human-reviewed intelligence pipeline on your data to prove value before you scale.
          </p>
          <p className="text-sm italic mb-16" style={{ color: "var(--nw-ink-soft)" }}>
            Offered at $15,000 for founding clients in exchange for feedback and permission to publish a measured case study.
          </p>

          <div className="p-10 mb-16 relative overflow-hidden" style={{ backgroundColor: "var(--nw-dark)", color: "white" }}>
            <h2 className="text-3xl mb-10 text-white">Deliverables</h2>
            <ul className="space-y-10 relative z-10">
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl mb-2 text-white">One-Click Meeting Briefs</h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>Pre-meeting context assembled across CRM, Zendesk, and Gong, formatted for quick reading.</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl mb-2 text-white">Evidence-Backed Risk Signals</h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>Alerts for churn risks (e.g. champion left, usage drop, negative sentiment) with direct links to the source data.</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl mb-2 text-white">Weekly Portfolio Action Lists</h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>A curated weekly digest for CS leaders highlighting the top 5 accounts requiring immediate intervention.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h3 className="mb-6" style={{ color: "var(--nw-ink)" }}>Qualification Criteria</h3>
            <p className="text-lg mb-6" style={{ color: "var(--nw-ink-soft)" }}>To ensure the pilot is successful, we require:</p>
            <ul className="list-disc pl-6 space-y-3 text-lg" style={{ color: "var(--nw-ink-soft)" }}>
              <li>A specific, urgent business problem (e.g., high churn in a specific segment).</li>
              <li>Sponsorship from a VP or C-level executive.</li>
              <li>Commitment to provide API or export access to 3-5 data systems within Week 1.</li>
              <li>A 30-60 day evaluation window.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pb-24">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
