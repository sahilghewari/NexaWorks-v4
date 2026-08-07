import GradientMesh from "@/components/GradientMesh";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Infrastructure Playbooks",
  description: "Technical whitepapers, Pydantic code samples, and OpenAPI schema definitions for enterprise AI architectures.",
};

const playbooks = [
  {
    title: "The Fleet-Memory Problem in Agentic Systems",
    description: "How to decouple execution logic from historical reasoning traces utilizing Oracle Agent Memory to solve context window bloat.",
    type: "Whitepaper"
  },
  {
    title: "GraphRAG vs Vector RAG for BFSI Compliance",
    description: "Architectural comparison for multi-hop reasoning and regulatory explainability under the EU AI Act.",
    type: "Architecture Spec"
  },
  {
    title: "FastAPI / Uvicorn ASGI Worker Allocation",
    description: "Mathematical breakdown of optimal worker-to-core ratios to prevent thread starvation during OpenAI API inference.",
    type: "Technical Guide"
  },
  {
    title: "Strict Pydantic Output Enforcement",
    description: "Code samples for structuring LLM JSON extraction in HIPAA-compliant healthcare environments.",
    type: "Code Samples"
  }
];

export default function PlaybooksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "NexaWorks Infrastructure Playbooks",
    "description": "Technical whitepapers and engineering architectures for enterprise AI."
  };

  return (
    <main>
      <Script id="playbooks-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '140px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>
              KNOWLEDGE REPOSITORY
            </span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Infrastructure Playbooks
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              Technical whitepapers, architecture specs, and production code samples engineered for CTOs and automation engineers.
            </p>

            <div className="grid-2" style={{ gap: '24px' }}>
              {playbooks.map((playbook, idx) => (
                <div key={idx} className="card hover-border-primary" style={{ cursor: 'pointer', transition: 'border-color 0.2s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}>
                  <div className="micro-cap" style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>
                    {playbook.type}
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '12px' }}>
                    {playbook.title}
                  </h3>
                  <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                    {playbook.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--color-hairline)', textAlign: 'center' }}>
               <p className="body-md" style={{ color: 'var(--color-ink-mute)' }}>
                 Seeking a bespoke architectural spec?
               </p>
               <Link href="/contact" className="link-arrow" style={{ display: 'inline-block', marginTop: '16px', fontWeight: 500 }}>
                 Schedule a technical discovery call
               </Link>
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
