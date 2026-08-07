import GradientMesh from "@/components/GradientMesh";
import Link from "next/link";
import RegionalCTA from "@/components/RegionalCTA";
import Image from "next/image";

// Map slugs to explicit technical/architectural proof required by the Market Intelligence Research
const serviceData: Record<string, { subtitle: string, proof: string[], image: string }> = {
  'ai-agents': {
    subtitle: 'Stateful multi-agent orchestration for enterprise environments.',
    proof: [
      'LangGraph Architecture: We abandon brittle wrappers for stateful, graph-based execution environments providing deterministic control over stochastic LLM outputs.',
      'Cyclic Reasoning & Checkpointing: Workflows feature native human-in-the-loop escalation paths and explicit retry loops.',
      'Oracle Agent Memory: Persistent selective memory substrates that decouple execution logic from historical reasoning to eliminate context bloat.'
    ],
    image: '/services/ai-agents.jpg'
  },
  'workflow-automation': {
    subtitle: 'Event-driven, asynchronous enterprise process automation.',
    proof: [
      'Asynchronous Event Loops: Built on true ASGI frameworks (FastAPI/Uvicorn) to prevent thread starvation during extensive data processing.',
      'Celery & Temporal: Distributed task queues handling long-running background generative tasks without blocking the main event thread.',
      'Voice AI Latency Budgets: Cascaded STT -> LLM -> TTS pipelines aggressively optimized to maintain sub-700ms end-to-end response times.'
    ],
    image: '/services/workflow-automation.jpg'
  },
  'llm-integrations': {
    subtitle: 'Secure, dynamic tool discovery and enterprise integrations.',
    proof: [
      'Model Context Protocol (MCP): Universal bidirectional communication standard enabling dynamic tool discovery without brittle point-to-point APIs.',
      'Progressive Disclosure: Massive enterprise datasets are kept in secure execution environments; the LLM only receives relevant, filtered data.',
      'Pydantic Schema Enforcement: Rigid output validation preventing hallucinations in structured enterprise data extraction.'
    ],
    image: '/services/llm-integrations.jpg'
  },
  'rag-systems': {
    subtitle: 'Auditable knowledge retrieval for highly regulated industries.',
    proof: [
      'Hybrid Retrieval: Combining high-speed Vector RAG for broad recall with deterministic GraphRAG for complex multi-hop reasoning.',
      'Explainability & Compliance: Explicit entity-relationship mapping ensures total traceability for EU AI Act and BFSI regulatory compliance.',
      'Contextual Grounding: Zero-token data refresh mechanisms minimizing hallucination risks.'
    ],
    image: '/services/rag-systems.jpg'
  },
  'internal-tools': {
    subtitle: 'Bespoke Python tooling replacing manual legacy operations.',
    proof: [
      'Intelligent Document Processing (IDP): Multimodal computer vision replacing legacy OCR for complex, unstructured invoice and contract parsing.',
      'Process Mining Integration: Ingesting event logs from legacy ERPs (e.g. Tally) to identify automation bottlenecks.',
      'SLA Telemetry: OpenTelemetry integration pushing distributed traces to observability dashboards for real-time latency monitoring.'
    ],
    image: '/services/internal-tools.jpg'
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const formatTitle = (slug: string) => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = formatTitle(resolvedParams.slug);
  
  const data = serviceData[resolvedParams.slug] || {
    subtitle: 'Enterprise-grade AI solutions engineered for production environments.',
    proof: ['Production-ready infrastructure.', 'Enterprise security compliance.', 'Scalable async deployment.'],
    image: '/services/ai-agents.jpg' // Default fallback
  };

  return (
    <main>
      <GradientMesh>
        <div className="section" style={{ paddingTop: '120px' }}>
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
              
              {/* Left: Content & Architecture Proof */}
              <div>
                <span className="tag" style={{ marginBottom: '16px' }}>
                  Architecture Blueprint
                </span>
                <h1 className="display-lg" style={{ marginBottom: '24px' }}>
                  {title}
                </h1>
                <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '40px' }}>
                  {data.subtitle}
                </p>
                
                <div style={{ marginBottom: '48px' }}>
                  <h3 className="micro-cap" style={{ color: 'var(--color-ink-mute)', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '8px', marginBottom: '24px' }}>
                    Technical Execution
                  </h3>
                  {data.proof.map((point, index) => {
                    const [boldPart, ...rest] = point.split(':');
                    return (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '4px' }}>
                          <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                          {rest.length > 0 ? (
                            <>
                              <strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>{boldPart}:</strong>
                              {rest.join(':')}
                            </>
                          ) : (
                            point
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CEO Interactive Routing */}
                <div style={{ paddingTop: '32px', borderTop: '1px solid var(--color-hairline)' }}>
                  <p className="caption" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>Start your deployment:</p>
                  <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <RegionalCTA region="US" />
                    <RegionalCTA region="IN" />
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div style={{ position: 'relative', height: '600px', width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-2)' }}>
                <Image 
                  src={data.image}
                  alt={`${title} Architecture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </GradientMesh>
    </main>
  );
}
