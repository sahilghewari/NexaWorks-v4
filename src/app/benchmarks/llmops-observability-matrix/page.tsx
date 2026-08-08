import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'LLMOps Observability Matrix: LangSmith vs Helicone vs Langfuse',
  description: 'A technical benchmark comparing trace-billing vs score-billing economics for Enterprise AI Agent observability.',
};

export default function LLMOpsObservabilityMatrix() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/benchmarks" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Benchmarks
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px' }}>ENGINEERING BENCHMARK</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>LLMOps Observability Matrix</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
          As AI agents move from pilot to production, engineering teams are routinely blinded by trace costs. This matrix evaluates the economic and architectural realities of LangSmith, Helicone, and Langfuse at a scale of 1M+ traces/month.
        </p>

        <div className="card-elevated" style={{ background: 'white', overflow: 'hidden', padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: 'var(--color-surface)' }}>
              <tr>
                <th style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }} className="micro-cap">Metric / Feature</th>
                <th style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }} className="heading-sm">LangSmith</th>
                <th style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }} className="heading-sm">Helicone</th>
                <th style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }} className="heading-sm">Langfuse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}><strong>Architecture</strong></td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>SDK Instrumentation</td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Proxy Gateway</td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>SDK + API</td>
              </tr>
              <tr>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}><strong>Primary Billing Model</strong></td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                  <span style={{ color: 'var(--color-ruby)', fontWeight: 500 }}>Trace-Billing</span><br/>
                  <span style={{ fontSize: '13px', color: '#666' }}>($2.50+ / 1k traces)</span>
                </td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>Flat-Rate / Volume</span><br/>
                  <span style={{ fontSize: '13px', color: '#666' }}>($20/mo starter)</span>
                </td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                  <span style={{ color: 'var(--color-ruby)', fontWeight: 500 }}>Event-Billing</span><br/>
                  <span style={{ fontSize: '13px', color: '#666' }}>($1.00 / 100k events)</span>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}><strong>Self-Hosting Support</strong></td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Enterprise Only (Expensive)</td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Open Source (Docker)</td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Open Source (Docker)</td>
              </tr>
              <tr>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}><strong>LangChain Integration</strong></td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>Native (Zero-Config)</span>
                </td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Via Base URL Override</td>
                <td style={{ padding: '24px', borderBottom: '1px solid var(--color-hairline)', color: 'var(--color-ink-secondary)' }}>Via Callback Handler</td>
              </tr>
              <tr>
                <td style={{ padding: '24px' }}><strong>Best For</strong></td>
                <td style={{ padding: '24px', color: 'var(--color-ink-secondary)' }}>Deep LangChain teams with high budgets.</td>
                <td style={{ padding: '24px', color: 'var(--color-ink-secondary)' }}>Caching, routing, and minimizing trace costs.</td>
                <td style={{ padding: '24px', color: 'var(--color-ink-secondary)' }}>Framework-agnostic teams requiring strict data sovereignty.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: '48px', background: 'var(--color-surface)', textAlign: 'center' }}>
          <h3 className="heading-md" style={{ marginBottom: '16px' }}>Need to optimize your LLMOps architecture?</h3>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            NexaWorks engineers can audit your agentic tracing stack and transition you to a self-hosted, cost-optimized deployment.
          </p>
          <Link href="/contact" className="btn-primary">Book Architecture Review</Link>
        </div>

      </div>
    </main>
  );
}
