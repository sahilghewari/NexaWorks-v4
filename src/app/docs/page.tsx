import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './docs.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Context Reconstruction Documentation | NexaWorks',
  description: 'Learn how NexaWorks uses Deterministic RAG, GraphRAG, and stateful agents to reconstruct context.',
  keywords: ['NexaWorks Documentation', 'Deterministic RAG Docs', 'Agentic Workflows Docs', 'Developer Hub', 'AI System Integration'],
  alternates: { canonical: 'https://nexaworks.tech/docs' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Context Reconstruction Documentation | NexaWorks',
    description: 'Learn how NexaWorks uses Deterministic RAG, GraphRAG, and stateful agents to reconstruct context.',
    url: 'https://nexaworks.tech/docs',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Documentation' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Context Reconstruction Documentation | NexaWorks',
    description: 'Learn how NexaWorks uses Deterministic RAG, GraphRAG, and stateful agents to reconstruct context.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function DocumentationLandingPage() {
  const docCategories = [
    {
      title: "Methodology",
      description: "Explain Deterministic Retrieval, GraphRAG, and Pydantic schemas.",
      links: [
        { label: "Deterministic Retrieval", url: "/docs/methodology" },
        { label: "GraphRAG Overview", url: "/docs/methodology" },
        { label: "Pydantic Schemas", url: "/docs/methodology" }
      ]
    },
    {
      title: "Integrations",
      description: "Setting up Model Context Protocol (MCP) and custom OAuth.",
      links: [
        { label: "MCP Setup Guide", url: "/docs/mcp-integrations" },
        { label: "Custom OAuth", url: "/docs/mcp-integrations" }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Data residency, SOC2, EU AI Act, and DPDP Act compliance.",
      links: [
        { label: "SOC2 Report", url: "/security" },
        { label: "EU AI Act", url: "/security" },
        { label: "DPDP Act", url: "/security" }
      ]
    },
    {
      title: "Architecture",
      description: "How stateful LangGraph agents orchestrate context assembly.",
      links: [
        { label: "Stateful Agents", url: "/docs/swarm-api" },
        { label: "Context Assembly", url: "/docs/methodology" }
      ]
    }
  ];

  return (
    <main className="docs-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Documentation', href: '/docs' }]} />
      {/* Left Sidebar */}
      <aside className="docs-sidebar">
        <h3 className="docs-sidebar-title">Documentation</h3>
        
        <nav aria-label="Documentation">
          <div className="docs-nav-group">
            <div className="docs-nav-group-title">Getting Started</div>
            <ul className="docs-nav-list">
              <li><Link href="/docs" className="docs-nav-link active">Introduction</Link></li>
              <li><Link href="/docs/methodology" className="docs-nav-link">Methodology Guide</Link></li>
              <li><Link href="/docs/mcp-integrations" className="docs-nav-link">MCP Integrations</Link></li>
            </ul>
          </div>

          <div className="docs-nav-group">
            <div className="docs-nav-group-title">Architecture & APIs</div>
            <ul className="docs-nav-list">
              <li><Link href="/docs/swarm-api" className="docs-nav-link">Swarm API</Link></li>
              <li><Link href="/security" className="docs-nav-link">Security & Trust</Link></li>
              <li><Link href="/integrations" className="docs-nav-link">Integrations Stack</Link></li>
            </ul>
          </div>
          
          <div className="docs-nav-group">
            <div className="docs-nav-group-title">Interactive Tools</div>
            <ul className="docs-nav-list">
              <li><Link href="/tools/mcp-architecture-generator" className="docs-nav-link">MCP Generator</Link></li>
              <li><Link href="/tools/eu-ai-act-assessor" className="docs-nav-link">EU AI Act Assessor</Link></li>
              <li><Link href="/tools/roi-calculator" className="docs-nav-link">ROI Calculator</Link></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="docs-main-content">
        <section className="docs-hero">
          <ScrollReveal delay={0.1}>
            <h1 className="docs-headline">Developer Hub</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="docs-copilot-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Using an AI Copilot? Point Cursor, Copilot, or ChatGPT</span><br/>
                <span className="comment"># directly to our LLM context file for instant ingestion:</span><br/><br/>
                <span className="command">$ curl https://nexaworks.tech/llms-full.txt &gt; nexa-context.txt</span><br/><br/>
                <span className="highlight">✓ 24,051 lines of API surface ingested successfully.</span><br/>
                <span className="command">Ready for deterministic code generation.</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="docs-content-section">
          <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Documentation Categories</h2>
          <div className="docs-bento-grid">
            {docCategories.map((cat, idx) => (
              <ScrollReveal key={idx} delay={0.1} className="h-full">
                <article className="docs-glass-card">
                  <h3 className="docs-card-title">{cat.title}</h3>
                  <p className="docs-card-desc">{cat.description}</p>
                  <ul className="docs-link-list">
                    {cat.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={link.url} className="docs-link">
                          {link.label} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
