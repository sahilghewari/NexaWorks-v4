import { Metadata } from 'next';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata: Metadata = {
  title: 'Solutions | NexaWorks',
  description: 'Context Reconstruction for every team. Eliminate context switching in sales, clinical, finance, legal, operations, and executive workflows.',
};

export default function SolutionsPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>SOLUTIONS</span>
            <h1 className="display-xxl" style={{ marginBottom: '24px' }}>Context Reconstruction for every team</h1>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Transform how your teams work by delivering precisely the right information, at the right time, tailored to their specific workflow.
            </p>
          </div>
        </section>
      </GradientMesh>

      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="grid-3">
            <div className="service-card">
              <div className="service-icon">🏦</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Sales Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Pre-call context briefs with complete customer history, deal stage progression, relationship timeline, and competitive intelligence — assembled automatically before every conversation.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Clinical Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Patient handoff context with prior interactions, clinical notes, treatment history, and HIPAA-compliant data isolation — reconstructed for seamless care transitions.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Finance Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Invoice context, vendor history, approval chain reconstruction, and automated AP research — eliminating the manual document gathering that delays every payment cycle.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Legal Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Contract history, clause precedents, regulatory context assembly, and due diligence packages — reducing review preparation from hours to minutes.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Operations Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Incident context, runbook history, system state reconstruction, and cross-team dependency mapping — so responders never start blind during critical events.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Executive Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Board meeting prep, QBR context, strategic initiative timelines, and cross-functional status synthesis — delivered before every leadership decision point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="display-xl">Find your workflow</h2>
          <p className="body-lg">Tell us which workflows consume the most context-gathering time. We will show you the architecture to eliminate it.</p>
          <Link href="/contact" className="btn-on-dark-inverse">Book Architecture Review</Link>
        </div>
      </section>
    </main>
  );
}
