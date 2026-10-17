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
import SnapshotIntakeForm from "@/components/marketing/SnapshotIntakeForm";
import EditorialExperience from "@/components/marketing/EditorialExperience";
import EditorialSnapshot from "@/components/marketing/EditorialSnapshot";
import LiquidGlassBackground from "@/components/marketing/LiquidGlassBackground";
import SignalBento from "@/components/marketing/SignalBento";
import "./editorial-home.css";
import "./signal-surfaces.css";

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
        <LiquidGlassBackground />
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
            <div className="ed-hero-note">
              <span>
                <Fingerprint size={15} /> Founder-led
              </span>
              <span>
                <ShieldCheck size={15} /> Human-reviewed
              </span>
              <span>
                <Layers3 size={15} /> Evidence-attached
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
        aria-label="Free Account Risk Snapshot"
      >
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
              <span>
                Evidence-backed priorities, with the signals behind each.
              </span>
            </div>
            <div>
              <strong>5 business days.</strong>
              <span>After data access, with a clear readout.</span>
            </div>
            <Link
              href="/account-risk-snapshot"
              className="ed-snapshot-intro-cta"
            >
              Get your free Snapshot <ArrowUpRight size={17} />
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
            <p className="ed-eyebrow">02 / THE ACCOUNT, IN PERSPECTIVE</p>
            <span className="ed-micro">ILLUSTRATIVE EXAMPLE</span>
          </div>
          <div className="ed-detail-heading">
            <h2 id="detail-title">
              The evidence together.
              <br />
              <em>The next step, clearer.</em>
            </h2>
            <p>
              Explore the account. Follow the signals back to their sources. See
              why the next conversation matters.
            </p>
          </div>
          <EditorialSnapshot detailed />
          <p className="ed-detail-disclaimer">
            An example of the intelligence we deliver. A founder-led service
            alongside your existing stack.
          </p>
        </div>
      </section>

      <section className="ed-section ed-approach">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <p className="ed-eyebrow">03 / HOW WE WORK</p>
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
            {[
              {
                icon: Database,
                name: "Connect",
                text: "Bring the context from your existing systems. Read-only access or exports.",
              },
              {
                icon: Network,
                name: "Extract",
                text: "Find the people and product signals. Attach the source evidence.",
              },
              {
                icon: ShieldCheck,
                name: "Review",
                text: "A human reviews the findings, the rationale and the commercial context.",
              },
              {
                icon: FileText,
                name: "Next step",
                text: "A clear priority list. A useful brief. A better-informed conversation.",
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
            <p className="ed-eyebrow">04 / A CLEARER PLACE TO BEGIN</p>
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
            <div
              className="ed-offer-facts"
              aria-label="Snapshot scope and readout"
            >
              <span>
                <strong>20</strong> accounts
              </span>
              <span>
                <strong>5</strong> business days*
              </span>
              <span>
                <strong>45</strong> minute readout
              </span>
            </div>
            <p className="ed-offer-timing">
              *Five business days after data access.
            </p>
            <Link
              href="/account-risk-snapshot"
              className="ed-button ed-button-primary"
            >
              Get your free Snapshot <ArrowUpRight size={17} />
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
            <p className="ed-eyebrow">05 / THE ENGAGEMENTS</p>
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
                  <div className="ed-price-stage">
                    <span aria-hidden="true">{offer.label.slice(0, 2)}</span>
                    <span className="ed-micro">
                      {offer.label.split(" / ")[1]}
                    </span>
                  </div>
                  {offer.featured && (
                    <span className="ed-price-badge">PROVE THE WORKFLOW</span>
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
            Pilot founding-client pricing is offered in exchange for feedback
            and permission for a measured case study. Final price depends on
            sources, accounts and integrations.
          </p>
          <div className="ed-audit-row">
            <div>
              <span className="ed-micro">AUDIT / ANOTHER WAY TO START</span>
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
            <p className="ed-eyebrow">A HUMAN AT THE OTHER END.</p>
            <h2>
              Good intelligence
              <br />
              comes with <em>accountability.</em>
            </h2>
            <p>
              Work directly with Sahil, the founder of NexaWorks. A clear scope,
              evidence you can question, and a person who owns the work.
            </p>
            <Link href="/about" className="ed-inline-link">
              Meet the founder <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="ed-founder-identity">
            <span className="ed-micro">THE PERSON BEHIND THE WORK</span>
            <div className="ed-founder-name">
              <span aria-hidden="true" className="ed-founder-initial">
                S
              </span>
              <div>
                <strong>Sahil</strong>
                <span>Founder, NexaWorks</span>
              </div>
            </div>
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
