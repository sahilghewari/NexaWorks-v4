import Link from "next/link";
import Image from "next/image";
import GradientMesh from "@/components/GradientMesh";
import TrustSignals from "@/components/TrustSignals";
import "./page.css";

export const metadata = {
  title: 'NexaWorks — Context, Reconstructed',
  description: 'NexaWorks eliminates the hours your team spends gathering context before every meeting, deal, and decision. Complete context. Before you ask.',
};

export default function Home() {
  return (
    <main>
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
             <span className="logo-text">CMS</span>
             <span className="logo-text">CUATRECASAS</span>
             <span className="logo-text">MERCK</span>
             <span className="logo-text">HENGELER MUELLER</span>
             <Link href="/customers" className="customers-link">Our Customers</Link>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <h2 className="display-xl">Stop wasting hours digging for information</h2>
        <p className="body-lg services-subtitle">
          Your team spends more time searching for answers across scattered tools than actually doing the work.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>1 hour</div>
            <h3 className="heading-md">Lost Every Day</h3>
            <p className="body-md">The average employee wastes at least an hour daily just looking for the right documents and chat messages.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>10+ Apps</div>
            <h3 className="heading-md">Scattered Context</h3>
            <p className="body-md">Information is siloed across emails, Slack, CRMs, and tickets. Finding the full story is almost impossible.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>Endless</div>
            <h3 className="heading-md">Context Switching</h3>
            <p className="body-md">Jumping between tabs drains focus and energy, causing your best people to burn out faster.</p>
          </div>
        </div>
      </section>

      <section className="services-overview" style={{ background: 'var(--color-canvas)' }}>
        <h2 className="display-xl">How NexaWorks makes it simple</h2>
        <p className="body-lg services-subtitle">
          We bring everything you need into one clear, easy-to-read summary.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon">🔗</div>
            <h3 className="heading-md">1. Connect Your Apps</h3>
            <p className="body-md">Securely link the tools you already use every day—like Slack, Salesforce, Jira, and Google Workspace.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3 className="heading-md">2. AI Reconstructs the Story</h3>
            <p className="body-md">Our AI reads through the scattered messages and documents to instantly understand what's going on.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📄</div>
            <h3 className="heading-md">3. Get a Context Brief</h3>
            <p className="body-md">Before your next meeting or task, you receive a single, easy-to-read page with everything you need to know.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="why-content">
            <h2 className="display-xl">Enterprise security you can trust</h2>
            <p className="body-lg">
              We know how important your business data is. That's why NexaWorks is built with strict privacy controls, complete audit logs, and a guarantee that we never use your private data to train our AI models.
            </p>
            <Link href="/security" className="btn-primary">View Security Center</Link>
          </div>
          <div className="why-stats">
            <div className="stat-card">
              <div className="display-lg">100%</div>
              <div className="caption">Data privacy</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">Zero</div>
              <div className="caption">Model training on your data</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">SOC2</div>
              <div className="caption">Compliant infrastructure</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">Strict</div>
              <div className="caption">Role-based access controls</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <h2 className="display-xl">Learn how it works</h2>
        <p className="body-lg services-subtitle">
          Explore our guides to see exactly how NexaWorks can save your team hours every week.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="heading-md">For Sales Teams</h3>
            <p className="body-md">See how reps instantly catch up on client history before the big pitch without digging through Salesforce.</p>
            <Link href="/context/enterprise-sales-discovery" className="link-arrow">Read the guide →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🎧</div>
            <h3 className="heading-md">For Customer Support</h3>
            <p className="body-md">Learn how agents know exactly what a customer has already tried before they even say hello.</p>
            <Link href="/context/sev1-incident-response" className="link-arrow">Read the guide →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3 className="heading-md">For Engineering</h3>
            <p className="body-md">Discover how we summarize a week of scattered Slack debates into one clear Jira ticket.</p>
            <Link href="/context/engineering-handoff" className="link-arrow">Read the guide →</Link>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <h2 className="display-xl">Built for every fast-moving team</h2>
        <div className="grid-4">
          <div className="card service-card">
            <div className="service-icon">📈</div>
            <h3 className="heading-md">Sales</h3>
            <p className="body-md">Get full account history and relationship timelines assembled for you before every call.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">🏥</div>
            <h3 className="heading-md">Clinical</h3>
            <p className="body-md">Patient histories and prior clinical notes brought together for seamless, safe handoffs.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">💼</div>
            <h3 className="heading-md">Finance</h3>
            <p className="body-md">Vendor history, invoice context, and approval chains grouped instantly for quick decisions.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">⚖️</div>
            <h3 className="heading-md">Legal</h3>
            <p className="body-md">Contract precedents and clause history delivered to you, cutting review preparation by hours.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="display-xl">Ready to stop searching?</h2>
          <p className="body-lg">Get started today and give your team the gift of complete clarity.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-on-dark-inverse">Request a Demo</Link>
            <Link href="/product" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>See How It Works</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
