import Link from "next/link";
import Image from "next/image";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <Link href="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Image src="/logo.webp" alt="NexaWorks" width={28} height={28} className="logo-image" style={{ borderRadius: '50%' }} />
              <span className="logo-text" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--color-ink)', letterSpacing: '-0.02em' }}>NexaWorks</span>
            </Link>
            <p className="caption mt-16" style={{ marginTop: '16px' }}>
              Production-grade Context Reconstruction for the enterprise.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Platform</h3>
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
            <h3 className="heading-sm footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><Link href="/solutions">Financial Services</Link></li>
              <li><Link href="/solutions">Healthcare</Link></li>
              <li><Link href="/solutions">Real Estate</Link></li>
              <li><Link href="/solutions">Legal</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <h3 className="heading-sm footer-heading">Resources</h3>
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
