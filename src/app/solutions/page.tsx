import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveSolutionsHero from '@/components/InteractiveSolutionsHero';
import TrustSignals from '@/components/TrustSignals';
import './page.css';
import '../page.css'; // For footer CTA

export const metadata: Metadata = {
  title: 'Solutions | NexaWorks',
  description: 'Context Reconstruction for every team. Eliminate context switching in sales, clinical, finance, legal, operations, and executive workflows.',
};

export default function SolutionsPage() {
  return (
    <main className="solutions-page">
      <InteractiveSolutionsHero />

      <div style={{ backgroundColor: '#000', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <TrustSignals />
      </div>

      <section className="staggered-section">
        <div className="staggered-container">
          <div className="staggered-header">
            <h2>One platform engineered to elevate your entire team. <span>Navigate every challenge with purpose-built context.</span></h2>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-sales.jpg" alt="Sales Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Sales Teams</h3>
              <p>Pre-call context briefs with complete customer history, deal stage progression, relationship timeline, and competitive intelligence — assembled automatically before every conversation.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-clinical.jpg" alt="Clinical Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Clinical Teams</h3>
              <p>Patient handoff context with prior interactions, clinical notes, treatment history, and HIPAA-compliant data isolation — reconstructed for seamless care transitions.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-sales.jpg" alt="Finance Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Finance Teams</h3>
              <p>Invoice context, vendor history, approval chain reconstruction, and automated AP research — eliminating the manual document gathering that delays every payment cycle.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-legal.jpg" alt="Legal Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Legal Teams</h3>
              <p>Contract history, clause precedents, regulatory context assembly, and due diligence packages — reducing review preparation from hours to minutes.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-clinical.jpg" alt="Operations Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Operations Teams</h3>
              <p>Incident context, runbook history, system state reconstruction, and cross-team dependency mapping — so responders never start blind during critical events.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>

          <div className="staggered-row">
            <div className="staggered-image-container">
              <Image src="/ui-legal.jpg" alt="Executive Platform UI Mockup" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="staggered-content">
              <h3>Executive Teams</h3>
              <p>Board meeting prep, QBR context, strategic initiative timelines, and cross-functional status synthesis — delivered before every leadership decision point.</p>
              <Link href="/contact" className="btn-outline-light">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-cta-section" style={{ marginTop: '96px' }}>
        <div className="footer-cta-container">
          <h2 className="footer-cta-title">Find your workflow.</h2>
          <Link href="/contact" className="btn-solid-white">Book Architecture Review</Link>
        </div>
      </section>
    </main>
  );
}
