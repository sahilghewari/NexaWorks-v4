import React from 'react';
import Link from 'next/link';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ROICalculator from '@/components/Calculators/ROICalculator';

const inNicheData = {
  'dpdp-act-pii-redaction': {
    title: 'DPDP Act PII Redaction',
    heroSubtitle: 'Python workflows for Consent Manager integrations.',
    heroDescription: 'Avoid ₹250 Crore penalties by deploying historical data discovery pipelines utilizing NER to identify and redact PII.',
    schemaQuestion: 'How do you automate DPDP compliant PII masking in legacy databases?',
    schemaAnswer: 'NexaWorks automates DPDP compliance by deploying Python pipelines into legacy databases to perform historical data discovery, utilizing Named Entity Recognition (NER) models to identify and redact Personally Identifiable Information (PII).',
    technicalProof: 'DPDP compliant Python extraction.'
  },
  'tally-erp-bi-pipelines': {
    title: 'Tally ERP BI Pipelines',
    heroSubtitle: 'Automated data extraction into modern Business Intelligence.',
    heroDescription: 'Automate Tally Prime ODBC XML data extraction via Python ETL pipelines, syncing historical ledgers directly to PowerBI.',
    schemaQuestion: 'How to automate Tally ERP XML parsing with Python?',
    schemaAnswer: 'To automate Tally extraction, NexaWorks utilizes asynchronous Python ETL pipelines running on a schedule to query the Tally database via ODBC, parse the complex XML ledgers, and push structured data to PowerBI.',
    technicalProof: 'Tally XML ETL infrastructure.'
  },
  'whatsapp-saas-telemetry': {
    title: 'WhatsApp SaaS Telemetry',
    heroSubtitle: 'Event-driven WhatsApp Business API integration.',
    heroDescription: 'Build async event loops for WhatsApp webhooks, tracking SaaS onboarding telemetry for immediate B2B sales activation.',
    schemaQuestion: 'How do you build async event loops for WhatsApp Business API webhooks?',
    schemaAnswer: 'NexaWorks builds async event loops for WhatsApp APIs using FastAPI to handle highly concurrent incoming webhooks without blocking, instantly parsing user responses and routing them to the CRM via Celery background tasks.',
    technicalProof: 'Asynchronous WABA webhook routing.'
  },
  'cre-lease-abstraction': {
    title: 'CRE Lease Abstraction',
    heroSubtitle: 'Automated commercial real estate lease extraction.',
    heroDescription: 'Prevent LLM hallucinations in commercial real estate lease abstraction using structured Pydantic schema validation.',
    schemaQuestion: 'How to prevent LLM hallucinations in commercial real estate lease abstraction?',
    schemaAnswer: 'To prevent hallucinations in CRE abstraction, NexaWorks utilizes strict Pydantic schemas to enforce LLM JSON output, ensuring extracted clauses deterministically map to the required data structure before entering the database.',
    technicalProof: 'Pydantic CRE abstraction pipelines.'
  }
};

export async function generateStaticParams() {
  return Object.keys(inNicheData).map((niche) => ({
    niche,
  }));
}

export async function generateMetadata({ params }: { params: { niche: string } }): Promise<Metadata> {
  const nicheKey = params.niche as keyof typeof inNicheData;
  const data = inNicheData[nicheKey];
  
  if (!data) {
    return { title: 'Architecture Not Found' };
  }

  // Phase 2: Temporal Freshness
  const lastUpdatedISO = "2026-08-01T00:00:00Z";

  return {
    title: `${data.title} | NexaWorks India`,
    description: data.technicalProof,
    alternates: {
      canonical: `https://nexaworks.tech/in-automation/${params.niche}`
    },
    openGraph: {
      title: data.title,
      description: data.technicalProof,
      modifiedTime: lastUpdatedISO,
    }
  };
}

export default function INAutomationPage({ params }: { params: { niche: string } }) {
  const nicheKey = params.niche as keyof typeof inNicheData;
  const data = inNicheData[nicheKey];
  
  if (!data) {
    notFound();
  }

  // Phase 3: Advanced JSON-LD Generation (SoftwareApplication for calculators)
  const lastUpdatedISO = "2026-08-01T00:00:00Z";

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${data.title} Calculator Tool`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "provider": {
      "@type": "Organization",
      "name": "NexaWorks"
    },
    "description": "Calculate ROI and risk exposure for automation deployments."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "Organization",
      "name": "NexaWorks"
    },
    "description": data.technicalProof
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": data.schemaQuestion,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": data.schemaAnswer
      }
    }]
  };

  return (
    <>
      <Script id={`faq-schema-${params.niche}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id={`software-schema-${params.niche}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <Script id={`service-schema-${params.niche}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <main className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ marginBottom: '48px' }}>
            <Link href="/" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              &larr; Back to India Automation
            </Link>
          </div>

          <div className="grid-2" style={{ marginBottom: '96px', alignItems: 'center' }}>
            <div>
              <h1 className="display-xl" style={{ marginBottom: '16px' }}>
                {data.title}
              </h1>
              {/* Phase 2: AI Search Freshness - Visible Timestamp */}
              <div className="caption" style={{ color: 'var(--color-ink-mute)', marginBottom: '24px', fontWeight: 600 }}>
                Last Updated: August 2026
              </div>
              <p className="heading-md" style={{ color: 'var(--color-ruby)', marginBottom: '24px' }}>
                {data.heroSubtitle}
              </p>
              <p className="body-lg" style={{ color: 'var(--color-ink-mute)', marginBottom: '40px', maxWidth: '600px' }}>
                {data.heroDescription}
              </p>
              
              <a 
                href={`https://wa.me/8356954152?text=${encodeURIComponent("Hi NexaWorks, I'm interested in an architecture consultation regarding automation and compliance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                Start WhatsApp Architecture Chat
              </a>
            </div>
            
            {/* Regulatory Calculator Module */}
            <div className="card-elevated" style={{ border: '2px solid var(--color-ruby)' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="tag" style={{ background: 'var(--color-ruby)', color: 'white', border: 'none' }}>COMPLIANCE EXPOSURE CALCULATOR</span>
              </div>
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>Calculate your risk</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
                Evaluate the financial penalties of non-compliance under the DPDP Act or SLA failures.
              </p>
              
              {/* Added standard ROICalculator component to fulfill the schema */}
              <ROICalculator />

            </div>
          </div>

          {/* AEO Answer Block */}
          <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '64px' }}>
            <AEOAnswerBlock 
              question={data.schemaQuestion} 
              answer={data.schemaAnswer} 
            />
          </div>
          
        </div>
      </main>
    </>
  );
}
