import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CornerDownRight,
  Database,
  FileText,
  Fingerprint,
  Headphones,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
} from "lucide-react";
import SampleBriefForm from "@/components/marketing/SampleBriefForm";
import SnapshotIntakeForm from "@/components/marketing/SnapshotIntakeForm";
import EditorialExperience from "@/components/marketing/EditorialExperience";
import EditorialSnapshot from "@/components/marketing/EditorialSnapshot";
import "./editorial-home.css";

export const metadata = { alternates: { canonical: "/" } };

const offers = [
  {
    label: "01 / DIAGNOSE",
    name: "Intelligence Blueprint",
    price: "$3,500",
    timing: "10 business days",
    description: "A clear plan before you commit to a build.",
    items: [
      "Data & workflow map",
      "5–15 strategic account review",
      "Prioritized use cases",
      "Pilot architecture & ROI hypothesis",
    ],
    href: "/customer-intelligence-blueprint",
    cta: "Explore the Blueprint",
    note: "Fully credited toward the Pilot",
  },
  {
    label: "02 / PROVE",
    name: "Intelligence Pilot",
    price: "$9,500–$18,000",
    timing: "4–6 weeks",
    description: "One workflow. Your data. Evidence your team can use.",
    items: [
      "One-click meeting briefs",
      "Chronological account timelines",
      "Evidence-backed risk & opportunity signals",
      "Weekly portfolio action lists in Slack or email",
      "Pilot-results report & production proposal",
    ],
    href: "/customer-intelligence-pilot",
    cta: "Explore the Pilot",
    note: "Most pilots land around $15,000",
    featured: true,
  },
  {
    label: "03 / SCALE",
    name: "Custom Build",
    price: "Scoped with you",
    timing: "Your workflows & systems",
    description: "Extend what works into your everyday operations.",
    items: [
      "Custom integrations with your stack",
      "Scope built around your workflows and data",
      "Direct access to the people doing the work",
      "Pricing agreed after discovery",
    ],
    href: "/contact",
    cta: "Discuss your workflow",
    note: "Fixed scope, agreed together",
  },
];

