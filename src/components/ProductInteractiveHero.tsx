"use client";

import React, { useState, useEffect } from 'react';
import './ProductInteractiveHero.css';

export default function ProductInteractiveHero() {
  const [isOn, setIsOn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate deterministic random-ish values for 15 documents so it looks chaotic but is consistent
  const documents = Array.from({ length: 15 }).map((_, i) => {
    const delay = (i * 0.7) % 8; // Spread out across 8 seconds
    const startY = 15 + ((i * 17) % 70); // 15% to 85%
    const startRot = -45 + ((i * 33) % 90); // -45 to 45 deg
    const endY = 15 + ((i * 23) % 70);
    const endRot = -45 + ((i * 19) % 90);
    return { delay, startY, startRot, endY, endRot };
  });

  if (!mounted) return <div className="interactive-hero" style={{ height: '500px' }} />;

  return (
    <section className={`interactive-hero ${isOn ? 'is-on' : 'is-off'}`}>
      <div className="hero-content-layer">
        <div className="toggle-wrapper">
          <span className="brand-label">NexaWorks <strong>Context Reconstruction</strong></span>
          <button 
            className="toggle-button" 
            onClick={() => setIsOn(!isOn)}
            aria-label="Toggle Context Reconstruction"
          >
            <div className={`toggle-track ${isOn ? 'active' : ''}`}>
              <span className="toggle-label off">OFF</span>
              <span className="toggle-label on">ON</span>
              <div className="toggle-thumb" />
            </div>
          </button>
        </div>
        
        <div className="hero-titles">
          <h1 className="display-xxl" style={{ marginBottom: '24px' }}>
            Faster Reviews.<br/>Stronger Outcomes.
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Context Reconstruction accelerates workflows, sharpens decisions, and surfaces portfolio-wide insights that drive the business forward.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary">Book Architecture Review</button>
            <button className="btn-secondary">Watch Video</button>
          </div>
        </div>
      </div>

      <div className="animation-layer">
        <div className="scanner-beam" />
        <div className="scanner-glow" />
        
        {documents.map((doc, i) => (
          <div 
            key={i} 
            className="document-item"
            style={{
              '--delay': `-${doc.delay}s`,
              '--start-y': `${doc.startY}%`,
              '--start-rot': `${doc.startRot}deg`,
              '--end-y': `${doc.endY}%`,
              '--end-rot': `${doc.endRot}deg`
            } as React.CSSProperties}
          >
            <div className="icon-messy">
              {/* SVG representing a messy, raw data document */}
              <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="48" height="64" rx="4" fill="var(--color-canvas)" stroke="var(--color-border)" strokeWidth="1"/>
                <rect x="8" y="12" width="24" height="4" rx="2" fill="var(--color-border)"/>
                <rect x="8" y="24" width="32" height="2" rx="1" fill="var(--color-border)"/>
                <rect x="8" y="32" width="28" height="2" rx="1" fill="var(--color-border)"/>
                <rect x="8" y="40" width="32" height="2" rx="1" fill="var(--color-border)"/>
                <rect x="8" y="48" width="16" height="2" rx="1" fill="var(--color-border)"/>
              </svg>
            </div>
            <div className="icon-clean">
              {/* SVG representing a clean, checked-off Context Brief */}
              <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="48" height="64" rx="4" fill="var(--color-canvas)" stroke="var(--color-primary)" strokeWidth="1"/>
                <circle cx="24" cy="32" r="12" fill="transparent" stroke="var(--color-primary)" strokeWidth="1.5"/>
                <path d="M19 32L22 35L29 28" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
