'use client';

import { useState } from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';
import './page.css';



export default function TallyAutomationPage() {
  const [hours, setHours] = useState(40);
  
  const hoursSavedPerYear = hours * 12;
  const costSavedPerYear = hoursSavedPerYear * 500;
  
  return (
    <main>
      <div className="hero-wrapper">
        <GradientMesh>
          <section className="hero-section container">
            <span className="tag">INDIA AUTOMATION</span>
            <h1 className="display-xxl">Automate Tally ERP to PowerBI in days, not months</h1>
            <p className="body-lg" style={{ color: "var(--color-ink-secondary)", marginTop: "24px", maxWidth: "800px" }}>
              Stop wasting 40+ hours per month on manual Tally data exports. Our Python ETL pipelines transform your Tally Prime data into real-time BI dashboards.
            </p>
            <div className="hero-actions" style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://wa.me/919999999999?text=Hi%20NexaWorks%2C%20I%20need%20to%20automate%20Tally%20ERP%20extraction%20for%20my%20BI%20dashboard" className="btn-primary btn-lg" style={{ background: "#25D366", color: "#fff", textDecoration: "none", borderRadius: "9999px", display: "inline-block", padding: "12px 24px" }}>Chat on WhatsApp</a>
              <Link href="#architecture" className="btn-secondary btn-lg">View Architecture</Link>
            </div>
          </section>
        </GradientMesh>
      </div>

      <section className="section-soft">
        <div className="container">
          <h2 className="display-xl">Why manual Tally exports are costing you lakhs</h2>
          <div className="answer-block">
            <strong>Manual Tally ERP data extraction through CSV exports wastes 40+ finance team hours monthly, introduces data entry errors, and delivers outdated business intelligence that delays critical operational decisions.</strong>
          </div>
          <div className="problem-details">
            <p className="body-md">The manual process of exporting CSVs from Tally Prime involves downloading specific ledgers, transforming the data in Excel, and uploading it to BI tools. This introduces massive opportunity cost for your finance team.</p>
            <p className="body-md">High manual intervention leads to unacceptable error rates, resulting in inaccurate reporting to management.</p>
            <p className="body-md">Most importantly, relying on periodic manual exports means your leadership is making decisions based on data that is already days or weeks old, crippling your operational agility.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="display-xl" style={{ marginBottom: "40px" }}>Calculate your savings</h2>
          <div className="calculator-container card-dashboard">
            <div className="slider-group">
              <label className="heading-md" htmlFor="hours-slider">Hours spent on manual Tally exports per month: {hours}</label>
              <input 
                id="hours-slider"
                type="range" 
                min="10" 
                max="100" 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))}
                className="slider-input"
              />
            </div>
            
            <div className="calc-stats grid-3">
              <div className="calc-stat-card">
                <div className="display-lg body-tabular">{hoursSavedPerYear}</div>
                <div className="caption">Hours saved per year</div>
              </div>
              <div className="calc-stat-card">
                <div className="display-lg body-tabular">₹{costSavedPerYear.toLocaleString('en-IN')}</div>
                <div className="caption">Cost saved per year (at ₹500/hr)</div>
              </div>
              <div className="calc-stat-card">
                <div className="display-lg body-tabular">90%</div>
                <div className="caption">Error reduction</div>
              </div>
            </div>
            
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/contact" className="btn-primary">Start Automating Today →</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="section">
        <div className="container">
          <h2 className="display-xl">How we automate Tally ERP extraction</h2>
          <div className="architecture-diagram card-dashboard" style={{ marginTop: "40px" }}>
            <div className="arch-flow">
              <div className="arch-box">Tally Prime</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">ODBC/XML Parser</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Python ETL Pipeline</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Cloud Data Warehouse</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">PowerBI/Tableau Dashboard</div>
            </div>
          </div>
          <div className="arch-explanation grid-2" style={{ marginTop: "40px" }}>
            <div>
              <h3 className="heading-md">Tally Prime ODBC/XML</h3>
              <p className="body-md">Automated parsing of Tally's XML ledger data via ODBC connectors, bypassing the UI entirely.</p>
            </div>
            <div>
              <h3 className="heading-md">Python ETL</h3>
              <p className="body-md">Async scripts running on Celery/Temporal schedules for periodic, highly reliable data extraction.</p>
            </div>
            <div>
              <h3 className="heading-md">Cloud Warehouse</h3>
              <p className="body-md">Structured data pushed directly to highly scalable PostgreSQL or BigQuery instances.</p>
            </div>
            <div>
              <h3 className="heading-md">BI Dashboard</h3>
              <p className="body-md">Real-time PowerBI/Tableau dashboards hooked into the warehouse with auto-refresh enabled.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <h2 className="display-xl" style={{ marginBottom: "40px" }}>The transformation</h2>
          <div className="grid-2">
            <div className="card-elevated">
              <h3 className="heading-md" style={{ marginBottom: "16px" }}>Before NexaWorks</h3>
              <ul className="feature-list body-md">
                <li>Manual CSV exports and Excel manipulation</li>
                <li>Data is always 2+ days old</li>
                <li>Highly error-prone data entry</li>
                <li>40+ finance team hours wasted monthly</li>
                <li>No real-time visibility for management</li>
              </ul>
            </div>
            <div className="card-pricing-featured">
              <h3 className="heading-md" style={{ marginBottom: "16px" }}>After NexaWorks</h3>
              <ul className="feature-list body-md">
                <li>Automated zero-touch ETL pipeline</li>
                <li>Real-time data synchronization</li>
                <li>99.5% accuracy rate guaranteed</li>
                <li>0 manual hours required</li>
                <li>Live, auto-updating BI dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="display-xl" style={{ marginBottom: "40px" }}>Frequently asked questions</h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary className="heading-md">How to automate Tally Prime XML data extraction to PowerBI?</summary>
              <div className="faq-answer body-md">We use Tally's ODBC interface and XML API to programmatically extract ledger data, transform it using a Python ETL pipeline, and load it into a cloud database connected directly to PowerBI.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">Does this work with Tally Prime and older Tally ERP 9?</summary>
              <div className="faq-answer body-md">Yes, our automation pipelines are compatible with both Tally Prime and legacy Tally ERP 9 deployments, standardizing the output regardless of the source version.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">How long does implementation take?</summary>
              <div className="faq-answer body-md">A standard implementation covering sales, purchase, and general ledgers to PowerBI typically takes under 2 weeks from kickoff to production deployment.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">Is my Tally data secure during the extraction process?</summary>
              <div className="faq-answer body-md">Absolutely. The extraction scripts run securely within your network, encrypting the data in transit (TLS 1.3) before pushing it to your private cloud data warehouse.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">What is the cost of automated Tally extraction?</summary>
              <div className="faq-answer body-md">We offer fixed-cost implementation packages starting at competitive rates for the Indian market, ensuring quick ROI based on the hours of manual labor saved.</div>
            </details>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How to automate Tally Prime XML data extraction to PowerBI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use Tally's ODBC interface and XML API to programmatically extract ledger data, transform it using a Python ETL pipeline, and load it into a cloud database connected directly to PowerBI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does this work with Tally Prime and older Tally ERP 9?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our automation pipelines are compatible with both Tally Prime and legacy Tally ERP 9 deployments, standardizing the output regardless of the source version."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does implementation take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A standard implementation covering sales, purchase, and general ledgers to PowerBI typically takes under 2 weeks from kickoff to production deployment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is my Tally data secure during the extraction process?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The extraction scripts run securely within your network, encrypting the data in transit (TLS 1.3) before pushing it to your private cloud data warehouse."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the cost of automated Tally extraction?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer fixed-cost implementation packages starting at competitive rates for the Indian market, ensuring quick ROI based on the hours of manual labor saved."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      <section className="section-dark">
        <div className="container text-center">
          <h2 className="display-xl" style={{ marginBottom: "24px" }}>Automate your Tally ERP today</h2>
          <p className="body-lg" style={{ marginBottom: "32px", color: "var(--color-on-primary)" }}>Start an architecture chat on WhatsApp. Implementation in under 2 weeks.</p>
          <a href="https://wa.me/919999999999?text=Hi%20NexaWorks%2C%20I%20need%20to%20automate%20Tally%20ERP%20extraction%20for%20my%20BI%20dashboard" className="btn-primary btn-lg" style={{ background: "#25D366", color: "#fff", textDecoration: "none", borderRadius: "9999px", display: "inline-block", padding: "12px 24px" }}>Chat on WhatsApp →</a>
        </div>
      </section>
    </main>
  );
}
