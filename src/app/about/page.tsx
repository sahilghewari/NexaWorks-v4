import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import "./about.css";

export const metadata: Metadata = {
  title: "About NexaWorks — The Context Reconstruction Company",
  description: "We believe every knowledge worker should begin important work with complete context. NexaWorks is building the infrastructure to make that possible.",
};

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1 className="about-headline">We believe context should never be lost.</h1>
        <p className="about-subhead">
          Every knowledge worker rebuilds context before important work — pulling up old emails, searching Slack, reviewing CRM notes, re-reading past meeting summaries. NexaWorks exists to end that.
        </p>
      </section>

      <section className="about-mission-section">
        <div className="about-mission-container">
          <ScrollReveal className="about-staggered-row">
            <div className="about-mission-content">
              <h2>Our mission</h2>
              <p>
                Every knowledge worker should begin important work with complete context — not spend hours rebuilding it.
              </p>
              <p>
                We founded NexaWorks because we watched brilliant teams waste their most productive hours on the most unproductive task imaginable: manually gathering information that already existed somewhere in their systems. The problem is invisible, unmeasured, and costs enterprises millions annually.
              </p>
              <p>
                We are building the infrastructure to solve it.
              </p>
            </div>
            <div className="about-mission-image">
              <Image 
                src="/about-mission-light.jpg" 
                alt="Abstract representation of context reconstruction" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-philosophy-section">
        <div className="about-philosophy-container">
          <div className="about-philosophy-header">
            <h2>How we build</h2>
          </div>
          <div className="about-philosophy-grid">
            <ScrollReveal delay={0.1} className="philosophy-glass-card">
              <h3>Production-First</h3>
              <p>
                We don't build demos. Every system is designed from day one for 24/7 autonomous operation with full observability, structured logging, and robust error recovery.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="philosophy-glass-card">
              <h3>Security-Native</h3>
              <p>
                OWASP Top 10 for LLM Applications compliance built in. Pydantic validation, PII redaction middleware, and Human-in-the-Loop gateways are architectural defaults, not afterthoughts.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="philosophy-glass-card">
              <h3>Outcome-Priced</h3>
              <p>
                We price on operational outcomes, not headcount or hours. Our revenue aligns directly with the business value and efficiency we create for your enterprise.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="about-approach-section">
        <div className="about-philosophy-header">
          <h2>The technology behind Context Reconstruction</h2>
        </div>
        <div className="about-bento-grid">
          
          <ScrollReveal delay={0.1} className="bento-card bento-retrieval">
            <div className="bento-visual-orb"></div>
            <h3>Deterministic Retrieval</h3>
            <p>Hybrid vector + graph retrieval with Pydantic validation — ensuring the right context is always accurate and hallucinations are mathematically minimized.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="bento-card bento-mcp">
            <div className="bento-visual-grid"></div>
            <h3>Model Context Protocol</h3>
            <p>Secure, standardized connections to your existing tools without exposing credentials.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="bento-card bento-infra">
            <Image 
              src="/about-philosophy.jpg" 
              alt="Enterprise Server Infrastructure"
              fill
              style={{ objectFit: 'cover', zIndex: 0, opacity: 0.6 }}
            />
            <h3 style={{ zIndex: 2 }}>Enterprise Infrastructure</h3>
            <p style={{ zIndex: 2 }}>We deploy directly into your cloud (AWS/GCP/Azure) to ensure your data never leaves your perimeter.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="bento-card bento-agents">
            <div className="bento-visual-orb" style={{ background: 'radial-gradient(circle, rgba(200,100,255,0.15) 0%, transparent 70%)', top: 'auto', bottom: '-50px', left: '-50px' }}></div>
            <h3>Agentic Orchestration</h3>
            <p>LangGraph-powered stateful agents that navigate complex, multi-step context gathering autonomously, complete with memory and tool use.</p>
          </ScrollReveal>

        </div>
      </section>

      <ScrollReveal>
        <section className="about-location-section">
          <h2>Global Reach, Deep Expertise</h2>
          <p>
            Headquartered in Thane, Maharashtra, India. Engineering world-class Context Reconstruction infrastructure for enterprises across the US, UK, APAC, and domestic markets.
          </p>
        </section>
      </ScrollReveal>
    </main>
  );
}
