import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/marketing/muster-home/Hero";
import ProductTabs from "@/components/marketing/muster-home/ProductTabs";
import ProductTour from "@/components/marketing/muster-home/ProductTour";
import Connectors from "@/components/marketing/muster-home/Connectors";
import Faq from "@/components/marketing/muster-home/Faq";
import SignalBento from "@/components/marketing/SignalBento";
import "./signal-surfaces.css";
import "./muster-home.css";

export const metadata: Metadata = {
  title: { absolute: "Muster AI · The AI customer success manager" },
  description:
    "Muster AI watches every account, explains every health score with its records, and drafts the work. Your team approves.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="mh">
      <Hero />

      <section className="mh-section" id="product" aria-labelledby="product-title">
        <div className="mh-wrap">
          <header className="mh-head">
            <p className="mh-eyebrow">Inside Muster</p>
            <h2 id="product-title">
              Where the CS work <em>gets done.</em>
            </h2>
          </header>
          <ProductTabs />
        </div>
      </section>

      <section className="mh-section mh-section-tint" aria-labelledby="story-title">
        <div className="mh-wrap">
          <header className="mh-head">
            <p className="mh-eyebrow">Health with proof</p>
            <h2 id="story-title">
              A healthy score. <em>An incomplete story.</em>
            </h2>
            <p>The score says green. The signals say otherwise. Muster reads them all.</p>
          </header>
          <SignalBento />
        </div>
      </section>

      <section className="mh-section" id="tour" aria-labelledby="tour-title">
        <div className="mh-wrap">
          <header className="mh-head">
            <p className="mh-eyebrow">Live demo</p>
            <h2 id="tour-title">
              Click through <em>Muster.</em>
            </h2>
            <p>Follow the highlight. Four clicks, from signal to sent.</p>
          </header>
        </div>
        <ProductTour />
      </section>

      <section className="mh-section mh-section-tint" id="integrations" aria-labelledby="int-title">
        <div className="mh-wrap">
          <header className="mh-head">
            <p className="mh-eyebrow">Integrations</p>
            <h2 id="int-title">
              Connects to the tools <em>you already run.</em>
            </h2>
            <p>Read-only by default. Start with a CSV if you like.</p>
          </header>
        </div>
        <Connectors />
      </section>

      <section className="mh-section" id="faq" aria-labelledby="faq-title">
        <div className="mh-wrap mh-faq-layout">
          <header className="mh-head mh-head-left">
            <p className="mh-eyebrow">FAQ</p>
            <h2 id="faq-title">
              Questions, <em>answered.</em>
            </h2>
          </header>
          <Faq />
        </div>
      </section>

      <section className="mh-final" aria-labelledby="final-title">
        <div className="mh-hero-glow" aria-hidden="true" />
        <div className="mh-wrap">
          <h2 id="final-title">
            See Muster on <em>your own accounts.</em>
          </h2>
          <div className="mh-hero-ctas">
            <Link href="/contact" className="mh-btn mh-btn-light">
              Book a demo <ArrowUpRight size={16} />
            </Link>
            <Link href="#tour" className="mh-btn mh-btn-outline">
              Try the live demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
