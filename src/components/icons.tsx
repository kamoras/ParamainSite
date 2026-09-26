/**
 * Shared presentational icons.
 *
 * These are the generic, reusable ones — an icon used by more than one
 * component belongs here rather than being copied into each. Icons that are
 * bespoke to a single component (the hero's hand-drawn underline, the ethos
 * glyphs keyed by principle) stay with the component that owns them.
 */

interface IconProps {
  className?: string;
}

/** Stroke-drawn icons share these attributes. */
const STROKE_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Solid icons are filled with the current text color. */
const FILL_PROPS = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...FILL_PROPS} className={className}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.55-.3-5.24-1.3-5.24-5.76 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.2a11 11 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.62.23 2.82.11 3.12.75.82 1.2 1.85 1.2 3.12 0 4.47-2.7 5.45-5.27 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Star({ className }: IconProps) {
  return (
    <svg {...FILL_PROPS} className={className}>
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...STROKE_PROPS} className={className}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg {...STROKE_PROPS} className={className}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
