import { CONNECTORS, type Connector } from "./connector-logos";

/**
 * Headline number for the integrations section. Keep it in step with what the product
 * actually connects to (native connectors plus CSV, webhooks and the Usage API).
 */
export const CONNECTOR_TOTAL = "100+";

function Logo({ c }: { c: Connector }) {
  return (
    <span className="mh-logo" title={c.name}>
      {c.path ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={c.path} fill={`#${c.hex}`} />
        </svg>
      ) : (
        <span className="mh-logo-mono" style={{ background: `#${c.hex}` }} aria-hidden="true">
          {c.name[0]}
        </span>
      )}
      <span>{c.name}</span>
    </span>
  );
}

function Row({ items, reverse }: { items: Connector[]; reverse?: boolean }) {
  return (
    <div className={`mh-marquee ${reverse ? "is-reverse" : ""}`}>
      <div className="mh-marquee-track">
        {[...items, ...items].map((c, i) => (
          <Logo key={`${c.name}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
}

export default function Connectors() {
  const third = Math.ceil(CONNECTORS.length / 3);
  const rows = [
    CONNECTORS.slice(0, third),
    CONNECTORS.slice(third, third * 2),
    CONNECTORS.slice(third * 2),
  ];
  const categories = Array.from(new Set(CONNECTORS.map((c) => c.category)));
  return (
    <div className="mh-connectors">
      <div className="mh-marquees" aria-label={`Connectors: ${CONNECTORS.map((c) => c.name).join(", ")}`}>
        <Row items={rows[0]} />
        <Row items={rows[1]} reverse />
        <Row items={rows[2]} />
      </div>
      <div className="mh-connector-total">
        <strong>{CONNECTOR_TOTAL}</strong>
        <span>tools connected across {categories.join(", ").replace(/, ([^,]*)$/, " and $1")}</span>
      </div>
    </div>
  );
}
