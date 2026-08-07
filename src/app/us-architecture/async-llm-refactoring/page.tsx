import GradientMesh from '@/components/GradientMesh';
import Link from 'next/link';
import './page.css';

export const metadata = {
  title: 'Async LLM API Production Rescue — FastAPI & Uvicorn',
  description: 'NexaWorks rescues failing FastAPI LLM pipelines by replacing blocking WSGI patterns with async ASGI architecture using Uvicorn, Celery, and Redis.'
};

export default function AsyncLLMRefactoringPage() {
  return (
    <main>
      <div className="hero-wrapper">
        <GradientMesh>
          <section className="hero-section container">
            <span className="tag">US ARCHITECTURE</span>
            <h1 className="display-xxl">Async LLM API Production Rescue</h1>
            <p className="body-lg" style={{ color: "var(--color-ink-secondary)", marginTop: "24px", maxWidth: "800px" }}>
              We fix failing FastAPI LLM pipelines by replacing blocking WSGI patterns with production-grade async ASGI architecture.
            </p>
            <div className="hero-actions" style={{ marginTop: "32px" }}>
              <Link href="/contact" className="btn-primary btn-lg">Schedule Technical Discovery</Link>
            </div>
          </section>
        </GradientMesh>
      </div>

      <section className="section-soft">
        <div className="container">
          <h2 className="display-xl">Why is your FastAPI LLM app timing out?</h2>
          <div className="answer-block">
            <strong>FastAPI LLM applications fail in production when synchronous def functions block Uvicorn's event loop during long-running OpenAI API calls, causing thread starvation and cascading HTTP 503 timeout errors across the entire service.</strong>
          </div>
          <div className="problem-details">
            <p className="body-md">The WSGI trap: using <code>def</code> instead of <code>async def</code> causes threads to block while waiting for network I/O from LLM providers.</p>
            <p className="body-md">A single blocked thread starves all concurrent connections in the event loop, queuing up incoming requests until the server runs out of worker connections.</p>
            <p className="body-md">This architectural flaw works flawlessly in development environments with low concurrency but fails catastrophically under production load when multiple users trigger LLM calls simultaneously.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="display-xl">The NexaWorks production architecture</h2>
          <div className="architecture-diagram card-dashboard">
            <div className="arch-flow">
              <div className="arch-box">Client</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">FastAPI (async)</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Celery Queue</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Redis Broker</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Temporal Worker</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">OpenAI API</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Response</div>
            </div>
          </div>
          <div className="arch-explanation grid-2" style={{ marginTop: "40px" }}>
            <div>
              <h3 className="heading-md">FastAPI + Uvicorn</h3>
              <p className="body-md">ASGI-compliant async handlers, deployed with <code>--workers 4 --worker-class uvicorn.workers.UvicornWorker</code> for maximum concurrency.</p>
            </div>
            <div>
              <h3 className="heading-md">Celery + Redis</h3>
              <p className="body-md">Background task queue for generation tasks exceeding HTTP timeout windows, offloading long generation cycles from main threads.</p>
            </div>
            <div>
              <h3 className="heading-md">Temporal</h3>
              <p className="body-md">Durable workflow orchestration for multi-step LLM pipelines, managing retries, timeouts, and state persistence.</p>
            </div>
            <div>
              <h3 className="heading-md">Pydantic</h3>
              <p className="body-md">Strict output validation ensuring LLM responses conform to defined schemas before returning to the client.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <h2 className="display-xl" style={{ color: "var(--color-on-primary)", marginBottom: "40px" }}>Before & After</h2>
          <div className="grid-2">
            <div className="code-card">
              <div className="code-label">BEFORE — Blocking WSGI</div>
              <pre className="code-block">
                <code>{`# ❌ Blocking — thread starvation under load
@app.post("/generate")
def generate(request: GenerateRequest):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=request.messages
    )
    return {"result": response.choices[0].message}`}</code>
              </pre>
            </div>
            <div className="code-card">
              <div className="code-label">AFTER — Async ASGI</div>
              <pre className="code-block">
                <code>{`# ✅ Non-blocking — thousands of concurrent requests
@app.post("/generate")
async def generate(request: GenerateRequest):
    response = await openai_client.chat.completions.create(
        model="gpt-4",
        messages=request.messages
    )
    return {"result": response.choices[0].message}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <h2 className="display-xl">Replace a $140K engineer with infrastructure</h2>
          <p className="body-lg" style={{ marginBottom: "40px" }}>A properly architected async pipeline with Pydantic validation replaces the need for expensive domestic engineering talent dedicated to fixing API timeout errors.</p>
          <div className="grid-2">
            <div className="card-elevated">
              <h3 className="heading-md" style={{ marginBottom: "16px" }}>Traditional Approach</h3>
              <ul className="feature-list body-md">
                <li>$140,000/year senior Python engineer</li>
                <li>6-month ramp-up time</li>
                <li>Single point of failure</li>
                <li>Manual error handling and constant debugging</li>
              </ul>
            </div>
            <div className="card-pricing-featured">
              <h3 className="heading-md" style={{ marginBottom: "16px" }}>NexaWorks Infrastructure</h3>
              <ul className="feature-list body-md">
                <li>Automated Pydantic-enforced pipeline</li>
                <li>&lt;2s P95 latency</li>
                <li>24/7 autonomous operation</li>
                <li>97× token cost reduction</li>
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
              <summary className="heading-md">How do you fix blocking WSGI traps in Uvicorn LLM pipelines?</summary>
              <div className="faq-answer body-md">We replace synchronous function definitions with async/await patterns. This allows the ASGI event loop to handle other requests while waiting for network I/O from the LLM provider.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">What is the correct worker configuration for FastAPI with LLMs?</summary>
              <div className="faq-answer body-md">Deploy using Uvicorn with multiple workers depending on your CPU cores, typically using <code>--worker-class uvicorn.workers.UvicornWorker</code>. This maximizes parallel processing capabilities for heavy workloads.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">When should I use Celery vs Temporal for LLM tasks?</summary>
              <div className="faq-answer body-md">Use Celery for simple, fire-and-forget background tasks that exceed standard HTTP timeout limits. Temporal is superior for complex, multi-step LLM workflows requiring durable state, retries, and human-in-the-loop approvals.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">How does Pydantic prevent LLM hallucinations in production?</summary>
              <div className="faq-answer body-md">Pydantic enforces strict output schemas by validating LLM responses against strongly-typed data models. If the output deviates from the schema, validation fails early, allowing automatic retry or fallback logic to execute.</div>
            </details>
            <details className="faq-item">
              <summary className="heading-md">What is the typical latency improvement after migration?</summary>
              <div className="faq-answer body-md">After migrating from blocking WSGI to async ASGI architecture, P95 latency typically drops to under 2 seconds. The system can handle thousands of concurrent requests without thread starvation.</div>
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
                    "name": "How do you fix blocking WSGI traps in Uvicorn LLM pipelines?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We replace synchronous function definitions with async/await patterns. This allows the ASGI event loop to handle other requests while waiting for network I/O from the LLM provider."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the correct worker configuration for FastAPI with LLMs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Deploy using Uvicorn with multiple workers depending on your CPU cores, typically using --worker-class uvicorn.workers.UvicornWorker. This maximizes parallel processing capabilities for heavy workloads."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When should I use Celery vs Temporal for LLM tasks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use Celery for simple, fire-and-forget background tasks that exceed standard HTTP timeout limits. Temporal is superior for complex, multi-step LLM workflows requiring durable state, retries, and human-in-the-loop approvals."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Pydantic prevent LLM hallucinations in production?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pydantic enforces strict output schemas by validating LLM responses against strongly-typed data models. If the output deviates from the schema, validation fails early, allowing automatic retry or fallback logic to execute."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the typical latency improvement after migration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "After migrating from blocking WSGI to async ASGI architecture, P95 latency typically drops to under 2 seconds. The system can handle thousands of concurrent requests without thread starvation."
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
          <h2 className="display-xl" style={{ marginBottom: "24px" }}>Stop losing revenue to timeout errors</h2>
          <p className="body-lg" style={{ marginBottom: "32px", color: "var(--color-on-primary)" }}>Schedule a 15-minute async technical discovery call.</p>
          <Link href="/contact" className="btn-on-dark-inverse" style={{ background: "#ffffff", color: "var(--color-brand-dark)", padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", display: "inline-block", fontWeight: 400 }}>Schedule Discovery Call</Link>
        </div>
      </section>
    </main>
  );
}
