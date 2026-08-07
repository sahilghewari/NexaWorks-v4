import React from 'react';
import './GradientMesh.css';

interface GradientMeshProps {
  children: React.ReactNode;
}

export default function GradientMesh({ children }: GradientMeshProps) {
  return (
    <div className="gradient-mesh-container">
      <div className="gradient-mesh-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="gradient-mesh-svg"
        >
          <defs>
            <radialGradient id="mesh-cream" cx="20%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#f5e9d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#f5e9d4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh-orange" cx="40%" cy="20%" r="40%">
              <stop offset="0%" stopColor="#e8a87c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e8a87c" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh-lavender" cx="60%" cy="40%" r="45%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh-indigo" cx="75%" cy="30%" r="40%">
              <stop offset="0%" stopColor="#533afd" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#533afd" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh-ruby" cx="90%" cy="50%" r="35%">
              <stop offset="0%" stopColor="#ea2261" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ea2261" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh-magenta" cx="100%" cy="20%" r="30%">
              <stop offset="0%" stopColor="#f96bee" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f96bee" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          <rect width="100" height="100" fill="white" />
          <ellipse cx="20" cy="30" rx="50" ry="50" fill="url(#mesh-cream)" />
          <ellipse cx="40" cy="20" rx="40" ry="40" fill="url(#mesh-orange)" />
          <ellipse cx="60" cy="40" rx="45" ry="45" fill="url(#mesh-lavender)" />
          <ellipse cx="75" cy="30" rx="40" ry="40" fill="url(#mesh-indigo)" />
          <ellipse cx="90" cy="50" rx="35" ry="35" fill="url(#mesh-ruby)" />
          <ellipse cx="100" cy="20" rx="30" ry="30" fill="url(#mesh-magenta)" />
        </svg>
      </div>
      <div className="gradient-mesh-content">
        {children}
      </div>
    </div>
  );
}
