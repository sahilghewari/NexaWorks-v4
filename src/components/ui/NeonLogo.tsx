import React from "react";

export function NeonLogo({ className = "", width = 32, height = 32 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
      fill="none"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="neon-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur1" />
          <feGaussianBlur stdDeviation="6" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glass-refraction" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        
        {/* Gradients to mimic 3D depth */}
        <linearGradient id="glass-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 200, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 50, 200, 0.1)" />
        </linearGradient>
        <linearGradient id="glass-grad-right" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 200, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 50, 200, 0.1)" />
        </linearGradient>
      </defs>

      {/* Since the navbar is light, we can add a subtle dark backdrop JUST for the logo to make the cyan pop, or rely on the dark ink of the text next to it. Let's add a sleek dark rounded rect behind it to match the image's dark vibe, or just leave it transparent and use a darker cyan. Let's do a dark background box for the icon itself to match the image's aesthetic. */}
      <rect width="100" height="100" rx="20" fill="#0A0A0C" />

      {/* Left Shape (Upside down V-hook) */}
      <g>
        {/* Outer glass body */}
        <path
          d="M 28 72 L 28 28 L 56 56"
          stroke="url(#glass-grad-left)"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#glass-refraction)"
        />
        {/* Inner Cyan Neon */}
        <path
          d="M 28 72 L 28 28 L 56 56"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#neon-glow-cyan)"
        />
        {/* Bright white core */}
        <path
          d="M 28 72 L 28 28 L 56 56"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        
        {/* Highlights / reflections */}
        <path
          d="M 22 26 L 22 72"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      {/* Right Shape (V-hook) */}
      <g>
        {/* Outer glass body */}
        <path
          d="M 72 28 L 72 72 L 44 44"
          stroke="url(#glass-grad-right)"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#glass-refraction)"
        />
        {/* Inner Cyan Neon */}
        <path
          d="M 72 28 L 72 72 L 44 44"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#neon-glow-cyan)"
        />
        {/* Bright white core */}
        <path
          d="M 72 28 L 72 72 L 44 44"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        
        {/* Highlights / reflections */}
        <path
          d="M 78 74 L 78 28"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
