import GradientMesh from "@/components/GradientMesh";
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
