import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Build vs Buy: CS Platform or Signal Layer? | NexaWorks",
  description:
    "Should you buy a customer success platform, build your own intelligence, or add a signal layer first? An honest 3-year cost comparison — including when you should just buy the platform.",
  alternates: { canonical: "/compare/build-vs-buy-cs-platform" },
};

const buyWhen = [
  "You have 10+ CSMs who need a shared system of record — the coordination value alone justifies it.",
  "You need playbooks, journey orchestration, and scaled digital touch — the workflow features, not just the scores.",
  "You can staff the implementation: plan on months, not weeks, plus ongoing admin.",
  "Your data is already clean enough that the platform's health scoring has something to work with.",
];

const signalFirstWhen = [
  "You need intelligence this quarter, not after a multi-month implementation.",
  "Your team is small — 2–8 CSMs — and the platform's per-seat economics don't make sense yet.",
  "Your churn problem is detection, not workflow: you don't know which accounts need attention.",
  "You already own a platform but its scores aren't trusted — the signal layer sits on top and fixes the intelligence without replacing anything.",
];

const faqs = [
  {
    q: "Isn't this page biased? You sell the signal layer.",
    a: "We sell both paths honestly: the signal layer, and the Blueprint that architects it. But we'd rather you buy the right thing than buy from us — a customer who bought the wrong architecture churns, and we know what churn looks like. The 'when to buy' list above is real; we've sent prospects to platforms when they were the right answer.",
  },
  {
    q: "What does a CS platform implementation actually cost?",
    a: "License is the smallest part. Industry reporting consistently puts Gainsight-class implementations at 3–6 months with dedicated admin needs. Add the admin headcount or agency cost, the data work to feed it, and the months before the first trusted score. The 3-year total is multiples of the license — which is why 'buy when' matters more than 'buy what.'",
  },
  {
    q: "Can the signal layer become the permanent solution?",
    a: "For many teams, yes — the weekly briefs, action lists, and renewal plays are the actual job, and the layer does it without platform overhead. For larger teams it often becomes the intelligence feed inside the platform they later buy. Either way, starting with signals means every later investment is informed by what you learned about your own data.",
  },
];

export default function BuildVsBuyPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Build vs Buy
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            CS platform or signal layer? An honest comparison.
          </h1>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            The default advice is &ldquo;buy Gainsight.&rdquo; Sometimes that&apos;s right.
            Sometimes it&apos;s a six-figure, six-month detour from the actual problem:
            knowing which accounts need attention this week. Here&apos;s how to decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Start with proof, not a platform <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-xl p-6 md:p-8"
              style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
            >
              <h2 className="text-2xl mb-6" style={{ color: "var(--nw-ink)" }}>Buy the platform when…</h2>
              <ul className="space-y-4">
                {buyWhen.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: "var(--nw-ink-soft)" }}>
                    <Check size={18} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-6 md:p-8"
              style={{ backgroundColor: "var(--nw-dark)", border: "1px solid var(--nw-line-dark)" }}
            >
              <h2 className="text-2xl mb-6 text-white">Start with the signal layer when…</h2>
              <ul className="space-y-4">
                {signalFirstWhen.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: "var(--nw-warm-400)" }}>
                    <Check size={18} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent-glow)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-10" style={{ color: "var(--nw-ink-soft)" }}>
            The hybrid path is the most common outcome we see: signal layer first for
            intelligence this quarter, platform later for workflow at scale — with the
            signal layer feeding it. Sequencing beats either/or.
          </p>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-10" style={{ color: "var(--nw-ink)" }}>
            Questions, answered honestly.
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-8" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                <h3 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>{faq.q}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Get the free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
