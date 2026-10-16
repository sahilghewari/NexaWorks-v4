import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Customer Revenue Intelligence Blueprint",
  description: "A 10-day diagnostic engagement to map your CS workflows, assess data, and build a pilot architecture.",
  alternates: { canonical: "/customer-intelligence-blueprint" },
};

export default function BlueprintPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl page-intro">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            10 Business Days • $3,500 Fixed
          </p>
          <h1 className="mb-8" style={{ color: "var(--nw-ink)" }}>Customer Revenue Intelligence Blueprint</h1>

          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            For teams with a real problem but unclear scope. We diagnose one CS/revenue workflow, assess data feasibility, and map the exact path forward without a massive upfront commitment.
          </p>

          <p className="text-lg font-medium mb-6" style={{ color: "var(--nw-accent)" }}>
            The $3,500 fee is fully credited toward the Pilot if you proceed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium text-white" style={{ backgroundColor: "var(--nw-ink)" }}>Book a discovery call</Link>
            <Link href="/account-risk-snapshot" className="inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium" style={{ borderColor: "var(--nw-line-light)" }}>Start with a free Snapshot</Link>
          </div>

          <div className="p-6 md:p-10 mb-16" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
            <h2 className="text-3xl mb-10" style={{ color: "var(--nw-ink)" }}>Deliverables</h2>

            <ul className="space-y-10">
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>Data & Workflow Map</h3>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>A visual map of where your customer truth actually lives (CRM vs. support vs. calls) and where the intelligence gaps are.</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>Strategic Account Review</h3>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>Manual review of 5–15 strategic accounts to prove what signals could have been caught earlier.</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>Pilot Architecture</h3>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>A technical proposal for a 4-week pilot, outlining exact data sources, human-in-the-loop review steps, and ROI hypothesis.</p>
                </div>
              </li>
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
            <Link
              href="/customer-intelligence-pilot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors border"
              style={{ borderColor: "var(--nw-line-dark)", color: "var(--nw-ink)" }}
            >
              See the Pilot offering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
