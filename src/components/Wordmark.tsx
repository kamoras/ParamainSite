/**
 * Paramain emblem — an open doorway / arch, signalling "open" and
 * "a way in". Inherits color via currentColor.
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
        d="M6 28V14a10 10 0 0 1 20 0v14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M13 28v-7a3 3 0 0 1 6 0v7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="13" r="1.8" fill="currentColor" />
    </svg>
  );
}
