import ScrollReveal from "@/components/ScrollReveal";
import InteractiveLeadFilter from "@/components/InteractiveLeadFilter";
import './contact.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Contact Us",
  description: "Schedule a technical discovery call with NexaWorks architecture team.",
  keywords: ['Contact NexaWorks', 'Technical Discovery', 'AI Architecture Team', 'Enterprise AI Consulting', 'Demo'],
  alternates: { canonical: 'https://nexaworks.tech/contact' },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us",
    description: "Schedule a technical discovery call with NexaWorks architecture team.",
    url: 'https://nexaworks.tech/contact',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'Contact NexaWorks' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: "Contact Us",
    description: "Schedule a technical discovery call with NexaWorks architecture team.",
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />
      {/* Left: Sticky Brand Pane */}
      <section className="contact-hero-split">
        <ScrollReveal delay={0.1}>
          <span className="contact-tag">FAST-CLOSE PHILOSOPHY</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="contact-headline">
            Skip the sales pitch.<br/>Let's build the architecture.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="contact-subhead">
            We replace standard discovery calls with rapid architectural alignment. 
            Use the filter to ensure your engineering challenges match our deployment capabilities.
          </p>
        </ScrollReveal>
      </section>

      {/* Right: Scrolling Interaction Pane */}
      <section className="contact-content-split">
        <div className="contact-filter-wrapper">
          <ScrollReveal delay={0.4} style={{ width: '100%' }}>
            <InteractiveLeadFilter />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
