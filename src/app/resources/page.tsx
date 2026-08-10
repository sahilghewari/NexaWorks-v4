import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/resources" },
  title: 'Resources & PLG Tools | NexaWorks',
  description: 'Access our suite of interactive enterprise AI tools, including the EU AI Act Assessor, MCP Generator, and ROI Calculator.',
};

export default function ResourcesHubPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>Resources & Tools</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Interactive engineering tools, downloadable templates, and API documentation for enterprise AI deployment.
          </p>
        </div>

        <h2 className="heading-lg" style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px' }}>Interactive Tools</h2>
        <div className="grid-2" style={{ gap: '32px', marginBottom: '64px' }}>
          
          <Link href="/tools/eu-ai-act-assessor" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit' }}>
            <span className="micro-cap" style={{ color: 'var(--color-ruby)', display: 'block', marginBottom: '16px' }}>COMPLIANCE</span>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>EU AI Act Risk Assessor</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Interactive tool to determine your AI system's regulatory risk tier and generate a mitigation engineering checklist for August 2026.</p>
          </Link>

          <Link href="/tools/mcp-architecture-generator" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit' }}>
            <span className="micro-cap" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '16px' }}>INFRASTRUCTURE</span>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>MCP Architecture Generator</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Generate deployable JSON configurations to connect foundation models to enterprise systems using the Model Context Protocol.</p>
          </Link>

          <Link href="/tools/roi-calculator" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit' }}>
            <span className="micro-cap" style={{ color: '#10b981', display: 'block', marginBottom: '16px' }}>FINANCE</span>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>AP Automation ROI Calculator</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Calculate your exact financial exposure using verified 2026 industry benchmarks ($15.97 manual vs $2.36 agentic).</p>
          </Link>

          <Link href="/tools/schema-generator" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit' }}>
            <span className="micro-cap" style={{ color: '#d97706', display: 'block', marginBottom: '16px' }}>DEVELOPER</span>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>Pydantic Schema Generator</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Visually build complex JSON schemas and instantly export validated Pydantic models for structured LLM outputs.</p>
          </Link>

        </div>

        <h2 className="heading-lg" style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px' }}>Templates & Documentation</h2>
        <div className="grid-3" style={{ gap: '32px' }}>
          
          <Link href="/resources/system-card-template" className="card-elevated" style={{ display: 'block', background: 'var(--color-surface)', textDecoration: 'none', color: 'inherit' }}>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>SYSTEM_CARD.md</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Downloadable Annex IV technical documentation template.</p>
          </Link>

          <Link href="/docs/swarm-api" className="card-elevated" style={{ display: 'block', background: 'var(--color-surface)', textDecoration: 'none', color: 'inherit' }}>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>Swarm API Docs</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>API specifications for orchestrating multi-agent systems.</p>
          </Link>

          <Link href="/glossary" className="card-elevated" style={{ display: 'block', background: 'var(--color-surface)', textDecoration: 'none', color: 'inherit' }}>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>AI Glossary</h3>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Definitive technical definitions for modern AI terminology.</p>
          </Link>

        </div>

      </div>
    </main>
  );
}
