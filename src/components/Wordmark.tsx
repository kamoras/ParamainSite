/**
 * Paramain emblem — an open doorway with a bright core and a few smaller
 * lights orbiting it: one main project, the rest circling alongside (para ·
 * main), each in its own project colour. The arch and core inherit colour via
 * currentColor; the satellites use the site's accent tokens. They drift
 * slowly, and hold still for anyone who prefers reduced motion.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 28V15a11 11 0 0 1 22 0v13"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="17" r="3.2" fill="currentColor" />
      <g className="anim-orbit" style={{ transformOrigin: "16px 17px" }}>
        <circle cx="16" cy="10.4" r="2" fill="var(--color-plum)" />
        <circle cx="9.6" cy="23.4" r="2" fill="var(--color-teal)" />
        <circle cx="22.4" cy="23.4" r="2" fill="var(--color-amber)" />
      </g>
    </svg>
  );
}
