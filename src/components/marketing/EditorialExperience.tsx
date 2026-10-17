"use client";

import { useEffect, useRef } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";

/** Progressive enhancement: the complete page is visible before motion loads. */
export default function EditorialExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  const entered = useRef(false);
  const revealed = useRef(new WeakSet<Element>());

  useEffect(() => {
    const root = scope.current as HTMLElement | null;
    if (reduceMotion !== false || !root) return;
    const compact = window.matchMedia("(max-width: 1024px)").matches;
    const controls: { stop: () => void }[] = [];
    const originalStyles = new Map<
      HTMLElement,
      { opacity: string; transform: string }
    >();
    const reveal = (
      element: Element | null,
      delay = 0,
      y = 10,
      duration = 0.5,
    ) => {
      if (!(element instanceof HTMLElement)) return;
      if (!originalStyles.has(element))
        originalStyles.set(element, {
          opacity: element.style.opacity,
          transform: element.style.transform,
        });
      controls.push(
        animate(
          element,
          { opacity: [0.65, 1], y: [compact ? y * 0.5 : y, 0] },
          {
            duration: compact ? Math.min(duration, 0.4) : duration,
            delay: compact ? delay * 0.55 : delay,
            ease: [0.22, 1, 0.36, 1],
          },
        ),
      );
    };
    root.classList.add("ed-motion-ready");
    if (!entered.current) {
      entered.current = true;
      reveal(document.querySelector(".ed-site-header"), 0, 0, 0.4);
      [
        [".ed-hero-copy > .ed-eyebrow", 0.04],
        [".ed-hero h1", 0.1],
        [".ed-hero-description", 0.18],
        [".ed-hero .ed-actions > a:first-child", 0.24],
        [".ed-hero .ed-actions > a + a", 0.3],
        [".ed-hero-note", 0.34],
        [".nw-spatial-interface", 0.16],
      ].forEach(([selector, delay]) =>
        reveal(
          root.querySelector(String(selector)),
          Number(delay),
          selector === ".nw-spatial-interface" ? 14 : 10,
        ),
      );
      root
        .querySelectorAll(".is-preview .ed-evidence-item")
        .forEach((element, index) =>
          reveal(element, 0.32 + index * 0.07, 5, 0.4),
        );
    }

    const hero = root.querySelector<HTMLElement>(".ed-hero");
    const desktopPointer = window.matchMedia(
      "(min-width: 1025px) and (pointer: fine)",
    );
    let frame = 0;
    const resetDepth = () => {
      hero?.style.setProperty("--nw-depth-x", "0px");
      hero?.style.setProperty("--nw-depth-y", "0px");
    };
    const moveDepth = (event: PointerEvent) => {
      if (!desktopPointer.matches || !hero) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(
          -1,
          Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
        );
        const y = Math.max(
          -1,
          Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
        );
        hero.style.setProperty("--nw-depth-x", `${x * 4}px`);
        hero.style.setProperty("--nw-depth-y", `${y * 3}px`);
      });
    };
    hero?.addEventListener("pointermove", moveDepth, { passive: true });
    hero?.addEventListener("pointerleave", resetDepth);

    let heroVisible = true;
    const updateAmbient = () =>
      root.classList.toggle("ed-art-visible", heroVisible && !document.hidden);
    document.addEventListener("visibilitychange", updateAmbient);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) {
            heroVisible = entry.isIntersecting;
            updateAmbient();
            return;
          }
          if (!entry.isIntersecting || revealed.current.has(entry.target))
            return;
          revealed.current.add(entry.target);
          if (entry.target.matches(".ed-dossier"))
            entry.target.classList.add("ed-product-visible");
          else if (
            entry.target.matches(".ed-snapshot-strip, .ed-method-board")
          ) {
            entry.target
              .querySelectorAll(":scope > div, :scope > a")
              .forEach((element, i) => reveal(element, i * 0.07, 8, 0.45));
          } else reveal(entry.target, 0, 10, 0.45);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    root
      .querySelectorAll(
        ".ed-dossier, .ed-snapshot-strip, .ed-story-board, .ed-method-board, .ed-offer-paper",
      )
      .forEach((element) => observer.observe(element));
    if (hero) observer.observe(hero);
    updateAmbient();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateAmbient);
      root.classList.remove("ed-motion-ready", "ed-art-visible");
      cancelAnimationFrame(frame);
      hero?.removeEventListener("pointermove", moveDepth);
      hero?.removeEventListener("pointerleave", resetDepth);
      resetDepth();
      controls.forEach((control) => control.stop());
      originalStyles.forEach((style, element) => {
        element.style.opacity = style.opacity;
        element.style.transform = style.transform;
      });
    };
  }, [animate, reduceMotion, scope]);
  return (
    <div ref={scope} className="ed-home" id="top">
      {children}
    </div>
  );
}
