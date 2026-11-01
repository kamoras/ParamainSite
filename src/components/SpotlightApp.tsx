import { displayDomain, type ParamainApp } from "@/data/apps";
import { ACCENTS } from "./accents";
import { SourceBadge, StatusBadge } from "./badges";
import { ArrowUpRight, GithubIcon, Train } from "./icons";
import { TransitMap } from "./TransitMap";

/**
 * The runner-up panel. Nearly as loud as the flagship, but with a personality
 * of its own: a dark "departure board" card with a moving model of the
 * network, so Hopline reads as something you'd want to poke at.
 */

const OPERATORS = [
  "Metro-North",
  "MBTA Commuter Rail",
  "SEPTA",
  "MARC",
  "VRE",
  "Amtrak",
  "NYC Subway",
  "The T",
  "Metrorail",
  "City buses",
  "Live flights",
];

/** Sample rows for the board — illustrative, not live. */
const BOARD: { train: string; route: string; status: string; tone: string }[] =
  [
    {
      train: "2150",
      route: "Stamford → Grand Central",
      status: "On time",
      tone: "bg-sage",
    },
    {
      train: "A171",
      route: "Washington → New York",
      status: "+12 min",
      tone: "bg-amber",
    },
    {
      train: "0518",
      route: "Boston → Providence",
      status: "+31 min",
      tone: "bg-terracotta",
    },
  ];

export function SpotlightApp({ app }: { app: ParamainApp }) {
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
      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-surface label inline-flex items-center gap-2 rounded-sm px-3 py-1"
              style={{ background: "var(--accent)" }}
            >
              <Train className="h-3.5 w-3.5" />
              Next stop
            </span>
            <StatusBadge status={app.status} size="md" />
            <SourceBadge source={app.source} size="md" />
          </div>

          <h3 className="font-display mt-8 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.02] font-medium">
            {app.name}
          </h3>
          <p
            className="font-display mt-2 text-[clamp(1.5rem,3vw,2rem)] leading-tight font-light italic"
            style={{ color: "var(--accent)" }}
          >
            {app.tagline}
          </p>
          <p className="text-ink-soft mt-6 max-w-xl text-[1.02rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="border-line bg-canvas text-ink-soft rounded-sm border px-3 py-1 text-xs font-medium"
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
              className="text-surface shadow-soft inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-base font-medium"
              style={{ background: "var(--accent)" }}
            >
              Find your train at {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="border-line-strong text-ink hover:bg-canvas inline-flex items-center gap-2 rounded-sm border px-6 py-3.5 text-base font-medium transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* The decorative departure-board card. */}
        <div
          aria-hidden="true"
          className="bg-ink text-surface shadow-lift overflow-hidden rounded-md duration-500"
        >
          <TransitMap className="block h-auto w-full" />

          <div className="border-surface/10 border-t px-5 py-4">
            <div className="text-surface/60 label flex items-center justify-between">
              <span>Where&apos;s my train?</span>
              <span>Sample board</span>
            </div>
            <ul className="mt-3 space-y-2 font-mono text-[0.8rem]">
              {BOARD.map((row) => (
                <li key={row.train} className="flex items-center gap-3">
                  <span className="text-surface/60 w-10 shrink-0">
                    {row.train}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{row.route}</span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${row.tone}`} />
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operator strip, scrolling like a station destination board. */}
          <div className="border-surface/10 bg-surface/5 overflow-hidden border-t py-2.5">
            <div className="ticker-track flex w-max gap-8 pr-8 text-xs font-medium whitespace-nowrap">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-8">
                  {OPERATORS.map((op) => (
                    <span key={op} className="text-surface/70">
                      {op}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
