'use client';

import React, { useState } from 'react';

// Industry Benchmarks (Ardent Partners / NexaWorks 2026 Data)
const MANUAL_COST_PER_INVOICE = 15.97;
const AUTOMATED_COST_PER_INVOICE = 2.36;

export default function ROICalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(5000);
  const [teamSize, setTeamSize] = useState<number>(5);

  const annualVolume = monthlyVolume * 12;
  
  // Cost Calculations
  const currentAnnualCost = annualVolume * MANUAL_COST_PER_INVOICE;
  const projectedAnnualCost = annualVolume * AUTOMATED_COST_PER_INVOICE;
  const annualSavings = currentAnnualCost - projectedAnnualCost;
  const savingsPercentage = ((annualSavings / currentAnnualCost) * 100).toFixed(1);

  return (
    <div className="card-elevated" style={{ background: 'white', padding: '48px', margin: '48px 0' }}>
      <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Accounts Payable (AP) AI ROI Calculator</h2>
      <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
        Based on verified 2026 benchmarks, manual invoice processing costs <strong>$15.97</strong> per document. NexaWorks Agentic pipelines reduce this to <strong>$2.36</strong>. Calculate your financial exposure below.
      </p>

      <div className="grid-2" style={{ gap: '48px' }}>
        <div>
          <div style={{ marginBottom: '32px' }}>
            <label className="micro-cap" style={{ display: 'block', marginBottom: '16px' }}>
              MONTHLY INVOICE VOLUME: {monthlyVolume.toLocaleString()}
            </label>
            <input 
              type="range" 
              min="1000" 
              max="50000" 
              step="1000"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              style={{ width: '100%' }}
              aria-label="Monthly Invoice Volume"
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="micro-cap" style={{ display: 'block', marginBottom: '16px' }}>
              CURRENT AP TEAM SIZE: {teamSize}
            </label>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              style={{ width: '100%' }}
              aria-label="Current AP Team Size"
            />
          </div>
        </div>

        <div style={{ background: 'var(--color-surface)', padding: '32px', borderRadius: '8px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>CURRENT MANUAL COST (ANNUAL)</span>
            <div className="display-md" style={{ color: 'var(--color-ruby)' }}>
              ${currentAnnualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
          </div>
          
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
            <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>PROJECTED AUTOMATED COST</span>
            <div className="display-md" style={{ color: 'var(--color-ink)' }}>
              ${projectedAnnualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
          </div>

          <div>
            <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>HARD COST DISPLACEMENT</span>
            <div className="display-lg" style={{ color: 'var(--color-primary)' }}>
              ${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="body-sm" style={{ color: 'var(--color-primary)', marginTop: '8px', fontWeight: 500 }}>
              {savingsPercentage}% Total Reduction
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <button className="btn-primary" style={{ padding: '16px 32px' }}>Request Detailed AP Audit</button>
      </div>
    </div>
  );
}
