import Link from "next/link";
import { ArrowRight, Check, Layers, Database, ScanSearch, FileText, Zap } from "lucide-react";

export const metadata = {
  title: "Customer Success AI for B2B SaaS | NexaWorks",
  description:
    "Customer Success AI that works as a signal layer on top of the CS platform you already own — finding the churn, renewal, and expansion signals hiding across your CRM, calls, tickets, and product data, and turning them into action.",
  alternates: { canonical: "/customer-success-ai" },
};

const layers = [
  {
    icon: Database,
    name: "Sources",
    text: "Your systems, as they are. Salesforce or HubSpot, Gong or call transcripts, Zendesk or Intercom, product usage, Slack. Read-only — nothing to rip out, nothing new to implement.",
  },
  {
    icon: ScanSearch,
    name: "Signal extraction",
    text: "From raw activity to commercial meaning: what changed in each account, sentiment shifts in tickets and calls, champion and stakeholder engagement, seat and usage movement.",
  },
  {
    icon: FileText,
    name: "Account intelligence",
    text: "Every account gets a plain-language brief answering four questions: what changed? Why does it matter commercially? What evidence supports it? What should the team do next?",
  },
  {
    icon: Zap,
    name: "Activation",
    text: "The intelligence lands where CSMs already work: a weekly portfolio action list, a pre-call brief before every key meeting, a renewal playbook 90 days out. Insight that doesn't change behavior is trivia.",
  },
];

const outputs = [
  "One-click meeting briefs before every key call",
  "Chronological account timelines — the full story in one place",
  "Evidence-backed risk and opportunity signals",
  "Weekly portfolio action lists in Slack or email",
  "Renewal plays built from the signals, not the calendar",
];

const faqs = [
  {
    q: "Is this another CS platform we have to buy and implement?",
    a: "No. That is the entire point. The signal layer works alongside the CS platform you already own — Gainsight, ChurnZero, Vitally, or a spreadsheet. There is nothing to implement and no migration. We read your existing systems and deliver intelligence back into the tools your team already uses.",
  },
  {
    q: "How is this different from our health score?",
    a: "Most health scores measure activity around the product, not value from the product — logins, tickets closed, meetings held. In a 2026 poll of CS leaders shared on r/CustomerSuccess, 82% said their health score caught less than half of churn. The signal layer looks at what health scores skip: champion engagement, sentiment shifts, sponsor changes, the people signals that show up in churn post-mortems.",
  },
  {
    q: "What does the AI actually do?",
    a: "It does the stitching work no human has time for: reading across CRM, calls, tickets, and product data every week, detecting what changed per account, and writing it up in plain language with the evidence attached. Humans review and act — the AI surfaces, your leaders decide.",
  },
  {
    q: "How long before we see value?",
    a: "The Account Risk Snapshot shows you your 20 riskiest accounts in five business days, free, before any contract. A full pilot runs four to six weeks. There is no multi-month implementation.",
  },
  {
    q: "Who is this for?",
    a: "B2B SaaS teams with 100+ employees and a CS team that manages real books of business. You need at least two of the core data sources (CRM, calls, tickets, product data) for the signals to be worth finding.",
  },
];

export default function CustomerSuccessAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Customer Success AI
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Customer Success AI for B2B SaaS teams.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            NexaWorks finds the churn, renewal, and expansion signals hiding across your CRM,
            calls, tickets, and product data — and turns them into action. We work alongside
            the CS platform you already own.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            Not another platform to buy. Not another dashboard to check. A signal layer on top
            of the stack you already pay for — reading everything, surfacing what matters,
            in language your CSMs can act on this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Get the free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Browse the Signal Library
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            Your stack has the signals. Nobody is reading them together.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            <p>
              Ask any CS leader where churn starts and you will hear the same story:{" "}
              <em>&ldquo;I felt like an idiot. It was all there.&rdquo;</em> The champion went
              quiet two months before renewal. Support sentiment turned in week six. Two power
              users were deactivated in week nine. Every signal existed — scattered across five
              systems nobody has time to stitch together.
            </p>
            <p>
              <em>&ldquo;There is no single place where those signals come together.&rdquo;</em>{" "}
              That is the job the signal layer does. And it is the job your health score was
              supposed to do but doesn&apos;t: most scores measure activity{" "}
              <em>around</em> the product, not value <em>from</em> it — which is why green
              accounts keep churning.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent-glow)" }}>
            How it works
          </p>
          <h2 className="text-3xl mb-4 text-white">The signal layer, in four layers.</h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "var(--nw-dark-soft)" }}>
            Data flows up; intelligence flows down. Your team only ever sees the top —
            the brief, the action list, the play.
          </p>
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <div
                key={layer.name}
                className="rounded-xl p-6 md:p-8 flex gap-6 items-start"
                style={{
                  backgroundColor: "var(--nw-dark-mid)",
                  border: "1px solid var(--nw-line-dark)",
                  opacity: 1 - i * 0.12,
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  <layer.icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="eyebrow mb-2" style={{ color: "var(--nw-accent-glow)" }}>
                    Layer {i + 1}
                  </p>
                  <h3 className="text-white text-xl mb-2">{layer.name}</h3>
                  <p style={{ color: "var(--nw-warm-400)" }}>{layer.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm" style={{ color: "var(--nw-dark-soft)" }}>
            <Layers size={16} />
            <span>Your CS platform stays exactly where it is — the signal layer sits on top of it.</span>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            What your team actually receives.
          </h2>
          <ul className="space-y-4 mb-12">
            {outputs.map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-ink-soft)" }}>
                <Check size={20} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent)" }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            Every output answers the same four questions: what changed, why it matters
            commercially, what evidence supports it, and what the team should do next.
            If an output can&apos;t answer all four, it doesn&apos;t ship.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/customer-success-ai/churn-renewal-risk", label: "Churn & renewal risk detection" },
              { href: "/customer-success-ai/health-score", label: "Health scores your CSMs trust" },
              { href: "/customer-success-ai/meeting-prep", label: "Automated meeting prep & QBRs" },
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

      {/* Proof before payment */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            See it on your data before you pay for anything.
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            The Account Risk Snapshot is the signal layer working on your accounts, free,
            in five business days: your 20 riskiest accounts ranked, with the signals
            behind each one. If it doesn&apos;t show you something your health score
            missed, don&apos;t hire us.
          </p>
          <Link
            href="/account-risk-snapshot"
            className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--nw-ink)" }}
          >
            Get the free Snapshot <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-10" style={{ color: "var(--nw-ink)" }}>
            Questions CS leaders ask.
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
