import React from 'react';
import './AEOAnswerBlock.css';

interface AEOAnswerBlockProps {
  question: string;
  answer: string;
  tag?: string;
}

export default function AEOAnswerBlock({ 
  question, 
  answer, 
  tag = "Executive Briefing" 
}: AEOAnswerBlockProps) {
  return (
    <div className="aeo-block-container">
      <div className="aeo-card">
        <div className="aeo-badge">
          <span className="aeo-badge-dot"></span>
          {tag}
        </div>
        <h2 className="aeo-question">
          {question}
        </h2>
        <p className="aeo-answer">
          {answer}
        </p>
        <div className="aeo-footer">
          <span className="aeo-footer-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#a78bfa' }}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            High-Confidence Declarative Brief
          </span>
          <span>•</span>
          <span>Context Reconstruction Standard</span>
        </div>
      </div>
    </div>
  );
}
