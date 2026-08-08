"use client";

import React, { useState, useEffect } from 'react';
import './FadingTextCarousel.css';
import Link from 'next/link';

const items = [
  "Context Switching",
  "Scattered Information",
  "Lost Meeting Context",
  "Siloed Knowledge",
  "Data Duplication",
  "Endless Searching",
  "Manual Updates"
];

export default function FadingTextCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fading-text-section">
      <div className="fading-text-container">
        <div className="fading-text-left">
          <span className="tiny-label">The top enterprise teams<br/>use NexaWorks to prevent</span>
        </div>
        
        <div className="fading-text-right-wrapper">
          <div 
            className="fading-text-track"
            style={{
              '--active-index': activeIndex
            } as React.CSSProperties}
          >
            {items.map((item, index) => {
              // Calculate distance from active index to handle wrapping fading
              let distance = Math.abs(activeIndex - index);
              // Handle loop distance (e.g. if active is 0 and index is 6, distance is 1)
              if (distance > items.length / 2) {
                distance = items.length - distance;
              }

              let className = "fading-item";
              if (distance === 0) className += " active";
              else if (distance === 1) className += " muted-1";
              else if (distance === 2) className += " muted-2";
              else className += " hidden";

              return (
                <h3 key={index} className={className}>
                  {item}
                </h3>
              );
            })}
          </div>
        </div>

        <div className="fading-btn-wrapper">
           <Link href="/product" className="btn-outline-dark">Explore Platform</Link>
        </div>
      </div>
    </section>
  );
}
