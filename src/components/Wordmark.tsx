/**
 * Paramain emblem — a plain geometric "P" with a small amber dot sitting
 * beside it ("para" means beside). The P inherits colour via currentColor.
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
        d="M9 28V4"
        stroke="currentColor"
        strokeWidth="4.4"
        strokeLinecap="round"
      />
      <circle
        cx="17"
        cy="11.5"
        r="7.2"
        stroke="currentColor"
        strokeWidth="4.4"
      />
      <circle cx="26.5" cy="25" r="2.8" fill="var(--color-amber)" />
    </svg>
  );
}
