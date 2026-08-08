import Link from "next/link";
import Image from "next/image";
import "./page.css";

export const metadata = {
  title: 'NexaWorks — Context, Reconstructed',
  description: 'NexaWorks eliminates the hours your team spends gathering context before every meeting, deal, and decision. Complete context. Before you ask.',
};

export default function Home() {
  return (
    <main className="harvey-page">
      {/* 1. HERO SECTION (Dark) */}
      <section className="harvey-hero">
        <Image 
          src="/cinematic-hero.jpg"
          alt="Cinematic Boardroom Context"
          fill
          style={{ objectFit: 'cover', zIndex: 0, opacity: 0.4 }}
          priority
        />
        <div className="harvey-hero-content">
          <h1 className="harvey-headline">
            Never start a<br />meeting blind.
          </h1>
          <p className="harvey-subheadline">
            NexaWorks automatically gathers the information you need from all your apps, so you can focus on the work—not the search.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link href="/contact" className="harvey-btn-white">Request a Demo</Link>
          </div>
        </div>
        
        <div className="harvey-hero-logos">
          <div className="harvey-logos-inner">
            <span className="harvey-logo-label">INTEGRATES WITH:</span>
            <span>SALESFORCE</span>
            <span>SLACK</span>
            <span>JIRA</span>
            <span>ZENDESK</span>
            <Link href="/integrations" className="harvey-btn-outline">View All</Link>
          </div>
        </div>
      </section>

      {/* 2. SCROLLING FOCUS LIST (Light) */}
      <section className="harvey-focus-section">
        <div className="harvey-focus-container">
          <div className="harvey-focus-left">
            <p>Top teams use<br/>NexaWorks for</p>
          </div>
          <div className="harvey-focus-center">
            <ul className="harvey-focus-list">
              <li className="faded">Sales Discovery</li>
              <li className="faded">Patient Handoffs</li>
              <li className="active">Incident Response</li>
              <li className="faded">Contract Review</li>
              <li className="faded">Vendor Diligence</li>
            </ul>
          </div>
          <div className="harvey-focus-right">
            <Link href="/product" className="harvey-btn-outline-dark">Explore Platform</Link>
          </div>
        </div>
      </section>

      {/* 3. QUOTE / IMPACT BLOCK (Light Gray) */}
      <section className="harvey-quote-section">
        <div className="harvey-quote-container">
          <div className="harvey-quote-image">
            <Image 
              src="/portrait_quote.jpg" 
              alt="Corporate Executive" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className="harvey-quote-content">
            <blockquote>
              "What we have seen with NexaWorks is by far the most successful technology adoption story I have ever been a part of. The ability to instantly understand the full context of any situation is game-changing."
            </blockquote>
            <div className="harvey-quote-author">
              <p className="author-name">Rich Robbins</p>
              <p className="author-title">Director of Applied Artificial Intelligence</p>
            </div>
            <div className="harvey-quote-logo">
              <span style={{ fontFamily: 'serif', fontSize: '24px', fontStyle: 'italic', opacity: 0.8 }}>NexaWorks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CINEMATIC CASE STUDIES (Dark) */}
      <section className="harvey-studies-section">
        <div className="harvey-studies-header">
          <h2>Real impact for real clients</h2>
          <Link href="/customers" className="harvey-btn-outline">See more stories</Link>
        </div>
        
        <div className="harvey-studies-grid">
          <div className="harvey-study-card">
            <Image src="/case_study_1.jpg" alt="Case Study 1" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
            <div className="harvey-study-overlay">
              <h3>Acme Corp uses NexaWorks for greater time savings across their entire sales team.</h3>
              <div className="harvey-play-btn">▶</div>
            </div>
          </div>
          <div className="harvey-study-card">
            <Image src="/case_study_2.jpg" alt="Case Study 2" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
            <div className="harvey-study-overlay">
              <h3>Global Health helps doctors focus on creating the most value for patients.</h3>
              <div className="harvey-play-btn">▶</div>
            </div>
          </div>
          <div className="harvey-study-card">
            <Image src="/case_study_3.jpg" alt="Case Study 3" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
            <div className="harvey-study-overlay">
              <h3>The Orion Group uses NexaWorks to free up time for more meaningful work.</h3>
              <div className="harvey-play-btn">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERTICAL STATS (Dark) */}
      <section className="harvey-stats-section">
        <div className="harvey-stats-header">
          <h2>Helping teams stay focused<br/>and see measurable results</h2>
        </div>
        
        <div className="harvey-stats-list">
          <div className="harvey-stat-row">
            <div className="stat-label">Average hours saved per month</div>
            <div className="stat-value">15+</div>
          </div>
          <div className="harvey-stat-row">
            <div className="stat-label">Professionals using NexaWorks</div>
            <div className="stat-value">100,000+</div>
          </div>
          <div className="harvey-stat-row">
            <div className="stat-label">Enterprise teams deployed</div>
            <div className="stat-value">1,200+</div>
          </div>
          <div className="harvey-stat-row">
            <div className="stat-label">Countries supported</div>
            <div className="stat-value">45+</div>
          </div>
        </div>
      </section>

      {/* 6. SECURITY BADGES (Dark) */}
      <section className="harvey-security-section">
        <div className="harvey-security-header">
          <div className="sec-left">
            <h2>Enterprise-grade<br/>security and controls</h2>
          </div>
          <div className="sec-right">
            <p>NexaWorks meets the highest industry standards for security and compliance. We include all default controls that enterprise teams expect: SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.</p>
            <Link href="/security" className="harvey-btn-outline" style={{ display: 'inline-block' }}>More About Security</Link>
          </div>
        </div>

        <div className="harvey-security-grid">
          <div className="harvey-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h4>SOC2 Type II</h4>
            <Link href="/security" className="badge-link">Details ↗</Link>
          </div>
          <div className="harvey-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h4>CCPA Compliant</h4>
            <Link href="/security" className="badge-link">Details ↗</Link>
          </div>
          <div className="harvey-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4>ISO 27001</h4>
            <Link href="/security" className="badge-link">Details ↗</Link>
          </div>
          <div className="harvey-badge">
            <div className="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 8v4l3 3"></path></svg>
            </div>
            <h4>GDPR Ready</h4>
            <Link href="/security" className="badge-link">Details ↗</Link>
          </div>
        </div>
      </section>

      {/* 7. MINIMAL FOOTER CTA (Dark) */}
      <section className="harvey-cta-section">
        <div className="harvey-cta-container">
          <h2>Unlock Complete Context for Your Firm</h2>
          <Link href="/contact" className="harvey-btn-white">Request a Demo</Link>
        </div>
      </section>
    </main>
  );
}
