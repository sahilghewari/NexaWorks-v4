"use client";

import React, { useState } from 'react';
import './InteractiveSolutionsHero.css';

export default function InteractiveSolutionsHero() {
  const [isOn, setIsOn] = useState(true);

  return (
    <section className={`solutions-interactive-hero ${isOn ? 'is-assembled' : 'is-scattered'}`}>
      <div className="sih-container">
        <div className="sih-content">
          <div className="sih-top-line">
            <span className="sih-tag">SOLUTIONS</span>
            <div className={`hero-toggle ${isOn ? 'on' : 'off'}`} onClick={() => setIsOn(!isOn)}>
              <div className="hero-toggle-thumb"></div>
              <div className={`hero-toggle-btn ${!isOn ? 'active' : ''}`}>OFF</div>
              <div className={`hero-toggle-btn ${isOn ? 'active' : ''}`}>ON</div>
            </div>
          </div>
          
          <h1 className="sih-headline">Context Reconstruction for every team.</h1>
          <p className="sih-subhead">
            Stop losing critical information. We deterministically assemble relevant context across your tools and deliver it directly into your team's workflow.
          </p>
        </div>

        <div className="sih-animation-area">
          <div className="sih-center-node">
            <div className="sih-pulse-ring"></div>
            NexaWorks
          </div>
          
          <div className="sih-node sih-node-1">Sales</div>
          <div className="sih-node sih-node-2">Clinical</div>
          <div className="sih-node sih-node-3">Finance</div>
          <div className="sih-node sih-node-4">Legal</div>
          <div className="sih-node sih-node-5">Operations</div>
          <div className="sih-node sih-node-6">Executive</div>
        </div>
      </div>
    </section>
  );
}
