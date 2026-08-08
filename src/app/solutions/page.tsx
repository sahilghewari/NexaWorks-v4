import { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <span className="solutions-tag">SOLUTIONS</span>
          <h1 className="solutions-headline">Context Reconstruction for every team</h1>
          <p className="solutions-subheadline">
            Transform how your teams work by delivering precisely the right information, at the right time, tailored to their specific workflow.
          </p>
        </div>
      </section>

      <div style={{ backgroundColor: '#000', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <TrustSignals />
      </div>

      <section className="solutions-section">
        <div className="verticals-grid">
          <div className="vertical-card sales">
            <span className="vertical-icon">🏦</span>
            <h3>Sales Teams</h3>
            <p>
              Pre-call context briefs with complete customer history, deal stage progression, relationship timeline, and competitive intelligence — assembled automatically before every conversation.
            </p>
          </div>
          <div className="vertical-card clinical">
            <span className="vertical-icon">🏥</span>
            <h3>Clinical Teams</h3>
            <p>
              Patient handoff context with prior interactions, clinical notes, treatment history, and HIPAA-compliant data isolation — reconstructed for seamless care transitions.
            </p>
          </div>
          <div className="vertical-card finance">
            <span className="vertical-icon">🏢</span>
            <h3>Finance Teams</h3>
            <p>
              Invoice context, vendor history, approval chain reconstruction, and automated AP research — eliminating the manual document gathering that delays every payment cycle.
            </p>
          </div>
          <div className="vertical-card legal">
            <span className="vertical-icon">⚖️</span>
            <h3>Legal Teams</h3>
            <p>
              Contract history, clause precedents, regulatory context assembly, and due diligence packages — reducing review preparation from hours to minutes.
            </p>
          </div>
          <div className="vertical-card ops">
            <span className="vertical-icon">⚙️</span>
            <h3>Operations Teams</h3>
            <p>
              Incident context, runbook history, system state reconstruction, and cross-team dependency mapping — so responders never start blind during critical events.
            </p>
          </div>
          <div className="vertical-card exec">
            <span className="vertical-icon">📈</span>
            <h3>Executive Teams</h3>
            <p>
              Board meeting prep, QBR context, strategic initiative timelines, and cross-functional status synthesis — delivered before every leadership decision point.
            </p>
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
