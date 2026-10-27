import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileText,
  Fingerprint,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import SampleBriefForm from "@/components/marketing/SampleBriefForm";
import TrialStartForm from "@/components/marketing/TrialStartForm";
import EditorialExperience from "@/components/marketing/EditorialExperience";
import EditorialSnapshot from "@/components/marketing/EditorialSnapshot";
import LiquidGlassBackground from "@/components/marketing/LiquidGlassBackground";
import FoundingTeam from "@/components/marketing/FoundingTeam";
import SignalBento from "@/components/marketing/SignalBento";
import "./editorial-home.css";
import "./signal-surfaces.css";

export const metadata = { alternates: { canonical: "/" } };

const offers = [
  {
    label: "01 / SIGNAL SEAT",
    name: "Signal Seat",
    price: "$50",
    timing: "per CSM / month · ₹3,999 in India",
    description:
      "Your daily churn early-warning system, delivered in Slack or email.",
    items: [
      "Daily 8am Risk Brief with your top 5 accounts",
      "Weekly Renewal Radar for the next 90 days",
      "Expansion signals, flagged the same day",
      "Done-for-you drafts — the CSM approves before anything sends",
      "Unlimited accounts · $0 implementation · Live in 48 hours",
    ],
    href: "/signal-seat#trial",
    cta: "Start your 14 free days",
    note: "14 days free · No card · Month-to-month · Cancel in one click",
    featured: true,
  },
];

