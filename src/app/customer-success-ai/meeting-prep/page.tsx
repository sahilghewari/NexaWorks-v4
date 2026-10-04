import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Automate CSM Meeting Prep and QBRs | NexaWorks",
  description:
    "Your CSMs spend half a day preparing for every QBR — stitching together call notes, tickets, and usage reports by hand. NexaWorks automates meeting prep: one brief per account with what changed, why it matters, and what to do next.",
  alternates: { canonical: "/customer-success-ai/meeting-prep" },
};

const before = [
  "Open the last three call transcripts and skim for anything important",
  "Pull the support tickets since the last meeting and guess which ones matter",
  "Export usage data and squint at a spreadsheet for trends",
  "Check Salesforce for the latest notes — if the rep logged them",
  "Assemble it all into slides the customer may not even read",
];

const briefSections = [
  {
    title: "What changed",
    text: "Every meaningful movement since the last touch: engagement shifts, sentiment turns, usage movement, stakeholder changes. Not a data dump — the five things worth discussing.",
  },
  {
    title: "Why it matters commercially",
    text: "Each change translated into business language: what it means for the renewal, the expansion opportunity, the risk. Your CSM walks in with a point of view, not a printout.",
  },
  {
    title: "The evidence",
    text: "Every claim linked to its source: the ticket numbers, the call dates, the usage charts. When the customer pushes back, the CSM has the receipts — not a vague feeling.",
  },
  {
    title: "What to do next",
    text: "Recommended actions for this account, this week. The brief doesn't just describe the past; it prescribes the next move.",
  },
];

const faqs = [
  {
    q: "Does this replace QBRs?",
    a: "It replaces the prep, not the conversation. One team we studied stopped running QBRs entirely and saw renewals go up — because the ritual had become theater. Most teams keep the meeting and kill the half-day of assembly work. Either way, the brief is the input; what you do with the meeting is your call.",
  },
  {
    q: "Where does the brief live?",
    a: "Wherever your CSMs already work: Slack, email, or written back into your CRM/CS platform as notes or custom fields. Not another dashboard to check.",
  },
  {
    q: "How is this different from having an AI summarize the last call?",
    a: "A call summary tells you what was said on one call. A meeting brief tells you what changed across the account — calls, tickets, usage, CRM — since the last touch, why it matters, and what to do. Summarization is a feature; the brief is the job.",
  },
  {
    q: "Can we try it before committing?",
    a: "The Account Risk Snapshot is the fastest way to see the output format: your 20 riskiest accounts, ranked, with the signals behind each one — free, in five business days. The meeting brief is the same intelligence, per account, every week.",
  },
];

export default function MeetingPrepPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Meeting Prep &amp; QBRs
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Stop spending half a day preparing for every QBR.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            The night before the big account review, your CSM is{" "}
            <em>feeding the last call transcript into ChatGPT and cold-reading the platform
            usage report</em> — hoping to sound prepared. There&apos;s a better way to walk
            into that room.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;We can&apos;t even have QBRs because there is physically not enough
            hours in a quarter.&rdquo;</em> — Head of CS, 400+ accounts, 2 CSMs,
            r/CustomerSuccess, 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              See a sample output free <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              What goes into a brief
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            The current prep ritual.
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            Every CSM knows this list. Nobody enjoys it.
          </p>
          <ul className="space-y-4">
            {before.map((item, i) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-ink-soft)" }}>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)", color: "var(--nw-ink-soft)" }}
                >
                  {i + 1}
                </span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-10" style={{ color: "var(--nw-ink-soft)" }}>
            Half a day per QBR, per account, per quarter — spent assembling information
            that already existed. The prep is a data problem wearing a calendar problem&apos;s
            clothes.
          </p>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent-glow)" }}>
            The replacement
          </p>
          <h2 className="text-3xl mb-4 text-white">One brief. Four sections. Zero assembly.</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "var(--nw-dark-soft)" }}>
            Generated weekly per account from across your stack. The CSM reviews, adds
            judgment, and walks in prepared.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {briefSections.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--nw-dark-mid)", border: "1px solid var(--nw-line-dark)" }}
              >
                <h3 className="text-white text-xl mb-2">{s.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-warm-400)" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            What changes for the team.
          </h2>
          <ul className="space-y-4 mb-12">
            {[
              "Prep time drops from half a day to a 15-minute review — the CSM's job becomes judgment, not assembly.",
              "Every customer gets the same rigor, not just the top 10 accounts the CSM had time for.",
              "The brief creates a paper trail: what was known, when, and what was recommended — useful at renewal and in post-mortems.",
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
