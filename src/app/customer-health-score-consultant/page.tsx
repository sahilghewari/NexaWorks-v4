import Link from "next/link";
import { ArrowRight, Check, Search, FlaskConical, Rocket } from "lucide-react";

export const metadata = {
  title: "Customer Health Score Consultant for B2B SaaS | NexaWorks",
  description:
    "Your health score misses half your churn. NexaWorks designs and back-tests customer health scores on the stack you already own — Salesforce, Gainsight, Gong, Zendesk — so your CSMs trust the number again.",
  alternates: { canonical: "/customer-health-score-consultant" },
};

const buyerQuotes = [
  {
    quote: "Most health scores measure activity around the product, not value from the product.",
    context: "r/CustomerSuccess, 2026",
  },
  {
    quote: "Green health score. Strong adoption. Plenty of engagement.",
    context: "The account churned anyway — churn post-mortem quoted in a 2026 essay",
  },
  {
    quote: "82% of leaders said their health score caught less than half of churn.",
    context: "Poll of CS leaders shared on r/CustomerSuccess, 2026",
  },
  {
    quote: "There is no single place where those signals come together.",
    context: "A CSM describing account research — r/CustomerSuccess, 2026",
  },
];

const deliverables = [
  {
    title: "Health score audit",
    text: "We tear down your current score: what it weights, what it ignores, and where it quietly lies to you. Most scores overweight what is easy to measure — logins, tickets closed, meetings held — and miss the people signals that actually precede churn.",
  },
  {
    title: "Back-tested score design",
    text: "We design the new score from your historical churn and validate it against 12+ months of renewal outcomes before your CSMs ever see it. If it cannot predict your past churn, it does not ship.",
  },
  {
    title: "Built on your stack",
    text: "Salesforce, Gainsight, ChurnZero, Vitally, your warehouse — wherever your data lives. We work alongside the CS platform you already own. No new software to buy, no implementation project.",
  },
  {
    title: "CSM-ready outputs",
    text: "A score nobody trusts is worse than no score. Every number ships with plain-language reasons: what changed in the account, why it matters commercially, the evidence behind it, and what to do next.",
  },
];

const steps = [
  {
    icon: Search,
    title: "We audit your current score and your data",
    text: "Read-only access to your CRM, product usage, support tickets, and calls. We map what your score measures today against what actually preceded your last 12 months of churn. This is the Intelligence Blueprint — 10 business days, fixed price.",
  },
  {
    icon: FlaskConical,
    title: "We design and back-test the new score",
    text: "Candidate signals are tested against your real renewal history. The score only launches when it demonstrably outperforms what you have — measured on your data, not ours.",
  },
  {
    icon: Rocket,
    title: "We ship it into your stack and train your CSMs",
    text: "The score goes live where your team already works, with a plain-language readout behind every number. Validated in the Intelligence Pilot — 4–6 weeks, fixed price.",
  },
];

const faqs = [
  {
    q: "Do we need to replace our CS platform?",
    a: "No. We build on whatever you own — Gainsight, ChurnZero, Vitally, Salesforce, or a warehouse. The whole point is a score your team trusts inside the tools they already open every morning.",
  },
  {
    q: "What does back-tested actually mean?",
    a: "We take 12+ months of your historical data — which accounts churned, which renewed, which expanded — and check whether the proposed score would have flagged the churned ones in advance. A score that cannot predict your past churn does not get deployed.",
  },
  {
    q: "How is this different from our data team's score?",
    a: "Most in-house scores are built from what is easy to query: logins, seat counts, ticket volumes. We add the signals data teams usually skip — champion engagement, sentiment shifts in tickets and calls, sponsor changes — because those are what show up in churn post-mortems.",
  },
  {
    q: "How long does it take?",
    a: "The audit is the Intelligence Blueprint: 10 business days, $3,500, fully credited toward the Pilot. The full build and rollout happens in the Intelligence Pilot: 4–6 weeks, $9,500–$18,000 (most land around $15,000).",
  },
  {
    q: "What data do you need from us?",
    a: "Read-only access or exports: CRM, product usage, support tickets, call transcripts. Most teams get us what we need within a day. No implementation project, no security review gauntlet.",
  },
  {
    q: "Can we see proof before paying?",
    a: "Yes — start with the free Account Risk Snapshot. In five business days we rank your 20 riskiest accounts with the signals behind each one. It is the fastest way to see whether our read on your accounts matches reality.",
  },
];

