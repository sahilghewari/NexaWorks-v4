"use client";

import { useEffect, useRef, useState } from "react";
import AeroShards from "./AeroShards";

/**
 * React Bits AeroShards background with a graceful, motion-aware fallback.
 * Upstream source: https://github.com/DavidHDev/react-bits
 */
export default function ReactBitsHeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [canvasAllowed, setCanvasAllowed] = useState(false);
  const [inView, setInView] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 761px) and (pointer: fine)");

    const update = () => {
      setReducedMotion(motionQuery.matches);
      setCanvasAllowed(desktopQuery.matches && !motionQuery.matches);
    };

    update();
    motionQuery.addEventListener("change", update);
    desktopQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
      desktopQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.01 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="nw-reactbits-background"
      data-motion={reducedMotion ? "off" : "on"}
      aria-hidden="true"
    >
      <div className="nw-hero-ambient" />
      {canvasAllowed && !reducedMotion && !failed && (
        <AeroShards
          className="nw-aero-shards"
          shardColor="#DAD5FF"
          accentColor="#A9BFFF"
          backgroundColor="transparent"
          lightMode
          placement="right"
          material="glass"
          count={520}
          shardSize={1.1}
          spread={0.82}
          twist={0.18}
          billow={0.12}
          speed={0.18}
          scale={1}
          depthOfField={0.28}
          glow={0.22}
          grain={0}
          vignette={0}
          intro
          mouseInteraction
          mouseStrength={0.14}
          markers="none"
          pulseOnClick={false}
          holdToGather={false}
          parallax={0.08}
          paused={!inView}
          dpr={1.25}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
