import type { ParamainApp } from "@/data/apps";
import { ACCENTS } from "./accents";
import { SourceBadge, StatusBadge } from "./badges";
import { ArrowUpRight } from "./icons";

export function AppCard({ app }: { app: ParamainApp }) {
  const accent = ACCENTS[app.accent];

  return (
    <article
      id={app.slug}
      className="group rounded-card border-line bg-surface shadow-soft hover:shadow-lift relative flex scroll-mt-24 flex-col overflow-hidden border p-7 transition-all duration-300 hover:-translate-y-1"
      style={
        {
          "--accent": accent.color,
          "--accent-soft": accent.soft,
        } as React.CSSProperties
      }
    >
      {/* Accent wash that warms on hover. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: "var(--accent-soft)" }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className="font-display text-surface flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-semibold"
          style={{ background: "var(--accent)" }}
        >
          {app.monogram}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <StatusBadge status={app.status} />
          <SourceBadge source={app.source} />
        </div>
      </div>

      <div className="relative mt-6 flex flex-1 flex-col">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          {app.category}
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium tracking-tight">
          {app.name}
        </h3>
        <p className="text-ink-soft mt-1 text-[0.95rem] font-medium">
          {app.tagline}
        </p>
        <p className="text-ink-soft mt-4 text-[0.95rem] leading-relaxed">
          {app.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <li
              key={tag}
              className="border-line bg-canvas text-ink-soft rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-4 pt-4">
          <a
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="text-ink inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[var(--accent)]"
          >
            Visit
            <ArrowUpRight className="h-4 w-4" />
            <span className="sr-only">{app.name}</span>
          </a>
          {app.repo ? (
            <a
              href={app.repo}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft hover:text-ink inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
