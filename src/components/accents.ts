import type { ParamainApp } from "@/data/apps";

/** Maps an app's accent key to its CSS custom-property colors. */
export const ACCENTS: Record<
  ParamainApp["accent"],
  { color: string; soft: string }
> = {
  terracotta: {
    color: "var(--color-terracotta)",
    soft: "var(--color-terracotta-soft)",
  },
  amber: { color: "var(--color-amber)", soft: "var(--color-amber-soft)" },
  sage: { color: "var(--color-sage)", soft: "var(--color-sage-soft)" },
  plum: { color: "var(--color-plum)", soft: "var(--color-plum-soft)" },
  teal: { color: "var(--color-teal)", soft: "var(--color-teal-soft)" },
};
