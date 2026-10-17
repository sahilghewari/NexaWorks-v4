"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./LiquidGlassBackground.module.css";

/** Decorative vector glass. No canvas, textures, pointer tracking or frame loop. */
export default function LiquidGlassBackground() {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      element.dataset.motion =
        visible && !document.hidden && !preference.matches
          ? "running"
          : "paused";
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(element.closest(".ed-hero") ?? element);
    document.addEventListener("visibilitychange", update);
    preference.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      preference.removeEventListener("change", update);
      element.dataset.motion = "paused";
    };
  }, []);

  // Broad, closed Bézier surfaces; the narrow paths describe reflective folds.
  const sweep =
    "M340 -90 C590 65 1110 -85 1110 150 C1110 345 850 260 850 420 C850 572 1195 590 1090 780 C1010 925 590 825 330 1000 L240 910 C475 740 965 855 1000 735 C1035 610 752 585 756 420 C760 214 1018 285 1018 150 C1018 6 565 153 310 12 Z";
  const fold =
    "M610 -70 C960 50 1170 225 1070 410 C980 575 690 475 730 670 C758 800 1110 800 1190 985 L1060 1020 C998 872 655 887 635 690 C610 454 948 512 984 364 C1024 201 848 107 560 20 Z";
  const edge =
    "M327 -36 C585 115 1067 -38 1067 150 C1067 306 801 238 804 420 C806 586 1120 607 1046 758 C974 897 541 790 285 955";
  return (
    <div
      ref={ref}
      className={styles.background}
      data-motion="paused"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 1000"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <defs>
          <linearGradient id={`${id}-glass`} x1=".1" y1=".1" x2=".9" y2=".7">
            <stop offset="0" stopColor="#e8eaff" stopOpacity=".05" />
            <stop offset=".22" stopColor="#aabcf0" stopOpacity=".38" />
            <stop offset=".32" stopColor="#ffffff" stopOpacity=".88" />
            <stop offset=".38" stopColor="#a295d9" stopOpacity=".48" />
            <stop offset=".48" stopColor="#e9f5ff" stopOpacity=".14" />
            <stop offset=".66" stopColor="#a4b8ea" stopOpacity=".5" />
            <stop offset=".71" stopColor="#ffffff" stopOpacity=".92" />
            <stop offset=".78" stopColor="#bba7dd" stopOpacity=".40" />
            <stop offset="1" stopColor="#eef5ff" stopOpacity=".10" />
          </linearGradient>
          <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffffff" stopOpacity=".1" />
            <stop offset=".25" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset=".5" stopColor="#99b0e0" stopOpacity=".5" />
            <stop offset=".7" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="1" stopColor="#d6cbeb" stopOpacity=".1" />
          </linearGradient>
          <linearGradient id={`${id}-core`} x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#b7b3e2" stopOpacity="0" />
            <stop offset=".4" stopColor="#a1b5df" stopOpacity=".1" />
            <stop offset=".51" stopColor="#fff" stopOpacity=".85" />
            <stop offset=".56" stopColor="#9b9acb" stopOpacity=".16" />
            <stop offset=".7" stopColor="#fff" stopOpacity=".6" />
            <stop offset="1" stopColor="#b7b3e2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className={`${styles.ribbon} ${styles.distant}`}>
          <path
            d={sweep}
            fill="none"
            stroke="#8f9fcb"
            strokeOpacity=".16"
            strokeWidth="5"
          />
          <path
            d={sweep}
            fill={`url(#${id}-glass)`}
            stroke={`url(#${id}-edge)`}
            strokeWidth="1.2"
          />
          <path
            d={edge}
            fill="none"
            stroke={`url(#${id}-core)`}
            strokeWidth="24"
          />
        </g>
        <g className={`${styles.ribbon} ${styles.crossing}`}>
          <path
            d={fold}
            fill={`url(#${id}-glass)`}
            stroke={`url(#${id}-edge)`}
            strokeWidth="1.5"
          />
          <path
            d="M583 -25 C903 80 1110 220 1030 387 C956 542 660 480 684 680 C704 852 1055 835 1128 1000"
            fill="none"
            stroke={`url(#${id}-core)`}
            strokeWidth="38"
          />
          <path
            d="M560 20 C848 107 1024 201 984 364 C948 512 610 454 635 690 C655 887 998 872 1060 1020"
            fill="none"
            stroke={`url(#${id}-edge)`}
            strokeWidth="2"
          />
        </g>
        <g className={`${styles.ribbon} ${styles.foreground}`}>
          <path
            d={sweep}
            fill="none"
            stroke="#8f9fcb"
            strokeOpacity=".16"
            strokeWidth="5"
          />
          <path
            d={sweep}
            fill={`url(#${id}-glass)`}
            stroke={`url(#${id}-edge)`}
            strokeWidth="1.5"
          />
          <path
            d={edge}
            fill="none"
            stroke={`url(#${id}-core)`}
            strokeWidth="32"
          />
          <path
            d={edge}
            fill="none"
            stroke={`url(#${id}-edge)`}
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}
