import { displayDomain, type ParamainApp } from "@/data/apps";
import { LinkertreeMark, StreamToolsMark } from "./marks";

/**
 * A quiet one-line entry. Even quiet, each carries its own project's mark and
 * a nod to its typeface and colour, so it still looks like itself.
 */
export function MinorApp({ app }: { app: ParamainApp }) {
  const brand = BRANDS[app.slug];

  return (
    <li id={app.slug} className="scroll-mt-24">
      <a
        href={app.url}
        target="_blank"
        rel="noreferrer"
        className="group hover:bg-surface/60 -mx-3 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl px-3 py-4 transition-colors"
      >
        {brand?.mark}
        <span
          className={brand?.nameClass ?? "font-display text-lg font-medium"}
          style={brand?.nameStyle}
        >
          {app.name}
        </span>
        <span className="text-ink-soft min-w-0 flex-1 text-sm">
          {app.tagline}
        </span>
        <span className="text-ink-soft group-hover:text-ink font-mono text-xs transition-colors">
          {displayDomain(app.url)}
        </span>
      </a>
    </li>
  );
}

const BRANDS: Record<
  string,
  { mark: React.ReactNode; nameClass: string; nameStyle?: React.CSSProperties }
> = {
  // Linkertree's own UI is plain system sans with a tight, semibold wordmark.
  linkertree: {
    mark: <LinkertreeMark className="h-6 w-6 shrink-0" />,
    nameClass: "text-lg font-semibold tracking-tight",
    nameStyle: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
  },
  // Stream tools' landing page sets its name in heavy Inter, in the rainbow.
  "streamer-tools": {
    mark: <StreamToolsMark className="h-6 w-6 shrink-0" />,
    nameClass: "text-lg font-black tracking-tight",
    nameStyle: {
      fontFamily: "var(--font-inter)",
      backgroundImage:
        "linear-gradient(90deg,#d9444f,#c98a1f,#2f9e5f,#1f8fc0,#6b5bd9,#c43a76)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
  },
};
