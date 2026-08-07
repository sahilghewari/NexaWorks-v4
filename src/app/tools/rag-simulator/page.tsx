"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function RAGSimulatorPage() {
  const [chunkSize, setChunkSize] = useState(512);
  const [chunkOverlap, setChunkOverlap] = useState(50);
  const [embeddingModel, setEmbeddingModel] = useState('text-embedding-3-small');

  // Extremely rough simulation math for illustrative purposes
  const simulateMetrics = () => {
    let contextRecall = 85;
    let hallucinationRisk = "Low";
    
    if (chunkSize < 200) {
      contextRecall = 60;
      hallucinationRisk = "High (Insufficient Context)";
    } else if (chunkSize > 1000) {
      contextRecall = 95;
      hallucinationRisk = "Medium (Distraction Risk)";
    }

    if (chunkOverlap < 20) {
      contextRecall -= 10;
    }

    return { contextRecall, hallucinationRisk };
  };

  const metrics = simulateMetrics();

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/tools" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Tools
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '16px' }}>RAG Parameter Simulator</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Visualize the impact of chunking strategies on Retrieval-Augmented Generation metrics like Context Recall and Hallucination Risk.
        </p>

        <div className="card" style={{ marginBottom: '48px', background: 'white' }}>
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            
            {/* Controls */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                  <span>Chunk Size (Tokens)</span>
                  <span style={{ color: 'var(--color-primary)' }}>{chunkSize}</span>
                </label>
                <input 
                  type="range" 
                  min="100" max="2000" step="50"
                  style={{ width: '100%' }}
                  value={chunkSize}
                  onChange={(e) => setChunkSize(parseInt(e.target.value))}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                  <span>Chunk Overlap (Tokens)</span>
                  <span style={{ color: 'var(--color-primary)' }}>{chunkOverlap}</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="200" step="10"
                  style={{ width: '100%' }}
                  value={chunkOverlap}
                  onChange={(e) => setChunkOverlap(parseInt(e.target.value))}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Embedding Model</label>
                <select 
                  className="select" 
                  style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}
                  value={embeddingModel}
                  onChange={(e) => setEmbeddingModel(e.target.value)}
                >
                  <option value="text-embedding-3-small">OpenAI text-embedding-3-small</option>
                  <option value="text-embedding-3-large">OpenAI text-embedding-3-large</option>
                  <option value="bge-large-en-v1.5">BAAI bge-large-en-v1.5</option>
                </select>
              </div>
            </div>

            {/* Results Output */}
            <div style={{ background: 'var(--color-canvas-soft)', padding: '24px', borderRadius: '8px' }}>
              <h3 className="heading-sm" style={{ marginBottom: '24px' }}>Simulation Results</h3>
              
              <div style={{ marginBottom: '24px' }}>
                <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '8px' }}>EST. CONTEXT RECALL</div>
                <div className="display-md" style={{ color: metrics.contextRecall > 80 ? '#22c55e' : '#eab308' }}>
                  {metrics.contextRecall}%
                </div>
              </div>

              <div>
                <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '8px' }}>HALLUCINATION RISK</div>
                <div className="heading-md" style={{ color: metrics.hallucinationRisk.includes("Low") ? '#22c55e' : '#ef4444' }}>
                  {metrics.hallucinationRisk}
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
