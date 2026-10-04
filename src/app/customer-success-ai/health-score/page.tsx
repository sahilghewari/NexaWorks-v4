import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Health Scores Your CSMs Will Trust | NexaWorks",
  description:
    "Most health scores measure activity around the product, not value from it — which is why green accounts churn. NexaWorks designs and back-tests health scores against your actual renewal history, on the stack you already own.",
  alternates: { canonical: "/customer-success-ai/health-score" },
};

const failures = [
  {
    title: "It weights what's easy, not what matters",
    text: "Logins, ticket volumes, meeting counts — the score is built from whatever the warehouse already had. Champion engagement, sentiment shifts, and sponsor changes never make it in, because they're harder to query. The score measures motion, not meaning.",
  },
  {
    title: "It's never been tested against reality",
    text: "Ask when the score was last validated against actual churn outcomes. For most teams, the answer is never — it was designed once, tuned by opinion, and trusted by default. A score that can't predict your past churn has no business predicting your future churn.",
  },
  {
    title: "Nobody believes it, so nobody acts on it",
    text: "The CSMs have their own spreadsheets. They've watched green accounts churn and red accounts renew, and they've quietly stopped looking. A score nobody trusts is worse than no score — it adds a ritual of checking without changing a single decision.",
  },
];

const method = [
  {
    title: "Audit the current score",
    text: "We tear down what you have: what it weights, what it ignores, and where it quietly lies. Most audits take days, not weeks — the failure modes are remarkably consistent.",
  },
  {
    title: "Design from your churn history",
    text: "The new score is built from your actual renewal outcomes: which accounts churned, what was true about them 90/60/30 days before, and which signals separated them from the ones that stayed.",
  },
  {
    title: "Back-test before anyone trusts it",
    text: "We validate the design against 12+ months of your history. If it can't predict your past churn, it doesn't ship. This is the step almost nobody does — it's also the only step that earns trust.",
  },
  {
    title: "Ship with reasons, not just a number",
    text: "Every score arrives with plain-language reasons: what changed in the account, why it matters commercially, the evidence behind it. CSMs don't need another number. They need to know what to do on Monday.",
  },
];

const faqs = [
  {
    q: "Can you fix our health score inside our existing platform?",
    a: "Yes — that's the default. We work inside Salesforce, Gainsight, ChurnZero, Vitally, or your warehouse, alongside the CS platform you already own. No new software, no migration.",
  },
  {
    q: "How do you know the new score will actually predict churn?",
    a: "Because we test it against your history before it goes live. The back-test shows exactly what the score would have flagged, when, and what it would have missed. You see the accuracy before your CSMs ever see the number.",
  },
  {
    q: "What if our data is messy?",
    a: "Then the audit will say so, honestly. Some scores fail because the inputs are garbage — no design fixes that. We'd rather tell you the data isn't ready than sell you a score built on it.",
  },
  {
    q: "How is this different from the back-tester tool?",
    a: "The Health Score Back-tester is a free, client-side tool that shows you how your current score performs — catch rate, false alarms, threshold effects. It answers 'is our score broken?' The consulting engagement answers 'what should replace it, and prove it first.'",
  },
];

export default function HealthScorePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Health Scores
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Health scores your CSMs will actually trust.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Your health score says the account is green. Your gut says otherwise. Your gut
            is usually right — because most scores measure activity <em>around</em> the
            product, not value <em>from</em> it.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;82% of leaders said their health score caught less than half of
            churn.&rdquo;</em> — poll of CS leaders shared on r/CustomerSuccess, 2026.
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
              href="/customer-health-score-consultant"
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
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            Why health scores fail — the three usual suspects.
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            We&apos;ve audited scores across B2B SaaS teams. The failure modes barely vary.
          </p>
          <div className="space-y-6">
            {failures.map((f, i) => (
              <div
                key={f.title}
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)" }}>
                  Failure {i + 1}
                </p>
                <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{f.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent-glow)" }}>
            The method
          </p>
          <h2 className="text-3xl mb-12 text-white">A score earns trust in four steps.</h2>
          <div className="space-y-8">
            {method.map((m, i) => (
              <div key={m.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2">{m.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-warm-400)" }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-6" style={{ color: "var(--nw-ink)" }}>
            Start by testing what you have.
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            Run your historical data through the free back-tester: upload a CSV of accounts,
            scores, and churn outcomes, and see your catch rate and false-alarm rate in
            seconds — entirely in your browser, nothing uploaded. Most teams learn
            something uncomfortable in under a minute.
          </p>
          <ul className="space-y-4 mb-12">
            {[
              "Catch rate and false-alarm rate at any threshold you choose",
              "Works with 0–100 scores or red/yellow/green",
              "100% client-side — your data never leaves the browser",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-ink-soft)" }}>
                <Check size={20} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent)" }} />
                {item}
              </li>
            ))}
          </ul>
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
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link
              href="/tools/health-score-back-tester"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Test your score free <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Get the free Snapshot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
