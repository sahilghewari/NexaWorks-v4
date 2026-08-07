import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'TallyPrime 7.0 API Integration | Automate GSTR-2B & Invoice Sync',
  description: 'Technical guide for integrating AI agents with TallyPrime 7.0 via XML over HTTP. Learn how to bypass ODBC read limits and fully automate GSTR-2B reconciliation and invoice entry.',
};

export default function TallyPrimeIntegrationPage() {
  const xmlPayload = `<ENVELOPE>
  <HEADER>
    <TALLYREQUEST>Import Data</TALLYREQUEST>
  </HEADER>
  <BODY>
    <IMPORTDATA>
      <REQUESTDESC>
        <REPORTNAME>Vouchers</REPORTNAME>
        <STATICVARIABLES>
          <SVCURRENTCOMPANY>NexaWorks India Pvt Ltd</SVCURRENTCOMPANY>
        </STATICVARIABLES>
      </REQUESTDESC>
      <REQUESTDATA>
        <TALLYMESSAGE xmlns:UDF="TallyUDF">
          <VOUCHER VCHTYPE="Purchase" ACTION="Create">
            <DATE>20260805</DATE>
            <VOUCHERTYPENAME>Purchase</VOUCHERTYPENAME>
            <PARTYLEDGERNAME>Tech Vendor Pvt Ltd</PARTYLEDGERNAME>
            <ALLLEDGERENTRIES.LIST>
              <LEDGERNAME>Tech Vendor Pvt Ltd</LEDGERNAME>
              <ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
              <AMOUNT>118000.00</AMOUNT>
            </ALLLEDGERENTRIES.LIST>
            <ALLLEDGERENTRIES.LIST>
              <LEDGERNAME>Software Licenses</LEDGERNAME>
              <ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>
              <AMOUNT>-100000.00</AMOUNT>
            </ALLLEDGERENTRIES.LIST>
            <ALLLEDGERENTRIES.LIST>
              <LEDGERNAME>IGST</LEDGERNAME>
              <ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>
              <AMOUNT>-18000.00</AMOUNT>
            </ALLLEDGERENTRIES.LIST>
          </VOUCHER>
        </TALLYMESSAGE>
      </REQUESTDATA>
    </IMPORTDATA>
  </BODY>
</ENVELOPE>`;

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div style={{ marginBottom: '48px' }}>
              <Link href="/in-automation" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                &larr; Back to Automations
              </Link>
            </div>

            <span className="tag" style={{ marginBottom: '16px' }}>FINANCE OPERATIONS</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              TallyPrime 7.0 API Integration Guide
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              Bypass ODBC read limitations. Use AI agents to write data bidirectionally via XML over HTTP (Port 9000), fully automating Accounts Payable and GSTR-2B reconciliation.
            </p>

            <div className="grid-2" style={{ gap: '48px' }}>
              <div>
                <h2 className="heading-lg" style={{ marginBottom: '24px' }}>The Automation Architecture</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>1. Avoid ODBC for Write Operations</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>ODBC drivers are sufficient for read-heavy analytics (PowerBI), but to create vouchers autonomously, agents must post XML payloads directly to Tally's HTTP server running on port 9000.</span>
                  </li>
                  <li style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--color-hairline)' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>2. Manage State with AlterID</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>To prevent duplicate voucher entry during sync, always fetch data incrementally using the <code>LastAlterID</code> parameter.</span>
                  </li>
                  <li>
                    <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>3. GSTR-2B Reconciliation</strong>
                    <span style={{ color: 'var(--color-ink-secondary)' }}>Automated matching requires identical entity resolution. AI agents extract the exact GSTIN and invoice total from the PDF to compare against the JSON payload from the GST portal, passing verified matches into the XML generator.</span>
                  </li>
                </ul>
              </div>

              <div className="card-elevated" style={{ background: '#1e1e1e', color: '#d4d4d4', overflow: 'hidden' }}>
                <div style={{ padding: '16px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                  <span className="micro-cap" style={{ color: '#888' }}>Purchase Voucher Payload (POST :9000)</span>
                </div>
                <div style={{ padding: '24px', overflowX: 'auto' }}>
                  <pre style={{ margin: 0, fontSize: '13px' }}>
                    <code>{xmlPayload}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '64px', textAlign: 'center' }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                Book TallyPrime Integration Audit
              </button>
            </div>

          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
