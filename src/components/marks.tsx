/**
 * Each project's own mark, drawn from its repository, so the portfolio shows
 * the real logos and not stand-ins.
 */

/** Hopline: a "hop" arcing between two stops, on its navy square. */
export function HoplineMark({
  className = "h-9 w-9",
  rounded = true,
}: {
  className?: string;
  rounded?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" rx={rounded ? 8 : 0} fill="#12315e" />
      <path
        d="M9 21.5C11 9 21 9 23 21.5"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="21.5" r="3.1" fill="#fff" />
      <circle cx="23" cy="21.5" r="3.1" fill="#9cc0ff" />
    </svg>
  );
}

/** Spliced: an anodised console panel with a fader and level LEDs. */
export function SplicedMark({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="sp-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3e44" />
          <stop offset="1" stopColor="#1b1d20" />
        </linearGradient>
        <linearGradient id="sp-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f5ef" />
          <stop offset="0.45" stopColor="#d6d2c8" />
          <stop offset="0.5" stopColor="#9e9b94" />
          <stop offset="1" stopColor="#e2ded5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#sp-plate)" />
      <rect x="28" y="8" width="8" height="48" rx="4" fill="#07080a" />
      <g fill="#57f2d6">
        <rect x="12" y="38" width="9" height="4" rx="1.5" />
        <rect x="12" y="31" width="9" height="4" rx="1.5" opacity="0.85" />
        <rect x="12" y="24" width="9" height="4" rx="1.5" opacity="0.6" />
        <rect x="43" y="38" width="9" height="4" rx="1.5" />
        <rect x="43" y="31" width="9" height="4" rx="1.5" opacity="0.85" />
      </g>
      <rect x="12" y="17" width="9" height="4" rx="1.5" fill="#e0261b" />
      <rect
        x="17"
        y="27"
        width="30"
        height="16"
        rx="3"
        fill="url(#sp-cap)"
        stroke="#000"
        strokeOpacity="0.35"
      />
      <rect x="19" y="34" width="26" height="2.4" rx="1" fill="#d8432f" />
    </svg>
  );
}

/** Linkertree: a parent node branching to two child nodes, on its green. */
export function LinkertreeMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="lt-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#43e660" />
          <stop offset="1" stopColor="#1b5e2b" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#lt-grad)" />
      <path
        d="M16 9.5 L8.5 22 M16 9.5 L23.5 22"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="7" r="3.2" fill="#fff" />
      <circle cx="8" cy="24.5" r="2.9" fill="#fff" />
      <circle cx="24" cy="24.5" r="2.9" fill="#fff" />
    </svg>
  );
}

/** Stream tools: its dark panel and the rainbow its Hues and Cues game wears. */
export function StreamToolsMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="st-rainbow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5f6d" />
          <stop offset="0.2" stopColor="#ffc371" />
          <stop offset="0.4" stopColor="#7cf29c" />
          <stop offset="0.6" stopColor="#4fc3f7" />
          <stop offset="0.8" stopColor="#8b7bff" />
          <stop offset="1" stopColor="#f06292" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="#0e1016" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="6.5"
        fill="none"
        stroke="#2c3142"
      />
      <path d="M12 9.5v13l11-6.5z" fill="url(#st-rainbow)" />
    </svg>
  );
}
