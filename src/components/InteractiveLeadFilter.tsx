"use client";

import React, { useState } from 'react';
import RegionalCTA from '@/components/RegionalCTA';

export default function InteractiveLeadFilter() {
  const [companySize, setCompanySize] = useState<string>('');

  const isDisqualified = companySize === '250+';

  return (
    <div className="contact-filter-card">
      <h2 className="contact-filter-title">Let's audit your architecture</h2>
      
      <div style={{ marginBottom: '24px' }}>
        <label className="contact-label" htmlFor="company-size-select">
          Company Size
        </label>
        <select 
          id="company-size-select"
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          className="contact-select"
        >
          <option value="">Select company size...</option>
          <option value="1-49">1 - 49 Employees (Agile)</option>
          <option value="50-199">50 - 199 Employees (Growth)</option>
          <option value="200-249">200 - 249 Employees (VC Funded)</option>
          <option value="250+">250+ Employees (Enterprise)</option>
        </select>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label className="contact-label" htmlFor="engineering-challenge-select">
          Primary Engineering Challenge
        </label>
        <select id="engineering-challenge-select" className="contact-select">
          <option value="">Select challenge...</option>
          <option value="llm-timeouts">LLM API Timeouts / Async Blocking</option>
          <option value="data-extraction">Unstructured Data Extraction (RAG)</option>
          <option value="compliance">DPDP / HIPAA Compliance Automation</option>
          <option value="tally-erp">Tally ERP / Legacy System Telemetry</option>
          <option value="other">Other Architecture Need</option>
        </select>
      </div>

      <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {isDisqualified ? (
          <div className="contact-disqualified">
            <p>
              Due to our rapid-deployment architectural model and 10-day sprint cycles, we currently exclusively partner with agile teams under 250 employees.
            </p>
            <a 
              href="https://calendly.com/nexaworkss/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ display: 'inline-flex', width: 'auto' }}
            >
              Join Enterprise Waitlist
            </a>
          </div>
        ) : (
          <div>
            <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Choose your region to start:</p>
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
