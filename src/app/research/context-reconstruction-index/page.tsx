import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export default function ContextReconstructionIndexPage() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh' }}>
      <GradientMesh>
        <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 80px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '6px 12px', 
                borderRadius: '20px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--color-primary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                RESEARCH REPORT
              </span>
              <h1 className="display-xxl" style={{ marginBottom: '1.5rem', color: '#fff' }}>The 2026 Context Reconstruction Index</h1>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', fontSize: '1.25rem' }}>
                Measuring the financial impact of fragmented context across the enterprise.
              </p>
            </div>
          </div>
        </section>
      </GradientMesh>

      {/* Executive Summary */}
      <section className="section container" style={{ padding: '80px 24px' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '48px', 
          backgroundColor: 'var(--color-surface-subtle)', 
          borderRadius: '16px',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-ink)', marginBottom: '16px' }}>Executive Summary</h2>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
            Based on telemetry and workflow data from 50,000 enterprise knowledge workers, our research reveals a systemic crisis in organizational efficiency. The constant tax of context switching and context loss costs the average enterprise <strong>$15,400 per employee annually</strong>. The problem is no longer access to information, but the assembly of context.
          </p>
        </div>
      </section>

      {/* The Data Grid */}
      <section className="section container" style={{ padding: '40px 24px 80px' }}>
        <h2 className="heading-lg" style={{ color: 'var(--color-ink)', marginBottom: '40px', textAlign: 'center' }}>
          The Hidden Tax on Knowledge Work
        </h2>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="card-elevated" style={{ padding: '40px', textAlign: 'center', borderRadius: '16px', backgroundColor: 'var(--color-surface)' }}>
            <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '16px', lineHeight: 1 }}>
              58%
            </div>
            <p style={{ color: 'var(--color-ink)', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>
              Time Spent Gathering Context
            </p>
            <p style={{ color: 'var(--color-ink-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
              Versus actually executing the high-value cognitive work they were hired to perform.
            </p>
          </div>
          
          <div className="card-elevated" style={{ padding: '40px', textAlign: 'center', borderRadius: '16px', backgroundColor: 'var(--color-surface)' }}>
            <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '16px', lineHeight: 1 }}>
              23m
            </div>
            <p style={{ color: 'var(--color-ink)', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>
              Average Recovery Time
            </p>
            <p style={{ color: 'var(--color-ink-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
              The time required to regain deep focus after a single app-to-app context switch.
            </p>
          </div>
          
          <div className="card-elevated" style={{ padding: '40px', textAlign: 'center', borderRadius: '16px', backgroundColor: 'var(--color-surface)' }}>
            <div style={{ fontSize: '64px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '16px', lineHeight: 1 }}>
              3.4
            </div>
            <p style={{ color: 'var(--color-ink)', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>
              Systems Queried
            </p>
            <p style={{ color: 'var(--color-ink-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
              The average number of disparate applications a worker must consult before a major decision.
            </p>
          </div>
        </div>
      </section>

      {/* The Workflow Breakdown */}
      <section className="section container" style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-ink)', marginBottom: '40px' }}>
            The Workflow Breakdown
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'var(--color-surface-subtle)', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ flex: '0 0 100px', fontWeight: 700, fontSize: '20px', color: 'var(--color-ink)' }}>Sales</div>
              <div style={{ flex: 1, color: 'var(--color-ink-secondary)', fontSize: '18px' }}>
                <strong style={{ color: 'var(--color-ink)' }}>4.2 hours lost</strong> per week per rep doing pre-meeting research across CRM, email, and billing systems.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'var(--color-surface-subtle)', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ flex: '0 0 100px', fontWeight: 700, fontSize: '20px', color: 'var(--color-ink)' }}>Engineering</div>
              <div style={{ flex: 1, color: 'var(--color-ink-secondary)', fontSize: '18px' }}>
                <strong style={{ color: 'var(--color-ink)' }}>45% of Incident MTTR</strong> is spent just gathering system context from logs, Jira, and Slack threads.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', padding: '32px', backgroundColor: 'var(--color-surface-subtle)', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ flex: '0 0 100px', fontWeight: 700, fontSize: '20px', color: 'var(--color-ink)' }}>Clinical</div>
              <div style={{ flex: 1, color: 'var(--color-ink-secondary)', fontSize: '18px' }}>
                <strong style={{ color: 'var(--color-ink)' }}>22% of patient handoffs</strong> result in dropped context due to fragmented EHR systems.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift to Context Reconstruction */}
      <section className="section container" style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-ink)', marginBottom: '24px' }}>
            The Shift to Context Reconstruction
          </h2>
          <div style={{ color: 'var(--color-ink-secondary)', fontSize: '18px', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '24px' }}>
              For decades, the industry's answer to scattered information was "Enterprise Search." But Enterprise Search failed because it only retrieves documents, leaving the cognitive burden of synthesizing that information entirely on the human user.
            </p>
            <p>
              The future is <strong style={{ color: 'var(--color-primary)' }}>Context Reconstruction</strong>: the proactive, deterministic assembly of stateful workflow data. It's not about finding a PDF; it's about seamlessly reconstructing the entire graph of entities, decisions, and historical state relevant to the exact task you are performing right now.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '80px 24px', backgroundColor: 'var(--color-surface-subtle)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-ink)', marginBottom: '24px' }}>
            Read the Full Report
          </h2>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '40px' }}>
            Dive deeper into the methodology, detailed department breakdowns, and architectural strategies for implementing Context Reconstruction.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="#" 
              style={{ 
                padding: '16px 32px', 
                backgroundColor: 'var(--color-primary)', 
                color: '#fff', 
                fontWeight: 600, 
                borderRadius: '8px', 
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
            >
              Download 40-Page PDF
            </Link>
            <Link 
              href="/contact" 
              style={{ 
                padding: '16px 32px', 
                backgroundColor: 'transparent', 
                color: 'var(--color-ink)', 
                border: '1px solid var(--color-ink)',
                fontWeight: 600, 
                borderRadius: '8px', 
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
            >
              Book an Architecture Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
