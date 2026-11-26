import Script from "next/script";
import ContactForm from "@/components/marketing/ContactForm";
import { BOOK_DEMO_URL } from "@/lib/booking";

export const metadata = {
  title: "Book a demo",
  description: "Book a 15-minute intro call to see Muster AI on your own accounts.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const calendlyUrl = BOOK_DEMO_URL;

  const widgetUrl = new URL(calendlyUrl);
  widgetUrl.searchParams.set("hide_gdpr_banner", "1");

  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-6xl page-intro">
          <p className="eyebrow mb-6 text-center" style={{ color: "var(--nw-accent)" }}>
            Book a demo
          </p>
          <h1 className="mb-4 text-center" style={{ color: "var(--nw-ink)" }}>See Muster on your own accounts.</h1>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto" style={{ color: "var(--nw-ink-soft)" }}>
            A 15-minute intro call with the Muster AI team: your CS workflow, the signals that matter to you, and a look at the product.
          </p>

          <p className="text-center text-sm mb-10" style={{ color: "var(--nw-ink-soft)" }}>Choose a time below, or <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">open the booking calendar in a new tab</a>.</p>
          <div className="flex flex-col gap-10">
            {/* Calendly Column */}
            <div className="p-2 rounded-2xl shadow-sm" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
              <div
                className="calendly-inline-widget w-full h-[1050px] xl:h-[760px] rounded-xl overflow-hidden"
                data-url={widgetUrl.toString()}
              ></div>
              <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </div>

            {/* Lead Form Column */}
            <div className="flex flex-col justify-center p-8 md:p-12 rounded-2xl" style={{ backgroundColor: "var(--nw-warm-100)", border: "1px solid var(--nw-line-light)" }}>
              <h2 className="mb-4 text-2xl" style={{ color: "var(--nw-ink)" }}>Not ready for a call?</h2>
              <p className="mb-8" style={{ color: "var(--nw-ink-soft)" }}>
                Leave your email and we&apos;ll send you our Customer Intelligence architecture guide. No spam, ever.
              </p>

              <ContactForm />

              <p className="mt-8 text-sm text-center" style={{ color: "var(--nw-ink-soft)" }}>
                Or reach out directly at <a href="mailto:hello@nexaworks.tech" style={{ color: "var(--nw-accent)" }}>hello@nexaworks.tech</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
