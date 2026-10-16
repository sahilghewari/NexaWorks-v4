/** A deterministic projected sphere: source connections, not a downloaded scene. */
export default function IntelligenceEnvironment() {
  const radius = 232;
  const project = (lat: number, lon: number) => {
    const x = radius * Math.cos(lat) * Math.sin(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.cos(lon);
    const tilt = -0.33;
    return {
      x: 450 + x * Math.cos(tilt) - y * Math.sin(tilt),
      y: 365 + x * Math.sin(tilt) + y * Math.cos(tilt),
      z,
    };
  };
  const lines = Array.from({ length: 17 }, (_, i) => {
    const longitude = (i / 17) * Math.PI * 2;
    return Array.from({ length: 65 }, (_, j) =>
      project(-Math.PI / 2 + (j / 64) * Math.PI, longitude),
    );
  });
  const latitudes = Array.from({ length: 11 }, (_, i) =>
    Array.from({ length: 97 }, (_, j) =>
      project(-1.3 + i * 0.26, (j / 96) * Math.PI * 2),
    ),
  );
  const nodes = Array.from({ length: 110 }, (_, i) =>
    project(Math.asin(1 - (2 * (i + 0.5)) / 110), i * 2.399963),
  );
  const path = (points: { x: number; y: number }[]) =>
    points.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  return (
    <div className="nw-environment" aria-hidden="true">
      <svg className="nw-universe" viewBox="0 0 900 800" fill="none">
        <defs>
          <radialGradient id="nw-sphere-light" cx="35%" cy="30%" r="70%">
            <stop stopColor="#5666b8" stopOpacity=".32" />
            <stop offset=".7" stopColor="#172d47" stopOpacity=".08" />
            <stop offset="1" stopColor="#0b1020" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="nw-orbit-light"
            x1="100"
            y1="200"
            x2="750"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8997ff" stopOpacity=".05" />
            <stop offset=".45" stopColor="#b6c2ff" stopOpacity=".85" />
            <stop offset="1" stopColor="#71dbea" stopOpacity=".12" />
          </linearGradient>
          <radialGradient id="nw-node-light">
            <stop stopColor="#e0eeff" />
            <stop offset=".2" stopColor="#93c9ff" stopOpacity=".65" />
            <stop offset="1" stopColor="#9bc6ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="nw-stars" fill="#a8c2e8">
          {Array.from({ length: 62 }, (_, i) => (
            <circle
              key={i}
              cx={(i * 173.37 + 31) % 900}
              cy={(i * 97.83 + 19) % 760}
              r={i % 7 === 0 ? 1.3 : 0.65}
              opacity={0.18 + (i % 5) * 0.09}
            />
          ))}
        </g>
        <circle cx="450" cy="365" r="248" fill="url(#nw-sphere-light)" />
        <circle
          cx="450"
          cy="365"
          r="233"
          stroke="url(#nw-orbit-light)"
          strokeWidth=".8"
          opacity=".55"
        />
        <g className="nw-sphere-grid" stroke="#8096d8" strokeWidth=".65">
          {[...lines, ...latitudes].map((points, i) => (
            <polyline
              key={i}
              points={path(points)}
              opacity={i % 3 === 0 ? 0.36 : 0.15}
            />
          ))}
        </g>
        <g stroke="#8ea7f0" strokeWidth=".65">
          {nodes
            .filter((_, i) => i % 4 === 0)
            .map((p, i) => (
              <path
                key={i}
                d={`M${p.x},${p.y} L${nodes[(i * 4 + 17) % nodes.length].x},${nodes[(i * 4 + 17) % nodes.length].y}`}
                opacity=".16"
              />
            ))}
        </g>
        <g className="nw-orbits" stroke="url(#nw-orbit-light)">
          <ellipse
            cx="450"
            cy="365"
            rx="345"
            ry="109"
            transform="rotate(-27 450 365)"
          />
          <ellipse
            cx="450"
            cy="365"
            rx="312"
            ry="156"
            transform="rotate(48 450 365)"
            strokeWidth=".6"
          />
          <ellipse
            cx="450"
            cy="365"
            rx="276"
            ry="265"
            transform="rotate(-15 450 365)"
            strokeDasharray="2 13"
            opacity=".4"
          />
        </g>
        <g>
          {nodes.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.z > 50 ? 1.8 : 0.9}
              fill={i % 5 === 0 ? "#8ae5e8" : "#b7c7ff"}
              opacity={p.z > 0 ? 0.8 : 0.25}
            />
          ))}
          {[nodes[19], nodes[44], nodes[70], nodes[93]].map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="13"
              fill="url(#nw-node-light)"
            />
          ))}
        </g>
        <g className="nw-signal-paths" stroke="#88c7e8" strokeWidth=".8">
          <path d="M259 192 L202 139 H92" />
          <path d="M650 229 L712 146 H813" />
          <path d="M265 515 L190 603 H87" />
          <circle cx="259" cy="192" r="4" fill="#b6bcff" />
          <circle cx="650" cy="229" r="4" fill="#80e0db" />
          <circle cx="265" cy="515" r="4" fill="#e0bc85" />
        </g>
      </svg>
      <span className="nw-environment-label nw-label-people">
        <i />
        RELATIONSHIP CONTEXT
      </span>
      <span className="nw-environment-label nw-label-product">
        <i />
        PRODUCT SIGNALS
      </span>
      <span className="nw-environment-label nw-label-support">
        <i />
        SUPPORT EVIDENCE
      </span>
      <span className="nw-environment-caption">
        CONNECTED CONTEXT / HUMAN PERSPECTIVE
      </span>
    </div>
  );
}
