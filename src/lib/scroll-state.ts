/**
 * ZeroDay — shared scroll / pointer state.
 *
 * This is a deliberately simple module-level mutable object, NOT React state.
 * Lenis writes progress/velocity here every frame; the R3F useFrame loop reads
 * it directly. This avoids triggering React re-renders 60x/sec and keeps the
 * 3D camera perfectly smooth and decoupled from the DOM.
 */

export type ScrollState = {
  /** Overall scroll progress 0..1 across the whole page. */
  progress: number;
  /** Pixels scrolled from top. */
  scrollY: number;
  /** Total scrollable height in px. */
  scrollHeight: number;
  /** Normalised pointer, -1..1 on each axis (smoothed). */
  pointer: { x: number; y: number };
  /** Raw pointer, -1..1 (un-smoothed). */
  rawPointer: { x: number; y: number };
  /** Current scene index 0..N (which zone the camera is in). */
  sceneIndex: number;
  /** Smoothed scene index (fractional, for blending). */
  sceneBlend: number;
  /** Whether reduced motion is requested. */
  reducedMotion: boolean;
  /** Whether the device is touch / coarse pointer. */
  isTouch: boolean;
  /** Total number of scenes (set by the page). */
  sceneCount: number;
  /** A monotonically increasing time in seconds (for subtle animation). */
  time: number;
};

export const scrollState: ScrollState = {
  progress: 0,
  scrollY: 0,
  scrollHeight: 1,
  pointer: { x: 0, y: 0 },
  rawPointer: { x: 0, y: 0 },
  sceneIndex: 0,
  sceneBlend: 0,
  reducedMotion: false,
  isTouch: false,
  sceneCount: 10,
  time: 0,
};

/** Holder for the live Lenis instance so nav/CTAs can scroll programmatically. */
export const lenisHolder: {
  current: {
    scrollTo: (target: number | string | HTMLElement, opts?: Record<string, unknown>) => void;
  } | null;
} = { current: null };

/** Scroll to a section id smoothly (falls back to native). */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisHolder.current) {
    lenisHolder.current.scrollTo(el, { offset: 0, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/** Snap a progress value to the nearest scene index. */
export function sceneFromProgress(progress: number, count: number): number {
  return Math.min(count - 1, Math.max(0, Math.round(progress * (count - 1))));
}

/** Linear lerp helper. */
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Smoothstep for eased blending between keyframes. */
export const smoothstep = (t: number) => t * t * (3 - 2 * t);

/** Sample a sorted array of keyframes [{p, value}] by progress. */
export function sampleKeyframes<T extends Record<string, number>>(
  progress: number,
  keys: ReadonlyArray<{ p: number } & T>,
): T {
  if (progress <= keys[0].p) {
    const { p, ...rest } = keys[0];
    return rest as T;
  }
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (progress >= a.p && progress <= b.p) {
      const localT = smoothstep((progress - a.p) / (b.p - a.p));
      const out: Record<string, number> = {};
      for (const k of Object.keys(a)) {
        if (k === "p") continue;
        out[k] = lerp(a[k as keyof T], b[k as keyof T], localT);
      }
      return out as T;
    }
  }
  const { p, ...rest } = keys[keys.length - 1];
  return rest as T;
}
