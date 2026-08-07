import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Academic Data Sharing & Research Partnerships | NexaWorks',
  description: 'NexaWorks partners with leading academic institutions (MIT CSAIL, Stanford HAI) to provide anonymized enterprise AI telemetry for foundational research.',
};

export default function AcademicPartnershipsPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div style={{ marginBottom: '48px' }}>
              <Link href="/research" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                &larr; Back to Research Hub
              </Link>
            </div>

            <span className="tag" style={{ marginBottom: '16px' }}>ACADEMIC PARTNERSHIPS</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Data Sharing Program
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              We believe the next generation of foundational models requires empirical grounding. NexaWorks provides fully anonymized, high-density enterprise telemetry to approved academic researchers.
            </p>

            <div className="grid-2" style={{ gap: '48px' }}>
              <div>
                <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Available Datasets</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>1. RAG Failure Taxonomy (1M+ Queries)</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>A comprehensive dataset logging Context Window Truncation, Semantic Dilution, and Pydantic Schema Drift across Fortune 500 deployments.</span>
                  </li>
                  <li style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>2. Multi-Agent Orchestration Latency</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>Time-To-First-Token (TTFT) and total execution latency for deeply nested ReAct agent swarms.</span>
                  </li>
                  <li>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>3. Enterprise ROI Index Data</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>Sector-by-sector economic metrics detailing cost displacement and payback periods for generative automation workflows.</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated" style={{ background: 'white', alignSelf: 'start' }}>
                <h3 className="heading-md" style={{ marginBottom: '16px' }}>Request Academic Access</h3>
                <p className="body-sm" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
                  Access is currently restricted to researchers affiliated with accredited institutions (e.g., MIT CSAIL, Stanford HAI, Berkeley BAIR).
                </p>
                <form>
                  <div style={{ marginBottom: '16px' }}>
                    <label className="micro-cap" style={{ display: 'block', marginBottom: '8px' }}>INSTITUTIONAL EMAIL (.EDU)</label>
                    <input type="email" placeholder="researcher@university.edu" className="select" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-hairline)', borderRadius: '4px' }} />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label className="micro-cap" style={{ display: 'block', marginBottom: '8px' }}>RESEARCH PROPOSAL SUMMARY</label>
                    <textarea placeholder="Briefly describe how you intend to utilize the NexaWorks telemetry dataset..." className="select" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-hairline)', borderRadius: '4px', minHeight: '120px' }}></textarea>
                  </div>
                  <button type="button" className="btn-primary" style={{ width: '100%' }}>Submit Request</button>
                </form>
              </div>
            </div>

          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
