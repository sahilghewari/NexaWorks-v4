'use client';

import React, { useState } from 'react';
import Link from 'next/link';



export default function ContextScoreCalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [meetings, setMeetings] = useState(15);
  const [prepMinutes, setPrepMinutes] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(75);

  const weeklyHoursLost = (teamSize * meetings * prepMinutes) / 60;
  const annualHoursLost = weeklyHoursLost * 50;
  const annualCost = annualHoursLost * hourlyCost;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <title>Context Score Calculator | NexaWorks</title>
      <main>
        <section className="section" style={{ backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink)' }}>
          <div className="container">
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <span className="micro-cap" style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Interactive Tool</span>
              <h1 className="display-xl" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Context Score Calculator
              </h1>
              <p className="body-lg" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                Measure the hidden cost of context reconstruction in your organization.
              </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              
              <div className="card" style={{ padding: '2rem', border: '1px solid var(--color-hairline)', borderRadius: '8px' }}>
                <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Configure Your Team</h2>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="teamSize" className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Team Size</span>
                    <span style={{ fontWeight: 'bold' }}>{teamSize} people</span>
                  </label>
                  <input 
                    type="range" 
                    id="teamSize"
                    min="5" 
                    max="500" 
                    value={teamSize} 
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="meetings" className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Meetings / Person / Week</span>
                    <span style={{ fontWeight: 'bold' }}>{meetings} meetings</span>
                  </label>
                  <input 
                    type="range" 
                    id="meetings"
                    min="5" 
                    max="40" 
                    value={meetings} 
                    onChange={(e) => setMeetings(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="prepMinutes" className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Prep Time / Meeting</span>
                    <span style={{ fontWeight: 'bold' }}>{prepMinutes} mins</span>
                  </label>
                  <input 
                    type="range" 
                    id="prepMinutes"
                    min="5" 
                    max="60" 
                    value={prepMinutes} 
                    onChange={(e) => setPrepMinutes(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="hourlyCost" className="body-md" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Fully-loaded Hourly Cost</span>
                    <span style={{ fontWeight: 'bold' }}>${hourlyCost}</span>
                  </label>
                  <input 
                    type="range" 
                    id="hourlyCost"
                    min="30" 
                    max="200" 
                    value={hourlyCost} 
                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                  />
                </div>
              </div>

              <div className="card" style={{ padding: '3rem', backgroundColor: 'var(--color-ink)', color: 'var(--color-canvas)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                  <p className="body-md" style={{ opacity: 0.7, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Annual Cost of Context Loss</p>
                  <div className="display-xxl" style={{ color: 'var(--color-primary)', wordBreak: 'break-word', lineHeight: 1.1 }}>
                    {formatCurrency(annualCost)}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
                  <div>
                    <p className="body-md" style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Weekly Hours Lost</p>
                    <p className="heading-lg">{formatNumber(weeklyHoursLost)}</p>
                  </div>
                  <div>
                    <p className="body-md" style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Annual Hours Lost</p>
                    <p className="heading-lg">{formatNumber(annualHoursLost)}</p>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <p className="body-lg" style={{ marginBottom: '1.5rem', fontWeight: 500 }}>
                    Your team loses {formatCurrency(annualCost)} annually to context reconstruction.
                  </p>
                  <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', backgroundColor: 'var(--color-primary)', color: 'var(--color-canvas)', padding: '0.875rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                    Eliminate this cost. Book an architecture review.
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
