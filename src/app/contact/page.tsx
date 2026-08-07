import GradientMesh from "@/components/GradientMesh";
import InteractiveLeadFilter from "@/components/InteractiveLeadFilter";

export const metadata = {
  title: "Contact Us",
  description: "Schedule a technical discovery call with NexaWorks architecture team.",
};

export default function ContactPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
          <div className="container text-center">
            <span className="tag" style={{ marginBottom: '24px' }}>
              FAST-CLOSE PHILOSOPHY
            </span>
            <h1 className="display-xxl" style={{ marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px auto' }}>
              Skip the sales pitch.<br/>Let's build the architecture.
            </h1>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '700px', margin: '0 auto 48px auto' }}>
              We replace standard discovery calls with rapid architectural alignment. 
              Use the filter below to ensure your engineering challenges match our deployment capabilities.
            </p>
            
            <InteractiveLeadFilter />
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
