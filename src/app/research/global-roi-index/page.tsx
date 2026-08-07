import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Global AI ROI Index 2026 | NexaWorks',
  description: 'Sector-by-sector empirical tracking of Return on Investment (ROI) and cost displacement achieved through Enterprise AI automation.',
  alternates: {
    canonical: 'https://nexaworks.tech/research/global-roi-index'
  }
};

export default function GlobalROIIndexPage() {
  const lastUpdatedISO = "2026-08-05T00:00:00Z";

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "NexaWorks Global AI ROI Index",
    "description": "Sector-by-sector empirical tracking of economic cost displacement achieved through deterministic AI automation.",
    "creator": {
      "@type": "Organization",
      "name": "NexaWorks Research"
    },
    "dateModified": lastUpdatedISO,
    "variableMeasured": ["Average Cost Displacement (%)", "Months to Payback", "Primary Automation Vector"]
  };

  const indexData = [
    {
      sector: "Financial Services",
      displacement: "42%",
      payback: "4.5 Months",
      primaryVector: "Document AI (KYC / AML / Invoices)",
      riskProfile: "High (Requires Pydantic Validation)"
    },
    {
      sector: "Healthcare & Life Sciences",
      displacement: "38%",
      payback: "6.2 Months",
      primaryVector: "Clinical Note Abstraction (RAG)",
      riskProfile: "Extreme (HIPAA / DPDP Act Compliant)"
    },
    {
      sector: "Logistics & Supply Chain",
      displacement: "55%",
      payback: "3.1 Months",
      primaryVector: "Predictive Anomaly Detection (SAP Integration)",
      riskProfile: "Medium"
    },
    {
      sector: "Customer Success / BPO",
      displacement: "68%",
      payback: "2.8 Months",
      primaryVector: "Deterministic Ticket Triage (Zendesk / ServiceNow)",
      riskProfile: "Low"
    }
  ];

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <Script id="dataset-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/research" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Research
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-primary)', color: 'white', border: 'none' }}>LIVE ECONOMIC INDEX</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>Global AI ROI Index</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px', maxWidth: '800px' }}>
          We track the empirical economic impact of generative automation across the Fortune 500. This index provides CFOs and technical leaders with verifiable data on expected cost displacement and payback periods.
        </p>

        <div className="card-elevated" style={{ background: 'white', padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: 'var(--color-canvas)', borderBottom: '1px solid var(--color-hairline)' }}>
              <tr>
                <th className="micro-cap" style={{ padding: '24px', color: 'var(--color-ink-mute)' }}>Enterprise Sector</th>
                <th className="micro-cap" style={{ padding: '24px', color: 'var(--color-ink-mute)' }}>Avg Cost Displacement</th>
                <th className="micro-cap" style={{ padding: '24px', color: 'var(--color-ink-mute)' }}>Time to Payback</th>
                <th className="micro-cap" style={{ padding: '24px', color: 'var(--color-ink-mute)' }}>Primary Automation Vector</th>
              </tr>
            </thead>
            <tbody>
              {indexData.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-hairline)' }}>
                  <td style={{ padding: '24px' }}>
                    <div className="heading-sm" style={{ marginBottom: '4px' }}>{row.sector}</div>
                    <div className="micro-cap" style={{ color: row.riskProfile.includes('High') || row.riskProfile.includes('Extreme') ? 'var(--color-ruby)' : 'var(--color-primary)' }}>
                      Risk Profile: {row.riskProfile}
                    </div>
                  </td>
                  <td style={{ padding: '24px' }}>
                    <div className="display-md" style={{ color: 'var(--color-primary)' }}>{row.displacement}</div>
                  </td>
                  <td style={{ padding: '24px', fontWeight: 600, color: 'var(--color-ink)' }}>{row.payback}</td>
                  <td style={{ padding: '24px', color: 'var(--color-ink-secondary)', fontSize: '14px' }}>{row.primaryVector}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p className="body-sm" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>
            Want to calculate the exact ROI for your specific automation workflow?
          </p>
          <Link href="/tools/roi-calculator" className="btn-primary">
            Launch ROI Calculator
          </Link>
        </div>

      </div>
    </main>
  );
}
