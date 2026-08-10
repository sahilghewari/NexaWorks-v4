import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './pricing.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';

export const metadata: Metadata = {
  title: 'Pricing | NexaWorks',
  description: 'Outcome-priced. Not headcount-priced. We align our revenue with the operational value we create.',
  keywords: ['NexaWorks Pricing', 'Enterprise AI Cost', 'Outcome Based Pricing', 'RAG Pricing', 'Enterprise Context Solutions'],
  alternates: { canonical: 'https://nexaworks.tech/pricing' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pricing | NexaWorks',
    description: 'Outcome-priced. Not headcount-priced. We align our revenue with the operational value we create.',
    url: 'https://nexaworks.tech/pricing',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Pricing Plans' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Pricing | NexaWorks',
    description: 'Outcome-priced. Not headcount-priced. We align our revenue with the operational value we create.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why outcome-based pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We believe our revenue should be tied to the value we create. If Context Reconstruction saves your team 2,000 hours annually, our pricing reflects a fraction of that recovered value — not arbitrary seat counts."
            }
          },
          {
            "@type": "Question",
            "name": "Can I start with a single team?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Most enterprises start with one high-impact workflow (typically sales or clinical handoffs) and expand after measuring ROI in the first 90 days."
            }
          },
          {
            "@type": "Question",
            "name": "What about data security?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All plans include SOC2 compliance. Enterprise plans add HIPAA, EU AI Act, and DPDP Act compliance, plus the option for fully on-premise deployment within your VPC."
            }
          },
          {
            "@type": "Question",
            "name": "How long does deployment take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial deployment for a single workflow takes 2-4 weeks. Full enterprise rollout across multiple teams typically completes within 8-12 weeks."
            }
          }
        ]
      }) }} />
      <section className="pricing-hero">
        <div className="pricing-tag">PRICING</div>
        <h1 className="pricing-headline">Outcome-priced.<br />Not headcount-priced.</h1>
        <p className="pricing-subhead">
          We align our revenue with the operational value we create. No hourly billing. No seat-based pricing.
        </p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px 24px' }}>
        <AEOAnswerBlock 
          question="How is NexaWorks priced?" 
          answer="NexaWorks uses an outcome-based pricing model that aligns costs directly with the operational value and hours saved for your organization, rather than charging by arbitrary user seat counts." 
        />
      </section>

      <section className="pricing-grid-section">
        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Choose Your Plan</h2>
        <div className="pricing-bento-grid">
          
          <ScrollReveal delay={0.1} className="pricing-glass-card">
            <div className="pricing-card-header">
              <span className="pricing-tag" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>GROWTH</span>
            </div>
            <h3 className="pricing-tier-name">Growth</h3>
            <p className="pricing-tier-desc" style={{ marginBottom: '32px' }}>
              For teams starting with Context Reconstruction across their core workflows.
            </p>
            <ul className="pricing-features">
              <li>Up to 5 workflow integrations</li>
              <li>Standard context briefs</li>
              <li>Email support</li>
              <li>SOC2 compliance</li>
            </ul>
            <Link href="/contact" className="btn-glass">Contact Sales</Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="pricing-glass-card enterprise">
            <div className="pricing-card-header">
              <span className="pricing-tag" style={{ color: '#c864ff', border: '1px solid rgba(200,100,255,0.5)' }}>ENTERPRISE</span>
            </div>
            <h3 className="pricing-tier-name">Enterprise</h3>
            <p className="pricing-tier-desc" style={{ marginBottom: '32px' }}>
              For organizations deploying Context Reconstruction at scale across all teams.
            </p>
            <ul className="pricing-features">
              <li>Unlimited integrations</li>
              <li>Custom context models</li>
              <li>Dedicated architecture team</li>
              <li>HIPAA / EU AI Act compliance</li>
              <li>On-premise deployment option</li>
              <li>24/7 priority support</li>
            </ul>
            <Link href="/contact" className="btn-accent">Book Architecture Review</Link>
          </ScrollReveal>

        </div>
      </section>

      <section className="pricing-faq-section">
        <div className="pricing-faq-container">
          <div className="pricing-faq-header">
            <h2>Common Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ScrollReveal delay={0.1}>
              <div className="pricing-faq-item">
                <h3>Why outcome-based pricing?</h3>
                <p>
                  We believe our revenue should be tied to the value we create. If Context Reconstruction saves your team 2,000 hours annually, our pricing reflects a fraction of that recovered value — not arbitrary seat counts.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="pricing-faq-item">
                <h3>Can I start with a single team?</h3>
                <p>
                  Absolutely. Most enterprises start with one high-impact workflow (typically sales or clinical handoffs) and expand after measuring ROI in the first 90 days.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="pricing-faq-item">
                <h3>What about data security?</h3>
                <p>
                  All plans include SOC2 compliance. Enterprise plans add HIPAA, EU AI Act, and DPDP Act compliance, plus the option for fully on-premise deployment within your VPC.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="pricing-faq-item">
                <h3>How long does deployment take?</h3>
                <p>
                  Initial deployment for a single workflow takes 2-4 weeks. Full enterprise rollout across multiple teams typically completes within 8-12 weeks.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
