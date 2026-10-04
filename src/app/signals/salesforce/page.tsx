import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Churn Signals Hiding in Salesforce | NexaWorks",
  description:
    "Your Salesforce already holds churn signals — close-date pushes, champion role changes, activity gaps. The five Salesforce queries that surface renewal risk, with honest notes on where the data lies.",
  alternates: { canonical: "/signals/salesforce" },
};

const queries = [
  {
    title: "Close-date pushes on renewals",
    text: "The highest-value field in the building. An opportunity whose close date moves twice is not a forecasting problem — it's a customer telling you, in the only language Salesforce records, that something changed. Track push count and days-pushed per renewal opportunity, not just the current date.",
    pitfall: "Reps push dates for innocent reasons (procurement cycles, budget calendars). The signal is the pattern — repeated pushes on the same account — not any single move.",
  },
  {
    title: "Days since champion activity",
    text: "Filter activities to contacts in champion and economic-buyer roles, then compute days since the last meaningful touch per account. A champion who went from weekly to silent 47 days ago is the single most common thread in churn post-mortems.",
    pitfall: "Activity logging discipline varies by rep. Calibrate per-rep before trusting per-account — bulk Friday logging makes 'last activity date' lie.",
  },
  {
    title: "Contact role and title changes",
    text: "Your champion got promoted, left, or moved teams — and nobody told CS. Monitor contact title changes and role reassignments on open accounts. A sponsor change without a re-onboarding motion is a renewal risk with a timer on it.",
    pitfall: "Title changes are noisy (promotions aren't churn). The risk is specifically the departure or sidelining of your mapped stakeholders without replacement.",
  },
  {
    title: "Case volume vs the account's baseline",
    text: "Join support cases to accounts and compare against each account's own history — not a global threshold. A normally-quiet account suddenly filing five cases is a louder signal than a noisy account filing six.",
    pitfall: "One platform outage skews every account at once. Check account-specificity before flagging, and exclude incident-tagged cases from baselines.",
  },
  {
    title: "The 'we'll manage' pattern in notes",
    text: "Search activity notes and Chatter for soft-objection language: 'we'll manage,' 'it's not a blocker,' 'let's revisit next quarter.' Customers this polite are usually already shopping — they're just too professional to say so on a call.",
    pitfall: "Never read a single note as signal. These phrases matter in patterns across touches, not as one-off anecdotes.",
  },
];

const faqs = [
  {
    q: "Do we need any new Salesforce licenses or apps for this?",
    a: "No. Everything above runs on standard objects — Opportunities, Contacts, Activities, Cases — plus field history tracking, which most orgs already have or can enable in an afternoon. These are reports and list views, not an implementation project.",
  },
  {
    q: "Our Salesforce data is messy. Is this still worth doing?",
    a: "Start with close-date pushes and case volume — those two survive messy data because they're system-generated, not rep-entered. Champion activity tracking needs decent logging discipline; if yours is bad, the honest answer is to fix logging first, and the audit will tell you that plainly.",
  },
  {
    q: "How does this connect to the rest of our stack?",
    a: "Salesforce signals are the commercial layer — they tell you what's happening to the money and the people. They get dramatically stronger paired with call transcripts (what was actually said) and product usage (what's actually happening). That's the signal layer: each source covers the others' blind spots.",
  },
];

export default function SalesforceSignalsPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Signals · Salesforce
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            The churn signals hiding in your Salesforce.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            You don&apos;t need new software to see renewal risk. Your Salesforce already
            records it — in pushed close dates, quiet champions, and polite notes nobody
            re-reads. Five queries surface most of it.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;Haven&apos;t logged in for 23 days / Removed half their team 6 weeks
            ago / Last feature they used: Export CSV.&rdquo;</em> — the signals one CSM
            listed after a churn, r/CustomerSuccess, 2026. All visible beforehand. None
            were in a report.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              See your riskiest accounts <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              All 40 signals
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            The five queries that matter.
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Each one ships with its honest failure mode — because a query without
            false-positive notes is a superstition with a dashboard.
          </p>
          <div className="space-y-6">
            {queries.map((q, i) => (
              <div
                key={q.title}
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)" }}>
                  Query {i + 1}
                </p>
                <h3 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>{q.title}</h3>
                <p className="leading-relaxed mb-4" style={{ color: "var(--nw-ink-soft)" }}>{q.text}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
                  <strong>Where it lies:</strong> {q.pitfall}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8 text-white">What to do on Monday.</h2>
          <ul className="space-y-4">
            {[
              "Enable field history tracking on Opportunity close dates if it isn't already — it's the cheapest high-value change in this list.",
              "Build the five reports above as list views first. Dashboards come later; the discipline of looking weekly comes first.",
              "Pick your ten most valuable renewals in the next 180 days and run the queries against them by hand. You'll find something.",
              "When the manual version proves its worth, automate the joins — or have us build the pipeline in a pilot.",
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
