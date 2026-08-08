"use client";

import React, { useState } from 'react';
import './InteractiveHero.css';
import Link from 'next/link';

export default function InteractiveHero() {
  const [isOn, setIsOn] = useState(false);

  // We generate positions for chaotic documents to form a swooping curve
  const chaoticDocs = [
    { top: '75%', left: '5%', rot: -15, delay: '0s' },
    { top: '60%', left: '20%', rot: 25, delay: '0.5s' },
    { top: '80%', left: '35%', rot: 5, delay: '1s' },
    { top: '45%', left: '50%', rot: -20, delay: '1.5s' },
    { top: '65%', left: '65%', rot: 10, delay: '0.2s' },
    { top: '30%', left: '75%', rot: -5, delay: '0.8s' },
    { top: '55%', left: '85%', rot: 30, delay: '1.2s' },
  ];

  // For the organized conveyor belt
  const organizedCount = 10;
  
  return (
    <section className={`interactive-hero ${isOn ? 'is-on' : ''}`}>
      <div className="hero-title-container">
        <div className="hero-logo-line">
          <span className="hero-brand"><span className="brand-bold">NexaWorks</span> Context Intelligence</span>
          <div className={`hero-toggle ${isOn ? 'on' : 'off'}`} onClick={() => setIsOn(!isOn)}>
            <div className="hero-toggle-thumb"></div>
            <div className={`hero-toggle-btn ${!isOn ? 'active' : ''}`}>OFF</div>
            <div className={`hero-toggle-btn ${isOn ? 'active' : ''}`}>ON</div>
          </div>
        </div>
        
        <h1 className="hero-headline">
          Context,<br />Reconstructed.
        </h1>
        <p className="hero-subhead">
          Stop losing critical information between systems. We deterministically assemble relevant context across your tools and deliver it exactly when you need it.
        </p>
        
        <div className="hero-ctas">
          <Link href="/contact" className="btn-waitlist">Request a Demo</Link>
          <button className="btn-video">
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              background: '#fff', 
              color: '#000',
              fontSize: '10px'
            }}>▶</span> Watch Video
          </button>
        </div>
      </div>

      <div className="animation-area">
        <div className="layer-left">
          {chaoticDocs.map((doc, i) => (
            <div 
              key={`chaos-${i}`}
              className={`doc doc-chaotic doc-chaotic-${(i % 3) + 1}`}
              style={{
                '--start-top': doc.top,
                '--start-left': doc.left,
                '--start-rot': `${doc.rot}deg`,
                top: !isOn ? doc.top : undefined,
                left: !isOn ? doc.left : undefined,
                transform: !isOn ? `rotate(${doc.rot}deg)` : undefined,
                animationDelay: isOn ? doc.delay : undefined,
              } as React.CSSProperties}
            >
              <div className="doc-line"></div>
              <div className="doc-line short"></div>
              <div className="doc-line"></div>
              <div className="doc-line short"></div>
            </div>
          ))}
        </div>
        
        <div className="layer-center"></div>
        
        <div className="layer-right">
          {Array.from({ length: organizedCount }).map((_, i) => (
            <div 
              key={`org-${i}`}
              className="doc doc-organized organized"
              style={{
                animationDelay: `${i * (isOn ? 1 : 3.5)}s`, // spacing based on speed
              }}
            >
              <div className="doc-check"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
