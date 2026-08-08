import Link from "next/link";
import Image from "next/image";
import InteractiveHero from "@/components/InteractiveHero";
import FadingTextCarousel from "@/components/FadingTextCarousel";
import InteractiveResearchCarousel from "@/components/InteractiveResearchCarousel";
import GradientMesh from "@/components/GradientMesh";
import TrustSignals from "@/components/TrustSignals";
import "./page.css";

export const metadata = {
  title: 'NexaWorks — Context, Reconstructed',
  description: 'NexaWorks eliminates the hours your team spends gathering context before every meeting, deal, and decision. Complete context. Before you ask.',
};

export default function Home() {
  return (
    <main className="cinematic-page">
      <section className="cinematic-hero">
        <Image 
          src="/cinematic-hero.jpg"
          alt="Cinematic Boardroom Context"
          fill
          style={{ objectFit: 'cover', zIndex: 0, opacity: 0.5 }}
          priority
        />
        <div className="cinematic-overlay"></div>
        <div className="cinematic-content">
          <h1 className="cinematic-headline">
            Never start a<br />meeting blind.
          </h1>
          <p className="cinematic-subheadline">
            NexaWorks automatically gathers the information you need from all your apps, so you can focus on the work—not the search.
          </p>
          <div style={{ marginTop: '48px' }}>
            <Link href="/contact" className="cinematic-btn">Request a Demo</Link>
          </div>
        </div>
        
        <div className="cinematic-bottom-bar">
          <div className="container bottom-bar-inner">
             <span className="logo-text" style={{ opacity: 0.6, fontSize: '12px' }}>INTEGRATES WITH:</span>
             <span className="logo-text">SALESFORCE</span>
             <span className="logo-text">SLACK</span>
             <span className="logo-text">JIRA</span>
             <span className="logo-text">ZENDESK</span>
             <Link href="/integrations" className="customers-link">View All Integrations</Link>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-container">
          <h2 className="editorial-headline">
            NexaWorks is AI designed for<br/>complex professional workflows.
          </h2>
          <p className="editorial-subheadline">
            Advance your expertise on a secure platform that<br/>lets you focus on high-value work.
          </p>
          <div className="ui-mockup-container" style={{ padding: 0, height: 'auto', border: 'none' }}>
            <Image 
              src="/workflow-mockup.jpg"
              alt="NexaWorks Workflow UI"
              width={1000}
              height={562}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <FadingTextCarousel />

      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-image">
            <Image 
              src="/trust-visual.jpg" 
              alt="NexaWorks Secure Core" 
              width={800} 
              height={800} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-quote">"NexaWorks is engineered from the ground up for the world's most demanding enterprises. Security, absolute data privacy, and deterministic routing are not afterthoughts—they are our foundation."</p>
            <div className="testimonial-author">
              <strong>Enterprise-Grade Security</strong><br/>
              SOC2 COMPLIANT • END-TO-END ENCRYPTION
            </div>
            <div className="testimonial-logo">ZERO DATA RETENTION</div>
          </div>
        </div>
      </section>

      <InteractiveResearchCarousel />

      <section className="metrics-section">
        <div className="metrics-container">
          <div className="metrics-header">
            <div className="metrics-logos">
              <span>SALESFORCE</span> | <span>SLACK</span> | <span>ZENDESK</span> | <span>JIRA</span>
            </div>
            <h2 className="metrics-title">Helping teams stay focused<br/>and see measurable results</h2>
          </div>
          <div className="metrics-list">
            <div className="metric-row">
              <span className="metric-label">Average hours saved per month</span>
              <span className="metric-number">25+</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Professionals using NexaWorks</span>
              <span className="metric-number">200,000+</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Enterprise teams using NexaWorks</span>
              <span className="metric-number">2,400+</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Countries NexaWorks is used in</span>
              <span className="metric-number">70+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="security-badges-section">
        <div className="security-header-grid">
          <h2 className="security-title">Enterprise-grade<br/>security and controls</h2>
          <div className="security-desc">
            <p>NexaWorks meets the highest industry standards for security and compliance. We include all default controls that enterprise teams expect: SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.</p>
            <div style={{marginTop: '24px'}}>
               <Link href="/security" className="btn-outline-light-small">More About Security</Link>
            </div>
          </div>
        </div>
        <div className="security-grid">
          <div className="security-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h4>SOC2 Type II</h4>
            <Link href="/security">Details ↗</Link>
          </div>
          <div className="security-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h4>CCPA</h4>
            <Link href="/security">Details ↗</Link>
          </div>
          <div className="security-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4>ISO 27001</h4>
            <Link href="/security">Details ↗</Link>
          </div>
          <div className="security-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="11" r="3"></circle></svg>
            </div>
            <h4>GDPR</h4>
            <Link href="/security">Details ↗</Link>
          </div>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="footer-cta-container">
          <h2 className="footer-cta-title">Unlock Professional Class AI for Your Firm</h2>
          <Link href="/contact" className="btn-solid-white">Request a Demo</Link>
        </div>
      </section>
    </main>
  );
}
