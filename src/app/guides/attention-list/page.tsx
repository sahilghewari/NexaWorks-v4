import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "From Dashboards to Attention Lists | NexaWorks",
  description:
    "Your CS team does not need another dashboard. It needs to know which customer needs attention today. A practical guide to building an account attention list from signals you already have.",
  alternates: { canonical: "/guides/attention-list" },
};

const signals = [
  {
    title: "People movement",
    text: "Title changes, departures, new faces on calls, the champion's last meaningful activity. The product can be perfectly healthy while the relationship is quietly ending.",
  },
  {
    title: "Tone in support tickets, not volume",
    text: "Volume often stays normal right up to a churn. Reading the last twenty tickets for tone — when 'thanks!' becomes 'per my last email' — surfaces shifts that volume-based views miss.",
  },
  {
    title: "The meeting that stopped happening",
    text: "Which recurring touch went quiet first — the QBR, the cadence call, the check-in? No system alerts on something not happening, so absence is easy to underweight. Calendar history is a dataset most teams never query.",
  },
  {
    title: "Usage against the account's own peak",
    text: "An account at 60% of its own best week is decaying even if it beats every segment benchmark. Comparing accounts to themselves catches declines that peer comparisons hide.",
  },
  {
    title: "Commercial drift",
    text: "Close dates that move, procurement going quiet, the sponsor delegating renewal conversations downward. These live in the CRM rather than the product, which is why product-only views often miss them.",
  },
];

const pitfalls = [
  {
    title: "List worship",
    text: "The moment the list becomes a number people defend instead of a prompt to act, it has become another dashboard. The list exists to produce phone calls, not to be accurate.",
  },
  {
    title: "Set and forget",
    text: "Signals decay. The champion mapped in January may be gone by March. Rebuild the stakeholder picture quarterly or the list quietly goes stale.",
  },
  {
    title: "Measuring activity instead of risk",
    text: "\u201cWe called everyone on the list\u201d is activity. \u201cTwo of the five calls surfaced real renewal risk we are now working\u201d is the outcome. Track the second one.",
  },
];

const faqs = [
  {
    q: "How is this different from a health score?",
    a: "A health score summarizes the past into a number. An attention list schedules the future into actions. Scores tend to get reviewed in QBRs; lists get worked on Mondays.",
  },
  {
    q: "Do we need a CS platform to do this?",
    a: "No. The manual pilot described above runs on tools you already pay for. Platforms help at scale, after the process is proven by hand and you know which signals matter.",
  },
  {
    q: "Who owns the list?",
    a: "The CSMs who work it. CS Operations maintains the template and the definitions. Leadership reviews the outcomes monthly, not the spreadsheet.",
  },
  {
    q: "Our book is 200 accounts, not 20. Where do we start?",
    a: "Start with the top twenty by revenue at risk. The discipline transfers downward once it works at the top. Churn damage often concentrates in fewer accounts than teams expect.",
  },
];

export default function AttentionListPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Guide · Prioritization framework
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            From dashboards to attention lists.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Your CS team does not need another dashboard. It needs to know which
            customer needs attention today. An attention list is a short, ranked
            list of accounts that need a human touch this week — built from
            signals you already have.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            The signals below are illustrative starting points, drawn from
            practitioner discussions and our research. They are not validated
            predictors. Treat them as a place to begin, then keep what proves
            useful in your book and discard the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              See it on your book <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/guides/green-then-gone"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Read the post-mortem guide
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            Five signals worth watching.
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Mark which signals are flashing per account each Monday. Three or
            more means call this week. One or two means watch. Zero means leave
            alone. These thresholds are a starting guess, not a validated model —
            and one rule overrides the count: a single critical signal, a champion
            departing or procurement going quiet, can warrant immediate attention
            on its own. Scoring systems support judgment; they do not replace it.
          </p>
          <div className="space-y-10">
            {signals.map((signal, i) => (
              <div key={signal.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{signal.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{signal.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            A simple way to start.
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Before investing in tooling, run a four-week manual pilot. Take your
            twenty largest or riskiest accounts and a spreadsheet with one column
            per signal above. Each Monday the account owner spends thirty minutes
            filling it in from tools the team already opens, ranks the accounts,
            and calls the top five before Wednesday.
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Be clear-eyed about what the pilot is: a learning exercise, not a
            validation study. Four weeks will not prove which signals predict
            churn. It will teach the team which signals are actually observable,
            which ones are noisy, and where the data really lives. That learning
            becomes the specification for anything bought or built later.
          </p>
          <h3 className="text-2xl mb-4 mt-12" style={{ color: "var(--nw-ink)" }}>
            When the manual list stops scaling.
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            The spreadsheet version works until it does not. Past thirty or forty
            accounts per CSM the Monday discipline slips. A weekly snapshot goes
            stale by Thursday. When the signals live across five systems, filling
            in the sheet becomes archaeology — and the sheet shows this week, not
            how an account&apos;s signals trended over the quarter.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            That is where cross-system Customer Intelligence earns its keep: the
            same signals, pulled continuously from the CRM, tickets, product data,
            and calendar, ranked automatically, with history attached. The CSM still
            makes the calls. The system helps make sure the right accounts are on
            the list, every day, with the reasons visible. That is what we are
            building at NexaWorks.
          </p>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-10" style={{ color: "var(--nw-ink)" }}>
            Three pitfalls.
          </h2>
          <div className="space-y-10">
            {pitfalls.map((pitfall, i) => (
              <div key={pitfall.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{pitfall.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{pitfall.text}</p>
                </div>
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
              See it on your book <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
