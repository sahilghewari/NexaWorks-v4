import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CalendarClock,
  Check,
  FileText,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import TrialStartForm from "@/components/marketing/TrialStartForm";

export const metadata = {
  title: "Signal Seat — Daily Churn Early Warning in Slack",
  description:
    "NexaWorks Signal Seat sends each CSM their top 5 at-risk accounts every morning at 8am — the exact signals, the renewal date and the next move. $50 per CSM per month. Live in 48 hours. 14 days free, no card.",
  alternates: { canonical: "/signal-seat" },
};

const deliverables = [
  {
    icon: BellRing,
    title: "The 8am Risk Brief",
    text: "Every working morning, in Slack or email — no login, no dashboard. Your top 5 accounts needing attention today, ranked by risk and ARR. Each one shows the account, the renewal date, the exact signals in plain English with numbers, and one recommended next move. Not ten tasks. One.",
  },
  {
    icon: CalendarClock,
    title: "Renewal Radar — weekly, Mondays",
    text: "Every renewal in the next 90 days, sorted by risk, not just by date. The accounts a date-sorted list hides until it is too late float to the top while there is still time to act.",
  },
  {
    icon: Sparkles,
    title: "Expansion signals — same day",
    text: "Usage hitting plan limits, a second department onboarding, a hiring spike at the account, a new senior stakeholder appearing in calls or tickets. Flagged separately from risk — because CSMs ignore tools that only bring bad news.",
  },
  {
    icon: FileText,
    title: "Done-for-you first drafts",
    text: "For every flagged account, a ready draft lands with the brief: the save or check-in email written from that account's actual data, a QBR prep outline, or an internal escalation note for the manager. NexaWorks never auto-sends anything. The CSM reviews, edits and sends.",
  },
];

const steps = [
  {
    day: "Day 0",
    title: "Connect call — 30 minutes",
    text: "We agree the seats and the sources. Read-only access to your CRM, support desk, calls and product data — or start from CSV exports. Zero integration needed to begin.",
  },
  {
    day: "Day 1",
    title: "We run the signals",
    text: "The pipeline reads the last 90 days across your CRM, tickets, usage and renewal dates. Every top flag is human spot-checked before anything ships.",
  },
  {
    day: "Day 2",
    title: "First brief lands at 8am",
    text: "Each CSM gets their top 5 accounts in Slack or email. They mark each flag already known or new — that feedback tunes the ranking through week one.",
  },
  {
    day: "Ongoing",
    title: "The brief never misses a day",
    text: "Daily pipeline, human check on the top flags, and a re-flag if a flagged account has not been acted on within 72 hours. The loop closes itself.",
  },
];

const comparisonRows: [string, string, string][] = [
  ["Price", "~$150–$300 per user / month; median contract ~$50,000 / year", "$50 per CSM / month, flat"],
  ["Per-account fees", "Yes, in most contracts", "None. Unlimited accounts."],
  ["Implementation", "$10,000–$50,000 and 8–14 weeks", "$0. Live in 48 hours."],
  ["Admin needed", "A dedicated admin", "None. We run it."],
  ["Contract", "Annual, with an uplift at renewal", "Month-to-month. Cancel in one click."],
  ["Time to first value", "Months", "First Risk Brief on Day 2"],
];

const faqs = [
  {
    q: "Do we need to replace Gainsight or our CS platform?",
    a: "No. Signal Seat sits on top of what you already own — HubSpot, Salesforce, Gainsight, a spreadsheet. It is the daily warning layer your platform does not give your CSMs at 8am.",
  },
  {
    q: "Could we not just do this ourselves with Claude or ChatGPT?",
    a: "Once, yes. What nobody does is run it every morning, for every account, across CRM, tickets, calls and product data, rank it by ARR and renewal date, draft the follow-up, and chase ten CSMs to act on it. Insight is not the product. The daily habit is the product.",
  },
  {
    q: "What do you need from us to start?",
    a: "Read-only access to your CRM, support desk, call transcripts and product usage — or CSV exports of the same. Most teams get us what we need in a day. A 30-minute connect call is the only meeting required.",
  },
  {
    q: "Is our data safe?",
    a: "Access is read-only. Your data is never used to train models and never shared. Start with a CSV if you do not want to connect anything yet. If you cancel, we delete everything within 7 days and confirm it in writing.",
  },
  {
    q: "How do we pay after the trial?",
    a: "No card is needed for the 14 free days. If you continue, we confirm your seat count and send payment details — $50 per CSM per month, or ₹3,999 per CSM per month in India. Month-to-month, cancel in one click.",
  },
  {
    q: "What if the brief flags things we already know?",
    a: "That is exactly what the 3-Risk Promise measures. If we do not flag at least 3 genuine risks your team had not already caught in the first 14 days, month 1 is free — and we show you exactly what we checked.",
  },
  {
    q: "Is there a minimum number of seats?",
    a: "Founding terms start at 3 seats. Signal Seat is built for teams of 5–30 CSMs; if your team is smaller than that, start with the trial and judge the brief on your own accounts.",
  },
];

