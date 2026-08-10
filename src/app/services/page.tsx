import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GradientMesh from "@/components/GradientMesh";
import "./services.css";

export const metadata: Metadata = {
  alternates: { canonical: "https://nexaworks.tech/services" },
  title: 'Platform Capabilities | NexaWorks',
  description: "End-to-end Context Reconstruction solutions engineered for production environments.",
};

export default function ServicesPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>CAPABILITIES</span>
            <h1 className="display-xxl" style={{ marginBottom: '24px' }}>The Architecture of Context</h1>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              We build the infrastructure that reconstructs context across your enterprise.
            </p>
          </div>
        </section>
      </GradientMesh>

      <section className="services-list">
        
        <article className="service-block">
          <div className="service-content">
            <h2 className="display-lg">AI Agents & Agentic Workflows</h2>
            <p className="body-lg">
              Built on LangGraph's stateful graph architecture. Deterministic control over stochastic LLM outputs.
            </p>
            <ul className="service-features body-md">
              <li>Native persistence and memory</li>
              <li>Cyclic reasoning capabilities</li>
              <li>Human-in-the-loop checkpoints</li>
            </ul>
            <Link href="/contact" className="btn-primary">Discuss Your Use Case</Link>
          </div>
          <div className="service-visual shadow-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src="/services/ai-agents.webp" alt="AI Agents Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
          </div>
        </article>

        <article className="service-block reverse">
          <div className="service-content">
            <h2 className="display-lg">Workflow Automation</h2>
            <p className="body-lg">
              End-to-end business process automation using robust event-driven architectures.
            </p>
            <ul className="service-features body-md">
              <li>FastAPI & Celery backends</li>
              <li>Redis for caching & messaging</li>
              <li>Temporal for durable execution</li>
            </ul>
            <Link href="/contact" className="btn-primary">Discuss Your Use Case</Link>
          </div>
          <div className="service-visual shadow-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src="/services/workflow-automation.webp" alt="Workflow Automation Pipelines" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>

        <article className="service-block">
          <div className="service-content">
            <h2 className="display-lg">Custom Internal Tools</h2>
            <p className="body-lg">
              Bespoke tools built with Python that replace manual operations and drive efficiency.
            </p>
            <ul className="service-features body-md">
              <li>ROI calculators</li>
              <li>Document processors</li>
              <li>Real-time monitoring dashboards</li>
            </ul>
            <Link href="/contact" className="btn-primary">Discuss Your Use Case</Link>
          </div>
          <div className="service-visual shadow-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src="/services/internal-tools.webp" alt="Custom Internal Tools Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>

        <article className="service-block reverse">
          <div className="service-content">
            <h2 className="display-lg">LLM Integrations</h2>
            <p className="body-lg">
              Production-grade LLM pipelines with robust validation, async architecture, and enterprise security.
            </p>
            <ul className="service-features body-md">
              <li>Pydantic structured outputs</li>
              <li>Async execution pipelines</li>
              <li>Fine-tuning vs. RAG evaluations</li>
            </ul>
            <Link href="/contact" className="btn-primary">Discuss Your Use Case</Link>
          </div>
          <div className="service-visual shadow-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src="/services/llm-integrations.webp" alt="LLM Integration Pipeline" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>

        <article className="service-block">
          <div className="service-content">
            <h2 className="display-lg">RAG Systems</h2>
            <p className="body-lg">
              Hybrid vector + graph retrieval architectures for enterprise knowledge and data extraction.
            </p>
            <ul className="service-features body-md">
              <li>Multi-hop reasoning algorithms</li>
              <li>Explainable AI citations</li>
              <li>Regulatory compliance (SOC2/HIPAA)</li>
            </ul>
            <Link href="/contact" className="btn-primary">Discuss Your Use Case</Link>
          </div>
          <div className="service-visual shadow-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
            <Image src="/services/rag-systems.webp" alt="RAG System Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>

      </section>
    </main>
  );
}
