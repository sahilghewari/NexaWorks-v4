import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './careers.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Careers | NexaWorks',
  description: 'Join NexaWorks and help us build deterministic enterprise AI systems.',
  keywords: ['NexaWorks Careers', 'AI Engineering Jobs', 'Enterprise AI Hiring', 'ML Engineer Roles', 'Work at NexaWorks'],
  alternates: { canonical: 'https://nexaworks.tech/careers' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Careers | NexaWorks',
    description: 'Join NexaWorks and help us build deterministic enterprise AI systems.',
    url: 'https://nexaworks.tech/careers',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Careers' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Careers | NexaWorks',
    description: 'Join NexaWorks and help us build deterministic enterprise AI systems.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function CareersPage() {
  const roles = [
    { title: "Senior AI Architect", department: "Engineering", location: "Remote (US)", type: "Full-time" },
    { title: "Distributed Systems Engineer", department: "Infrastructure", location: "San Francisco, CA", type: "Full-time" },
    { title: "MLSecOps Lead", department: "Security", location: "Remote (Global)", type: "Full-time" },
    { title: "Enterprise Account Executive", department: "Sales", location: "New York, NY", type: "Full-time" }
  ];

  return (
    <main className="careers-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }]} />
      {roles.map((role, idx) => (
        <script
          key={`schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": role.title,
              "description": `Join NexaWorks as a ${role.title} in our ${role.department} team.`,
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "NexaWorks",
                "url": "https://nexaworks.tech"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": role.location
                }
              }
            })
          }}
        />
      ))}
      <section className="careers-hero">
        <ScrollReveal delay={0.1}>
          <span className="careers-tag">JOIN THE TEAM</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="careers-headline">Engineer the Future of Enterprise AI</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="careers-subhead">
            We are looking for uncompromising engineers, researchers, and strategists to help us build deterministic, secure Agentic systems for the Fortune 500.
          </p>
        </ScrollReveal>
      </section>

      <section className="careers-culture-section">
        <ScrollReveal delay={0.1}>
          <h2 className="careers-section-title">Our Engineering Philosophy</h2>
        </ScrollReveal>
        
        <div className="culture-grid">
          <ScrollReveal delay={0.1} className="h-full">
            <div className="culture-card h-full">
              <div className="culture-icon">🛡️</div>
              <h3 className="culture-title">Zero-Trust by Default</h3>
              <p className="culture-desc">We assume every LLM is a potential attack vector. Security is not an afterthought; it is the foundation of our entire architecture.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="h-full">
            <div className="culture-card h-full">
              <div className="culture-icon">⚡</div>
              <h3 className="culture-title">Ruthless Pragmatism</h3>
              <p className="culture-desc">We don't build demos. We build highly concurrent, fault-tolerant pipelines that deploy to production and generate immediate ROI.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="h-full">
            <div className="culture-card h-full">
              <div className="culture-icon">🌐</div>
              <h3 className="culture-title">Remote-First Autonomy</h3>
              <p className="culture-desc">We hire the best globally and trust them to execute. No micromanagement, just transparent communication and high-quality pull requests.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="careers-roles-section">
        <ScrollReveal delay={0.1}>
          <h2 className="careers-section-title">Open Positions</h2>
        </ScrollReveal>

        <div className="roles-container">
          {roles.map((role, idx) => (
            <div key={idx} className="role-card">
              <div className="role-info">
                <h3>{role.title}</h3>
                <p>{role.department}</p>
                <div className="role-meta">
                  <span className="role-meta-tag">{role.location}</span>
                  <span className="role-meta-tag">{role.type}</span>
                </div>
              </div>
              <div className="role-action">
                <Link href="/contact" className="btn-glass">Apply Now &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
