export function GavelScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 420" className={className} aria-hidden="true" focusable="false">
      {/* blueprint outline — drawn stroke-first, stays visible under the solid fills */}
      <g data-layer="blueprint" fill="none" stroke="var(--gold-400)" strokeWidth={2}>
        <ellipse data-draw cx="300" cy="330" rx="150" ry="22" />
        <path data-draw d="M150 330 V362 A150 22 0 0 0 450 362 V330" />
        <ellipse data-draw cx="300" cy="362" rx="150" ry="22" />
        <g transform="rotate(-34 300 190)">
          <rect data-draw x="90" y="150" width="130" height="80" rx="12" />
          <ellipse data-draw cx="90" cy="190" rx="13" ry="40" />
          <ellipse data-draw cx="220" cy="190" rx="13" ry="40" />
          <rect data-draw x="215" y="170" width="20" height="42" rx="5" />
          <rect data-draw x="230" y="178" width="260" height="26" rx="13" />
          <rect data-draw x="470" y="170" width="18" height="38" rx="5" />
        </g>
      </g>

      {/* solid layers nested in a static rotated frame, so gsap's own scaleY/y
          transform composes cleanly with the fixed -34deg gavel tilt */}
      <g transform="rotate(-34 300 190)">
        <g data-layer="handle">
          <rect x="230" y="178" width="260" height="26" rx="13" fill="var(--bronze-500)" />
          <rect x="470" y="170" width="18" height="38" rx="5" fill="var(--bronze-600)" />
        </g>
        <g data-layer="collar">
          <rect x="215" y="170" width="20" height="42" rx="5" fill="var(--gold-700)" />
        </g>
        <g data-layer="head">
          <rect x="90" y="150" width="130" height="80" rx="12" fill="var(--gold-800)" />
          <ellipse cx="90" cy="190" rx="13" ry="40" fill="var(--gold-900)" />
          <ellipse cx="220" cy="190" rx="13" ry="40" fill="var(--gold-700)" />
        </g>
      </g>

      {/* sound block */}
      <g data-layer="block">
        <rect x="150" y="330" width="300" height="45" rx="14" fill="var(--gold-600)" />
        <ellipse cx="300" cy="330" rx="150" ry="22" fill="var(--gold-500)" />
        <ellipse cx="300" cy="362" rx="150" ry="22" fill="var(--gold-700)" />
      </g>

      {/* impact rings from the strike */}
      <g data-layer="rings" fill="none" stroke="var(--gold-400)" strokeWidth={2}>
        <circle cx="300" cy="345" r="60" opacity={0.7} />
        <circle cx="300" cy="345" r="95" opacity={0.45} />
        <circle cx="300" cy="345" r="130" opacity={0.25} />
      </g>

      {/* seal — case closed */}
      <g data-layer="seal">
        <circle cx="300" cy="345" r="34" fill="none" stroke="var(--emerald-400)" strokeWidth={3} />
        <path
          d="M286 345 l10 10 20 -22"
          fill="none"
          stroke="var(--emerald-400)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
