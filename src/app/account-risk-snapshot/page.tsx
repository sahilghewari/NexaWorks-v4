import Link from "next/link";
import { ArrowRight, Check, Search, Layers, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Account Risk Snapshot | NexaWorks",
  description:
    "A free 5-day diagnostic for B2B SaaS: we connect your CRM, call, ticket, and product data, rank your 20 riskiest accounts, and show you the churn signals your health score missed. No contract, no platform to buy.",
  alternates: { canonical: "/account-risk-snapshot" },
};

const buyerQuotes = [
  {
    quote: "I felt like an idiot. It was all there.",
    context: "A CSM after a churn post-mortem — r/CustomerSuccess, 2026",
  },
  {
    quote: "Only 30-40% of at-risk customers reach out. The rest churn silently.",
    context: "From interviews with 9 CS leaders — r/CustomerSuccess, 2026",
  },
  {
    quote: "Most health scores measure activity around the product, not value from the product.",
    context: "r/CustomerSuccess, 2026",
  },
  {
    quote: "Five systems. Every time. There is no single place where those signals come together.",
    context: "A CSM describing pre-call account research — r/CustomerSuccess, 2026",
  },
];

const steps = [
  {
    icon: Layers,
    title: "You give us access to up to 3 data sources",
    text: "Salesforce or HubSpot, Gong or call transcripts, Zendesk or support tickets, Slack, product usage exports. Read-only. No implementation project.",
  },
  {
    icon: Search,
    title: "We rank every account by risk",
    text: "We connect the signals across your systems and rank your full book. You get the 20 riskiest accounts, each with the 3–5 signals behind its score, in plain language.",
  },
  {
    icon: PhoneCall,
    title: "45-minute readout call, 5 business days later",
    text: "We walk through the ranked list with you, signal by signal. Your CSMs leave with actions they can take on Monday morning.",
  },
];

const faqs = [
  {
    q: "Do we need to buy a platform or replace our CS software?",
    a: "No. The Snapshot works alongside whatever you own — Gainsight, ChurnZero, Vitally, or a spreadsheet. We are not selling software. We find the signals hiding across the tools you already pay for.",
  },
  {
    q: "How is this different from our health score?",
    a: "Most health scores weight what is easy to measure: logins, tickets closed, meetings held. In a 2026 poll of CS leaders shared on r/CustomerSuccess, 82% said their health score caught less than half of churn. The Snapshot validates risk against real renewal outcomes and reads the people signals — champion engagement, sentiment shifts, sponsor changes — that scores usually miss.",
  },
  {
    q: "What data do you need from us?",
    a: "Read-only access or exports from up to three sources: your CRM, call transcripts, support tickets, Slack, or product usage data. Most teams get us what we need in a day.",
  },
  {
    q: "What happens after the readout call?",
    a: "Nothing, unless you want more. The Snapshot, the ranked list, and the readout are free. If you want the signals wired into a live weekly workflow afterward, that is the Intelligence Pilot — a separate, fixed-price engagement.",
  },
  {
    q: "Who qualifies?",
    a: "B2B SaaS companies with 100+ employees and at least two of the data sources above. We run four Snapshots per month so each one gets real analyst time.",
  },
];

export default function AccountRiskSnapshotPage() {
  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Free diagnostic • 5 business days • No contract
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Account Risk Snapshot
          </h1>
          <p className="text-xl leading-relaxed mb-4" style={{ color: "var(--nw-ink-soft)" }}>
            NexaWorks finds the churn, renewal, and expansion signals hiding across your CRM,
            calls, tickets, and product data — and turns them into action. We work alongside
            the CS platform you already own.
          </p>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            In five business days, we hand you your 20 riskiest accounts, ranked, with the
            exact signals behind each one. Free. Before you sign anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-20">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Request your Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer voice */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4 text-white">Sound familiar?</h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-dark-soft)" }}>
            This is how CS leaders and CSMs describe the problem, in their own words.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pb-4">
            {buyerQuotes.map((item) => (
              <div
                key={item.quote}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <p className="text-xl leading-relaxed mb-4 text-white">“{item.quote}”</p>
                <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            What you get
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Proof before payment. You see the riskiest accounts before any contract exists.
          </p>

          <div className="space-y-6 mb-16">
            {[
              {
                title: "Your 20 riskiest accounts, ranked",
                text: "We score your full book of business against churn, renewal, and expansion signals — then hand you the 20 accounts that need attention now.",
              },
              {
                title: "3–5 signals per account, in plain language",
                text: "Not a black-box score. Each account comes with the specific signals behind its rank: champion disengagement, sentiment shifts, seat reductions, missing sponsor, stalled onboarding. Language your CSMs can act on.",
              },
              {
                title: "A 45-minute readout call",
                text: "We walk through the list with you, signal by signal, and leave your team with next actions for Monday morning.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>
                    {item.title}
                  </h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sample account card */}
          <div
            className="p-10 mb-4 relative overflow-hidden rounded-2xl"
            style={{ backgroundColor: "var(--nw-dark)", color: "white" }}
          >
            <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
              Sample output — illustrative, anonymized
            </p>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-white">#3</span>
              <div>
                <p className="text-xl text-white">Mid-market SaaS account · ~200 seats</p>
                <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>
                  Ranked 3 of 214 accounts scored
                </p>
              </div>
            </div>
            <h4 className="text-xl mb-4 text-white">Signals behind the rank</h4>
            <ul className="space-y-3 mb-8 text-lg" style={{ color: "var(--nw-dark-soft)" }}>
              <li>• Champion stopped attending calls 47 days ago (was weekly)</li>
              <li>• Support sentiment turned negative across the last 6 tickets</li>
              <li>• Two power users removed seats last month</li>
              <li>• No executive sponsor on record</li>
            </ul>
            <h4 className="text-xl mb-3 text-white">Recommended CSM action</h4>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
              Re-engage the champion this week with a value review tied to their original
              buying goals. Confirm who owns the renewal before the next QBR — do not let
              it surface there first.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            How it works
          </h2>
          <div className="space-y-10 mb-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
                >
                  <step.icon size={24} />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: "var(--nw-accent)" }}>
                    Step {i + 1}
                  </p>
                  <h4 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>
                    {step.title}
                  </h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs paid */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12 text-white">Free vs. paid, stated plainly</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <h4 className="text-2xl mb-4 text-white">Free</h4>
              <ul className="space-y-3 text-lg" style={{ color: "var(--nw-dark-soft)" }}>
                <li>• The full Snapshot and ranked list</li>
                <li>• 3–5 signals per account, in plain language</li>
                <li>• The 45-minute readout call</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <h4 className="text-2xl mb-4 text-white">Paid — only if you want it</h4>
              <ul className="space-y-3 text-lg" style={{ color: "var(--nw-dark-soft)" }}>
                <li>
                  • Everything after: wiring the signals into a live weekly workflow is the{" "}
                  <Link href="/customer-intelligence-pilot" className="underline">
                    Intelligence Pilot
                  </Link>{" "}
                  (4–6 weeks, fixed price)
                </li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-10" style={{ color: "var(--nw-dark-soft)" }}>
            Who qualifies: B2B SaaS, 100+ employees, at least two of the data sources above.
            We run four Snapshots per month so each one gets real analyst time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Questions CS leaders ask us
          </h2>
          <div className="space-y-10 mb-16">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h4 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>
                  {faq.q}
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pb-24">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Request your Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-sm self-center" style={{ color: "var(--nw-ink-soft)" }}>
              Four slots per month. No contract. No platform to buy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
