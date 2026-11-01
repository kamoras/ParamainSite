import type { ParamainApp } from "@/data/apps";

/** Maps an app's accent key to its CSS custom-property colors. */
export const ACCENTS: Record<
  ParamainApp["accent"],
  { color: string; soft: string }
> = {
  ledger: { color: "var(--color-ledger)", soft: "var(--color-ledger-soft)" },
  azure: { color: "var(--color-hop-accent)", soft: "#dbe7fb" },
  cobalt: { color: "var(--color-console-blue)", soft: "#d6e0ef" },
  violet: { color: "var(--color-stream-accent)", soft: "#e4e0ff" },
  emerald: { color: "var(--color-link-green-deep)", soft: "#d4f5da" },
};
