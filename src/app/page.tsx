import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Database,
  FileText,
  Fingerprint,
  GitBranch,
  Headphones,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import SampleBriefForm from "@/components/marketing/SampleBriefForm";
import IntelligencePreview from "@/components/marketing/IntelligencePreview";
import "./homepage.css";

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
    <div className="enterprise-home home-with-sticky-cta">
      <section className="eh-hero">
        <div className="eh-hero-grid" aria-hidden="true" />
        <div className="container-nw eh-hero-content">
          <div className="eh-hero-heading">
            <div className="eh-eyebrow">
              <span className="eh-status-dot" /> CUSTOMER INTELLIGENCE / B2B
              SAAS
            </div>
            <h1>
              Your next renewal
              <br className="hidden md:block" /> shouldn’t be
              <br className="hidden md:block" /> <span>a surprise.</span>
            </h1>
            <p>
              Your CRM has the facts. Your calls have the context. We connect
              the signals so your CS team knows which accounts need
              attention—and why.
            </p>
            <div className="eh-actions">
              <Link
                href="/account-risk-snapshot"
                className="eh-button eh-button-mint"
              >
                Get the free Snapshot <ArrowUpRight size={17} />
              </Link>
              <Link
                href="#intelligence-demo"
                className="eh-button eh-button-ghost"
              >
                Explore an example <ArrowRight size={17} />
              </Link>
            </div>
            <div className="eh-hero-assurance">
              <span>
                <Check size={13} /> Founder-led
              </span>
              <span>
                <Check size={13} /> Fixed scope
              </span>
              <span>
                <Check size={13} /> Your existing stack
              </span>
            </div>
          </div>
          <div className="eh-hero-preview">
            <div className="eh-preview-label">
              <span>FROM FRAGMENTED SIGNALS TO A CLEAR NEXT STEP</span>
              <span>01—03</span>
            </div>
            <IntelligencePreview />
            <p className="eh-preview-footnote">
              <Fingerprint size={14} /> A preview of the intelligence we
              deliver. Built around your systems.
            </p>
          </div>
        </div>
        <div className="container-nw eh-stack">
          <p>
            CONTEXT FROM THE TOOLS
            <br />
            YOU ALREADY OWN
          </p>
          <div>
            <span>Salesforce</span>
            <span>HubSpot</span>
            <span>Gong</span>
            <span>Zendesk</span>
            <span>Slack</span>
            <span>Product data</span>
          </div>
        </div>
      </section>

      <section className="eh-section eh-intelligence">
        <div className="container-nw">
          <div className="eh-section-heading">
            <div>
              <p className="eh-eyebrow">THE MISSING CONTEXT</p>
              <h2>
                One account.
                <br />
                The whole story.
              </h2>
            </div>
            <p>
              A green health score can hide a quiet champion, a frustrated team,
              or an unresolved issue. See the relationship between the signals,
              with evidence behind every recommendation.
            </p>
          </div>
          <div className="eh-evidence-grid">
            <article className="eh-story-card">
              <div className="eh-card-top">
                <span>
                  <GitBranch size={16} /> ACCOUNT TIMELINE
                </span>
                <span className="eh-mini-tag">ILLUSTRATIVE</span>
              </div>
              <div className="eh-timeline">
                <div>
                  <span className="eh-time-dot" />
                  <small>DAY −47 · CALLS</small>
                  <h3>The champion goes quiet.</h3>
                  <p>
                    Weekly participation stops. The account still looks healthy.
                  </p>
                </div>
                <div>
                  <span className="eh-time-dot" />
                  <small>DAY −21 · PRODUCT</small>
                  <h3>Adoption begins to fall.</h3>
                  <p>Two power users leave. Usage drops across the team.</p>
                </div>
                <div>
                  <span className="eh-time-dot eh-time-risk" />
                  <small>DAY −04 · SUPPORT</small>
                  <h3>A critical issue stays open.</h3>
                  <p>
                    Separate events become a commercial risk worth reviewing.
                  </p>
                </div>
              </div>
              <div className="eh-story-bottom">
                <TrendingDown size={17} />
                <span>Connect the pattern before the post-mortem.</span>
              </div>
            </article>
            <article className="eh-brief-card">
              <div className="eh-card-top">
                <span>
                  <FileText size={16} /> THE INTELLIGENCE BRIEF
                </span>
                <span className="eh-mini-tag">EXAMPLE OUTPUT</span>
              </div>
              <div className="eh-brief-header">
                <div className="eh-brief-avatar">M</div>
                <div>
                  <small>MERIDIAN / STRATEGIC ACCOUNT</small>
                  <h3>What your team needs to know.</h3>
                </div>
              </div>
              <div className="eh-brief-section">
                <span>01</span>
                <div>
                  <h4>What changed</h4>
                  <p>
                    Champion disengagement, declining usage, and an unresolved
                    P1 ticket.
                  </p>
                </div>
              </div>
              <div className="eh-brief-section">
                <span>02</span>
                <div>
                  <h4>Why it matters</h4>
                  <p>
                    The renewal is 60 days away. Engagement and value both need
                    validation.
                  </p>
                </div>
              </div>
              <div className="eh-evidence-chips">
                <span>
                  <MessageSquareText size={12} /> Call history
                </span>
                <span>
                  <Database size={12} /> Usage export
                </span>
                <span>
                  <Headphones size={12} /> Support ticket
                </span>
              </div>
              <div className="eh-brief-next">
                <CheckCheck size={20} />
                <div>
                  <small>HUMAN-REVIEWED NEXT STEP</small>
                  <p>
                    Arrange an executive alignment call. Confirm the renewal
                    owner and a plan for the open issue.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="eh-under-grid">
            <span>
              <ShieldCheck size={18} /> Evidence-backed recommendations
            </span>
            <span>
              <LockKeyhole size={18} /> Read-only access or exports
            </span>
            <span>
              <CheckCheck size={18} /> Your team reviews and acts
            </span>
          </div>
        </div>
      </section>

      <section id="method" className="eh-section eh-method">
        <div className="container-nw">
          <div className="eh-section-heading">
            <div>
              <p className="eh-eyebrow">THE SIGNAL LAYER</p>
              <h2>
                Your stack stays.
                <br />
                The blind spots go.
              </h2>
            </div>
            <div>
              <p>
                We work alongside your CS platform. A scoped, human-reviewed
                workflow brings the context together and sends it back where
                your team works.
              </p>
              <Link href="/customer-success-ai" className="eh-text-link">
                Inside the approach <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="eh-flow">
            <div className="eh-flow-sources">
              <span className="eh-flow-caption">01 / EXISTING SOURCES</span>
              {[
                {
                  icon: Database,
                  title: "CRM & product",
                  detail: "Accounts, renewals, usage",
                },
                {
                  icon: MessageSquareText,
                  title: "Calls & conversations",
                  detail: "Champions, sentiment, goals",
                },
                {
                  icon: Headphones,
                  title: "Support & tickets",
                  detail: "Friction, blockers, escalations",
                },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon size={19} />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.detail}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="eh-flow-connector" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="eh-flow-engine">
              <div className="eh-engine-mark">
                <Network size={38} strokeWidth={1} />
              </div>
              <span className="eh-flow-caption">02 / NEXAWORKS</span>
              <h3>Context, connected.</h3>
              <p>
                Extract signals.
                <br />
                Attach evidence.
                <br />
                Review with a human.
              </p>
              <div className="eh-engine-footer">
                <span className="eh-status-dot" /> INTELLIGENCE WORKFLOW
              </div>
            </div>
            <div className="eh-flow-arrow" aria-hidden="true">
              <ArrowRight size={22} />
            </div>
            <div className="eh-flow-output">
              <span className="eh-flow-caption">
                03 / WHERE YOUR TEAM WORKS
              </span>
              <div>
                <FileText size={23} />
                <h3>Ready for the next conversation.</h3>
                <p>
                  Pre-call briefs. Weekly account priorities. Renewal and
                  expansion signals.
                </p>
                <span className="eh-destination">
                  Slack <span>·</span> Email <span>·</span> Your workflow
                </span>
              </div>
            </div>
          </div>
          <div className="eh-delivery-steps">
            {[
              {
                num: "01",
                title: "Diagnose",
                time: "Days 1–2",
                text: "Map the workflow and missing context.",
              },
              {
                num: "02",
                title: "Connect",
                time: "Days 3–5",
                text: "Agree read-only access to 3–5 systems.",
              },
              {
                num: "03",
                title: "Extract",
                time: "Weeks 2–5",
                text: "Deliver briefs and account signals.",
              },
              {
                num: "04",
                title: "Review",
                time: "Week 6",
                text: "Assess results and define the next step.",
              },
            ].map((step) => (
              <div key={step.num}>
                <small>
                  {step.num} <span>{step.time}</span>
                </small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="eh-snapshot-section">
        <div className="container-nw eh-snapshot-layout">
          <div>
            <p className="eh-eyebrow">PROOF BEFORE PAYMENT</p>
            <h2>
              Start with the
              <br />
              accounts you
              <br />
              <span>can’t afford to miss.</span>
            </h2>
            <p>
              The free Account Risk Snapshot ranks your 20 riskiest accounts,
              shows the signals behind each one, and gives your team a clear
              next step.
            </p>
            <div className="eh-actions">
              <Link
                href="/account-risk-snapshot"
                className="eh-button eh-button-mint"
              >
                Request your free Snapshot <ArrowUpRight size={17} />
              </Link>
            </div>
            <p className="eh-snapshot-qualification">
              B2B SaaS · 100+ employees · At least two data sources
            </p>
          </div>
          <div className="eh-snapshot-deliverable">
            <div className="eh-card-top">
              <span>
                <Layers3 size={16} /> ACCOUNT RISK SNAPSHOT
              </span>
              <span className="eh-mini-tag">EXAMPLE</span>
            </div>
            <div className="eh-snapshot-numbers">
              <div>
                <strong>20</strong>
                <span>accounts, prioritized</span>
              </div>
              <div>
                <strong>5</strong>
                <span>business days</span>
              </div>
            </div>
            <div className="eh-ranked-accounts">
              {[
                {
                  rank: "01",
                  name: "Meridian",
                  reason: "Champion disengagement",
                  type: "risk",
                  score: "Review now",
                },
                {
                  rank: "02",
                  name: "Atlas",
                  reason: "Onboarding stalled",
                  type: "risk",
                  score: "Review now",
                },
                {
                  rank: "03",
                  name: "Solstice",
                  reason: "Sponsor change",
                  type: "watch",
                  score: "Investigate",
                },
              ].map((item) => (
                <div key={item.rank}>
                  <span>{item.rank}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.reason}</small>
                  </div>
                  <span className={`eh-rank-status ${item.type}`}>
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
            <div className="eh-snapshot-readout">
              <Check size={16} /> Includes a 45-minute readout with next
              actions.
            </div>
            <small className="eh-snapshot-disclosure">
              Illustrative accounts. No contract. Four Snapshots per month.
            </small>
          </div>
        </div>
      </section>

      <section id="pricing" className="eh-section eh-pricing">
        <div className="container-nw">
          <div className="eh-section-heading">
            <div>
              <p className="eh-eyebrow">A CLEAR PATH FORWARD</p>
              <h2>
                Start small.
                <br />
                Prove it. Then build.
              </h2>
            </div>
            <p>
              Fixed-scope engagements around a specific commercial question.
              Work directly with the founder, with scope and price agreed before
              the work starts.
            </p>
          </div>
          <div className="eh-price-grid">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={`eh-price-card ${offer.featured ? "is-featured" : ""}`}
              >
                <p className="eh-eyebrow">{offer.label}</p>
                <h3>{offer.name}</h3>
                <p className="eh-price-description">{offer.description}</p>
                <div className="eh-price">{offer.price}</div>
                <p className="eh-price-time">{offer.timing}</p>
                <ul>
                  {offer.items.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="eh-price-note">{offer.note}</p>
                <Link
                  href={offer.href}
                  className={`eh-button ${offer.featured ? "eh-button-dark" : "eh-button-outline"}`}
                >
                  {offer.cta}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="eh-pricing-fine">
            Pilot founding-client pricing is offered in exchange for feedback
            and permission for a measured case study. Final price depends on
            sources, accounts, and integrations.
          </p>
          <div className="eh-alternative">
            <div>
              <span className="eh-eyebrow">ANOTHER WAY TO START</span>
              <p>
                <strong>Signal Stack Audit</strong> · $1,500 · 3 business days
              </p>
              <small>
                A written report on the signals you capture, your blind spots,
                and the three highest-leverage fixes.
              </small>
            </div>
            <Link href="/contact" className="eh-text-link">
              Discuss an audit
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <details className="eh-follow-on">
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

      <section className="eh-section eh-resources">
        <div className="container-nw">
          <div className="eh-section-heading">
            <div>
              <p className="eh-eyebrow">EXPLORE THE THINKING</p>
              <h2>
                Make your next
                <br />
                CS decision clearer.
              </h2>
            </div>
            <Link href="/signals" className="eh-text-link">
              Browse the Signal Library <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="eh-resource-grid">
            <Link href="/guides/customer-health-score" className="eh-resource">
              <div className="eh-resource-art eh-score-art" aria-hidden="true">
                <div>
                  <span>HEALTH SCORE</span>
                  <strong>
                    82<span>/100</span>
                  </strong>
                  <small>Healthy?</small>
                </div>
                <div className="eh-art-flags">
                  <span>Champion quiet</span>
                  <span>Usage declining</span>
                  <span>Evidence missing</span>
                </div>
              </div>
              <small>GUIDE / HEALTH SCORES</small>
              <h3>When green accounts churn.</h3>
              <p>
                How to test whether your health score sees the risk in time.
              </p>
              <span className="eh-resource-arrow">
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <Link
              href="/tools/health-score-back-tester"
              className="eh-resource"
            >
              <div className="eh-resource-art eh-test-art" aria-hidden="true">
                <div className="eh-test-bars">
                  {[35, 58, 40, 74, 52, 90, 66, 100, 79].map((height, i) => (
                    <span key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <span className="eh-test-label">
                  YOUR SCORE × REAL OUTCOMES
                </span>
              </div>
              <small>FREE TOOL / BACK-TESTER</small>
              <h3>Put your score to the test.</h3>
              <p>
                Check catch rates and false alarms. Your data stays in your
                browser.
              </p>
              <span className="eh-resource-arrow">
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <Link href="/customer-success-ai" className="eh-resource">
              <div
                className="eh-resource-art eh-network-art"
                aria-hidden="true"
              >
                <div className="eh-network-nodes">
                  <Database />
                  <MessageSquareText />
                  <Headphones />
                </div>
                <span className="eh-network-line" />
                <div className="eh-network-core">
                  <Network size={30} />
                </div>
                <span className="eh-network-line" />
                <FileText size={30} />
              </div>
              <small>APPROACH / CUSTOMER SUCCESS AI</small>
              <h3>The context between the tools.</h3>
              <p>
                See how a signal layer works alongside your existing CS
                platform.
              </p>
              <span className="eh-resource-arrow">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="eh-section eh-sample-section" id="sample-brief">
        <div className="container-nw eh-sample-layout">
          <div>
            <p className="eh-eyebrow">TAKE A CLOSER LOOK</p>
            <h2>
              Good intelligence
              <br />
              speaks for itself.
            </h2>
            <p>
              Get an illustrative meeting brief in your inbox. See how sources,
              signals, and recommended actions come together.
            </p>
            <Link href="/about" className="eh-text-link">
              Meet the founder <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="eh-sample-form">
            <div className="eh-sample-icon">
              <FileText size={28} strokeWidth={1.4} />
            </div>
            <h3>See a sample meeting brief.</h3>
            <p>One example. A clearer picture of what your team receives.</p>
            <SampleBriefForm />
          </div>
        </div>
      </section>
      <div className="eh-mobile-cta">
        <Link
          href="/account-risk-snapshot"
          className="eh-button eh-button-dark"
        >
          Get the free Snapshot <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
