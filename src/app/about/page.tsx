import type { Metadata } from "next";
import GradientMesh from "@/components/GradientMesh";
import "./about.css";

export const metadata: Metadata = {
  title: "About NexaWorks — The Context Reconstruction Company",
  description: "We believe every knowledge worker should begin important work with complete context. NexaWorks is building the infrastructure to make that possible.",
};

export default function About() {
  return (
    <main>
      <GradientMesh>
        <section className="about-hero">
          <h1 className="display-xxl">We believe context should never be lost.</h1>
          <p className="body-lg">
            Every knowledge worker rebuilds context before important work — pulling up old emails, searching Slack, reviewing CRM notes, re-reading past meeting summaries. NexaWorks exists to end that.
          </p>
        </section>
      </GradientMesh>

      <section className="mission-section">
        <div className="mission-content">
          <h2 className="display-xl">Our mission</h2>
          <p className="body-lg">
            Every knowledge worker should begin important work with complete context — not spend hours rebuilding it.
          </p>
          <p className="body-lg">
            We founded NexaWorks because we watched brilliant teams waste their most productive hours on the most unproductive task imaginable: manually gathering information that already existed somewhere in their systems. The problem is invisible, unmeasured, and costs enterprises millions annually.
          </p>
          <p className="body-lg">
            We are building the infrastructure to solve it.
          </p>
        </div>
      </section>

      <section className="philosophy-section">
        <h2 className="display-xl">How we build</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card shadow-1">
            <h3 className="heading-md">Production-First</h3>
            <p className="body-md">
              We don't build demos. Every system is designed from day one for 24/7 autonomous operation with full observability, structured logging, and robust error recovery.
            </p>
          </div>
          <div className="philosophy-card shadow-1">
            <h3 className="heading-md">Security-Native</h3>
            <p className="body-md">
              OWASP Top 10 for LLM Applications compliance built in. Pydantic validation, PII redaction middleware, and Human-in-the-Loop gateways are architectural defaults, not afterthoughts.
            </p>
          </div>
          <div className="philosophy-card shadow-1">
            <h3 className="heading-md">Outcome-Priced</h3>
            <p className="body-md">
              We price on operational outcomes, not headcount or hours. Our revenue aligns directly with the business value and efficiency we create for your enterprise.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-content">
          <h2 className="display-xl">The technology behind Context Reconstruction</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3 className="heading-md">Deterministic Retrieval</h3>
              <p className="body-sm">Hybrid vector + graph retrieval with Pydantic validation — ensuring the right context is always accurate.</p>
            </div>
            <div className="approach-item">
              <h3 className="heading-md">Model Context Protocol</h3>
              <p className="body-sm">Secure, standardized connections to your existing tools without exposing credentials or changing workflows.</p>
            </div>
            <div className="approach-item">
              <h3 className="heading-md">Agentic Orchestration</h3>
              <p className="body-sm">LangGraph-powered stateful agents that navigate complex, multi-step context gathering autonomously.</p>
            </div>
            <div className="approach-item">
              <h3 className="heading-md">Computer Use</h3>
              <p className="body-sm">Visual AI agents that navigate legacy systems where APIs don't exist — bridging old infrastructure to new intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2 className="display-lg">Global Reach, Deep Expertise</h2>
        <p className="body-lg">
          Headquartered in Thane, Maharashtra, India. Engineering world-class Context Reconstruction infrastructure for enterprises across the US, UK, APAC, and domestic markets.
        </p>
      </section>
    </main>
  );
}
