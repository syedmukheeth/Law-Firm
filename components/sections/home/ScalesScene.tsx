export function ScalesScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 460" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sc-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-400)" />
          <stop offset="100%" stopColor="var(--gold-700)" />
        </linearGradient>
      </defs>

      {/* base */}
      <g data-part="base">
        <rect x="120" y="410" width="120" height="14" rx="7" fill="url(#sc-metal)" />
        <rect x="150" y="392" width="60" height="20" rx="4" fill="var(--gold-600)" />
      </g>

      {/* post */}
      <g data-part="post" style={{ transformOrigin: "180px 410px" }}>
        <rect x="176" y="70" width="8" height="330" rx="4" fill="url(#sc-metal)" />
      </g>

      {/* beam */}
      <g data-part="beam" style={{ transformOrigin: "180px 70px" }}>
        <rect x="40" y="64" width="280" height="7" rx="3.5" fill="var(--gold-500)" />
        <circle cx="180" cy="67" r="10" fill="var(--gold-400)" />
      </g>

      {/* left pan */}
      <g data-part="pan-left">
        <line x1="55" y1="68" x2="55" y2="150" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="55" y1="68" x2="25" y2="150" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="55" y1="68" x2="85" y2="150" stroke="var(--gold-500)" strokeWidth="2" />
        <path d="M18 150 h74 a37 20 0 0 1 -74 0 Z" fill="var(--gold-600)" />
        <ellipse cx="55" cy="150" rx="37" ry="7" fill="var(--gold-400)" />
      </g>

      {/* right pan */}
      <g data-part="pan-right">
        <line x1="305" y1="68" x2="305" y2="140" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="305" y1="68" x2="275" y2="140" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="305" y1="68" x2="335" y2="140" stroke="var(--gold-500)" strokeWidth="2" />
        <path d="M268 140 h74 a37 20 0 0 1 -74 0 Z" fill="var(--gold-600)" />
        <ellipse cx="305" cy="140" rx="37" ry="7" fill="var(--gold-400)" />
      </g>

      {/* finial */}
      <g data-part="finial">
        <circle cx="180" cy="52" r="12" fill="var(--emerald-400)" />
      </g>
    </svg>
  );
}
