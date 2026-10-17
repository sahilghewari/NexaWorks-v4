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
      ".ed-hero-copy > :not(.ed-hero-margin), .nw-spatial-interface",
    );
    hero.forEach((element: Element, i: number) =>
      controls.push(
        animate(
          element,
          { opacity: [0.95, 1], y: [8, 0] },
          { duration: 0.35, delay: Math.min(i * 0.035, 0.12), ease: "easeOut" },
        ),
      ),
    );
    const environment = scope.current.querySelector(".glass-hero-art");
    if (environment)
      controls.push(
        animate(
          environment,
          { opacity: [0.3, 1] },
          { duration: 0.8, ease: "easeOut" },
        ),
      );
    const heroElement = scope.current.querySelector(
      ".ed-hero",
    ) as HTMLElement | null;
    const desktopPointer = window.matchMedia(
      "(min-width: 1025px) and (pointer: fine)",
    );
    let frame = 0;
    const resetDepth = () => {
      heroElement?.style.setProperty("--nw-depth-x", "0px");
      heroElement?.style.setProperty("--nw-depth-y", "0px");
    };
    const moveDepth = (event: PointerEvent) => {
      if (!desktopPointer.matches || !heroElement) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = heroElement.getBoundingClientRect();
        const x = Math.max(
          -1,
          Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
        );
        const y = Math.max(
          -1,
          Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
        );
        heroElement.style.setProperty("--nw-depth-x", `${x * 6}px`);
        heroElement.style.setProperty("--nw-depth-y", `${y * 4}px`);
      });
    };
    heroElement?.addEventListener("pointermove", moveDepth, { passive: true });
    heroElement?.addEventListener("pointerleave", resetDepth);
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
      cancelAnimationFrame(frame);
      heroElement?.removeEventListener("pointermove", moveDepth);
      heroElement?.removeEventListener("pointerleave", resetDepth);
      resetDepth();
      controls.forEach((control) => control.stop());
    };
  }, [animate, reduceMotion, scope]);
  return (
    <div ref={scope} className="ed-home" id="top">
      {children}
    </div>
  );
}
