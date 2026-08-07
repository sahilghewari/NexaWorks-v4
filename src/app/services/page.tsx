import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GradientMesh from "@/components/GradientMesh";
import "./services.css";

export const metadata: Metadata = {
  title: "Services | NexaWorks",
  description: "End-to-end AI automation solutions engineered for production environments.",
};

export default function Services() {
  return (
    <main>
      <GradientMesh>
        <section className="services-hero">
          <h1 className="display-xxl">AI solutions engineered for production</h1>
          <p className="body-lg">
            From agentic workflows to enterprise RAG, we build AI systems that run reliably at scale.
          </p>
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
            <Image src="/services/ai-agents.jpg" alt="AI Agents Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
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
            <Image src="/services/workflow-automation.jpg" alt="Workflow Automation Pipelines" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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
            <Image src="/services/internal-tools.jpg" alt="Custom Internal Tools Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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
            <Image src="/services/llm-integrations.jpg" alt="LLM Integration Pipeline" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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
            <Image src="/services/rag-systems.jpg" alt="RAG System Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </article>

      </section>
    </main>
  );
}
