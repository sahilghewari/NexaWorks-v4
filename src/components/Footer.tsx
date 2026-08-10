import Link from "next/link";
import Image from "next/image";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <Link href="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
              <Image src="/logo.webp" alt="NexaWorks" width={28} height={28} className="logo-image" />
              <span className="logo-text" style={{ fontSize: '20px', fontWeight: '500', color: '#ffffff', letterSpacing: '-0.02em' }}>NexaWorks</span>
            </Link>
            <p className="footer-tagline">
              Production-grade Context Reconstruction platform for enterprise intelligence & deterministic retrieval.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div className="footer-col">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              <li><Link href="/product">AI Agents</Link></li>
              <li><Link href="/product">Workflow Automation</Link></li>
              <li><Link href="/product">Internal Tools</Link></li>
              <li><Link href="/product">LLM Integration</Link></li>
              <li><Link href="/product">RAG Systems</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-col">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><Link href="/solutions">Financial Services</Link></li>
              <li><Link href="/solutions">Healthcare</Link></li>
              <li><Link href="/solutions">Real Estate</Link></li>
              <li><Link href="/solutions">Legal</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/playbooks">Playbooks</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/blog">Open Source</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/architecture">Architecture</Link></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* SEO Internal Linking Block */}
        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
          <h4 style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Popular Resources</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px' }}>
            <Link href="/benchmarks/llmops-observability-matrix" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>LLMOps Observability</Link>
            <Link href="/docs/methodology" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Context Methodology</Link>
            <Link href="/tools/rag-simulator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>RAG Simulator</Link>
            <Link href="/blog/death-of-legacy-ocr-agentic-pipelines" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Legacy OCR Alternatives</Link>
            <Link href="/blog/enterprise-rag-deterministic-routing" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Deterministic RAG</Link>
            <Link href="/architecture/browser-automation" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Browser Automation</Link>
            <Link href="/benchmarks/error-database" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>AI Error Database</Link>
            <Link href="/blog/browser-automation-agents-legacy-mainframes" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Mainframe Agents</Link>
            <Link href="/blog/understanding-model-context-protocol-mcp" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Understanding MCP</Link>
            <Link href="/playbooks/eu-ai-act-compliance" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>EU AI Act Compliance</Link>
            <Link href="/infrastructure-playbooks" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Infrastructure Playbooks</Link>
            <Link href="/tools/schema-generator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Schema Generator</Link>
            <Link href="/tools/eu-ai-act-assessor" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>AI Act Assessor</Link>
            <Link href="/blog/hidden-cost-of-context-switching" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Context Switching Costs</Link>
            <Link href="/docs/mcp-integrations" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>MCP Integrations</Link>
            <Link href="/resources/system-card-template" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>System Card Template</Link>
            <Link href="/docs/swarm-api" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Swarm API Docs</Link>
            <Link href="/tools/mcp-architecture-generator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Architecture Generator</Link>
            <Link href="/us-architecture/async-llm-refactoring" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Async LLM Refactoring</Link>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom">
          <p>© 2026 NexaWorks Technology. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com/nexaworks-technology" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/company/nexaworks-tech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://x.com/NexaWorksAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
