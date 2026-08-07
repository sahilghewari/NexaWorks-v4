'use client';

import React, { useState } from 'react';

type RiskLevel = 'Minimal' | 'Limited' | 'High' | 'Prohibited' | 'Unassessed';

export default function ComplianceAssessor() {
  const [step, setStep] = useState(1);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('Unassessed');

  const handleAnswer = (risk: RiskLevel) => {
    setRiskLevel(risk);
    setStep(6); // Jump to result
  };

  const nextStep = () => setStep(step + 1);

  return (
    <div className="card-elevated" style={{ background: 'white', padding: '48px', margin: '48px 0', minHeight: '400px' }}>
      
      {step < 6 && (
        <div style={{ marginBottom: '32px' }}>
          <span className="micro-cap" style={{ color: 'var(--color-primary)' }}>STEP {step} OF 5</span>
          <div style={{ height: '4px', background: 'var(--color-hairline)', marginTop: '8px', borderRadius: '2px' }}>
            <div style={{ height: '100%', background: 'var(--color-primary)', width: `${(step / 5) * 100}%`, transition: 'width 0.3s ease' }}></div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Does your AI system deploy subliminal techniques or manipulate human behavior to cause harm?</h3>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={() => handleAnswer('Prohibited')}>Yes, it employs manipulative techniques.</button>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={nextStep}>No, it does not.</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Does the system perform real-time biometric categorization or emotion recognition in the workplace?</h3>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={() => handleAnswer('Prohibited')}>Yes, we process biometric/emotion data.</button>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={nextStep}>No, we do not.</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Is the AI used as a safety component in critical infrastructure, or for HR recruitment/resume screening?</h3>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={() => handleAnswer('High')}>Yes, it operates in critical HR or infrastructure.</button>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={nextStep}>No, it is used for general business operations.</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Is the system designed to interact directly with humans (e.g., a customer support chatbot)?</h3>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={() => handleAnswer('Limited')}>Yes, users converse with the AI.</button>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={nextStep}>No, it operates entirely backend/headless.</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Does the system generate deepfakes or synthetic media?</h3>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }} onClick={() => handleAnswer('Limited')}>Yes, it generates media.</button>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={() => handleAnswer('Minimal')}>No, it processes standard text/data.</button>
        </div>
      )}

      {step === 6 && (
        <div style={{ textAlign: 'center' }}>
          <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>ASSESSMENT COMPLETE</span>
          
          {riskLevel === 'Prohibited' && (
            <div style={{ marginTop: '24px' }}>
              <h2 className="display-md" style={{ color: 'var(--color-ruby)', marginBottom: '16px' }}>Prohibited Risk</h2>
              <p className="body-md">Your system violates Article 5 of the EU AI Act. You must halt deployment immediately or face severe regulatory penalties.</p>
            </div>
          )}

          {riskLevel === 'High' && (
            <div style={{ marginTop: '24px', textAlign: 'left' }}>
              <h2 className="display-md" style={{ color: '#d97706', marginBottom: '16px', textAlign: 'center' }}>High Risk (Annex III)</h2>
              <p className="body-md" style={{ marginBottom: '24px' }}>You are subject to strict regulatory enforcement. To deploy in August 2026, you must implement the following engineering controls:</p>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, marginBottom: '32px' }}>
                <li><strong>Article 9:</strong> Establish a continuous risk management system.</li>
                <li><strong>Article 12:</strong> Implement WORM tamper-evident logging for all API traces.</li>
                <li><strong>Article 14:</strong> Build a human-in-the-loop (HITL) authorization gateway.</li>
              </ul>
              <button className="btn-primary" style={{ width: '100%' }}>Book Compliance Engineering Audit</button>
            </div>
          )}

          {riskLevel === 'Limited' && (
            <div style={{ marginTop: '24px' }}>
              <h2 className="display-md" style={{ color: '#2563eb', marginBottom: '16px' }}>Limited Risk</h2>
              <p className="body-md" style={{ marginBottom: '32px' }}>You must comply with transparency obligations (Article 50). Users must be explicitly informed they are interacting with an AI system, and synthetic content must be watermarked.</p>
              <button className="btn-secondary" style={{ width: '100%' }}>Download Transparency UI Templates</button>
            </div>
          )}

          {riskLevel === 'Minimal' && (
            <div style={{ marginTop: '24px' }}>
              <h2 className="display-md" style={{ color: '#10b981', marginBottom: '16px' }}>Minimal Risk</h2>
              <p className="body-md" style={{ marginBottom: '32px' }}>Your deployment is largely exempt from strict EU AI Act obligations. However, voluntary adherence to codes of conduct is recommended.</p>
              <button className="btn-secondary" style={{ width: '100%' }}>View General Best Practices</button>
            </div>
          )}

          <div style={{ marginTop: '32px' }}>
             <button onClick={() => {setStep(1); setRiskLevel('Unassessed');}} style={{ background: 'none', border: 'none', color: 'var(--color-ink-secondary)', cursor: 'pointer', textDecoration: 'underline' }}>Restart Assessment</button>
          </div>
        </div>
      )}

    </div>
  );
}
