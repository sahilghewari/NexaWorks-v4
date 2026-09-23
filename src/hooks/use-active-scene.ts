"use client";

import { useEffect, useState } from "react";
import { scrollState } from "@/lib/scroll-state";

/**
 * Subscribes to scrollState.sceneIndex via rAF and re-renders only when the
 * integer scene index changes. Used by nav + progress indicator.
 */
export function useActiveScene() {
  const [scene, setScene] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let last = -1;
    let lastP = -1;
    let raf = 0;
    const loop = () => {
      if (scrollState.sceneIndex !== last) {
        last = scrollState.sceneIndex;
        setScene(last);
      }
      // throttle progress updates to ~10fps to avoid re-render storms
      const p = Math.round(scrollState.progress * 100) / 100;
      if (p !== lastP) {
        lastP = p;
        setProgress(p);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return { scene, progress };
}
