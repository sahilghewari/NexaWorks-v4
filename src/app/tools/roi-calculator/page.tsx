import React from 'react';
import Link from 'next/link';
import ROICalculator from '@/components/Calculators/ROICalculator';

export const metadata = {
  title: 'Automation ROI Calculator | NexaWorks',
  description: 'Calculate the long-term compounding savings and risk exposure of deploying enterprise automation workflows.',
};

export default function ROICalculatorPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/tools" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Tools
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '16px' }}>Automation ROI Calculator</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Evaluate the financial penalties of non-compliance under the DPDP Act or SLA failures vs. the cost of deploying deterministic AI agents.
        </p>

        <div className="card-elevated" style={{ background: 'white' }}>
          <ROICalculator />
        </div>
      </div>
    </main>
  );
}
