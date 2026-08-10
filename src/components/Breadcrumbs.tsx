import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://nexaworks.tech${item.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.875rem', color: '#a1a1aa', maxWidth: '1200px', margin: '0 auto' }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {isLast ? (
                  <span aria-current="page" style={{ color: '#fff' }}>{item.label}</span>
                ) : (
                  <Link href={item.href} style={{ color: '#a1a1aa', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                )}
                {!isLast && <span>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
