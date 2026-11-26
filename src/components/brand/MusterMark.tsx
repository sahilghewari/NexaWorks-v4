import { MARK_PATH, MARK_VIEWBOX } from "./mark-geometry";

/**
 * The Muster knot, traced from the founder's reference (see MUSTER-AI docs/BRAND.md).
 * Only two colours: deep ink violet on light surfaces, warm white on dark ones.
 */
export function MusterMark({
  reversed = false,
  className,
  height = 22,
}: {
  reversed?: boolean;
  className?: string;
  height?: number;
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      height={height}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ width: "auto" }}
    >
      <path d={MARK_PATH} fill={reversed ? "#F6EFE6" : "#5B2A7A"} fillRule="evenodd" />
    </svg>
  );
}

export function MusterLockup({ reversed = false }: { reversed?: boolean }) {
  return (
    <span className="muster-lockup" data-reversed={reversed ? "" : undefined}>
      <MusterMark reversed={reversed} />
      <span className="muster-wordmark">Muster AI</span>
    </span>
  );
}
