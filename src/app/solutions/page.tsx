import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveSolutionsHero from '@/components/InteractiveSolutionsHero';
import TrustSignals from '@/components/TrustSignals';
import ScrollReveal from '@/components/ScrollReveal';
import './page.css';
import '../page.css'; // For footer CTA
import Breadcrumbs from '@/components/Breadcrumbs';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';

export const metadata: Metadata = {
  title: 'Solutions | NexaWorks',
  description: 'Context Reconstruction for every team. Eliminate context switching in sales, clinical, finance, legal, operations, and executive workflows.',
  keywords: ['Enterprise AI Solutions', 'Sales AI', 'Clinical Workflow', 'Legal AI', 'Finance Context', 'Operations Automation'],
  alternates: { canonical: 'https://nexaworks.tech/solutions' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Solutions | NexaWorks',
    description: 'Context Reconstruction for every team. Eliminate context switching in sales, clinical, finance, legal, operations, and executive workflows.',
    url: 'https://nexaworks.tech/solutions',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Solutions' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Solutions | NexaWorks',
    description: 'Context Reconstruction for every team. Eliminate context switching in sales, clinical, finance, legal, operations, and executive workflows.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function SolutionsPage() {
  return (
    <main className="solutions-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }]} />
      <InteractiveSolutionsHero />

      <div style={{ padding: '48px 0 24px 0' }}>
        <ScrollReveal delay={0.1}>
          <AEOAnswerBlock 
            tag="Solutions Architecture Brief"
            question="How does NexaWorks solve context switching?" 
            answer="NexaWorks eliminates context switching by proactively delivering unified data summaries to sales, clinical, finance, and legal teams precisely when they need it, reducing manual research time by up to 90%." 
          />
        </ScrollReveal>
      </div>

      <div style={{ backgroundColor: '#000', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <TrustSignals />
      </div>

      <section className="staggered-section">
        <div className="staggered-container">
          <ScrollReveal>
            <div className="staggered-header">
              <h2>One platform engineered to elevate your entire team. <span>Navigate every challenge with purpose-built context.</span></h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-sales.webp" alt="Sales Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Sales Teams</h3>
              <p>Pre-call context briefs with complete customer history, deal stage progression, relationship timeline, and competitive intelligence — assembled automatically before every conversation.</p>
              <Link href="/contact" className="btn-outline-light">Explore Sales Workflows</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-clinical.webp" alt="Clinical Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Clinical Teams</h3>
              <p>Patient handoff context with prior interactions, clinical notes, treatment history, and HIPAA-compliant data isolation — reconstructed for seamless care transitions.</p>
              <Link href="/contact" className="btn-outline-light">Explore Clinical Automation</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-sales.webp" alt="Finance Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Finance Teams</h3>
              <p>Invoice context, vendor history, approval chain reconstruction, and automated AP research — eliminating the manual document gathering that delays every payment cycle.</p>
              <Link href="/contact" className="btn-outline-light">Automate Finance Approvals</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-legal.webp" alt="Legal Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Legal Teams</h3>
              <p>Contract history, clause precedents, regulatory context assembly, and due diligence packages — reducing review preparation from hours to minutes.</p>
              <Link href="/contact" className="btn-outline-light">Explore Legal Context</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-clinical.webp" alt="Operations Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Operations Teams</h3>
              <p>Incident context, runbook history, system state reconstruction, and cross-team dependency mapping — so responders never start blind during critical events.</p>
              <Link href="/contact" className="btn-outline-light">View Incident Workflows</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-legal.webp" alt="Executive Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Executive Teams</h3>
              <p>Board meeting prep, QBR context, strategic initiative timelines, and cross-functional status synthesis — delivered before every leadership decision point.</p>
              <Link href="/contact" className="btn-outline-light">See Executive Synthesis</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal animation="fade-in" duration={1}>
        <section className="footer-cta-section" style={{ marginTop: '96px' }}>
          <div className="footer-cta-container">
            <h2 className="footer-cta-title">Find your workflow.</h2>
            <Link href="/contact" className="btn-solid-white">Book Architecture Review</Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