export default function Home() {
  return (
    <EditorialExperience>
      <section className="ed-hero" aria-labelledby="ed-hero-title">
        <div className="ed-wrap ed-hero-layout">
          <div className="ed-hero-copy">
            <p className="ed-eyebrow">
              <span /> CUSTOMER INTELLIGENCE, WITH PERSPECTIVE.
            </p>
            <h1 id="ed-hero-title">
              See what
              <br />
              the numbers
              <br />
              <em>aren’t saying.</em>
            </h1>
            <p className="ed-hero-description">
              Behind every renewal is a relationship. We connect the people
              signals with the product signals, so your next conversation starts
              with the whole story.
            </p>
            <div className="ed-actions">
              <Link
                href="/account-risk-snapshot"
                className="ed-button ed-button-primary"
              >
                Get your free Snapshot <ArrowUpRight size={17} />
              </Link>
              <Link href="#intelligence-demo" className="ed-inline-link">
                Explore the example <ArrowRight size={15} />
              </Link>
            </div>
            <p className="ed-hero-note">
              FOUNDER-LED. HUMAN-REVIEWED. EVIDENCE-ATTACHED.
            </p>
            <div className="ed-hero-margin">
              <span />
              <p>
                A clearer view of your accounts.
                <br />
                Built on the tools you already own.
              </p>
            </div>
          </div>
          <EditorialSnapshot />
        </div>
        <div className="ed-wrap">
          <div className="ed-snapshot-strip">
            <div>
              <span className="ed-micro">THE FREE ACCOUNT RISK SNAPSHOT</span>
              <h2>
                Perspective first.
                <br />
                <em>Then the next move.</em>
              </h2>
            </div>
            <div>
              <strong>20 accounts.</strong>
              <span>Prioritized, with the signals behind each.</span>
            </div>
            <div>
              <strong>5 business days.</strong>
              <span>From your data to a clear readout.</span>
            </div>
            <Link
              href="/account-risk-snapshot"
              aria-label="Explore the free Account Risk Snapshot"
            >
              <ArrowUpRight size={28} strokeWidth={1} />
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
            <p className="ed-eyebrow">01 / THE MISSING CONTEXT</p>
            <span className="ed-micro">LOOK BETWEEN THE METRICS.</span>
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
                Each system holds a piece. We bring the pieces together so your
                team can see what needs attention—and why.
              </p>
              <Link href="/guides/green-then-gone" className="ed-inline-link">
                Read: green, then gone <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="ed-story-board">
            <div className="ed-story-score">
              <div className="ed-story-card-label">
                <span>THE DASHBOARD VIEW</span>
                <span>ILLUSTRATIVE</span>
              </div>
              <div className="ed-score-ring">
                <svg viewBox="0 0 170 170" aria-hidden="true">
                  <circle
                    cx="85"
                    cy="85"
                    r="72"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity=".12"
                    strokeWidth="2"
                  />
                  <circle
                    cx="85"
                    cy="85"
                    r="72"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="371 452"
                    transform="rotate(-90 85 85)"
                  />
                </svg>
                <div>
                  <strong>
                    82<span>/100</span>
                  </strong>
                  <span>
                    <i />
                    Healthy
                  </span>
                </div>
              </div>
              <p>
                Activity looks good.
                <br />
                The relationship needs a closer look.
              </p>
              <span className="ed-micro">ONE SCORE ≠ THE WHOLE ACCOUNT</span>
            </div>
            <div className="ed-story-timeline">
              <div className="ed-story-card-label">
                <span>THE STORY BETWEEN THE SYSTEMS</span>
                <MessageSquareText size={16} />
              </div>
              {[
                {
                  day: "−47",
                  source: "CALLS",
                  title: "The champion goes quiet.",
                  text: "A familiar voice disappears from the conversation.",
                },
                {
                  day: "−21",
                  source: "PRODUCT",
                  title: "Adoption begins to fall.",
                  text: "Fewer people are getting value from the product.",
                },
                {
                  day: "−04",
                  source: "SUPPORT",
                  title: "A critical issue stays open.",
                  text: "An unresolved blocker becomes a commercial concern.",
                },
              ].map((item) => (
                <div className="ed-timeline-event" key={item.day}>
                  <span className="ed-timeline-day">
                    {item.day}
                    <small>DAYS</small>
                  </span>
                  <div>
                    <small>{item.source}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="ed-story-insight">
                <CornerDownRight size={19} />
                <p>
                  The risk is in the pattern.
                  <br />
                  <strong>The next step is a conversation.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ed-section ed-approach">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">02 / HOW WE WORK</p>
            <span className="ed-micro">YOUR STACK. A CLEARER PICTURE.</span>
          </div>
          <div className="ed-approach-heading">
            <h2>
              Connect the context.
              <br />
              <em>Keep your stack.</em>
            </h2>
            <p>
              A scoped intelligence service alongside your CS platform. Evidence
              comes together. Your people stay in control.
            </p>
          </div>
          <div className="ed-method-board">
            <div className="ed-method-sources">
              <span className="ed-micro">01 / YOUR EXISTING SOURCES</span>
              {[
                {
                  icon: Database,
                  title: "CRM & product",
                  detail: "Accounts, renewals, adoption",
                },
                {
                  icon: MessageSquareText,
                  title: "Calls & conversations",
                  detail: "Champions, goals, sentiment",
                },
                {
                  icon: Headphones,
                  title: "Support & tickets",
                  detail: "Blockers, friction, escalations",
                },
              ].map((source) => (
                <div key={source.title}>
                  <source.icon size={20} strokeWidth={1.3} />
                  <div>
                    <h3>{source.title}</h3>
                    <p>{source.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ed-method-center">
              <span className="ed-method-line" aria-hidden="true" />
              <div className="ed-method-mark">
                <Network size={43} strokeWidth={1} />
              </div>
              <span className="ed-micro">02 / CONNECT & REVIEW</span>
              <p>
                Extract the signals.
                <br />
                Attach the evidence.
                <br />
                Review with a human.
              </p>
            </div>
            <div className="ed-method-output">
              <span className="ed-micro">03 / A CLEAR NEXT STEP</span>
              <FileText size={28} strokeWidth={1} />
              <h3>
                Ready for the
                <br />
                next conversation.
              </h3>
              <p>
                Account briefs. Weekly priorities. Renewal and expansion
                signals.
              </p>
              <span className="ed-method-destination">
                Slack / Email / Your workflow
              </span>
            </div>
          </div>
          <div className="ed-method-assurance">
            <span>
              <LockKeyhole size={16} /> Read-only access or exports
            </span>
            <span>
              <Fingerprint size={16} /> Source-backed context
            </span>
            <span>
              <ShieldCheck size={16} /> Your team reviews and acts
            </span>
          </div>
          <Link href="/customer-success-ai" className="ed-inline-link">
            Inside the approach <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="ed-section ed-offer" id="services">
        <div className="ed-wrap ed-offer-layout">
          <div>
            <p className="ed-eyebrow">03 / A CLEARER PLACE TO BEGIN</p>
            <h2>
              Start with the
              <br />
              accounts you
              <br />
              <em>can’t afford to miss.</em>
            </h2>
            <p className="ed-section-description">
              Your free Account Risk Snapshot: the 20 accounts that need
              attention, the evidence behind each, and a readout to decide what
              happens next.
            </p>
            <Link
              href="/account-risk-snapshot"
              className="ed-button ed-button-primary"
            >
              Request your free Snapshot <ArrowUpRight size={17} />
            </Link>
            <p className="ed-offer-fit">
              For B2B SaaS · 100+ employees · At least two data sources
            </p>
          </div>
          <div className="ed-offer-paper">
            <div className="ed-paper-fold" aria-hidden="true" />
            <div className="ed-story-card-label">
              <Layers3 size={20} />
              <span>YOUR SNAPSHOT / AT A GLANCE</span>
            </div>
            <h3>
              A point of view.
              <br />
              <em>Backed by evidence.</em>
            </h3>
            {[
              {
                title: "A ranked attention list",
                text: "Your 20 riskiest accounts, with 3–5 signals behind each.",
              },
              {
                title: "The context that matters",
                text: "People and product signals across up to three sources.",
              },
              {
                title: "A conversation about action",
                text: "A 45-minute readout, five business days after data access.",
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
              <span>No contract. No platform to buy.</span>
              <span>Four Snapshots / month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ed-intake-section">
        <div className="ed-wrap">
          <details className="ed-intake">
            <summary>
              <span>Ready for a clearer picture?</span>
              <span>
                Request your Snapshot here <ArrowUpRight size={19} />
              </span>
            </summary>
            <div className="ed-intake-layout">
              <div>
                <p className="ed-eyebrow">YOUR FIRST STEP</p>
                <h2>
                  Tell us where
                  <br />
                  to begin.
                </h2>
                <p>
                  Share your contact details and available data sources. We’ll
                  discuss read-only access or exports with you after your
                  request.
                </p>
                <p>No data access is granted by this form.</p>
              </div>
              <SnapshotIntakeForm />
            </div>
          </details>
        </div>
      </section>

      <section className="ed-section ed-engagements" id="pricing">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">04 / THE ENGAGEMENTS</p>
            <span className="ed-micro">
              FIXED SCOPE. A SHARED DEFINITION OF SUCCESS.
            </span>
          </div>
          <div className="ed-engagements-heading">
            <h2>
              Start small.
              <br />
              <em>Build on the evidence.</em>
            </h2>
            <p>
              Work directly with the founder. Agree the question, the scope and
              the price before the work begins.
            </p>
          </div>
          <div className="ed-price-grid">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={`ed-price-card ${offer.featured ? "is-featured" : ""}`}
              >
                <div className="ed-price-top">
                  <span className="ed-micro">{offer.label}</span>
                  {offer.featured && (
                    <span className="ed-price-badge">PROVE THE WORKFLOW</span>
                  )}
                </div>
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <div className="ed-price-value">{offer.price}</div>
                <span className="ed-price-timing">{offer.timing}</span>
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
            Pilot founding-client pricing is offered in exchange for feedback
            and permission for a measured case study. Final price depends on
            sources, accounts and integrations.
          </p>
          <div className="ed-audit-row">
            <div>
              <span className="ed-micro">ANOTHER WAY TO START</span>
              <p>
                Signal Stack Audit <span>· $1,500 · 3 business days</span>
              </p>
            </div>
            <Link href="/contact" className="ed-inline-link">
              Discuss an audit <ArrowUpRight size={17} />
            </Link>
          </div>
          <details className="ed-follow-on">
            <summary>Follow-on engagements & regional pricing</summary>
            <p>
              Renewal Risk & Expansion Intelligence ($30K–$75K) ·
              Deal-to-Delivery Assurance ($40K–$100K+) · Managed Improvement
              ($3K–$15K/mo).
            </p>
            <p>
              Based in India? We price in ₹ for Indian companies. Mention it
              when you <Link href="/contact">reach out</Link>.
            </p>
          </details>
        </div>
      </section>

      <section className="ed-section ed-reading">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">05 / THE READING ROOM</p>
            <Link href="/signals" className="ed-inline-link">
              Browse the Signal Library <ArrowUpRight size={16} />
            </Link>
          </div>
          <h2>
            A little more
            <br />
            <em>perspective.</em>
          </h2>
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
              <span className="ed-micro">FIELD NOTES / RENEWAL RISK</span>
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
            <p className="ed-eyebrow">A HUMAN AT THE OTHER END.</p>
            <h2>
              Good intelligence
              <br />
              comes with
              <br />
              <em>accountability.</em>
            </h2>
            <p>
              Work directly with Sahil, the founder of NexaWorks. A clear scope,
              evidence you can question, and a person who owns the work.
            </p>
            <Link href="/about" className="ed-inline-link">
              Meet the founder <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="ed-brief-form" id="sample-brief">
            <span className="ed-micro">TAKE A CLOSER LOOK</span>
            <FileText size={28} strokeWidth={1} />
            <h3>
              Let the work
              <br />
              <em>speak for itself.</em>
            </h3>
            <p>
              Get an illustrative meeting brief in your inbox. See how sources,
              signals and next steps come together.
            </p>
            <SampleBriefForm />
          </div>
        </div>
      </section>
    </EditorialExperience>
  );
}
