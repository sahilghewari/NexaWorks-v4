import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from "@/components/ScrollReveal";
import HarveyContactForm from "@/components/HarveyContactForm";
import './contact.css';

export const metadata: Metadata = {
  title: "Contact Sales & Architecture | NexaWorks",
  description: "Schedule an architecture review or request a private deployment walkthrough with the NexaWorks engineering team.",
  keywords: ['Contact NexaWorks', 'Enterprise AI Demo', 'Architecture Review', 'Context Reconstruction Demo', 'B2B AI Automation'],
  alternates: { canonical: 'https://nexaworks.tech/contact' },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Sales & Architecture | NexaWorks",
    description: "Schedule an architecture review or request a private deployment walkthrough with the NexaWorks engineering team.",
    url: 'https://nexaworks.tech/contact',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'Contact NexaWorks Sales & Architecture' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: "Contact Sales & Architecture | NexaWorks",
    description: "Schedule an architecture review or request a private deployment walkthrough with the NexaWorks engineering team.",
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function ContactPage() {
  return (
    <main className="contact-page-harvey">
      {/* Left: Editorial Authority Canvas */}
      <section className="contact-left-panel">
        <div className="contact-brand-header">
          <Link href="/" className="contact-brand-logo">
            <Image 
              src="/logo.webp" 
              alt="NexaWorks" 
              width={32} 
              height={32} 
              style={{ borderRadius: '50%' }}
            />
            <span>NexaWorks</span>
          </Link>
        </div>

        <div className="contact-editorial-content">
          <ScrollReveal delay={0.1}>
            <span className="contact-editorial-tag">
              ENTERPRISE DISCOVERY
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="contact-editorial-headline">
              See Why Top Enterprise Teams Choose NexaWorks.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="contact-editorial-subhead">
              Purpose-built for mission-critical Context Reconstruction. Schedule an architecture review or request a private deployment walkthrough.
            </p>
          </ScrollReveal>

          {/* Social Proof Bar */}
          <ScrollReveal delay={0.4} className="contact-proof-section">
            <div className="contact-proof-label">Trusted by Engineering & Enterprise Leaders</div>
            <div className="contact-proof-logos">
              <span className="proof-logo-item">BRIDGEWATER</span>
              <span className="proof-logo-item">KKR</span>
              <span className="proof-logo-item">A&O SHEARMAN</span>
              <span className="proof-logo-item">REPSOL</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="contact-left-footer">
          <Link href="/" className="contact-back-link">
            ← Back to full website
          </Link>
          <span>SOC2 Type II • EU AI Act • DPDP Ready</span>
        </div>
      </section>

      {/* Right: Deep Dark Panel with Elevated White Form Card */}
      <section className="contact-right-panel">
        <div className="contact-form-wrapper">
          <ScrollReveal delay={0.2} style={{ width: '100%' }}>
            <HarveyContactForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
