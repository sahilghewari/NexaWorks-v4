import { Metadata } from 'next';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata: Metadata = {
  title: 'Pricing | NexaWorks',
  description: 'Outcome-priced. Not headcount-priced. We align our revenue with the operational value we create.',
};

export default function PricingPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>PRICING</span>
            <h1 className="display-xxl" style={{ marginBottom: '24px' }}>Outcome-priced.<br />Not headcount-priced.</h1>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              We align our revenue with the operational value we create. No hourly billing. No seat-based pricing.
            </p>
          </div>
        </section>
      </GradientMesh>

      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="card-elevated" style={{ background: 'white', padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="micro-cap" style={{ color: 'var(--color-primary)' }}>GROWTH</span>
              <h3 className="display-md">Growth</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                For teams starting with Context Reconstruction across their core workflows.
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.8, fontSize: '16px' }}>
                <li>Up to 5 workflow integrations</li>
                <li>Standard context briefs</li>
                <li>Email support</li>
                <li>SOC2 compliance</li>
              </ul>
              <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center', marginTop: 'auto' }}>Contact Sales</Link>
            </div>
            <div className="card-elevated" style={{ background: 'white', padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px', border: '2px solid var(--color-primary)' }}>
              <span className="micro-cap" style={{ color: 'var(--color-primary)' }}>ENTERPRISE</span>
              <h3 className="display-md">Enterprise</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                For organizations deploying Context Reconstruction at scale across all teams.
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.8, fontSize: '16px' }}>
                <li>Unlimited integrations</li>
                <li>Custom context models</li>
                <li>Dedicated architecture team</li>
                <li>HIPAA / EU AI Act compliance</li>
                <li>On-premise deployment option</li>
                <li>24/7 priority support</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', marginTop: 'auto' }}>Book Architecture Review</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="display-xl" style={{ textAlign: 'center', marginBottom: '48px' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>Why outcome-based pricing?</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                We believe our revenue should be tied to the value we create. If Context Reconstruction saves your team 2,000 hours annually, our pricing reflects a fraction of that recovered value — not arbitrary seat counts.
              </p>
            </div>
            <div>
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>Can I start with a single team?</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Absolutely. Most enterprises start with one high-impact workflow (typically sales or clinical handoffs) and expand after measuring ROI in the first 90 days.
              </p>
            </div>
            <div>
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>What about data security?</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                All plans include SOC2 compliance. Enterprise plans add HIPAA, EU AI Act, and DPDP Act compliance, plus the option for fully on-premise deployment within your VPC.
              </p>
            </div>
            <div>
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>How long does deployment take?</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Initial deployment for a single workflow takes 2-4 weeks. Full enterprise rollout across multiple teams typically completes within 8-12 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="display-xl">Not sure which plan?</h2>
          <p className="body-lg">Talk to our team. We will map your workflows and recommend the right starting point.</p>
          <Link href="/contact" className="btn-on-dark-inverse">Talk to Our Team</Link>
        </div>
      </section>
    </main>
  );
}
