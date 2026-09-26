import { STATUS_LABEL, type ParamainApp } from "@/data/apps";

/**
 * The lifecycle and source pills, shared by the grid cards and the flagship
 * panel. The panel wears them a little larger; everything else about them —
 * the colors, the labels, the dot — is decided in one place so a new status
 * or source can't render correctly in one spot and wrongly in the other.
 */
type BadgeSize = "sm" | "md";

const SIZE: Record<BadgeSize, { pad: string; weight: string }> = {
  sm: { pad: "px-2.5", weight: "font-medium" },
  md: { pad: "px-3", weight: "font-semibold" },
};

const STATUS_DOT: Record<ParamainApp["status"], string> = {
  live: "bg-sage",
  beta: "bg-amber",
  soon: "bg-muted",
};

export function StatusBadge({
  status,
  size = "sm",
}: {
  status: ParamainApp["status"];
  size?: BadgeSize;
}) {
  return (
    <span
      className={`border-line bg-canvas text-ink-soft inline-flex items-center gap-1.5 rounded-full border py-1 text-xs font-medium ${SIZE[size].pad}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function SourceBadge({
  source,
  size = "sm",
}: {
  source: ParamainApp["source"];
  size?: BadgeSize;
}) {
  const isOpen = source === "open";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full py-1 text-xs ${SIZE[size].pad} ${SIZE[size].weight}`}
      style={{
        background: isOpen ? "var(--color-sage-soft)" : "var(--color-line)",
        color: isOpen ? "var(--color-sage)" : "var(--color-ink-soft)",
      }}
      title={isOpen ? "Open source" : "Source not public"}
    >
      {isOpen ? "Open source" : "Closed source"}
    </span>
  );
}
