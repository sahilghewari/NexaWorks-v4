import React from 'react';
import Link from 'next/link';

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
      date: "Q3 2026",
      metric: "94.2%",
      metricLabel: "Claude 3.5 ANLS"
    },
    {
      title: "Context Window Degradation",
      href: "/benchmarks/context-window-degradation",
      description: "Empirical study on fact-retrieval dropoff when foundational models exceed 128k context limits.",
      date: "July 2026",
      metric: "-22%",
      metricLabel: "Middle-prompt Dropoff"
    }
  ];

  const datasets = [
    {
      title: "Global AI ROI Index",
      href: "/research/global-roi-index",
      description: "Sector-by-sector empirical tracking of Return on Investment (ROI) and cost displacement achieved through Enterprise AI automation.",
      date: "LIVE DATA",
      metric: "$15K+",
      metricLabel: "Avg Cost Displacement"
    },
    {
      title: "LLMOps Observability Matrix",
      href: "/benchmarks/llmops-observability-matrix",
      description: "Structured dataset of average MTTR and error rates across RAG production deployments.",
      date: "LIVE DATA",
      metric: "97x",
      metricLabel: "Token Cost Reduction"
    }
  ];

  return (
    <main className="engineered-layout" style={{ minHeight: '100vh', paddingBottom: '120px' }}>
      <section className="hero-terminal" style={{ padding: '96px 24px', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="micro-cap" style={{ marginBottom: '16px' }}>MACROECONOMIC INTELLIGENCE & BENCHMARKS</div>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>
            NexaWorks Research
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '600px' }}>
            Factually dense, statistically rigorous analysis engineered for CTOs, institutional investors, and operations leaders navigating the transition from heuristic search to deterministic Context Reconstruction.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: '64px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="heading-lg" style={{ borderBottom: '2px solid var(--color-ink)', paddingBottom: '16px', marginBottom: '32px' }}>
            1.0 Empirical Benchmarks
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '96px' }}>
            <thead style={{ background: 'var(--color-canvas-soft)' }}>
              <tr>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Publication Date</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Title & Abstract</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Key Finding</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Action</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-hairline)' }}>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ink-secondary)' }}>
                    {item.date}
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <div className="heading-sm" style={{ marginBottom: '8px', fontWeight: 500 }}>{item.title}</div>
                    <div className="body-sm" style={{ color: 'var(--color-ink-secondary)', maxWidth: '400px' }}>{item.description}</div>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '24px', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{item.metric}</div>
                    <div className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>{item.metricLabel}</div>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <Link href={item.href} className="link" style={{ fontSize: '13px', fontWeight: 500 }}>View Data &rarr;</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="heading-lg" style={{ borderBottom: '2px solid var(--color-ink)', paddingBottom: '16px', marginBottom: '32px' }}>
            2.0 Live Datasets & Indexes
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '96px' }}>
            <thead style={{ background: 'var(--color-canvas-soft)' }}>
              <tr>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Status</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Index Name & Methodology</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Global Average</th>
                <th style={{ padding: '16px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Action</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-hairline)' }}>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--color-success)', borderRadius: '50%', marginRight: '8px' }}></span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-success)' }}>{item.date}</span>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <div className="heading-sm" style={{ marginBottom: '8px', fontWeight: 500 }}>{item.title}</div>
                    <div className="body-sm" style={{ color: 'var(--color-ink-secondary)', maxWidth: '400px' }}>{item.description}</div>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '24px', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{item.metric}</div>
                    <div className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>{item.metricLabel}</div>
                  </td>
                  <td style={{ padding: '24px 16px', verticalAlign: 'top' }}>
                    <Link href={item.href} className="link" style={{ fontSize: '13px', fontWeight: 500 }}>Access Index &rarr;</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="heading-lg" style={{ borderBottom: '2px solid var(--color-ink)', paddingBottom: '16px', marginBottom: '32px' }}>
            3.0 Annual Reports
          </h2>
          {annualReports.map((item, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '150px 1fr auto', gap: '32px', padding: '32px 0', borderBottom: '1px solid var(--color-hairline)', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ink-secondary)' }}>{item.date}</div>
              <div>
                <div className="heading-md" style={{ marginBottom: '8px', fontWeight: 500 }}>{item.title}</div>
                <div className="body-sm" style={{ color: 'var(--color-ink-secondary)', maxWidth: '600px' }}>{item.description}</div>
              </div>
              <div>
                <Link href={item.href} className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>Read Report</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
