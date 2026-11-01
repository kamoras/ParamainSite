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
      className={`border-line-strong/40 text-ink-soft label inline-flex items-center gap-1.5 rounded-sm border py-0.5 ${SIZE[size].pad}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * Every project here is open source, and the page says so once up front, so
 * an open app gets no badge. Only an app whose source is not public is flagged.
 */
export function SourceBadge({
  source,
  size = "sm",
}: {
  source: ParamainApp["source"];
  size?: BadgeSize;
}) {
  if (source === "open") return null;
  return (
    <span
      className={`label text-ink-soft border-line inline-flex items-center gap-1.5 rounded-sm border py-0.5 ${SIZE[size].pad}`}
      title="Source not public"
    >
      Closed source
    </span>
  );
}
