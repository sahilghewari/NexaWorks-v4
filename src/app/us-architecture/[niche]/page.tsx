import React from 'react';
import Link from 'next/link';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';
import Script from 'next/script';
import ROICalculator from '@/components/Calculators/ROICalculator';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// This acts as our temporary CMS data
const usNicheData = {
  'async-llm-refactoring': {
    title: 'Async LLM API Refactoring',
    heroSubtitle: 'Production rescue for FastAPI & Uvicorn LLM pipelines.',
    heroDescription: 'Resolve blocking WSGI traps, thread starvation, and timeout failures by implementing true ASGI asynchronous event loops.',
    schemaQuestion: 'How do you fix blocking WSGI traps in Uvicorn LLM pipelines?',
    schemaAnswer: 'To resolve WSGI blocking in LLM pipelines, NexaWorks replaces synchronous definitions with ASGI-compliant async def functions, utilizing Uvicorn event loops and Celery background workers to prevent thread starvation during inference.',
    technicalProof: 'AI-powered pipeline architecture.'
  },
  'pydantic-clinical-extraction': {
    title: 'Pydantic Clinical Extraction',
    heroSubtitle: 'HIPAA-compliant structured data extraction.',
    heroDescription: 'Convert unstructured clinical notes into rigid JSON utilizing Pydantic schema enforcement and LLM retry mechanisms.',
    schemaQuestion: 'How do you prevent LLM hallucinations when extracting clinical notes?',
    schemaAnswer: 'To prevent hallucinations in clinical extraction, NexaWorks utilizes strict Pydantic models to validate LLM JSON outputs during inference, triggering automated retry loops with error-specific feedback if physiological boundaries are violated.',
    technicalProof: 'HIPAA compliant extraction protocols.'
  },
  'sales-engineering-rag': {
    title: 'Sales Engineering RAG',
    heroSubtitle: 'Automated technical RFP and security questionnaire response.',
    heroDescription: 'Deploy advanced vector database architectures to semantically search proprietary engineering documentation and generate precise RFP responses.',
    schemaQuestion: 'How do you automate technical sales engineering RFPs using AI?',
    schemaAnswer: 'NexaWorks automates technical RFPs by deploying GraphRAG and vector similarity search over proprietary security documentation, ensuring LLM-generated questionnaire responses are explicitly linked to verified internal engineering policies.',
    technicalProof: 'Vector database semantic search frameworks.'
  },
  'sla-telemetry-monitoring': {
    title: 'SLA Telemetry Monitoring',
    heroSubtitle: 'Real-time observability for Python data pipelines.',
    heroDescription: 'Track LLM inference latency against SLA thresholds with OpenTelemetry integration.',
    schemaQuestion: 'How do you monitor LLM pipeline inference latency against SLA thresholds?',
    schemaAnswer: 'NexaWorks monitors LLM latency by instrumenting FastAPI and Celery workers with OpenTelemetry, pushing distributed traces to real-time observability dashboards to detect and alert on sub-second SLA threshold violations.',
    technicalProof: 'Real-time pipeline telemetry integration.'
  },
  'freelance-agency-rfp': {
    title: 'Freelance Agency RFP',
    heroSubtitle: 'AI-powered proposal generation pipelines.',
    heroDescription: 'Structure proprietary agency data for Retrieval-Augmented Generation to automate high-converting B2B marketing proposals.',
    schemaQuestion: 'How do you structure proprietary agency data for LLM RFP generation?',
    schemaAnswer: 'To structure proprietary agency data for LLMs, NexaWorks builds automated ingestion pipelines that parse historical proposals, embed the winning criteria into vector databases, and utilize RAG to generate highly contextualized new bids.',
    technicalProof: 'Proprietary RAG generation engines.'
  }
};

export async function generateStaticParams() {
  return Object.keys(usNicheData).map((niche) => ({
    niche,
  }));
}

export async function generateMetadata({ params }: { params: { niche: string } }): Promise<Metadata> {
  const nicheKey = params.niche as keyof typeof usNicheData;
  const data = usNicheData[nicheKey];
  
  if (!data) {
    return { title: 'Architecture Not Found' };
  }

  // Ensure dateModified matches the visible timestamp exactly (Phase 2 Temporal Freshness)
  const lastUpdatedISO = "2026-08-01T00:00:00Z";

  return {
    title: `${data.title} | NexaWorks US`,
    description: data.technicalProof,
    alternates: {
      canonical: `https://nexaworks.tech/us-architecture/${params.niche}`
    },
    openGraph: {
      title: data.title,
      description: data.technicalProof,
      modifiedTime: lastUpdatedISO,
    }
  };
}

export default function USArchitecturePage({ params }: { params: { niche: string } }) {
  const nicheKey = params.niche as keyof typeof usNicheData;
  const data = usNicheData[nicheKey];
  
  if (!data) {
    notFound();
  }

  // Phase 3: Advanced JSON-LD Generation
  const lastUpdatedISO = "2026-08-01T00:00:00Z";
  
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": data.title,
    "description": data.technicalProof,
    "image": [
      "https://nexaworks.tech/images/architecture-og.png"
    ],
    "author": {
      "@type": "Organization",
      "name": "NexaWorks"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexaWorks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexaworks.tech/logo.png"
      }
    },
    "datePublished": "2026-01-15T00:00:00Z",
    "dateModified": lastUpdatedISO,
    "proficiencyLevel": "Expert",
    "dependencies": "Python, FastAPI, Uvicorn, Celery, Pydantic"
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
      <Script id={`tech-schema-${params.niche}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <Script id={`service-schema-${params.niche}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <main className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ marginBottom: '48px' }}>
            <Link href="/" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              &larr; Back to US Architecture
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
              <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
                {data.heroSubtitle}
              </p>
              <p className="body-lg" style={{ color: 'var(--color-ink-mute)', marginBottom: '40px', maxWidth: '600px' }}>
                {data.heroDescription}
              </p>
              <Link href="/contact" className="btn-primary btn-lg">
                Schedule a 15-Minute Technical Discovery
              </Link>
            </div>
            
            {/* Visual Abstract */}
            <div className="card-cream flex-center" style={{ minHeight: '400px' }}>
              <div className="caption" style={{ color: 'var(--color-ink-mute)', textAlign: 'center' }}>
                [Architectural Diagram: FastAPI -&gt; Celery -&gt; Redis -&gt; Temporal]
              </div>
            </div>
          </div>

          {/* ROI Calculator Section */}
          <div style={{ marginBottom: '96px' }}>
            <ROICalculator />
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
