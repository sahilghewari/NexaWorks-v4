import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Enterprise AI Research & Publications',
  description: 'Annual reports, empirical studies, and deep-dive analytics into global enterprise AI adoption, latency, and compliance.',
};

export default function ResearchLandingPage() {
  const annualReports = [
    {
      title: "State of Enterprise AI 2026",
      href: "/research/state-of-enterprise-ai-2026",
      description: "Macroeconomic analysis of LLM adoption, deterministic routing, and the transition from heuristic search to AI agent ecosystems.",
      date: "August 2026"
    }
  ];

  const benchmarks = [
    {
      title: "Document AI Accuracy Index",
      href: "/benchmarks/document-ai",
      description: "Comparative accuracy benchmarks of unstructured data extraction across OCR vs Agentic Pipelines.",
      date: "Q3 2026"
    },
    {
      title: "Context Window Degradation",
      href: "/benchmarks/context-window-degradation",
      description: "Empirical study on fact-retrieval dropoff when foundational models exceed 128k context limits.",
      date: "July 2026"
    }
  ];

  const datasets = [
    {
      title: "Global AI ROI Index",
      href: "/research/global-roi-index",
      description: "Sector-by-sector empirical tracking of Return on Investment (ROI) and cost displacement achieved through Enterprise AI automation.",
      date: "LIVE DATA"
    },
    {
      title: "LLMOps Observability Matrix",
      href: "/benchmarks/llmops-observability-matrix",
      description: "Structured dataset of average MTTR and error rates across RAG production deployments.",
      date: "LIVE DATA"
    }
  ];

  const renderGrid = (items: typeof annualReports, tag: string) => (
    <div className="grid-2" style={{ gap: '32px', marginBottom: '64px' }}>
      {items.map((report, idx) => (
        <Link key={idx} href={report.href} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card hover-border-primary" style={{ cursor: 'pointer', transition: 'all 0.3s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div className="micro-cap" style={{ color: 'var(--color-primary)' }}>
                {tag}
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
  );

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

            <h2 className="heading-lg" style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px' }}>Annual Reports</h2>
            {renderGrid(annualReports, "ANNUAL REPORT")}

            <h2 className="heading-lg" style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px' }}>Empirical Benchmarks</h2>
            {renderGrid(benchmarks, "BENCHMARK")}

            <h2 className="heading-lg" style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px' }}>Live Datasets</h2>
            {renderGrid(datasets, "DATASET")}
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
