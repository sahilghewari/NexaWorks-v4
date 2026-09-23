const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');

const genericPages = [
  { path: 'careers', title: 'Careers' },
  { path: 'security', title: 'Security' },
  { path: 'docs', title: 'Documentation' },
  { path: 'playbooks', title: 'Playbooks' },
  { path: 'blog', title: 'Blog' },
  { path: 'open-source', title: 'Open Source' }
];

const template = (title) => `import GradientMesh from "@/components/GradientMesh";

export const metadata = {
  title: "${title} | NexaWorks",
  description: "NexaWorks ${title} page."
};

export default function Page() {
  return (
    <main>
      <GradientMesh>
        <section style={{ paddingTop: '140px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="display-xxl">${title}</h1>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginTop: '24px' }}>
            We're currently updating this section. Please check back soon.
          </p>
        </section>
      </GradientMesh>
    </main>
  );
}
`;

// Create simple pages
genericPages.forEach(page => {
  const dir = path.join(appDir, page.path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(page.title));
});

// Create dynamic Services page
const servicesDir = path.join(appDir, 'services', '[slug]');
if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });
fs.writeFileSync(path.join(servicesDir, 'page.tsx'), `import GradientMesh from "@/components/GradientMesh";
import Link from "next/link";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const formatTitle = (slug: string) => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = formatTitle(resolvedParams.slug);

  return (
    <main>
      <GradientMesh>
        <section style={{ paddingTop: '140px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-bg-subdued)', padding: '4px 12px', borderRadius: '9999px', margin: '0 auto 24px auto' }}>AI SERVICES</span>
          <h1 className="display-xxl">{title}</h1>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginTop: '24px', marginBottom: '32px' }}>
            Enterprise-grade {title.toLowerCase()} solutions engineered for production environments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary btn-lg">Discuss Your Requirements</Link>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
`);

// Create dynamic Industries page
const industriesSlugDir = path.join(appDir, 'industries', '[slug]');
if (!fs.existsSync(industriesSlugDir)) fs.mkdirSync(industriesSlugDir, { recursive: true });
fs.writeFileSync(path.join(industriesSlugDir, 'page.tsx'), `import GradientMesh from "@/components/GradientMesh";
import Link from "next/link";

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const formatTitle = (slug: string) => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = formatTitle(resolvedParams.slug);

  return (
    <main>
      <GradientMesh>
        <section style={{ paddingTop: '140px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-bg-subdued)', padding: '4px 12px', borderRadius: '9999px', margin: '0 auto 24px auto' }}>INDUSTRY SOLUTIONS</span>
          <h1 className="display-xxl">{title}</h1>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginTop: '24px', marginBottom: '32px' }}>
            AI automation designed specifically for the unique regulatory and operational requirements of the {title.toLowerCase()} industry.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary btn-lg">Schedule Discovery</Link>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
`);

// Create Industries Hub
const industriesDir = path.join(appDir, 'industries');
if (!fs.existsSync(industriesDir)) fs.mkdirSync(industriesDir, { recursive: true });
fs.writeFileSync(path.join(industriesDir, 'page.tsx'), template('Industries'));

// Create Resources Hub
const resourcesDir = path.join(appDir, 'resources');
if (!fs.existsSync(resourcesDir)) fs.mkdirSync(resourcesDir, { recursive: true });
fs.writeFileSync(path.join(resourcesDir, 'page.tsx'), template('Resources'));

console.log('Pages generated successfully!');
