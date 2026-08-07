import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Enterprise AI Research & Publications',
  description: 'Annual reports, empirical studies, and deep-dive analytics into global enterprise AI adoption, latency, and compliance.',
};

export default function ResearchLandingPage() {
  const reports = [
    {
      title: "State of Enterprise AI 2026",
      slug: "state-of-enterprise-ai-2026",
      description: "Macroeconomic analysis of LLM adoption, deterministic routing, and the transition from heuristic search to AI agent ecosystems.",
      tag: "ANNUAL REPORT",
      date: "August 2026"
    },
    {
      title: "Global AI ROI Index",
      slug: "global-roi-index",
      description: "Sector-by-sector empirical tracking of Return on Investment (ROI) and cost displacement achieved through Enterprise AI automation.",
      tag: "ECONOMIC INDEX",
      date: "LIVE DATA"
    }
  ];

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>MACROECONOMIC INTELLIGENCE</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Research Publications
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              Factually dense, statistically rigorous analysis engineered for CTOs, institutional investors, and operations leaders.
            </p>

            <div className="grid-2" style={{ gap: '32px' }}>
              {reports.map((report, idx) => (
                <Link key={idx} href={`/research/${report.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card hover-border-primary" style={{ cursor: 'pointer', transition: 'all 0.3s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div className="micro-cap" style={{ color: 'var(--color-primary)' }}>
                        {report.tag}
                      </div>
                      <div className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>
                        {report.date}
                      </div>
                    </div>
                    <h3 className="heading-md" style={{ marginBottom: '16px' }}>
                      {report.title}
                    </h3>
                    <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                      {report.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