export default function SignalSeatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://nexaworks.tech/signal-seat#service",
        name: "NexaWorks Signal Seat",
        provider: { "@id": "https://nexaworks.tech/#organization" },
        description:
          "Daily churn early-warning service for B2B SaaS CS teams: an 8am Risk Brief in Slack or email with each CSM's top 5 at-risk accounts, a weekly Renewal Radar, expansion signals and ready-to-approve drafts.",
        offers: {
          "@type": "Offer",
          price: "50",
          priceCurrency: "USD",
          description:
            "$50 per CSM per month. Unlimited accounts, $0 implementation, month-to-month. 14 days free, no card.",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl page-intro">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            NexaWorks Signal Seat · $50 per CSM / month
          </p>
          <h1 className="mb-8" style={{ color: "var(--nw-ink)" }}>
            Every churn gives a warning. Your team just sees it too late.
          </h1>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            NexaWorks watches your CRM, tickets, calls and product usage, and sends
            each CSM their top 5 at-risk accounts in Slack at 8am — with the reason,
            the renewal date, and a draft of what to send.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#trial"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium text-white"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Start my 14 free days <ArrowRight size={17} className="ml-2" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium"
              style={{ borderColor: "var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              See the price
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["14 days free", "No card upfront"],
              ["Live in 48 hours", "First brief on Day 2"],
              ["$0 implementation", "No setup project"],
              ["Month-to-month", "Cancel in one click"],
            ].map(([big, small]) => (
              <div
                key={big}
                className="p-5"
                style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="font-medium mb-1" style={{ color: "var(--nw-ink)" }}>{big}</p>
                <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample brief */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Inside the brief · Illustrative example
          </p>
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            What lands at 8am
          </h2>
          <div
            className="p-6 md:p-10"
            style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
              <h3 className="text-2xl" style={{ color: "var(--nw-ink)" }}>Meridian — review now</h3>
              <p className="text-sm font-medium" style={{ color: "var(--nw-accent)" }}>
                Renewal in 60 days
              </p>
            </div>
            <ul className="space-y-5 mb-8">
              {[
                "Usage down 43% in 14 days",
                "3 open tickets — 1 is a P1, open for 6 days",
                "Champion (VP Ops) left 11 days ago",
                "Health score still reads 82/100 — healthy",
              ].map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <Radar size={19} className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }} />
                  <span className="text-lg" style={{ color: "var(--nw-ink-soft)" }}>{signal}</span>
                </li>
              ))}
            </ul>
            <div className="p-5" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
              <p className="text-sm font-medium mb-2" style={{ color: "var(--nw-ink)" }}>
                The next move
              </p>
              <p style={{ color: "var(--nw-ink-soft)" }}>
                Reconnect on value before you reconnect on renewal. A save email is
                drafted and waiting for the CSM to approve — nothing has been sent.
              </p>
            </div>
            <p className="text-sm mt-6" style={{ color: "var(--nw-ink-soft)" }}>
              Illustrative data. Your brief is built from your accounts, your signals
              and your renewal dates.
            </p>
          </div>
        </div>
      </section>

      {/* What each seat gets */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            What each seat gets
          </p>
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            That is the whole product. No feature soup.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-8"
                style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
              >
                <item.icon size={26} style={{ color: "var(--nw-accent)" }} />
                <h3 className="text-2xl mt-5 mb-3" style={{ color: "var(--nw-ink)" }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed mt-10" style={{ color: "var(--nw-ink-soft)" }}>
            No dashboard to configure. No health-score model to tune for three months.
            No playbook builder. If a CSM lives in Slack and email, they already know
            how to use this.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            How it works
          </p>
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Live in 48 hours. Here is the honest version.
          </h2>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.day} className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-canvas)", color: "var(--nw-ink)", border: "1px solid var(--nw-line-light)" }}
                >
                  {step.day}
                </div>
                <div>
                  <h3 className="text-2xl mb-2" style={{ color: "var(--nw-ink)" }}>{step.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The DIY objection */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)", color: "white" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-dark-soft)" }}>
            The honest objection
          </p>
          <h2 className="text-3xl mb-8 text-white">
            &ldquo;Could we not just do this in Claude?&rdquo;
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-dark-soft)" }}>
            Once, yes. What you will not do is do it every morning, for every account,
            across your CRM, tickets, calls and product data, rank it by ARR and
            renewal date, draft the follow-up, and chase ten CSMs to act on it.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
            Insight is not the product. <strong className="text-white">The daily habit is
            the product.</strong> Signal Seat runs without anyone remembering to run it,
            lands where the work happens, and re-flags any account nobody acted on
            within 72 hours.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="sp-section" id="pricing" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Pricing · One offer, one price
          </p>
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            $50 per CSM per month. That is the price.
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            India pricing is ₹3,999 per CSM per month, on the same terms. For a
            10-CSM team that is $500 a month — $6,000 a year, all-in. A VP CS can
            approve that without procurement, a security committee and a three-month
            rollout plan.
          </p>
          <div className="overflow-x-auto mb-10" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
            <table className="w-full text-left" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                  <th className="p-5 text-sm font-medium" style={{ color: "var(--nw-ink-soft)" }}></th>
                  <th className="p-5 text-sm font-medium" style={{ color: "var(--nw-ink-soft)" }}>
                    Enterprise CS platform
                  </th>
                  <th className="p-5 text-sm font-medium" style={{ color: "var(--nw-ink)" }}>
                    NexaWorks Signal Seat
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, them, us]) => (
                  <tr key={label} style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                    <th className="p-5 font-medium" style={{ color: "var(--nw-ink)" }}>{label}</th>
                    <td className="p-5" style={{ color: "var(--nw-ink-soft)" }}>{them}</td>
                    <td className="p-5 font-medium" style={{ color: "var(--nw-ink)" }}>{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 md:p-8" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
            <h3 className="text-2xl mb-4" style={{ color: "var(--nw-ink)" }}>Founding terms — first 20 companies</h3>
            <ul className="space-y-3">
              {[
                "Your $50 price is locked for 24 months, even when the public price rises",
                "Minimum 3 seats — built for teams of 5–30 CSMs",
                "14 days free, no card. Then month-to-month, cancel in one click",
              ].map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <Check size={19} className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }} />
                  <span className="text-lg" style={{ color: "var(--nw-ink-soft)" }}>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Promise and data */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8" style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}>
              <ShieldCheck size={26} style={{ color: "var(--nw-accent)" }} />
              <h3 className="text-2xl mt-5 mb-4" style={{ color: "var(--nw-ink)" }}>The 3-Risk Promise</h3>
              <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                If, in the first 14 days, we do not flag at least 3 genuine risks
                your team had not already caught, month 1 is free too — and we show
                you exactly what we checked. Two weeks, no card, no contract: we
                have to surface real risk you missed, or you pay nothing.
              </p>
            </div>
            <div className="p-6 md:p-8" style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}>
              <LockKeyhole size={26} style={{ color: "var(--nw-accent)" }} />
              <h3 className="text-2xl mt-5 mb-4" style={{ color: "var(--nw-ink)" }}>The data promise</h3>
              <ul className="space-y-3">
                {[
                  "Read-only access — we never need write access",
                  "Your data is never used to train models",
                  "Your data is never shared",
                  "Start with a CSV export if you prefer not to connect anything",
                  "Cancel and we delete everything within 7 days, confirmed in writing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={19} className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }} />
                    <span style={{ color: "var(--nw-ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl mb-5" style={{ color: "var(--nw-ink)" }}>Built for</h3>
              <ul className="space-y-3">
                {[
                  "B2B SaaS, roughly 100–500 staff and $5M–$50M ARR",
                  "5–30 CSMs looking after 100–1,000 accounts",
                  "HubSpot or Salesforce, plus Slack and Zendesk, Intercom or Freshdesk",
                  "Product usage data that exists somewhere — even a weekly CSV",
                  "Teams that lost a renewal in the last two quarters that 'came out of nowhere'",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={19} className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }} />
                    <span className="text-lg" style={{ color: "var(--nw-ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-5" style={{ color: "var(--nw-ink)" }}>Not for</h3>
              <ul className="space-y-3">
                {[
                  "Under 50 accounts — a spreadsheet is honestly fine",
                  "Enterprises with a dedicated CS Ops team and a working Gainsight build",
                  "Anyone looking to replace their CS platform",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0" style={{ color: "var(--nw-ink-soft)" }}>—</span>
                    <span className="text-lg" style={{ color: "var(--nw-ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
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

      {/* Trial */}
      <section className="sp-section" id="trial" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
                Start the trial
              </p>
              <h2 className="text-3xl mb-6" style={{ color: "var(--nw-ink)" }}>
                Start my 14 free days
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
                Tell us where to send the first brief. We reply within one business
                day to arrange read-only access or a CSV start — and your first
                Risk Brief can land within 48 hours of that.
              </p>
              <ul className="space-y-3">
                {[
                  "14 days free — no card, no contract",
                  "The 3-Risk Promise covers the whole trial",
                  "Then $50 per CSM per month, month-to-month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={19} className="mt-1 flex-shrink-0" style={{ color: "var(--nw-accent)" }} />
                    <span className="text-lg" style={{ color: "var(--nw-ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-sm font-medium" style={{ color: "var(--nw-ink)" }}>
                  Prefer to talk first? Book a discovery call <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </p>
            </div>
            <div className="p-6 md:p-8" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
              <TrialStartForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
