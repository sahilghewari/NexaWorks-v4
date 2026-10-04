import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Churn and Renewal Risk Detection for B2B SaaS | NexaWorks",
  description:
    "Churn doesn't start at renewal — it starts months earlier in signals your team can see but isn't reading together. How NexaWorks detects renewal risk across CRM, calls, tickets, and product data, and what to do about it.",
  alternates: { canonical: "/customer-success-ai/churn-renewal-risk" },
};

const sequence = [
  {
    stage: "Months before renewal",
    title: "The quiet signals",
    text: "Champion engagement fades — fewer call attendees, slower replies, skipped QBRs. Nothing looks wrong on the health score; logins are steady. This is the stage where intervention is cheapest and most effective, and the stage almost every team misses.",
  },
  {
    stage: "Weeks before renewal",
    title: "The visible signals",
    text: "Support sentiment turns. Ticket language gets pointed: “we've asked three times.” Power users get deactivated. A sponsor asks for the contract terms “just to review.” The account is now shopping, and your CSM is hearing about it secondhand.",
  },
  {
    stage: "At renewal",
    title: "The lagging signals",
    text: "Seat reductions, discount demands, procurement-led negotiations. By the time these appear, the decision was made weeks ago. Teams that start here aren't doing renewal management — they're doing damage control.",
  },
];

const faqs = [
  {
    q: "How early can renewal risk actually be detected?",
    a: "The honest answer: it depends on the account and the signal. Champion disengagement and sentiment shifts typically surface months before a renewal; seat and contract changes surface weeks before. The sequencing matters more than any single number — early signals are quiet and cheap to act on, late signals are loud and expensive. Anyone promising you a precise day-count for every account is selling certainty they don't have.",
  },
  {
    q: "We already have a health score. Why isn't it catching this?",
    a: "Because most health scores weight what's easy to measure — logins, ticket volumes, meeting counts — and skip the people signals: who stopped showing up, whose tone changed, which sponsor went quiet. In a 2026 poll of CS leaders, 82% said their health score caught less than half of churn. The score isn't wrong about activity; it's blind to intent.",
  },
  {
    q: "What do we do when a risk signal fires?",
    a: "Every signal ships with a next step, not just an alert. Champion disengagement means a value review tied to the champion's original buying goals — not a check-in call. Sentiment turns mean executive attention on the underlying issue, not the ticket. The full playbook is part of the pilot; the Snapshot shows you which accounts need it now.",
  },
  {
    q: "Can you prove this works on our data before we pay?",
    a: "That's what the Account Risk Snapshot is: your 20 riskiest accounts, ranked, with the signals behind each one — free, in five business days, before any contract. If it doesn't surface risk your current process missed, don't hire us.",
  },
];

export default function ChurnRenewalRiskPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Churn &amp; Renewal Risk
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Churn doesn&apos;t start at renewal. It starts months earlier.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            By the time the renewal conversation gets difficult, the decision was made weeks
            ago. The signals were there the whole time — in the champion who went quiet, the
            tickets that turned sharp, the seats that disappeared. Renewal risk detection
            means reading those signals while there&apos;s still time to act.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;Only 30–40% of at-risk customers reach out. The rest churn
            silently.&rdquo;</em> — lessons from interviews with 9 CS leaders,
            r/CustomerSuccess, 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              See your 20 riskiest accounts <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Browse the signals
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            The anatomy of a churn: three stages.
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Every B2B churn we&apos;ve studied follows the same sequencing. The signals change;
            the order doesn&apos;t.
          </p>
          <div className="space-y-6">
            {sequence.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)" }}>
                  Stage {i + 1} · {s.stage}
                </p>
                <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{s.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8 text-white">What detection looks like in practice.</h2>
          <ul className="space-y-4 mb-4">
            {[
              "Every account scored weekly against the full signal set — not just the metrics your warehouse already computes.",
              "Signals grouped by account, with the evidence attached: the ticket numbers, the call dates, the usage charts.",
              "Each risk ships with a recommended next step for the CSM — detection without action is just anxiety with a dashboard.",
              "False-positive notes on every signal, because a team that cries wolf stops listening.",
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
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Get the free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/renewal-risk", label: "Guide: Renewal risk at 90, 60, and 30 days" },
              { href: "/guides/green-then-gone", label: "Guide: Why “healthy” accounts churn" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl p-5 text-sm font-medium transition-colors"
                style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)", backgroundColor: "white" }}
              >
                {l.label} <ArrowRight size={16} className="inline ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
