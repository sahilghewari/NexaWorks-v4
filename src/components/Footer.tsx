import Link from "next/link";
import Image from "next/image";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <Link href="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Image src="/logo.jpg" alt="NexaWorks" width={28} height={28} className="logo-image" style={{ borderRadius: '50%' }} />
              <span className="logo-text" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--color-ink)', letterSpacing: '-0.02em' }}>NexaWorks</span>
            </Link>
            <p className="caption mt-16" style={{ marginTop: '16px' }}>
              Production-grade AI automation for the enterprise.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link href="/services/ai-agents">AI Agents</Link></li>
              <li><Link href="/services/workflow-automation">Workflow Automation</Link></li>
              <li><Link href="/services/internal-tools">Internal Tools</Link></li>
              <li><Link href="/services/llm-integration">LLM Integration</Link></li>
              <li><Link href="/services/rag-systems">RAG Systems</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Industries</h3>
            <ul className="footer-links">
              <li><Link href="/industries/financial-services">Financial Services</Link></li>
              <li><Link href="/industries/healthcare">Healthcare</Link></li>
              <li><Link href="/industries/real-estate">Real Estate</Link></li>
              <li><Link href="/industries/legal">Legal</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/playbooks">Playbooks</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/open-source">Open Source</Link></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom">
          <p className="caption">© 2026 NexaWorks. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com/nexaworks" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com/company/nexaworks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://twitter.com/nexaworks" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
