import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Get Value From Your CS Platform in 30 Days | NexaWorks",
  description:
    "Month four of your CS platform implementation and still no trusted score? The signal-first sequence: get intelligence from your existing stack in 30 days, then decide what the platform still needs to do.",
  alternates: { canonical: "/compare/signal-layer-vs-cs-platform" },
};

const sequence = [
  {
    title: "Week 1–2: Read what you already have",
    text: "Connect the sources that exist today — CRM, tickets, calls, product data. No new implementation, no migration. The first output is a map of which signals you're already capturing and which ones you're blind to.",
  },
  {
    title: "Week 3–4: First intelligence",
    text: "Weekly account briefs and the ranked risk list start landing. Your CSMs get the four-question brief — what changed, why it matters, the evidence, what to do next — before the platform's implementation would have produced its first score.",
  },
  {
    title: "Day 30: Decide with evidence",
    text: "Now you know what your data actually supports. The platform decision becomes concrete: you know which workflows need orchestration, which scores need rebuilding, and what the signal layer already covers. Buy the platform for what remains — not for everything.",
  },
];

const faqs = [
  {
    q: "We're mid-implementation. Is it too late for this sequence?",
    a: "No — it's the best time. The signal layer runs in parallel and delivers intelligence while the implementation continues. Most teams discover their data gaps during the signal work, which actually de-risks the implementation: you fix the inputs before the platform starts scoring them.",
  },
  {
    q: "Won't this duplicate what the platform will eventually do?",
    a: "It front-runs it, then feeds it. The briefs, action lists, and renewal plays are the actual job — the platform later provides workflow, orchestration, and scale around them. Teams that start with signals buy smaller, better-scoped platform deployments.",
  },
  {
    q: "What if we already finished implementing and the scores aren't trusted?",
    a: "That's the most common entry point. The platform stays; we rebuild the intelligence on top of it — back-tested scores, evidence-backed briefs, the signal layer your implementation was supposed to include. No rip-and-replace.",
  },
];

export default function SignalLayerVsPlatformPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Signal Layer vs CS Platform
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Month four of implementation and still no trusted score?
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            CS platform implementations are widely reported at 3–6 months with dedicated
            admin needs. That&apos;s a long time to wait for the actual job: knowing which
            accounts need attention this week.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            The signal-first sequence flips the order: intelligence from your existing
            stack in 30 days, then a platform decision made with evidence instead of hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Get intelligence in 5 days <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/compare/build-vs-buy-cs-platform"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Build vs buy guide
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            The 30-day sequence.
          </h2>
          <div className="space-y-10">
            {sequence.map((s, i) => (
              <div key={s.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8 text-white">What the platform still does best.</h2>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "var(--nw-dark-soft)" }}>
            This isn&apos;t anti-platform. Once the intelligence is flowing, the platform
            earns its keep on:
          </p>
          <ul className="space-y-4">
            {[
              "Workflow and orchestration: playbooks, journey automation, scaled digital touch.",
              "System of record: one place for 10+ CSMs to coordinate on shared accounts.",
              "Governance: permissions, audit trails, and reporting leadership trusts.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-warm-400)" }}>
                <Check size={20} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent-glow)" }} />
                {item}
              </li>
            ))}
          </ul>
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
