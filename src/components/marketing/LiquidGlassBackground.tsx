"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./LiquidGlassBackground.module.css";

const GhostFibers = dynamic(() => import("./backgrounds/GhostFibers"), {
  ssr: false,
});

/** One evolving shader; CSS remains the fallback before loading or without motion. */
export default function LiquidGlassBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [paused, setPaused] = useState(true);
  const [fullQuality, setFullQuality] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 801px)");
    const desktop = window.matchMedia("(min-width: 1151px)");
    let visible = false;
    const update = () => {
      const active =
        visible && !document.hidden && !preference.matches && wide.matches;
      element.dataset.motion = active ? "running" : "paused";
      setPaused(!active);
      setFullQuality(desktop.matches);
      // Delay GPU creation until visible; preserve the context during ordinary pause.
      if (active) setEnabled(true);
      else if (preference.matches || !wide.matches) setEnabled(false);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(element.closest(".ed-hero") ?? element);
    document.addEventListener("visibilitychange", update);
    [preference, wide, desktop].forEach((media) =>
      media.addEventListener("change", update),
    );
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      [preference, wide, desktop].forEach((media) =>
        media.removeEventListener("change", update),
      );
      element.dataset.motion = "paused";
    };
  }, []);
  return (
    <div
      ref={ref}
      className={styles.background}
      data-motion="paused"
      data-renderer={enabled ? "ghost-fibers" : "css-fallback"}
      aria-hidden="true"
    >
      {enabled && (
        <GhostFibers
          lightMode
          glowColor="#748db7"
          lineColor="#9bb2d7"
          secondaryColor="#b6a0d2"
          gradient="across"
          speed={0.5}
          scale={1.08}
          rotation={-22}
          rollSpeed={0.14}
          layers={fullQuality ? 2 : 1}
          waves={2.1}
          twist={0.9}
          threads={fullQuality ? 48 : 32}
          density={0.5}
          volume={0.25}
          spread={1.45}
          thickness={2.4}
          flow={0.15}
          fiberStyle="lines"
          foldGlow={1.6}
          depthOfField={0.2}
          particles={0}
          sparkle={0}
          glow={0}
          brightness={1.65}
          vignette={0.15}
          grain={0}
          mouseInteraction={false}
          hoverEffect="none"
          pulseOnClick={false}
          intro={false}
          paused={paused}
          dpr={fullQuality ? 0.6 : 0.5}
        />
      )}
    </div>
  );
}
