import React from 'react';
import Link from 'next/link';
import ComplianceAssessor from '@/components/Calculators/ComplianceAssessor';

export const metadata = {
  title: 'EU AI Act Risk Assessor Tool | NexaWorks',
  description: 'Interactive compliance tool. Determine your AI agent\'s regulatory risk tier (Minimal, Limited, High, Prohibited) and generate a mitigation engineering checklist.',
};

export default function EUAIActAssessorPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/tools" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Tools
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-ruby)', color: 'white', border: 'none' }}>AUGUST 2026 ENFORCEMENT</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>EU AI Act Risk Assessor</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)' }}>
          By August 2, 2026, severe financial penalties for non-compliance take effect. Use this interactive tool to determine if your enterprise AI deployment is classified as High-Risk (Annex III), and receive an actionable engineering checklist.
        </p>

        <ComplianceAssessor />

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
           <p className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>DISCLAIMER: THIS TOOL PROVIDES ENGINEERING GUIDANCE AND DOES NOT CONSTITUTE LEGAL ADVICE.</p>
        </div>
      </div>
    </main>
  );
}
