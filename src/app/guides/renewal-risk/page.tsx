import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Renewal Risk at 90, 60 and 30 Days | NexaWorks",
  description:
    "A practical renewal-risk playbook: what to check at 90 days, what changes at 60, and what the last 30 days demand. Checklists your CSMs can run this week.",
  alternates: { canonical: "/guides/renewal-risk" },
};

const phases = [
  {
    when: "90 days out",
    title: "Read the quiet signals",
    checks: [
      "Champion engagement trend: who has gone quiet in the last 60 days, and who replaced them (if anyone)?",
      "Support sentiment over the last quarter — not volume, tone. Pull the last 20 tickets and read them.",
      "Usage vs the account's own peak: is the core workflow growing, flat, or decaying?",
      "Stakeholder map refresh: is your mapped sponsor still the person who decides?",
    ],
    note: "At 90 days, everything is still fixable. This is the highest-leverage checkpoint and the one most teams skip — because nothing looks wrong yet.",
  },
  {
    when: "60 days out",
    title: "Confirm the commercial reality",
    checks: [
      "Has the close date moved? One push is process; two is a signal.",
      "Any seat or module contraction in the last 90 days? Contraction precedes the conversation.",
      "Who owns the renewal on their side — and have you spoken to them directly?",
      "Executive sponsor aligned on your side for anything above your CSM's authority?",
    ],
    note: "At 60 days you're confirming, not discovering. If the 90-day check didn't happen, you're doing both at once — which is why the 90-day check matters.",
  },
  {
    when: "30 days out",
    title: "Run the play, not the process",
    checks: [
      "Paper process mapped: who signs, what approvals, how long does legal take?",
      "Value story refreshed with this year's outcomes — not last year's pitch deck.",
      "Expansion or contraction scenario planned: what do you do if they ask for 20% off?",
      "Every risk signal from the earlier checks has an owner and a status. No orphans.",
    ],
    note: "At 30 days there are no new discoveries — only execution. If you're still finding risk now, the earlier checkpoints failed.",
  },
];

const faqs = [
  {
    q: "What if we don't have 90 days — the renewal is next month?",
    a: "Run the 30-day checklist now, and run the 90-day checklist anyway to learn what you missed — that learning is what makes the next renewal different. Then put the account on a watch list: the patterns you find now are the early-warning system for the rest of the book.",
  },
  {
    q: "Who should own this checklist?",
    a: "The CSM owns it, but the 60-day executive alignment needs a sponsor above the CSM for strategic accounts. The most common failure isn't the checklist — it's nobody being accountable for the 90-day check happening at all.",
  },
  {
    q: "How does this relate to health scores?",
    a: "The checklist is what the health score should be summarizing. If your score says 'green' but the 90-day check surfaces a quiet champion and decaying usage, trust the checklist. Better: rebuild the score so it encodes the checklist — that's the back-tested score design we do.",
  },
];

export default function RenewalRiskGuidePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Guide · Checklist
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Renewal risk at 90, 60, and 30 days.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Most renewal processes start 30 days out — which is exactly when it&apos;s too
            late to change anything. This checklist starts at 90, when every signal is
            still actionable.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;Renewal quotes take me longer than new deals.&rdquo;</em> — CSM,
            r/CustomerSuccess, 2026. They take longer because the discovery was skipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Know your 20 riskiest renewals <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/customer-success-ai/churn-renewal-risk"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              How risk is detected
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <div className="space-y-10">
            {phases.map((phase, i) => (
              <div
                key={phase.when}
                className="rounded-xl p-6 md:p-10"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)" }}>
                  Checkpoint {i + 1} · {phase.when}
                </p>
                <h2 className="text-2xl mb-6" style={{ color: "var(--nw-ink)" }}>{phase.title}</h2>
                <ul className="space-y-3 mb-6">
                  {phase.checks.map((check) => (
                    <li key={check} className="flex items-start gap-3" style={{ color: "var(--nw-ink-soft)" }}>
                      <Check size={18} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent)" }} />
                      {check}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed pt-4" style={{ color: "var(--nw-dark-soft)", borderTop: "1px solid var(--nw-line-light)" }}>
                  {phase.note}
                </p>
              </div>
            ))}
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
