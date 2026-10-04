import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Customer Health Scores That Predict Churn — and How to Test Yours | NexaWorks",
  description:
    "What separates health scores that predict churn from the ones that decorate dashboards: design principles from public models, the back-testing method, and how to test your own score in 30 seconds.",
  alternates: { canonical: "/guides/customer-health-score" },
};

const principles = [
  {
    title: "Build from outcomes, not opinions",
    text: "Start with your churned accounts and work backward: what was true about them 90, 60, and 30 days before they left? The public designs worth studying — GitLab's and PostHog's handbooks both publish their thinking — share this trait: the score is derived from history, not assembled from available metrics.",
  },
  {
    title: "Weight people signals, not just product signals",
    text: "Logins and ticket volumes are easy to query, so they dominate most scores. But churn post-mortems keep naming the same culprits: champion disengagement, sentiment shifts, sponsor changes. If your score has no people signals, it's measuring the product's health, not the account's.",
  },
  {
    title: "Back-test before anyone trusts it",
    text: "Run the design against 12+ months of your renewal history. What would it have flagged, when, and what would it have missed? A score that can't predict your past churn has no business predicting your future churn. This step is skipped almost everywhere — it's also the only step that earns trust.",
  },
  {
    title: "Ship reasons, not just a number",
    text: "A CSM who sees '42' learns nothing. A CSM who sees '42 — champion quiet 47 days, sentiment down on last 6 tickets, two power users deactivated' knows exactly what Monday looks like. Every score should arrive with its evidence attached.",
  },
];

const faqs = [
  {
    q: "How do I test my current score right now?",
    a: "Use the free Health Score Back-tester: paste a CSV of accounts, scores, and churn outcomes, and it computes your catch rate and false-alarm rate at any threshold — entirely in your browser, nothing uploaded. Most teams get an uncomfortable answer in under a minute.",
  },
  {
    q: "What catch rate should we aim for?",
    a: "In a 2026 poll of CS leaders, 82% said their health score caught less than half of churn — so anything above 50% already beats most teams. Above 75% is strong. But the number matters less than the trend: is the score getting better as you learn, or has it been the same untested formula for two years?",
  },
  {
    q: "Should we build the score in our CS platform or our warehouse?",
    a: "Wherever the data already lives and the CSMs already look. The platform vs warehouse debate is secondary — what matters is that the score is computed from joined sources (CRM + tickets + calls + product), not from whichever single system was easiest.",
  },
];

export default function HealthScoreGuidePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Guide
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Customer health scores that predict churn — and how to test yours.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Most health scores are built from what was easy to query, tuned by opinion, and
            never tested against reality. Then everyone acts surprised when green accounts
            churn. Here&apos;s what the scores that actually work do differently — and how
            to check yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/tools/health-score-back-tester"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Test your score free <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/customer-success-ai/health-score"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              How we rebuild scores
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Four principles of scores that work.
          </h2>
          <div className="space-y-10">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{p.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8 text-white">The 30-second test.</h2>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "var(--nw-dark-soft)" }}>
            Before redesigning anything, grade what you have. The back-tester needs three
            columns — account, score, churned or active — and answers the only question
            that matters: would this score have caught your churn?
          </p>
          <ul className="space-y-4">
            {[
              "Catch rate and false-alarm rate at any threshold you choose",
              "Works with 0–100 scores or red/yellow/green",
              "100% client-side — your data never leaves the browser",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-warm-400)" }}>
                <Check size={20} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent-glow)" }} />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/tools/health-score-back-tester"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-accent)" }}
            >
              Run the back-test <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
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
        </div>
      </section>
    </>
  );
}
