import { displayDomain, type ParamainApp } from "@/data/apps";
import { ACCENTS } from "./accents";
import { SourceBadge, StatusBadge } from "./badges";
import { ArrowUpRight, GithubIcon } from "./icons";

/**
 * A mid-tier panel: a full-width card with a visual beside the copy. Quieter
 * than the flagship and spotlight panels (no top bar, smaller type, lighter
 * visual), louder than a plain AppCard.
 */
export function WideApp({
  app,
  visual,
}: {
  app: ParamainApp;
  visual: React.ReactNode;
}) {
  const accent = ACCENTS[app.accent];

  return (
    <article
      id={app.slug}
      className="group rounded-card border-line bg-surface shadow-soft relative scroll-mt-24 overflow-hidden border"
      style={
        {
          "--accent": accent.color,
          "--accent-soft": accent.soft,
        } as React.CSSProperties
      }
    >
      <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={app.status} />
            <SourceBadge source={app.source} />
          </div>
          <p className="label mt-6" style={{ color: "var(--accent)" }}>
            {app.category}
          </p>
          <h3 className="font-display mt-2 text-3xl font-medium">{app.name}</h3>
          <p className="text-ink mt-1 text-lg font-medium">{app.tagline}</p>
          <p className="text-ink-soft mt-4 max-w-xl text-[0.98rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="border-line bg-canvas text-ink-soft rounded-sm border px-3 py-1 text-xs font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="text-surface shadow-soft inline-flex items-center gap-2 rounded-sm px-5 py-3 text-[0.95rem] font-medium"
              style={{ background: "var(--accent)" }}
            >
              Play at {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="border-line-strong text-ink hover:bg-canvas inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-[0.95rem] font-medium transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        {visual}
      </div>
    </article>
  );
}
