/**
 * The Civitas Research wordmark, as on civitas-research.org: CIVITAS in
 * Archivo 800 with wide tracking, a hairline divider, then RESEARCH small and
 * widely spaced. The words stay real text ("Civitas" "Research", uppercased
 * by CSS) so it reads as the project's name to search engines and screen
 * readers.
 */
export function CivitasWordmark({
  size = "md",
  as: Tag = "span",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  as?: "span" | "h3";
  className?: string;
}) {
  const sizes = {
    sm: { name: "text-sm", gap: "gap-2", rule: "h-3", sub: "text-[0.6rem]" },
    md: { name: "text-xl", gap: "gap-2.5", rule: "h-4", sub: "text-xs" },
    lg: {
      name: "text-[clamp(1.9rem,4vw,2.6rem)]",
      gap: "gap-3.5",
      rule: "h-6 sm:h-7",
      sub: "text-[clamp(0.75rem,1.4vw,0.95rem)]",
    },
  }[size];

  return (
    <Tag
      className={`text-civ-ink inline-flex items-center ${sizes.gap} ${className}`}
    >
      <span
        className={`font-wordmark leading-none font-extrabold tracking-[0.14em] uppercase ${sizes.name}`}
      >
        Civitas
      </span>
      <span
        aria-hidden="true"
        className={`border-civ-ink/50 border-l ${sizes.rule}`}
      />
      <span
        className={`text-civ-ink-lo leading-none tracking-[0.3em] uppercase ${sizes.sub}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Research
      </span>
    </Tag>
  );
}
