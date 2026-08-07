"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SchemaGeneratorPage() {
  const [schemaType, setSchemaType] = useState('TechArticle');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const generateSchema = () => {
    if (schemaType === 'TechArticle') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title || "[Your Title]",
        "description": description || "[Your Description]",
        "author": {
          "@type": "Organization",
          "name": "Your Company"
        },
        "proficiencyLevel": "Expert"
      }, null, 2);
    } else if (schemaType === 'Dataset') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": title || "[Dataset Name]",
        "description": description || "[Dataset Description]",
        "license": "https://creativecommons.org/licenses/by/4.0/"
      }, null, 2);
    }
    return "";
  };

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/tools" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Tools
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '16px' }}>JSON-LD Schema Generator</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Generate highly structured JSON-LD payloads for Generative Engine Optimization (GEO). 
          LLMs heavily weight standard schema when synthesizing verifiable answers.
        </p>

        <div className="card" style={{ marginBottom: '48px', background: 'white' }}>
          <div style={{ marginBottom: '24px' }}>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Schema Type</label>
            <select 
              className="select" 
              style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}
              value={schemaType}
              onChange={(e) => setSchemaType(e.target.value)}
            >
              <option value="TechArticle">TechArticle (For Architecture & Engineering Docs)</option>
              <option value="Dataset">Dataset (For Empirical Benchmarks)</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Title / Headline</label>
            <input 
              type="text" 
              placeholder="e.g. Asynchronous LLM Generation"
              className="select"
              style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Description</label>
            <textarea 
              placeholder="Enter a brief, highly technical description."
              className="select"
              style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)', minHeight: '100px' }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div style={{ background: '#1e1e1e', borderRadius: '8px', padding: '24px', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="micro-cap" style={{ color: '#888' }}>GENERATED JSON-LD</span>
              <button 
                onClick={() => navigator.clipboard.writeText(generateSchema())}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 600 }}
              >
                Copy to Clipboard
              </button>
            </div>
            <pre style={{ color: '#d4d4d4', fontFamily: 'monospace', fontSize: '14px', margin: 0 }}>
              <code>
{generateSchema()}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
