import React from 'react';
import './TrustSignals.css';

export default function TrustSignals() {
  const logos = [
    { name: "Financial Services", icon: "🏦" },
    { name: "Healthcare Providers", icon: "🏥" },
    { name: "Legal Firms", icon: "⚖️" },
    { name: "Tech Enterprises", icon: "💻" },
    { name: "Operations Teams", icon: "⚙️" },
  ];

  return (
    <div className="trust-signals-container">
      <div className="container">
        <p className="trust-signals-title">
          ARCHITECTED FOR THE WORLD'S MOST DEMANDING DATA TEAMS
        </p>
        <div className="trust-signals-grid">
          {logos.map((logo, idx) => (
            <div key={idx} className="trust-signal-item">
              <span>{logo.icon}</span>
              <span style={{ letterSpacing: '-0.5px' }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
