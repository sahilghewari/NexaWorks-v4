"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

/**
 * Hero with the product film. On load the film's top half sits inside the hero; as the
 * visitor scrolls, the frame grows to full width so the whole film comes into view.
 */
export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame.style.setProperty("--p", "1");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 while the frame's top is low in the viewport, 1 once it reaches the upper fifth.
      const p = Math.min(1, Math.max(0, (vh * 0.95 - rect.top) / (vh * 0.75)));
      frame.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(next);
  };

  return (
    <section className="mh-hero" aria-labelledby="mh-hero-title">
      <div className="mh-hero-glow" aria-hidden="true" />
      <div className="mh-wrap mh-hero-copy">
        <p className="mh-eyebrow mh-eyebrow-dark">
          <span className="mh-live" /> AI customer success manager
        </p>
        <h1 id="mh-hero-title">
          The CSM, <em>not CSM software.</em>
        </h1>
        <p className="mh-hero-sub">
          Muster watches every account, explains every score and drafts the work. Your team approves.
        </p>
        <div className="mh-hero-ctas">
          <Link href="/contact" className="mh-btn mh-btn-light">
            Book a demo <ArrowUpRight size={16} />
          </Link>
          <Link href="#tour" className="mh-btn mh-btn-outline">
            Try the live demo
          </Link>
        </div>
      </div>

      <div className="mh-film-stage">
        <div className="mh-film" ref={frameRef} id="film">
          <video
            ref={videoRef}
            src="/muster/muster-film-web.mp4"
            poster="/muster/poster-hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Muster AI product film"
          />
          <button type="button" className="mh-film-sound" onClick={toggleSound}>
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            {muted ? "Play with sound" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
