"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  type ReactNode,
} from "react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { Pause, Play } from "lucide-react";

const MotionPreference = createContext<{
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}>({
  enabled: true,
  setEnabled: () => {},
});

export function LivingExperience({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  return (
    <MotionPreference.Provider value={{ enabled, setEnabled }}>
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>
        <div
          className="enterprise-home living-experience home-with-sticky-cta"
          data-motion={enabled ? "on" : "off"}
        >
          {children}
        </div>
      </MotionConfig>
    </MotionPreference.Provider>
  );
}

export function useExperienceMotion() {
  const { enabled } = useContext(MotionPreference);
  const reducedMotion = useReducedMotion();
  return enabled && reducedMotion === false;
}

export function MotionToggle() {
  const { enabled, setEnabled } = useContext(MotionPreference);
  return (
    <button
      type="button"
      className="eh-motion-toggle"
      aria-pressed={enabled}
      aria-label="Ambient motion"
      onClick={() => setEnabled(!enabled)}
    >
      {enabled ? <Pause size={11} /> : <Play size={11} />} Motion{" "}
      {enabled ? "on" : "off"}
    </button>
  );
}

export function LivingCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const animate = useExperienceMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={animate ? { y: [12, 0] } : { y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={animate ? { y: -4 } : undefined}
      transition={{
        duration: animate ? 0.55 : 0,
        delay: animate ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function AmbientLight() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { margin: "100px" });
  const enabled = useExperienceMotion();
  const animate = enabled && visible;
  return (
    <div ref={ref} className="eh-ambient-stage" aria-hidden="true">
      <motion.div
        className="eh-ambient-light"
        animate={
          animate
            ? { x: [-24, 24, -24], opacity: [0.35, 0.6, 0.35] }
            : { x: 0, opacity: 0.4 }
        }
        transition={
          animate
            ? { duration: 18, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      />
    </div>
  );
}

export function SignalFlow() {
  const ref = useRef<SVGSVGElement>(null);
  const visible = useInView(ref, { margin: "100px" });
  const enabled = useExperienceMotion();
  const animate = enabled && visible;
  return (
    <svg
      ref={ref}
      className="eh-signal-flow"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="signal-beam">
          <stop offset="0" stopColor="#93b876" stopOpacity="0" />
          <stop offset=".5" stopColor="#79b86b" />
          <stop offset="1" stopColor="#93b876" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[
        "M70 65H290V150H510",
        "M70 150H510",
        "M70 235H290V150H510",
        "M510 150H940",
      ].map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#bacfb0" strokeWidth="1" />
          <motion.path
            d={d}
            fill="none"
            stroke="url(#signal-beam)"
            strokeWidth="2.5"
            strokeDasharray="40 220"
            initial={false}
            animate={
              animate ? { strokeDashoffset: [260, 0] } : { strokeDashoffset: 0 }
            }
            transition={
              animate
                ? {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }
                : { duration: 0 }
            }
          />
        </g>
      ))}
    </svg>
  );
}
