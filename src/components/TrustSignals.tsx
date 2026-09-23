import React from 'react';

export default function TrustSignals() {
  const logos = [
    { name: "Financial Services", icon: "🏦" },
    { name: "Healthcare Providers", icon: "🏥" },
    { name: "Legal Firms", icon: "⚖️" },
    { name: "Tech Enterprises", icon: "💻" },
    { name: "Operations Teams", icon: "⚙️" },
  ];

  return (
    <div style={{ padding: '48px 0', borderBottom: '1px solid var(--color-hairline)', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="micro-cap" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
          ARCHITECTED FOR THE WORLD'S MOST DEMANDING DATA TEAMS
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '48px', 
          flexWrap: 'wrap', 
          alignItems: 'center',
          opacity: 0.6,
          filter: 'grayscale(100%)'
        }}>
          {logos.map((logo, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-ink)' }}>
              <span>{logo.icon}</span>
              <span style={{ letterSpacing: '-0.5px' }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
