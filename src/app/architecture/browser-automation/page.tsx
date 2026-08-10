import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/architecture/browser-automation" },
  title: 'Browser Automation & Computer Use Architecture | NexaWorks',
  description: 'System design reference for deploying AI agents utilizing the Computer Use API to automate legacy web portals and internal SaaS.',
};

export default function BrowserAutomationArchitecture() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/architecture" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Architecture Library
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: '#000', color: 'white', border: 'none' }}>AGENTIC CAPABILITIES</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>Browser Automation (Computer Use)</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Legacy enterprise systems often lack functional APIs. To achieve complete straight-through processing, AI Agents must be granted <strong>Computer Use</strong> capabilities—allowing them to visually navigate the DOM, click buttons, and extract data exactly like a human operator.
        </p>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '32px' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px' }}>The Automation Stack</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            Deploying a browser agent requires a headless execution environment isolated from your production network, utilizing visual-language models (VLMs) for coordinate mapping.
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.6, marginBottom: '24px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Foundational VLM:</strong> Claude 3.5 Sonnet (Optimized for screenshot analysis and precise X/Y coordinate click generation).</li>
            <li style={{ marginBottom: '12px' }}><strong>Execution Environment:</strong> Playwright or Puppeteer running inside an ephemeral Docker container.</li>
            <li style={{ marginBottom: '12px' }}><strong>State Management:</strong> Agentic loop storing session cookies and local storage state between inference calls.</li>
          </ul>
        </div>

        <div className="card-elevated" style={{ background: '#1e1e1e', padding: '48px', color: '#d4d4d4' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px', color: 'white' }}>Action Schema (Tool Definition)</h2>
          <p className="body-md" style={{ color: '#888', marginBottom: '24px' }}>
            The foundation model relies on a specific tool schema to execute browser commands.
          </p>
          <pre style={{ background: '#000', padding: '24px', borderRadius: '8px', overflowX: 'auto', fontSize: '13px' }}>
            <code>
{`{
  "name": "execute_browser_action",
  "description": "Performs an action in the headless browser instance.",
  "parameters": {
    "type": "object",
    "properties": {
      "action": {
        "type": "string",
        "enum": ["click", "type", "scroll", "screenshot"]
      },
      "coordinate_x": { "type": "integer" },
      "coordinate_y": { "type": "integer" },
      "text": { "type": "string", "description": "Text to type if action is 'type'" }
    },
    "required": ["action"]
  }
}`}
            </code>
          </pre>
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            Attempting to automate a legacy mainframe or Citrix environment?
          </p>
          <button className="btn-primary" style={{ padding: '16px 32px' }}>Consult our Systems Engineering Team</button>
        </div>

      </div>
    </main>
  );
}
