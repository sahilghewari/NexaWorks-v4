import Script from 'next/script';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexaWorks",
    "url": "https://nexaworks.tech",
    "logo": "https://nexaworks.tech/logo.jpg",
    "description": "Elite AI automation agency specializing in production-grade agentic workflows, RAG systems, and enterprise Python pipelines.",
    "founder": {
      "@type": "Person",
      "name": "Sahil",
      "jobTitle": "Founder & Chief Architect",
      "knowsAbout": ["Artificial Intelligence", "System Architecture", "Python", "FastAPI"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Technical Sales",
      "url": "https://nexaworks.tech/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexaworks"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NexaWorks Engineering Hub",
    "image": "https://nexaworks.tech/logo.jpg",
    "url": "https://nexaworks.tech",
    "telephone": "+918356954152",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1973,
      "longitude": 72.9641
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NexaWorks",
    "url": "https://nexaworks.tech",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nexaworks.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script id="org-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
