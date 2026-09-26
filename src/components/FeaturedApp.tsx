import { displayDomain, type ParamainApp } from "@/data/apps";
import { ACCENTS } from "./accents";
import { SourceBadge, StatusBadge } from "./badges";
import { ArrowUpRight, GithubIcon, Star } from "./icons";

/**
 * The flagship panel. Deliberately much louder than an AppCard: it carries
 * the portfolio, and everything below it reads as a side project by contrast.
 */
export function FeaturedApp({ app }: { app: ParamainApp }) {
  const accent = ACCENTS[app.accent];

  return (
    <article
      id={app.slug}
      className="group rounded-card border-line-strong bg-surface shadow-lift relative scroll-mt-24 overflow-hidden border"
      style={
        {
          "--accent": accent.color,
          "--accent-soft": accent.soft,
        } as React.CSSProperties
      }
    >
      {/* A broad accent wash so the panel glows against the parchment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: "var(--accent-soft)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-surface inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ background: "var(--accent)" }}
            >
              <Star className="h-3.5 w-3.5" />
              The flagship
            </span>
            <StatusBadge status={app.status} size="md" />
            <SourceBadge source={app.source} size="md" />
          </div>

          <div className="mt-8 flex items-start gap-5">
            <div
              className="font-display text-surface flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl font-semibold"
              style={{ background: "var(--accent)" }}
            >
              {app.monogram}
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-medium tracking-[-0.02em]">
                {app.name}
              </h3>
              <p
                className="mt-1.5 font-mono text-sm font-medium break-all"
                style={{ color: "var(--accent)" }}
              >
                {displayDomain(app.url)}
              </p>
            </div>
          </div>

          <p className="text-ink mt-7 text-xl leading-snug font-medium">
            {app.tagline}
          </p>
          <p className="text-ink-soft mt-4 max-w-2xl text-[1.02rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="border-line bg-canvas text-ink-soft rounded-full border px-3 py-1 text-xs font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="text-surface shadow-soft inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)" }}
            >
              Visit {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="border-line-strong text-ink hover:bg-canvas inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-base font-medium transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        {app.highlights?.length ? (
          <dl className="border-line bg-canvas/60 rounded-card divide-line h-fit divide-y border p-2">
            {app.highlights.map((h) => (
              <div key={h.label} className="px-5 py-4">
                <dt className="text-ink-soft text-xs font-semibold tracking-[0.14em] uppercase">
                  {h.label}
                </dt>
                <dd className="text-ink mt-1.5 text-[0.98rem] font-medium">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}
