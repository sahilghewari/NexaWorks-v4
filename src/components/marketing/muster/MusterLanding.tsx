import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FilmPlayer from "./FilmPlayer";

const INTEGRATIONS = [
  "HubSpot",
  "Salesforce",
  "Stripe",
  "Chargebee",
  "Freshdesk",
  "Zendesk",
  "Slack",
  "Gmail",
  "Outlook",
];

const STEPS = [
  {
    fig: "Fig 01 — It watches",
    title: "Every signal, one timeline",
    body: "CRM changes, call notes, support tickets and product usage, stitched into one timeline per account. The champion who left, the usage that dipped, the ticket that spiked — seen the day it happens.",
  },
  {
    fig: "Fig 02 — It reasons",
    title: "Scores with their reasons",
    body: "Every health score lists why, and every reason points to the record behind it. A score with no reason behind it cannot exist in Muster. Nothing is a black box.",
  },
  {
    fig: "Fig 03 — It drafts",
    title: "The work, already written",
    body: "Outreach, save plays, renewal plans and QBR prep, drafted from the evidence and waiting in one queue. Your CSMs start from a draft, not a blank page.",
  },
  {
    fig: "Fig 04 — You approve",
    title: "Nothing sends itself",
    body: "Nothing reaches a customer until a person approves it. Sensitive items can never be auto-approved — they wait for a human, every time.",
  },
];

const FAQS = [
  {
    q: "Does Muster send messages on its own?",
    a: "No. Everything customer-facing waits in an approvals queue until a person approves it, and sensitive items are blocked from auto-approval entirely. Your team stays in control of every word a customer sees.",
  },
  {
    q: "How long does it take to go live?",
    a: "Days, not quarters. Connect your CRM, billing and support tools and Muster starts watching. There is no implementation project, no dedicated admin to hire, and no implementation fee.",
  },
  {
    q: "Why should I trust its health scores?",
    a: "Because every score shows its working. Each reason cites the record behind it — a call note, a ticket, a usage drop — so a CSM can check the evidence in one click. If the evidence is not there, the flag does not fire.",
  },
  {
    q: "What does it connect to?",
    a: "HubSpot, Salesforce, Stripe, Chargebee, Freshdesk, Zendesk, Slack, Gmail and Outlook. If your stack is not ready, you can start from a simple CSV export and connect the tools later.",
  },
  {
    q: "Is my customer data used to train AI models?",
    a: "Never. Your data is used only to run your accounts. It is not used to train models, and it is never shared with other customers.",
  },
];

