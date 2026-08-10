'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HarveyContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    orgSize: '',
    workflow: '',
    notes: '',
    consent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "b4647adc-fc0a-4fb4-9f49-15943b0c6f03");
      formPayload.append("First Name", formData.firstName);
      formPayload.append("Last Name", formData.lastName);
      formPayload.append("Email", formData.email);
      formPayload.append("Company", formData.company);
      formPayload.append("Job Title", formData.jobTitle);
      formPayload.append("Phone", formData.phone || "Not provided");
      formPayload.append("Organization Size", formData.orgSize);
      formPayload.append("Primary Architectural Focus", formData.workflow);
      formPayload.append("Consent to Communications", formData.consent ? "Yes" : "No");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="harvey-success-card">
        <div className="harvey-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="harvey-success-title">Review Request Received</h3>
        <p className="harvey-success-desc">
          Thank you, <strong>{formData.firstName || 'there'}</strong>. A Principal AI Architect from NexaWorks will review your infrastructure stack and reach out within 4 business hours.
        </p>
        
        <div className="harvey-success-actions">
          <p className="harvey-fast-track-label">Need immediate scheduling?</p>
          <div className="harvey-fast-track-grid">
            <a 
              href="https://calendly.com/nexaworkss/waitlist" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="harvey-btn-calendly"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Direct Calendar Booking
            </a>
            <a 
              href="https://wa.me/918356954152" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="harvey-btn-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Direct Technical Chat
            </a>
          </div>
          <button 
            type="button" 
            onClick={() => setIsSubmitted(false)} 
            className="harvey-btn-reset"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="harvey-form-card" onSubmit={handleSubmit}>
      <div className="harvey-form-grid">
        
        {/* Row 1: Name */}
        <div className="harvey-field">
          <label htmlFor="firstName" className="harvey-label">
            First Name <span className="harvey-req">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jane"
            className="harvey-input"
          />
        </div>

        <div className="harvey-field">
          <label htmlFor="lastName" className="harvey-label">
            Last Name <span className="harvey-req">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="harvey-input"
          />
        </div>

        {/* Row 2: Email & Company */}
        <div className="harvey-field">
          <label htmlFor="email" className="harvey-label">
            Business Email <span className="harvey-req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="harvey-input"
          />
        </div>

        <div className="harvey-field">
          <label htmlFor="company" className="harvey-label">
            Company Name <span className="harvey-req">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="harvey-input"
          />
        </div>

        {/* Row 3: Title & Phone */}
        <div className="harvey-field">
          <label htmlFor="jobTitle" className="harvey-label">
            Job Title <span className="harvey-req">*</span>
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="VP of Engineering / CIO"
            className="harvey-input"
          />
        </div>

        <div className="harvey-field">
          <label htmlFor="phone" className="harvey-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="harvey-input"
          />
        </div>

        {/* Row 4: Org Size */}
        <div className="harvey-field harvey-field-full">
          <label htmlFor="orgSize" className="harvey-label">
            Organization Size <span className="harvey-req">*</span>
          </label>
          <div className="harvey-select-wrapper">
            <select
              id="orgSize"
              name="orgSize"
              required
              value={formData.orgSize}
              onChange={handleChange}
              className="harvey-select"
            >
              <option value="">Select organization size...</option>
              <option value="1-49">1 – 49 Employees (Agile Engineering)</option>
              <option value="50-199">50 – 199 Employees (Growth Stage)</option>
              <option value="200-999">200 – 999 Employees (Mid-Market)</option>
              <option value="1000+">1,000+ Employees (Global Enterprise)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Primary Focus Area */}
        <div className="harvey-field harvey-field-full">
          <label htmlFor="workflow" className="harvey-label">
            Primary Architectural Focus <span className="harvey-req">*</span>
          </label>
          <div className="harvey-select-wrapper">
            <select
              id="workflow"
              name="workflow"
              required
              value={formData.workflow}
              onChange={handleChange}
              className="harvey-select"
            >
              <option value="">Select focus area...</option>
              <option value="context-reconstruction">Context Reconstruction & Cross-Tool Unification</option>
              <option value="agentic-rag">Agentic RAG & Graph Knowledge Bases (GraphRAG)</option>
              <option value="mcp-integration">Model Context Protocol (MCP) Connectors</option>
              <option value="compliance">SOC2 / HIPAA / EU AI Act Compliance Automation</option>
              <option value="legacy-systems">Legacy Mainframe / Tally / ERP Telemetry</option>
              <option value="custom-solution">Other Custom Enterprise Architecture</option>
            </select>
          </div>
        </div>

        {/* Row 6: Consent Checkbox */}
        <div className="harvey-consent-row harvey-field-full">
          <label className="harvey-checkbox-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="harvey-checkbox"
            />
            <span className="harvey-checkbox-text">
              Yes, I would like to receive technical architecture updates and platform benchmarks. I can unsubscribe at any time.
            </span>
          </label>
        </div>

        {/* Row 7: Submit Button */}
        <div className="harvey-field-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="harvey-submit-btn"
          >
            {isSubmitting ? (
              <span className="harvey-spinner">Submitting...</span>
            ) : (
              'Request Architecture Review'
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <div className="harvey-field-full harvey-privacy-note">
          For details about how we collect, use, and protect your information, please see our <Link href="/security" className="harvey-privacy-link">security & privacy standards</Link>.
        </div>

      </div>
    </form>
  );
}
