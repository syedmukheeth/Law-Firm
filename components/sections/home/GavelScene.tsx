export function GavelScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 440" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gv-handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bronze-500)" />
          <stop offset="45%" stopColor="var(--bronze-600)" />
          <stop offset="100%" stopColor="var(--bronze-500)" />
        </linearGradient>
        <linearGradient id="gv-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-700)" />
          <stop offset="42%" stopColor="var(--gold-800)" />
          <stop offset="100%" stopColor="var(--gold-900)" />
        </linearGradient>
        <radialGradient id="gv-headcap-l" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--gold-700)" />
          <stop offset="100%" stopColor="var(--gold-900)" />
        </radialGradient>
        <radialGradient id="gv-headcap-r" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--gold-600)" />
          <stop offset="100%" stopColor="var(--gold-800)" />
        </radialGradient>
        <linearGradient id="gv-block" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-500)" />
          <stop offset="50%" stopColor="var(--gold-600)" />
          <stop offset="100%" stopColor="var(--gold-700)" />
        </linearGradient>
        <radialGradient id="gv-block-top" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="var(--gold-400)" />
          <stop offset="100%" stopColor="var(--gold-600)" />
        </radialGradient>
      </defs>

      {/* blueprint outline — drawn stroke-first, stays visible under the solid fills */}
      <g data-layer="blueprint" fill="none" stroke="var(--gold-400)" strokeWidth={2}>
        <ellipse data-draw cx="300" cy="345" rx="150" ry="24" />
        <path data-draw d="M150 345 V378 A150 24 0 0 0 450 378 V345" />
        <ellipse data-draw cx="300" cy="378" rx="150" ry="24" />
        <g transform="rotate(-34 300 190)">
          <rect data-draw x="70" y="146" width="150" height="88" rx="16" />
          <ellipse data-draw cx="70" cy="190" rx="15" ry="44" />
          <ellipse data-draw cx="220" cy="190" rx="15" ry="44" />
          <rect data-draw x="215" y="172" width="22" height="36" rx="6" />
          <rect data-draw x="237" y="180" width="235" height="20" rx="10" />
          <ellipse data-draw cx="472" cy="190" rx="10" ry="16" />
        </g>
      </g>

      {/* solid layers nested in a static rotated frame, so gsap's own scaleY/y
          transform composes cleanly with the fixed -34deg gavel tilt */}
      <g transform="rotate(-34 300 190)">
        <g data-layer="handle">
          <rect x="237" y="180" width="235" height="20" rx="10" fill="url(#gv-handle)" />
          <rect x="237" y="180" width="235" height="6" rx="3" fill="var(--gold-300)" opacity={0.35} />
          <ellipse cx="472" cy="190" rx="10" ry="16" fill="var(--bronze-600)" />
        </g>
        <g data-layer="collar">
          <rect x="215" y="172" width="22" height="36" rx="6" fill="var(--gold-500)" />
          <rect x="215" y="172" width="22" height="10" rx="5" fill="var(--gold-300)" opacity={0.5} />
        </g>
        <g data-layer="head">
          <rect x="70" y="146" width="150" height="88" rx="16" fill="url(#gv-head)" />
          <rect x="82" y="150" width="126" height="14" rx="7" fill="var(--gold-500)" opacity={0.35} />
          <ellipse cx="70" cy="190" rx="15" ry="44" fill="url(#gv-headcap-l)" />
          <ellipse cx="220" cy="190" rx="15" ry="44" fill="url(#gv-headcap-r)" />
          <ellipse cx="216" cy="178" rx="5" ry="14" fill="var(--gold-300)" opacity={0.45} />
        </g>
      </g>

      {/* sound block */}
      <g data-layer="block">
        <rect x="150" y="345" width="300" height="48" fill="url(#gv-block)" />
        <ellipse cx="300" cy="393" rx="150" ry="24" fill="var(--gold-800)" />
        <ellipse cx="300" cy="345" rx="150" ry="24" fill="url(#gv-block-top)" />
        <ellipse cx="300" cy="345" rx="150" ry="24" fill="none" stroke="var(--gold-800)" strokeWidth="2" opacity={0.4} />
      </g>

      {/* impact rings from the strike */}
      <g data-layer="rings" fill="none" stroke="var(--gold-400)" strokeWidth={2}>
        <circle cx="300" cy="358" r="62" opacity={0.7} />
        <circle cx="300" cy="358" r="98" opacity={0.45} />
        <circle cx="300" cy="358" r="134" opacity={0.25} />
      </g>

      {/* seal — case closed */}
      <g data-layer="seal">
        <circle cx="300" cy="358" r="34" fill="none" stroke="var(--emerald-400)" strokeWidth={3} />
        <path
          d="M286 358 l10 10 20 -22"
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
