import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/playbooks/eu-ai-act-compliance" },
  title: 'EU AI Act Compliance Checklist for Engineering Teams | NexaWorks',
  description: 'An actionable engineering checklist for deploying high-risk AI agents compliantly under the August 2026 EU AI Act enforcement mandate.',
};

export default function EUAIActCompliancePlaybook() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/playbooks" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Playbooks
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-ruby)', color: 'white', border: 'none' }}>AUGUST 2026 ENFORCEMENT</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>EU AI Act: The Engineer's Compliance Checklist</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Legal counsel can interpret the law, but engineering must implement the controls. This checklist translates the EU AI Act's regulatory requirements into physical architectural components for High-Risk Agentic deployments.
        </p>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '32px' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px', color: 'var(--color-ruby)' }}>1. Article 12: Tamper-Evident Logging</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '16px' }}>
            High-risk systems must automatically record events (logs) over the entire lifecycle. You cannot rely on standard `console.log`.
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '8px' }}>Implement <strong>WORM (Write Once, Read Many)</strong> storage for all LLM input/output payloads.</li>
            <li style={{ marginBottom: '8px' }}>Log the exact version hash of the foundational model used at inference time.</li>
            <li style={{ marginBottom: '8px' }}>Capture the Model Context Protocol (MCP) authentication token associated with the agent's action.</li>
          </ul>
        </div>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '32px' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>2. Article 14: Meaningful Human Oversight</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '16px' }}>
            Operators must be able to fully comprehend the system's output and intervene. A simple "Approve" button without context is legally insufficient.
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '8px' }}>Build a <strong>Human-in-the-Loop (HITL)</strong> gateway interface presenting the exact source chunks retrieved during a RAG operation.</li>
            <li style={{ marginBottom: '8px' }}>Implement a hard "Kill Switch" API endpoint (<code>POST /api/agent/{"{id}"}/halt</code>) that immediately terminates the execution loop.</li>
            <li style={{ marginBottom: '8px' }}>Force users to explicitly acknowledge AI-generated content (e.g., Watermarking UI) prior to external transmission.</li>
          </ul>
        </div>

        <div className="card-elevated" style={{ background: 'var(--color-canvas)', padding: '48px', border: '1px solid var(--color-hairline)' }}>
          <h2 className="heading-md" style={{ marginBottom: '16px' }}>Action Required: Annex IV Technical Documentation</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            You are legally required to maintain living technical documentation regarding the intended purpose, logic, and limitations of your AI system.
          </p>
          <Link href="/resources/system-card-template" className="btn-primary">
            Download SYSTEM_CARD.md Template
          </Link>
        </div>

      </div>
    </main>
  );
}
