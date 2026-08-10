
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
      "target": "https://nexaworks.tech/docs?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