export default function MusterLanding() {
  return (
    <main className="muster-page">
      {/* ---------- HERO ---------- */}
      <section className="mu-hero">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-eyebrow">Muster AI · By NexaWorks</p>
            <h1 className="mu-h1">
              The <em>CSM</em>, not CSM software.
            </h1>
            <p className="mu-sub">
              Your CS software shows you everything — and your team still does
              all the work. Muster AI is an AI customer success manager: it
              watches every account, works out what needs doing, and drafts
              it. Your team just approves.
            </p>
            <div className="mu-cta-row">
              <Link className="mu-btn mu-btn-primary" href="/contact">
                Start a free pilot
              </Link>
              <a className="mu-btn mu-btn-ghost" href="#how">
                See how it works
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.15}>
            <div className="mu-film-frame" id="film">
              <div className="mu-film-bar" aria-hidden="true">
                <span className="mu-film-dots">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="mu-film-url">app.muster.ai</span>
                <span className="mu-film-live">The film · 65 sec</span>
              </div>
              <FilmPlayer />
            </div>
            <ul className="mu-microproof">
              <li>Free 2-month pilot</li>
              <li>Live in days</li>
              <li>No implementation fee</li>
              <li>Decision at day 45</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- INTEGRATIONS ---------- */}
      <section className="mu-strip">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-in">
            <p className="mu-strip-label">
              Connects to the tools you already run
            </p>
            <p className="mu-strip-names">
              {INTEGRATIONS.map((name, i) => (
                <span key={name}>
                  {name}
                  {i < INTEGRATIONS.length - 1 && (
                    <span className="mu-dot" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="mu-section" id="how">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-kicker">How it works</p>
            <h2 className="mu-h2">
              It does the work. <span className="mu-h2-quiet">You approve it.</span>
            </h2>
            <p className="mu-intro">
              Thirteen specialist agents run a simple loop on every account —
              the same loop a great CSM runs, except it never sleeps, never
              forgets, and shows its working.
            </p>
          </ScrollReveal>
          <div className="mu-steps">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.fig} animation="fade-up" delay={i * 0.08}>
                <article className="mu-step">
                  <p className="mu-fig">{step.fig}</p>
                  <h3 className="mu-step-title">{step.title}</h3>
                  <p className="mu-step-body">{step.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BENTO FEATURES ---------- */}
      <section className="mu-section mu-section-tight">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-kicker">Inside Muster</p>
            <h2 className="mu-h2">
              A CSM&rsquo;s whole job,{" "}
              <span className="mu-h2-quiet">handled in the open.</span>
            </h2>
            <p className="mu-intro">
              Not another dashboard to check. The surfaces below are where the
              work lands — drafted, evidenced, and waiting for a person.
            </p>
          </ScrollReveal>

          <div className="mu-bento">
            <ScrollReveal animation="fade-up" className="mu-tile-wrap mu-tile-hero">
              <article className="mu-tile">
                <img
                  src="/muster/still-approvals.jpg"
                  alt="Muster AI approvals queue with a drafted outreach email"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Approvals</p>
                  <h3>AI does the work. You approve it.</h3>
                  <p>
                    Drafted outreach, save plays and replies wait in one queue.
                    Read, edit if you like, approve — done. Nothing reaches a
                    customer without a person&rsquo;s yes.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.05} className="mu-tile-wrap">
              <article className="mu-tile">
                <img
                  src="/muster/still-health.jpg"
                  alt="A health score of 41 with its three reasons listed"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Health</p>
                  <h3>Every score shows its reasons</h3>
                  <p>
                    Usage down, champion gone, tickets spiking — each reason
                    carries the record it came from. No mystery numbers.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1} className="mu-tile-wrap">
              <article className="mu-tile">
                <img
                  src="/muster/still-ask.jpg"
                  alt="Ask AI answering with numbered citations"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Ask AI</p>
                  <h3>Ask anything. It cites its records.</h3>
                  <p>
                    &ldquo;Which renewals are at risk this quarter?&rdquo;
                    Answered from your data, with a citation for every claim.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" className="mu-tile-wrap">
              <article className="mu-tile">
                <img
                  src="/muster/still-renewals.jpg"
                  alt="Renewals list with confidence and a drafted save play"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Renewals</p>
                  <h3>Every renewal, seen early</h3>
                  <p>
                    The next 90 days ranked by confidence, not just date — with
                    a save play already drafted for the ones at risk.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.05} className="mu-tile-wrap">
              <article className="mu-tile">
                <img
                  src="/muster/still-revenue.jpg"
                  alt="Revenue view with expected billing and an expansion flag"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Revenue</p>
                  <h3>Expansion, spotted in time</h3>
                  <p>
                    Expected billing traced to the subscriptions behind it, and
                    expansion flagged while there is still time to act.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1} className="mu-tile-wrap mu-tile-wide">
              <article className="mu-tile mu-tile-horizontal">
                <img
                  src="/muster/still-longtail.jpg"
                  alt="A grid of long-tail accounts watched by the Digital CSM"
                />
                <div className="mu-tile-text">
                  <p className="mu-fig">Digital CSM</p>
                  <h3>Even the accounts nobody has time for</h3>
                  <p>
                    Your long tail gets a dedicated AI CSM of its own — watching
                    every account, catching the quiet ones before they churn,
                    and escalating to a human when it matters.
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="mu-stats">
        <div className="mu-wrap mu-stats-grid">
          <ScrollReveal animation="fade-up">
            <p className="mu-stat-num">13</p>
            <p className="mu-stat-cap">
              specialist AI agents working your accounts — watching, drafting,
              prepping
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.08}>
            <p className="mu-stat-num">100%</p>
            <p className="mu-stat-cap">
              of health scores show their reasons, traced to source records
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.16}>
            <p className="mu-stat-num">$0</p>
            <p className="mu-stat-cap">
              implementation fee, and no admin to hire before you can start
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- COMPARISON ---------- */}
      <section className="mu-section">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-kicker">The difference</p>
            <h2 className="mu-h2">
              Software shows. <span className="mu-h2-quiet">Muster does.</span>
            </h2>
            <p className="mu-intro">
              CS platforms hand your team more screens to work. Muster hands
              them finished work to approve.
            </p>
          </ScrollReveal>
          <div className="mu-compare">
            <ScrollReveal animation="fade-up">
              <article className="mu-compare-col mu-compare-old">
                <h3>Software for CSMs</h3>
                <ul>
                  <li>Dashboards your team still has to work</li>
                  <li>Health scores nobody can explain</li>
                  <li>Months of implementation, plus a dedicated admin</li>
                  <li>The long tail quietly ignored until it churns</li>
                </ul>
              </article>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <article className="mu-compare-col mu-compare-new">
                <h3>An AI CSM — Muster</h3>
                <ul>
                  <li>The work drafted and waiting for approval</li>
                  <li>Every reason shown, with the record behind it</li>
                  <li>Live in days, on the tools you already run</li>
                  <li>Every account watched — including the long tail</li>
                </ul>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- PILOT (deep violet band) ---------- */}
      <section className="mu-pilot">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-kicker mu-kicker-light">The pilot</p>
            <h2 className="mu-h2 mu-h2-light">
              Two months. Free.{" "}
              <span className="mu-h2-light-quiet">Decide with evidence.</span>
            </h2>
            <p className="mu-pilot-body">
              We connect Muster to your tools and let it work one part of your
              book. At day 45 we sit down with the evidence — the risks it
              caught, the work it drafted, the renewals it moved — and decide
              together. No silent extensions.
            </p>
            <div className="mu-cta-row">
              <Link className="mu-btn mu-btn-light" href="/contact">
                Start a free pilot
              </Link>
            </div>
            <ul className="mu-microproof mu-microproof-light">
              <li>No implementation fee</li>
              <li>No annual contract to start</li>
              <li>Your data never trains models</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mu-section">
        <div className="mu-wrap mu-faq-wrap">
          <ScrollReveal animation="fade-up">
            <p className="mu-kicker">Questions</p>
            <h2 className="mu-h2">Fair questions.</h2>
          </ScrollReveal>
          <div className="mu-faq">
            {FAQS.map((item) => (
              <ScrollReveal key={item.q} animation="fade-up">
                <article className="mu-faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="mu-final">
        <div className="mu-wrap">
          <ScrollReveal animation="fade-up">
            <h2 className="mu-h2">Your AI customer success manager.</h2>
            <p className="mu-final-sub">
              Live in days. No implementation fee. The work, done — with your
              approval on every word.
            </p>
            <div className="mu-cta-row mu-cta-center">
              <Link className="mu-btn mu-btn-primary" href="/contact">
                Start a free pilot
              </Link>
              <a className="mu-btn mu-btn-ghost" href="#film">
                Watch the film again
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
