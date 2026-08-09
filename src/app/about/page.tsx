import type { Metadata } from "next";
import Image from "next/image";
import "./about.css";

export const metadata: Metadata = {
  title: "About NexaWorks — The Context Reconstruction Company",
  description: "We believe every knowledge worker should begin important work with complete context. NexaWorks is building the infrastructure to make that possible.",
};

export default function About() {
  return (
    <main className="about-main">
      <section className="about-hero">
        <div className="about-hero-bg">
          <Image src="/about-hero.jpg" alt="Context Reconstruction" fill style={{ objectFit: 'cover', opacity: 0.4 }} priority />
          <div className="about-hero-overlay"></div>
        </div>
        <h1>We believe context should never be lost.</h1>
        <p>
          Every knowledge worker rebuilds context before important work — pulling up old emails, searching Slack, reviewing CRM notes, re-reading past meeting summaries. NexaWorks exists to end that.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our mission</h2>
          <p className="manifesto-text">
            Every knowledge worker should begin important work with complete context — not spend hours rebuilding it.
          </p>
          <p className="manifesto-text">
            We founded NexaWorks because we watched brilliant teams waste their most productive hours on the most unproductive task imaginable: manually gathering information that already existed somewhere in their systems. 
          </p>
          <p className="manifesto-text highlight">
            The problem is invisible, unmeasured, and costs enterprises millions annually. We are building the infrastructure to solve it.
          </p>
        </div>
      </section>

      <section className="philosophy-section">
        <h2>How we build</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Production-First</h3>
            <p>
              We don't build demos. Every system is designed from day one for 24/7 autonomous operation with full observability, structured logging, and robust error recovery.
            </p>
          </div>
          <div className="philosophy-card">
            <h3>Security-Native</h3>
            <p>
              OWASP Top 10 for LLM Applications compliance built in. Pydantic validation, PII redaction middleware, and Human-in-the-Loop gateways are architectural defaults, not afterthoughts.
            </p>
          </div>
          <div className="philosophy-card">
            <h3>Outcome-Priced</h3>
            <p>
              We price on operational outcomes, not headcount or hours. Our revenue aligns directly with the business value and efficiency we create for your enterprise.
            </p>
          </div>
        </div>
      </section>

      <section className="about-visual-break">
        <div className="visual-break-container">
          <Image src="/about-tech.jpg" alt="Context Pipeline" width={1200} height={675} className="about-visual-image" />
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-content">
          <h2>The technology behind Context Reconstruction</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Deterministic Retrieval</h3>
              <p>Hybrid vector + graph retrieval with Pydantic validation — ensuring the right context is always accurate, hallucination-free, and perfectly structured.</p>
            </div>
            <div className="approach-item">
              <h3>Model Context Protocol</h3>
              <p>Secure, standardized connections to your existing tools without exposing credentials or requiring massive workflow migrations.</p>
            </div>
            <div className="approach-item">
              <h3>Agentic Orchestration</h3>
              <p>LangGraph-powered stateful agents that navigate complex, multi-step context gathering autonomously behind the scenes.</p>
            </div>
            <div className="approach-item">
              <h3>Computer Use</h3>
              <p>Visual AI agents that navigate legacy systems where APIs don't exist — bridging old infrastructure to modern intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-visual-container">
          <Image src="/about-network.jpg" alt="Global Network" width={300} height={300} className="network-globe" />
        </div>
        <h2>Global Reach, Deep Expertise</h2>
        <p>
          Headquartered in Thane, Maharashtra, India. Engineering world-class Context Reconstruction infrastructure for enterprises across the US, UK, APAC, and domestic markets.
        </p>
      </section>
    </main>
  );
}
