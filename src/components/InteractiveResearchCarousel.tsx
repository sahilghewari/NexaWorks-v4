"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './InteractiveResearchCarousel.css';

const researchItems = [
  {
    id: "context-reconstruction",
    title: "Context Reconstruction Index",
    summary: "Our benchmark demonstrating 99.9% accurate context retention across 1M+ token windows in complex enterprise datasets.",
    link: "/research/context-reconstruction-index",
    metric: "99.9%",
    metricLabel: "Accuracy"
  },
  {
    id: "global-roi",
    title: "Global ROI Index",
    summary: "Analyzing the measurable impact of deterministic AI workflows on enterprise bottom lines across 500+ deployments.",
    link: "/research/global-roi-index",
    metric: "3.2x",
    metricLabel: "Avg. ROI"
  },
  {
    id: "enterprise-ai",
    title: "State of Enterprise AI",
    summary: "A comprehensive look at the shift from probabilistic chatbots to deterministic agentic pipelines.",
    link: "/research/state-of-enterprise-ai-2026",
    metric: "2026",
    metricLabel: "Outlook"
  }
];

export default function InteractiveResearchCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="research-carousel-section">
      <div className="research-carousel-header">
        <h2>Pioneering Enterprise AI Research</h2>
        <Link href="/research" className="btn-outline-light">Read Research Papers</Link>
      </div>
      <div className="research-carousel-container">
        {researchItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id}
              className={`research-card ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="research-card-bg"></div>
              <div className="research-card-content">
                <div className="research-card-top">
                  <h3>{item.title}</h3>
                </div>
                <div className="research-card-bottom">
                  <p className="research-summary">{item.summary}</p>
                  <div className="research-metric-row">
                    <div className="research-metric">
                      <h4>{item.metric}</h4>
                      <span>{item.metricLabel}</span>
                    </div>
                    <Link href={item.link} className="read-paper-btn">Read Paper →</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
