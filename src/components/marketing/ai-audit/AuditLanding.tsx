"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import mountCheckout from "./checkout";

const engines = ["ChatGPT", "Perplexity", "Gemini", "Claude"];
const clients = [
  { name: "Hive", person: "Pavan", role: "Founder", photo: "pavan.jpeg", logo: "hive.svg", sample: "The report made it easier to understand how AI describes our business and where the information needs attention." },
  { name: "YourCase", person: "Om", role: "CMO", photo: "", logo: "yourcase.png", sample: "Seeing the answers alongside competitor mentions gave us a clearer view of the questions we need to address." },
  { name: "FieldGuard", person: "Rahul", role: "CEO", photo: "", logo: "fieldguard.png", sample: "We could see the gaps in our AI visibility without getting lost in technical jargon." },
  { name: "Korvex Network", person: "Pravin", role: "Founder", photo: "pravin.jpeg", logo: "korvex.png", sample: "The evidence behind each finding gave our team a practical starting point." },
  { name: "Sapvyra", person: "Samuel", role: "Founder & CEO", photo: "samuel.png", logo: "sapvyra.png", sample: "The audit helped us understand which parts of our online presence needed closer attention." },
];

export default function AuditLanding({ testMode, showTestimonialDrafts = false }: { testMode: boolean; showTestimonialDrafts?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [engine, setEngine] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    function update() {
      clearInterval(timer);
      if (!paused && !preference.matches)
        timer = setInterval(() => setEngine((value) => (value + 1) % engines.length), 2200);
    }
    update();
    preference.addEventListener("change", update);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", update);
    };
  }, [paused]);
  useEffect(() => {
    if (root.current) return mountCheckout(root.current);
  }, []);
  return (
    <div className="ai-audit" ref={root}>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="wrap nav">
          <a className="brand" href="/" aria-label="NexaWorks home">
            <span className="mark">
              <img src="/logo.png" alt="" width={26} height={26} />
            </span>
            nexaworks
          </a>
          <nav aria-label="Main navigation">
            <a href="#audit">The audit</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">How it works</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className="button small" href="#pricing">
            Explore audits <span>↗</span>
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
            <h1 aria-label="See what ChatGPT, Perplexity, Gemini and Claude say about your business.">
              See what
              <span className="rotating-engine" aria-hidden="true">
                <span className="engine-name" key={engine}><img src={`/ai-audit/assets/${engines[engine].toLowerCase()}.svg`} alt="" width={48} height={48} />{engines[engine]}</span>
              </span>
              says about your business.
            </h1>
            <p className="intro">
              An evidence-backed audit, delivered in 3–5 business days.
            </p>
            <div className="actions">
              <a className="button" href="#pricing">
                View audit plans <span>↗</span>
              </a>
              <a className="text-link" href="#report">
                See what’s inside <span>↓</span>
              </a>
            </div>
            <p className="micro">
              <span>✓ One-time payment</span>
              <span>✓ Reports in 3–5 business days</span>
            </p>
          </div>
        </section>
        <section className="wrap audit-preview" aria-label="Inside your AI visibility audit">
          <div className="report-scene" id="report">
            <div className="report">
              <div className="report-top">
                <span className="report-logo">
                  <span className="tiny-mark">n</span> AI visibility audit
                </span>
              </div>
              <div className="report-body">
                <div className="score-row">
                  <div>
                    <h2>
                      Your visibility,
                      <br />
                      made clear.
                    </h2>
                    <p>One view. Four AI engines.</p>
                  </div>
                  <div className="score">
                    <strong>
                      42<span>/100</span>
                    </strong>
                    <small>Illustrative score</small>
                  </div>
                </div>
                <div className="engine">
                  <span>
                    <img
                      className="engine-logo"
                      src="/ai-audit/assets/chatgpt.svg"
                      alt=""
                      width="22"
                      height="22"
                    />{" "}
                    ChatGPT
                  </span>
                  <div className="track">
                    <i style={{ width: "60%" }}></i>
                  </div>
                  <b>60%</b>
                </div>
                <div className="engine">
                  <span>
                    <img
                      className="engine-logo"
                      src="/ai-audit/assets/perplexity.svg"
                      alt=""
                      width="22"
                      height="22"
                    />{" "}
                    Perplexity
                  </span>
                  <div className="track">
                    <i style={{ width: "45%" }}></i>
                  </div>
                  <b>45%</b>
                </div>
                <div className="engine">
                  <span>
                    <img
                      className="engine-logo"
                      src="/ai-audit/assets/gemini.svg"
                      alt=""
                      width="22"
                      height="22"
                    />{" "}
                    Gemini
                  </span>
                  <div className="track">
                    <i style={{ width: "35%" }}></i>
                  </div>
                  <b>35%</b>
                </div>
                <div className="engine">
                  <span>
                    <img
                      className="engine-logo"
                      src="/ai-audit/assets/claude.svg"
                      alt=""
                      width="22"
                      height="22"
                    />{" "}
                    Claude
                  </span>
                  <div className="track">
                    <i style={{ width: "28%" }}></i>
                  </div>
                  <b>28%</b>
                </div>
                <div className="insight">
                  <span className="insight-icon">↗</span>
                  <div>
                    <strong>Turn observations into next steps.</strong>
                    <p>
                      See who appears instead of you, and the gaps behind your
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="sample-note">
              Illustrative report · Example data
            </p>
          </div>
            <div className="client-proof" aria-label="Companies we have audited">
              <p>AI visibility audits completed for</p>
              <div className="client-logos">
                {clients.map((client) => (
                  <div className={`client-logo ${client.name === "FieldGuard" ? "client-wordmark" : ""}`} key={client.name}>
                    <img src={`/ai-audit/clients/${client.logo}`} alt={client.name === "FieldGuard" ? "FieldGuard" : ""} width={56} height={56} />
                    {client.name !== "FieldGuard" && <span>{client.name}</span>}
                  </div>
                ))}
              </div>
            </div>
        </section>
        {showTestimonialDrafts && (
          <section className="section testimonial-section" id="testimonials" aria-labelledby="testimonial-heading">
            <div className="wrap section-heading">
              <div>
                <p className="eyebrow">CLIENT PERSPECTIVES</p>
                <h2 id="testimonial-heading">Clarity that moves teams forward.</h2>
              </div>
            </div>
            <div className="testimonial-carousel" tabIndex={0} role="region" aria-label="Client perspectives. Hover or focus to stop scrolling.">
              <div className="testimonial-track">
                {[0, 1].map((group) => (
                  <div className="testimonial-group" key={group} aria-hidden={group === 1 ? true : undefined}>
                    {clients.map((client) => (
                      <article className="testimonial-card" key={client.name}>
                        <span className="testimonial-label">Sample quote</span>
                        <p className="testimonial-copy">“{client.sample}”</p>
                        <div className="testimonial-person">
                          {client.photo ? (
                            <img className={`testimonial-avatar portrait-${client.person.toLowerCase()}`} src={`/ai-audit/clients/${client.photo}`} alt={client.person} width={48} height={48} />
                          ) : (
                            <span className="testimonial-avatar" aria-label={`${client.person}: photo pending`}>{client.person[0]}</span>
                          )}
                          <div><strong>{client.person}</strong><span>{client.role}, {client.name}</span></div>
                          <img className="testimonial-company" src={`/ai-audit/clients/${client.logo}`} alt="" width={36} height={36} />
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="platform-strip">
          <div className="wrap platforms">
            <p>
              One audit.
              <br />
              <strong>Four perspectives.</strong>
            </p>
            <div>
              <img
                src="/ai-audit/assets/chatgpt.svg"
                alt=""
                width="29"
                height="29"
              />{" "}
              ChatGPT
            </div>
            <div>
              <img
                src="/ai-audit/assets/perplexity.svg"
                alt=""
                width="29"
                height="29"
              />{" "}
              Perplexity
            </div>
            <div>
              <img
                src="/ai-audit/assets/gemini.svg"
                alt=""
                width="29"
                height="29"
              />{" "}
              Gemini
            </div>
            <div>
              <img
                src="/ai-audit/assets/claude.svg"
                alt=""
                width="29"
                height="29"
              />{" "}
              Claude
            </div>
          </div>
          <p className="platform-disclaimer">
            Independent audits of these platforms. No affiliation or
            endorsement.
          </p>
        </section>
        <section className="wrap section" id="audit">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EVIDENCE BEFORE ACTION</p>
              <h2>
                Less guessing.
                <br />
                More evidence.
              </h2>
            </div>
            <p>
              Both audits show how AI presents your brand, where competitors
              appear, and three concrete gaps backed by evidence.
            </p>
          </div>
          <div className="features">
            <article>
              <span className="feature-icon">◎</span>
              <span className="number">01</span>
              <h3>Know where you stand</h3>
              <p>
                Your visibility score, with a breakdown of where your company
                appears across all four engines.
              </p>
            </article>
            <article>
              <span className="feature-icon">⇄</span>
              <span className="number">02</span>
              <h3>See who gets the mention</h3>
              <p>
                Find out which competitors show up when buyers ask the questions
                that matter in your category.
              </p>
            </article>
            <article>
              <span className="feature-icon">↗</span>
              <span className="number">03</span>
              <h3>Leave with a clear next step</h3>
              <p>
                Three specific, evidenced gaps you can take straight to your
                marketing team.
              </p>
            </article>
          </div>
          <div className="evidence-line">
            <span>✓</span>
            <p>
              <strong>No black box.</strong> Dated, per-engine observations let
              you check the findings for yourself.
            </p>
          </div>
        </section>
        <section className="geo-section">
          <div className="wrap geo-grid">
            <div>
              <p className="eyebrow">A NEW PLACE TO BE DISCOVERED</p>
              <h2>
                Being searchable is one thing.
                <br />
                <em>Being recommended is another.</em>
              </h2>
            </div>
            <div>
              <p>
                People use AI to discover options, compare providers, and build
                a shortlist. Our AI visibility reports show how these engines
                describe your business, who they recommend instead, and the
                evidence behind each finding.
              </p>
              <p>
                Choose a visibility diagnosis or a detailed report with a full
                prioritized fix list. Get clear findings and recommendations
                to share with your team.
              </p>
              <a className="text-link" href="/contact">
                Ask about your report <span>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className="wrap section pricing-section" id="pricing">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ONE-TIME AUDITS. CLEAR DELIVERABLES.</p>
              <h2>
                Know the problem.
                <br />
                Choose how deep to go.
              </h2>
            </div>
            <p>
              The $49 audit gives you the diagnosis.
              <br />
              The $99 audit adds the plan to act on it.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <p className="eyebrow">THE DIAGNOSIS</p>
              <h3>AI Visibility Audit</h3>
              <p className="plan-intro">
                Understand where you stand.
              </p>
              <div className="price">
                $49 <span>/ one time</span>
              </div>
              <p className="local-price">Checkout charge: ₹4,999 INR</p>
              <button className="button purchase" data-plan="audit">
                Get the $49 audit · ₹4,999 <span>↗</span>
              </button>
              <p className="delivery">Report in about 3 business days</p>
              <ul>
                <li>
                  <strong>50 buyer prompts</strong> across 4 engines — about 200
                  answers
                </li>
                <li>
                  <strong>AI Visibility Score (0–100)</strong>, weighted by
                  mention position
                </li>
                <li>
                  <strong>Competitor leaderboard</strong> with how often each
                  appears versus you
                </li>
                <li>
                  <strong>What AI says about you</strong>, with wrong or
                  outdated facts flagged
                </li>
                <li>
                  <strong>3 concrete gaps</strong>, each backed by evidence
                </li>
                <li>
                  <strong>PDF or web report</strong> you can share with your
                  team
                </li>
              </ul>
              <p className="excluded">
                Does not include a fix list, technical audit, or call.
              </p>
            </article>
            <article className="price-card detailed">
              <div className="plan-tag">DIAGNOSIS + ACTION PLAN</div>
              <p className="eyebrow">THE COMPLETE PICTURE</p>
              <h3>Detailed AI Visibility Audit</h3>
              <p className="plan-intro">
                Know what to fix, in what order.
              </p>
              <div className="price">
                $99 <span>/ one time</span>
              </div>
              <p className="local-price">Checkout charge: ₹9,999 INR</p>
              <button className="button purchase" data-plan="detailed">
                Get the $99 audit · ₹9,999 <span>↗</span>
              </button>
              <p className="delivery">
                Report + fix list in about 5 business days
              </p>
              <ul>
                <li>
                  <strong>Everything in the $49 audit</strong>, with a larger
                  test
                </li>
                <li>
                  <strong>150 buyer prompts</strong> across 4 engines — about
                  600 answers total
                </li>
                <li>
                  <strong>Competitor deep-dive</strong> into 3–5 competitors and
                  why AI recommends them
                </li>
                <li>
                  <strong>Citation source map</strong> of sites and pages
                  shaping your category
                </li>
                <li>
                  <strong>Technical AI-readiness check</strong>: crawler access,
                  schema, llms.txt, and pages without JavaScript
                </li>
                <li>
                  <strong>Full prioritized fix list</strong>: quick wins, 30-day
                  work, and longer-term work ranked by impact × effort
                </li>
                <li>
                  <strong>30-minute walkthrough call</strong> to review findings
                  and the plan
                </li>
              </ul>
              <p className="excluded">
                Recommendations included. Implementation is separate.
              </p>
            </article>
          </div>
          <p className="pricing-note">
            Both audits cover ChatGPT, Perplexity, Gemini and Claude. AI answers
            vary by prompt, engine and date. No one can guarantee placement.
          </p>
        </section>
        <section className="wrap section" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM CHECKOUT TO CLARITY</p>
              <h2>
                Your audit,
                <br />
                step by step.
              </h2>
            </div>
            <p>
              No logins or access to your systems.
              <br />
              Just the business context we need to audit your brand.
            </p>
          </div>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>Choose your audit</h3>
              <p>
                Pick the diagnosis or the detailed action plan, share your
                contact and company details, and pay securely through Razorpay.
              </p>
              <small>ONE-TIME PAYMENT</small>
            </article>
            <article>
              <span>02</span>
              <h3>We test the AI answers</h3>
              <p>
                Buyer-style prompts run across four engines, with dated
                observations, competitor findings, and evidence for each gap.
              </p>
              <small>50 OR 150 BUYER PROMPTS</small>
            </article>
            <article>
              <span>03</span>
              <h3>Get your report</h3>
              <p>
                Your report arrives in about 3 business days for the standard
                audit, or 5 for the detailed audit. Detailed audits also include
                a walkthrough call.
              </p>
              <small>DIAGNOSIS — OR DIAGNOSIS + PLAN</small>
            </article>
          </div>
        </section>
        <section className="wrap faq-section" id="faq">
          <div>
            <p className="eyebrow">GOOD QUESTIONS</p>
            <h2>
              A little more
              <br />
              before you start.
            </h2>
            <a className="text-link" href="mailto:hello@nexaworks.tech">
              Ask us something else <span>↗</span>
            </a>
          </div>
          <div className="questions">
            <details open>
              <summary>
                What is the difference between the audits?<span>+</span>
              </summary>
              <p>
                The $49 audit diagnoses your visibility across four engines and
                identifies three concrete gaps. The $99 audit expands the prompt
                test and adds competitor research, a citation map, technical
                checks, a full prioritized fix list, and a 30-minute
                walkthrough.
              </p>
            </details>
            <details>
              <summary>
                What do you need from me?<span>+</span>
              </summary>
              <p>
                Your name, work email, company, website, category, and top
                competitors. No account passwords, identification documents, or
                access to your systems.
              </p>
            </details>
            <details>
              <summary>
                How long does delivery take?<span>+</span>
              </summary>
              <p>
                About 3 business days for the AI Visibility Audit and about 5
                business days for the Detailed AI Visibility Audit, after
                payment and receipt of your business details.
              </p>
            </details>
            <details>
              <summary>
                Does an audit guarantee an AI recommendation?<span>+</span>
              </summary>
              <p>
                No. AI answers vary by prompt, engine, and date. No one can
                guarantee placement. Your audit documents what we observe and
                identifies evidenced gaps.
              </p>
            </details>
            <details>
              <summary>
                Will you implement the fixes?<span>+</span>
              </summary>
              <p>
                Implementation is not included in either audit. The detailed
                audit provides a prioritized plan. If you want hands-on help
                afterward, we can scope it as a separate engagement.
              </p>
            </details>
          </div>
        </section>
        <section className="final-cta wrap">
          <div className="eyebrow">
            <span className="dot"></span> YOUR FIRST STEP INTO AI VISIBILITY
          </div>
          <h2>
            Find out if you’re
            <br />
            part of the answer.
          </h2>
          <p>
            Your brand. Your competitors. Four AI engines.
            <br />A clear picture of where to go next.
          </p>
          <a className="button" href="#pricing">
            Choose your audit <span>↗</span>
          </a>
          <small>
            One-time audits from $49 · Diagnosis or a detailed action plan.
          </small>
        </section>
      </main>
      <footer className="audit-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-identity">
              <a className="brand" href="/" aria-label="NexaWorks home">
                <span className="mark"><img src="/logo.png" alt="" width={26} height={26} /></span>
                nexaworks
              </a>
              <p>Understand how AI sees your business.<br />Move forward with clear evidence.</p>
            </div>
            <div className="footer-contact">
              <span className="eyebrow">LET’S TALK</span>
              <a className="footer-email" href="mailto:hello@nexaworks.tech">hello@nexaworks.tech <span>↗</span></a>
              <a className="footer-phone" href="tel:+918356954152">+91 83569 54152</a>
              <div className="footer-socials" aria-label="Social profiles">
                <a href="https://www.linkedin.com/company/nexaworks" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 NexaWorks. All rights reserved.</span>
            <nav aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/refund-policy">Refund policy</a>
            </nav>
          </div>
        </div>
      </footer>
      <dialog id="checkout-dialog" aria-labelledby="checkout-title">
        <button
          className="dialog-close"
          type="button"
          aria-label="Close checkout"
        >
          ×
        </button>
        <div className="eyebrow">YOUR AI VISIBILITY AUDIT</div>
        <h2 id="checkout-title">Let’s meet your brand.</h2>
        <p id="checkout-plan" className="checkout-plan"></p>
        <div id="test-notice" className="test-notice" hidden={!testMode}>
          Test checkout — no real money is charged.
        </div>
        <form id="checkout-form">
          <div className="form-grid">
            <label>
              Your name
              <input name="name" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={150}
                required
              />
            </label>
            <label>
              Company
              <input
                name="company"
                autoComplete="organization"
                maxLength={150}
                required
              />
            </label>
            <label>
              Website
              <input
                name="website"
                type="url"
                placeholder="https://yourcompany.com"
                maxLength={256}
                required
              />
            </label>
          </div>
          <label>
            Business category
            <input
              name="category"
              placeholder="e.g. Customer success software for B2B teams"
              maxLength={256}
              required
            />
          </label>
          <label>
            Top competitors <span>(optional)</span>
            <textarea
              name="competitors"
              rows={2}
              maxLength={256}
              placeholder="Add a few names or websites"
            ></textarea>
          </label>
          <p className="checkout-privacy">
            Your details are shared with NexaWorks and Razorpay to process your
            payment and prepare your audit. We do not need passwords or identity
            documents.
          </p>
          <button className="button" type="submit" id="pay-button">
            Continue to secure payment <span>↗</span>
          </button>
        </form>
        <div id="checkout-status" role="status" aria-live="polite"></div>
        <button
          className="text-link"
          id="retry-verification"
          type="button"
          hidden
        >
          Check payment status again ↗
        </button>
      </dialog>
    </div>
  );
}
