import React from 'react';
import Link from 'next/link';
import MCPGenerator from '@/components/Calculators/MCPGenerator';

export const metadata = {
  title: 'MCP Agent Architecture Generator | NexaWorks',
  description: 'Interactive Model Context Protocol (MCP) tool. Generate deployable JSON configurations for Anthropic and OpenAI agentic swarms.',
};

export default function MCPGeneratorPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/tools" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Tools
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-primary)', color: 'white', border: 'none' }}>AGENTIC INFRASTRUCTURE</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>MCP Architecture Generator</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)' }}>
          The Model Context Protocol (MCP) standardizes how AI agents connect to enterprise data. Use this tool to generate the configuration JSON required to initialize a secure MCP server connection between your foundation model (e.g., Claude 3.5) and your internal systems (Salesforce, SAP, Tally).
        </p>

        <MCPGenerator />

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
           <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>Require a custom MCP server for a proprietary internal database?</p>
           <button className="btn-primary">Book Architecture Review</button>
        </div>
      </div>
    </main>
  );
}
