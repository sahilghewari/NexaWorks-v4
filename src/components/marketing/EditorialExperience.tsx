"use client";

import { useEffect } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";

/** Server-rendered content remains visible and usable even before motion loads. */
export default function EditorialExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion !== false || !scope.current) return;
    const controls: { stop: () => void }[] = [];
    const hero = scope.current.querySelectorAll(
      ".ed-hero-copy > :not(.ed-hero-margin), .ed-dossier",
    );
    hero.forEach((element: Element, i: number) =>
      controls.push(
        animate(
          element,
          { opacity: [0.5, 1], y: [12, 0] },
          { duration: 0.42, delay: Math.min(i * 0.045, 0.2), ease: "easeOut" },
        ),
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          controls.push(
            animate(
              entry.target,
              { opacity: [0.7, 1], y: [16, 0] },
              { duration: 0.45, ease: "easeOut" },
            ),
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    scope.current
      .querySelectorAll(".ed-story-board, .ed-method-board, .ed-offer-paper")
      .forEach((element: Element) => observer.observe(element));
    return () => {
      observer.disconnect();
      controls.forEach((control) => control.stop());
    };
  }, [animate, reduceMotion, scope]);
  return (
    <div ref={scope} className="ed-home" id="top">
      {children}
    </div>
  );
}