export default function Home() {
  return (
    <EditorialExperience>
      <section className="ed-hero" aria-labelledby="ed-hero-title">
        <LiquidGlassBackground />
        <div className="ed-wrap ed-hero-layout">
          <div className="ed-hero-copy">
            <p className="ed-eyebrow">
              <span /> NEXAWORKS SIGNAL SEAT · DAILY CHURN WARNINGS
            </p>
            <h1 id="ed-hero-title">
              Your top five
              <br />
              accounts at risk.
              <br />
              <em>Every morning at 8.</em>
            </h1>
            <p className="ed-hero-description">
              Signal Seat reads the warnings across your CRM, calls, tickets
              and product data, then sends each CSM a brief in Slack or email
              with the reason, the renewal date and the next move.
            </p>
            <div className="ed-actions">
              <Link
                href="/signal-seat#trial"
                className="ed-button ed-button-primary"
              >
                Start your 14 free days <ArrowUpRight size={17} />
              </Link>
              <Link href="#intelligence-demo" className="ed-inline-link">
                See a sample Risk Brief <ArrowRight size={15} />
              </Link>
            </div>
            <div className="ed-hero-note">
              <span>
                <Fingerprint size={15} /> $50 per CSM / month
              </span>
              <span>
                <ShieldCheck size={15} /> Live in 48 hours
              </span>
              <span>
                <Layers3 size={15} /> No card for the trial
              </span>
            </div>
          </div>
          <div className="nw-spatial-interface">
            <EditorialSnapshot />
          </div>
        </div>
      </section>
      <section
        className="nw-snapshot-transition"
        aria-label="NexaWorks Signal Seat promise"
      >
        <div className="ed-wrap">
          <div className="ed-snapshot-strip">
            <div>
              <span className="ed-micro">SIGNAL SEAT / THE 3-RISK PROMISE</span>
              <h2>
                If we miss the warning,
                <br />
                <em>month one is free.</em>
              </h2>
            </div>
            <div>
              <strong>14 days free.</strong>
              <span>
                No card. See the brief on your own accounts before you pay.
              </span>
            </div>
            <div>
              <strong>3 missed risks.</strong>
              <span>
                If we do not flag three risks your team missed, month one is free.
              </span>
            </div>
            <Link
              href="/signal-seat#trial"
              className="ed-snapshot-intro-cta"
            >
              Start your 14 free days <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="ed-sources-strip"
        aria-label="Examples of source systems"
      >
        <div className="ed-wrap">
          <p>
            CONTEXT FROM THE TOOLS
            <br />
            YOU ALREADY OWN
          </p>
          <div>
            {[
              "Salesforce",
              "HubSpot",
              "Gong",
              "Zendesk",
              "Slack",
              "Product data",
            ].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section ed-perspective" id="method">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">01 / THE WARNING SIGNS</p>
            <span className="ed-micro">THE SCORE CAN LOOK GREEN.</span>
          </div>
          <div className="ed-perspective-intro">
            <h2>
              A healthy score.
              <br />
              An incomplete <em>story.</em>
            </h2>
            <div>
              <p>
                The score is green. But the champion stopped showing up,
                adoption is falling, and a critical issue is still open.
              </p>
              <p>
                Each system holds a piece. Signal Seat brings the pieces
                together every morning, ranks them by risk and renewal date,
                and tells the CSM what to do next.
              </p>
              <Link href="/guides/green-then-gone" className="ed-inline-link">
                Read: green, then gone <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <SignalBento />
        </div>
      </section>

      <section
        className="ed-section ed-product-detail"
        id="account-intelligence"
        aria-labelledby="detail-title"
      >
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">02 / INSIDE THE 8AM RISK BRIEF</p>
            <span className="ed-micro">ILLUSTRATIVE EXAMPLE</span>
          </div>
          <div className="ed-detail-heading">
            <h2 id="detail-title">
              The warning, the evidence.
              <br />
              <em>The next step, clearer.</em>
            </h2>
            <p>
              Explore an illustrative brief: the account, the exact signals
              behind the risk, and one clear action for the CSM.
            </p>
          </div>
          <EditorialSnapshot detailed />
          <p className="ed-detail-disclaimer">
            Illustrative example. Your brief is built from your accounts and
            delivered in Slack or email.
          </p>
        </div>
      </section>

      <section className="ed-section ed-approach">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">03 / HOW SIGNAL SEAT WORKS</p>
            <span className="ed-micro">LIVE IN 48 HOURS. NO NEW DASHBOARD.</span>
          </div>
          <div className="ed-approach-heading">
            <h2>
              Connect your tools.
              <br />
              <em>Keep your stack.</em>
            </h2>
            <p>
              Signal Seat sits on top of the CS platform you already own. We
              run the daily work; your CSMs stay in control.
            </p>
          </div>
          <div className="ed-method-board">
            {[
              {
                icon: Database,
                name: "Connect",
                text: "Give read-only access to your CRM, support desk, calls and product data — or start with CSV exports.",
              },
              {
                icon: Network,
                name: "We read",
                text: "Every day, we connect champion, usage, ticket and renewal signals across your systems.",
              },
              {
                icon: ShieldCheck,
                name: "Human check",
                text: "The top flags are spot-checked before the brief ships, so the CSM sees evidence, not a mystery score.",
              },
              {
                icon: FileText,
                name: "8am brief",
                text: "Each CSM gets their top 5 accounts in Slack or email, with one next move and a draft ready to approve.",
              },
            ].map((step, i) => (
              <div className="ed-process-step" key={step.name}>
                <div className="ed-process-icon">
                  <step.icon size={25} strokeWidth={1.4} />
                </div>
                <span className="ed-micro">0{i + 1}</span>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="ed-method-assurance">
            <span>
              <LockKeyhole size={16} /> Read-only access or CSV start
            </span>
            <span>
              <Fingerprint size={16} /> Nothing is auto-sent
            </span>
            <span>
              <ShieldCheck size={16} /> Your team approves every draft
            </span>
          </div>
          <Link href="/signal-seat" className="ed-inline-link">
            See the full offer <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="ed-section ed-offer" id="services">
        <div className="ed-wrap ed-offer-layout">
          <div>
            <p className="ed-eyebrow">04 / WHAT EACH SEAT GETS</p>
            <h2>
              One brief.
              <br />
              Every morning.
              <br />
              <em>No dashboard.</em>
            </h2>
            <p className="ed-section-description">
              Every CSM with a Signal Seat gets the same daily system: risk
              first, renewals in view, expansion flagged, and the follow-up
              already drafted.
            </p>
            <div
              className="ed-offer-facts"
              aria-label="Signal Seat delivery facts"
            >
              <span>
                <strong>8am</strong> Risk Brief
              </span>
              <span>
                <strong>Top 5</strong> accounts
              </span>
              <span>
                <strong>48h</strong> to first brief*
              </span>
            </div>
            <p className="ed-offer-timing">
              *After read-only access or a CSV export is in place.
            </p>
            <Link
              href="/signal-seat#trial"
              className="ed-button ed-button-primary"
            >
              Start your 14 free days <ArrowUpRight size={17} />
            </Link>
            <p className="ed-offer-fit">
              For B2B SaaS teams with 5–30 CSMs on HubSpot or Salesforce
            </p>
          </div>
          <div className="ed-offer-paper">
            <div className="ed-paper-fold" aria-hidden="true" />
            <div className="ed-story-card-label">
              <Layers3 size={20} />
              <span>YOUR SIGNAL SEAT / EVERY WORKING DAY</span>
            </div>
            <h3>
              The signal was there.
              <br />
              <em>Now it lands at 8am.</em>
            </h3>
            {[
              {
                title: "Daily Risk Brief",
                text: "Top 5 accounts ranked by risk and ARR, with the exact signals and renewal dates.",
              },
              {
                title: "Weekly Renewal Radar",
                text: "Every renewal in the next 90 days, sorted by risk — not just by date.",
              },
              {
                title: "Expansion signals and drafts",
                text: "Usage limits, new teams and new stakeholders flagged the same day, with a draft ready to approve.",
              },
            ].map((item, i) => (
              <div className="ed-deliverable-row" key={item.title}>
                <span>0{i + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
                <Check size={17} />
              </div>
            ))}
            <div className="ed-paper-bottom">
              <span>14 days free · No card</span>
              <span>$50 per CSM / month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ed-intake-section" id="trial">
        <div className="ed-wrap">
          <details className="ed-intake">
            <summary>
              <span>Start your 14 free days</span>
              <span>
                No card · No contract · Live in 48 hours <ArrowUpRight size={19} />
              </span>
            </summary>
            <div className="ed-intake-layout">
              <div>
                <p className="ed-eyebrow">START THE TRIAL</p>
                <h2>
                  Tell us where
                  <br />
                  to send the first brief.
                </h2>
                <p>
                  Share your contact details and the tools your team uses.
                  We’ll reply within one business day to arrange read-only
                  access or a simple CSV start.
                </p>
                <p>No payment or data access is granted by this form.</p>
              </div>
              <TrialStartForm />
            </div>
          </details>
        </div>
      </section>

      <section className="ed-section ed-engagements" id="pricing">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">05 / PRICING</p>
            <span className="ed-micro">
              ONE OFFER. ONE PRICE. NO LADDER.
            </span>
          </div>
          <div className="ed-engagements-heading">
            <h2>
              Start free.
              <br />
              <em>Stay because it works.</em>
            </h2>
            <p>
              No implementation project, no annual contract and no per-account
              fees. If the first 14 days do not surface risks your team missed,
              the 3-Risk Promise applies.
            </p>
          </div>
          <div className="ed-price-grid ed-price-grid-single">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={`ed-price-card ${offer.featured ? "is-featured" : ""}`}
              >
                <div className="ed-price-top">
                  <div className="ed-price-stage">
                    <span aria-hidden="true">{offer.label.slice(0, 2)}</span>
                    <span className="ed-micro">
                      {offer.label.split(" / ")[1]}
                    </span>
                  </div>
                  {offer.featured && (
                    <span className="ed-price-badge">14 DAYS FREE</span>
                  )}
                </div>
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <div className="ed-price-facts">
                  <div className="ed-price-value">{offer.price}</div>
                  <span className="ed-price-timing">{offer.timing}</span>
                </div>
                <ul>
                  {offer.items.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <small className="ed-price-note">{offer.note}</small>
                <Link href={offer.href} className="ed-button ed-button-outline">
                  {offer.cta}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="ed-pricing-fine">
            <strong>The 3-Risk Promise:</strong> if we do not flag at least 3
            genuine risks your team had not already caught in the first 14 days,
            month 1 is free — and we show you exactly what we checked.
          </p>
          <div className="ed-audit-row">
            <div>
              <span className="ed-micro">THE OLD WAY / ENTERPRISE CS PLATFORMS</span>
              <p>
                Around $50,000 a year
                <span> plus $10,000–$50,000 implementation and a dedicated admin</span>
              </p>
            </div>
            <Link href="/signal-seat#pricing" className="ed-inline-link">
              See the full comparison <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className="ed-pricing-fine">
            Founding terms for the first 20 companies: the $50 price is locked
            for 24 months. Minimum 3 seats. India pricing is ₹3,999 per CSM per
            month, on the same terms.
          </p>
        </div>
      </section>

      <section className="ed-section ed-reading">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">06 / THE READING ROOM</p>
            <Link href="/signals" className="ed-inline-link">
              Browse the Signal Library <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="ed-reading-intro">
            <h2>
              A little more
              <br />
              <em>perspective.</em>
            </h2>
            <p>
              Field notes, practical tools, and a closer look at customer
              intelligence.
            </p>
          </div>
          <div className="ed-reading-grid">
            <Link href="/guides/green-then-gone" className="ed-reading-card">
              <div
                className="ed-reading-art ed-reading-score"
                aria-hidden="true"
              >
                <span>THE HEALTH SCORE PARADOX</span>
                <div>
                  <strong>82</strong>
                  <i>healthy?</i>
                </div>
                <small>GREEN, THEN GONE.</small>
              </div>
              <span className="ed-micro">
                FEATURED FIELD NOTE / RENEWAL RISK
              </span>
              <h3>When green accounts churn.</h3>
              <p>What the dashboard sees—and what it can miss.</p>
              <ArrowUpRight size={22} className="ed-reading-arrow" />
            </Link>
            <Link
              href="/tools/health-score-back-tester"
              className="ed-reading-card"
            >
              <div
                className="ed-reading-art ed-reading-test"
                aria-hidden="true"
              >
                <span>A SCORE IS A HYPOTHESIS.</span>
                <div>
                  {[40, 67, 48, 82, 61, 94, 72, 100, 85].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <small>TEST IT AGAINST THE OUTCOME.</small>
              </div>
              <span className="ed-micro">FREE TOOL / BACK-TESTER</span>
              <h3>Put your score to the test.</h3>
              <p>
                Check catch rates and false alarms. Your data stays in your
                browser.
              </p>
              <ArrowUpRight size={22} className="ed-reading-arrow" />
            </Link>
            <Link
              href="/compare/signal-layer-vs-cs-platform"
              className="ed-reading-card"
            >
              <div
                className="ed-reading-art ed-reading-context"
                aria-hidden="true"
              >
                <span>THE SPACE BETWEEN THE TOOLS.</span>
                <div>
                  <Database size={29} strokeWidth={1} />
                  <i />
                  <Network size={43} strokeWidth={1} />
                  <i />
                  <FileText size={29} strokeWidth={1} />
                </div>
                <small>CONTEXT, CONNECTED.</small>
              </div>
              <span className="ed-micro">
                PERSPECTIVE / YOUR EXISTING STACK
              </span>
              <h3>A layer, alongside your platform.</h3>
              <p>
                Where customer intelligence fits in the tools you already own.
              </p>
              <ArrowUpRight size={22} className="ed-reading-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-section ed-founder">
        <div className="ed-wrap ed-founder-layout">
          <div>
            <p className="ed-eyebrow">THE PEOPLE BEHIND THE WORK.</p>
            <h2>
              Good intelligence
              <br />
              comes with <em>accountability.</em>
            </h2>
            <p>
              Work directly with Sahil, Mangala Sawant and Pavan Babar—the
              founding team of NexaWorks. A clear scope, evidence you can
              question, and people who own the work.
            </p>
            <Link href="/about" className="ed-inline-link">
              Meet the founders <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="ed-founder-identity">
            <span className="ed-micro">THE NEXAWORKS FOUNDING TEAM</span>
            <FoundingTeam />
            <ul className="ed-founder-principles">
              <li>
                <span>01</span> A clear scope.
              </li>
              <li>
                <span>02</span> Evidence you can question.
              </li>
              <li>
                <span>03</span> Direct accountability.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ed-sample-section" aria-labelledby="sample-title">
        <div className="ed-wrap">
          <div className="ed-brief-form" id="sample-brief">
            <div className="ed-sample-copy">
              <span className="ed-micro">
                <FileText size={16} aria-hidden="true" /> TAKE A CLOSER LOOK
              </span>
              <h3 id="sample-title">
                Let the work <em>speak for itself.</em>
              </h3>
              <p>
                Get an illustrative meeting brief in your inbox. See how
                sources, signals and next steps come together.
              </p>
            </div>
            <div className="ed-sample-action">
              <SampleBriefForm />
            </div>
          </div>
        </div>
      </section>
    </EditorialExperience>
  );
}