export default function HealthScoreConsultantPage() {
  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Customer health score consulting • Built on your stack
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Customer Health Score Consultant for B2B SaaS
          </h1>
          <p className="text-xl leading-relaxed mb-4" style={{ color: "var(--nw-ink-soft)" }}>
            NexaWorks designs and back-tests customer health scores on the systems you
            already own — your CRM, calls, tickets, and product data — and turns them
            into action. We work alongside the CS platform you already own.
          </p>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            In a 2026 poll of CS leaders, 82% said their health score caught less than
            half of churn. We fix that by validating every score against your actual
            renewal history before your CSMs ever see it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-20">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Get your free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer voice */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4 text-white">Why health scores lose trust</h2>
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
            What a health score engagement covers
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Not a dashboard tweak. A score your CSMs believe, proven on your own history.
          </p>

          <div className="space-y-6 mb-16">
            {deliverables.map((item) => (
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

          {/* Illustrative back-test card */}
          <div
            className="p-10 mb-4 relative overflow-hidden rounded-2xl"
            style={{ backgroundColor: "var(--nw-dark)", color: "white" }}
          >
            <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
              Back-test result — illustrative example
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="eyebrow mb-2" style={{ color: "var(--nw-dark-soft)", fontSize: "11px" }}>
                  Typical score, 90 days before churn
                </p>
                <p className="text-5xl font-bold text-white mb-2">31%</p>
                <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>
                  of churned accounts flagged in time
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2" style={{ color: "var(--nw-dark-soft)", fontSize: "11px" }}>
                  Back-tested score, same accounts
                </p>
                <p className="text-5xl font-bold mb-2" style={{ color: "var(--nw-accent-glow)" }}>74%</p>
                <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>
                  of churned accounts flagged in time
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
              The gap is usually not the math — it is the inputs. Activity metrics are easy
              to query; the people signals that precede churn take work to assemble. That
              assembly is the engagement.
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

      {/* Start free, then fixed price */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12 text-white">Start free, then fixed price</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <h4 className="text-2xl mb-4 text-white">Free</h4>
              <ul className="space-y-3 text-lg" style={{ color: "var(--nw-dark-soft)" }}>
                <li>
                  • The{" "}
                  <Link href="/account-risk-snapshot" className="underline">
                    Account Risk Snapshot
                  </Link>
                  : your 20 riskiest accounts, ranked, in 5 business days
                </li>
                <li>• See whether our read on your accounts matches reality</li>
                <li>• No contract, no platform to buy</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <h4 className="text-2xl mb-4 text-white">Fixed price — only if you want it</h4>
              <ul className="space-y-3 text-lg" style={{ color: "var(--nw-dark-soft)" }}>
                <li>
                  •{" "}
                  <Link href="/customer-intelligence-blueprint" className="underline">
                    Intelligence Blueprint
                  </Link>
                  : the full score audit — $3,500, 10 business days, fully credited
                  toward the Pilot
                </li>
                <li>
                  •{" "}
                  <Link href="/customer-intelligence-pilot" className="underline">
                    Intelligence Pilot
                  </Link>
                  : design, back-test, and rollout — $9,500–$18,000, 4–6 weeks
                </li>
              </ul>
            </div>
          </div>
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
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Get your free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-sm self-center" style={{ color: "var(--nw-ink-soft)" }}>
              Or <Link href="/contact" className="underline">talk to us</Link> about a
              health score engagement directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
