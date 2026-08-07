"use client";

import React, { useState } from 'react';
import RegionalCTA from '@/components/RegionalCTA';

export default function InteractiveLeadFilter() {
  const [companySize, setCompanySize] = useState<string>('');

  const isDisqualified = companySize === '250+';

  return (
    <div className="card-elevated" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'left', background: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}>
      <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Let's audit your architecture</h3>
      
      <div style={{ marginBottom: '24px' }}>
        <label className="body-md" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-ink)', fontWeight: 500 }}>
          Company Size
        </label>
        <select 
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          className="input select"
          style={{ padding: '12px 16px' }}
        >
          <option value="">Select company size...</option>
          <option value="1-49">1 - 49 Employees (Agile)</option>
          <option value="50-199">50 - 199 Employees (Growth)</option>
          <option value="200-249">200 - 249 Employees (VC Funded)</option>
          <option value="250+">250+ Employees (Enterprise)</option>
        </select>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label className="body-md" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-ink)', fontWeight: 500 }}>
          Primary Engineering Challenge
        </label>
        <select className="input select" style={{ padding: '12px 16px' }}>
          <option value="">Select challenge...</option>
          <option value="llm-timeouts">LLM API Timeouts / Async Blocking</option>
          <option value="data-extraction">Unstructured Data Extraction (RAG)</option>
          <option value="compliance">DPDP / HIPAA Compliance Automation</option>
          <option value="tally-erp">Tally ERP / Legacy System Telemetry</option>
          <option value="other">Other Architecture Need</option>
        </select>
      </div>

      <div style={{ paddingTop: '32px', borderTop: '1px solid var(--color-hairline)' }}>
        {isDisqualified ? (
          <div style={{ padding: '24px', background: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-ruby)', textAlign: 'center' }}>
            <p className="body-md" style={{ color: 'var(--color-ink)', marginBottom: '24px' }}>
              Due to our rapid-deployment architectural model and 10-day sprint cycles, we currently exclusively partner with agile teams under 250 employees.
            </p>
            <a 
              href="https://calendly.com/nexaworkss/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Join Enterprise Waitlist
            </a>
          </div>
        ) : (
          <div>
            <p className="caption" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px', textAlign: 'center' }}>Choose your region to start:</p>
            <div style={{ display: 'flex', gap: '16px', width: '100%', flexDirection: 'column' }}>
              <RegionalCTA region="US" />
              <RegionalCTA region="IN" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
