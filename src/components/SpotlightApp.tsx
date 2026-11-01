import { displayDomain, type ParamainApp } from "@/data/apps";
import { ArrowUpRight, GithubIcon } from "./icons";
import { HoplineMark } from "./marks";
import { TransitMap } from "./TransitMap";

/**
 * The runner-up panel, dressed as Hopline itself: Inter, a navy mark, calm
 * greys, soft white cards, and the green / amber / red delay pills its boards
 * use — so it reads as a glimpse of the real app.
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
      tone: "bg-hop-ok-bg text-hop-ok",
    },
    {
      train: "A171",
      route: "Washington → New York",
      status: "+12 min",
      tone: "bg-hop-warn-bg text-hop-warn",
    },
    {
      train: "0518",
      route: "Boston → Providence",
      status: "+31 min",
      tone: "bg-hop-bad-bg text-hop-bad",
    },
  ];

export function SpotlightApp({ app }: { app: ParamainApp }) {
  return (
    <article
      id={app.slug}
      className="bg-hop-bg text-hop-text border-hop-line relative scroll-mt-24 overflow-hidden rounded-2xl border shadow-[0_1px_2px_rgb(14_27_44/0.04),0_12px_28px_-14px_rgb(14_27_44/0.22)]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-hop-navy inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white">
              Next stop
            </span>
            <span className="bg-hop-ok-bg text-hop-ok inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold">
              <span className="bg-hop-ok h-1.5 w-1.5 rounded-full" />
              Live
            </span>
          </div>

          <h3 className="mt-8 flex items-center gap-3">
            <HoplineMark className="ring-hop-navy/5 h-11 w-11 rounded-[11px] ring-1" />
            <span className="text-[clamp(2.2rem,4.5vw,3rem)] leading-none font-bold tracking-[-0.03em]">
              {app.name}
            </span>
          </h3>
          <p className="text-hop-accent mt-3 text-[clamp(1.3rem,2.6vw,1.7rem)] leading-tight font-semibold tracking-[-0.02em]">
            {app.tagline}
          </p>
          <p className="text-hop-muted mt-5 max-w-xl text-[1.02rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="border-hop-line bg-hop-surface text-hop-muted rounded-full border px-3 py-1 text-xs font-medium"
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
              className="bg-hop-accent hover:bg-hop-navy inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Find your train at {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="border-hop-line bg-hop-surface hover:border-hop-navy text-hop-text inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* A glimpse of the app: map card, then a departure board. */}
        <div
          aria-hidden="true"
          className="bg-hop-surface border-hop-line overflow-hidden rounded-2xl border shadow-[0_2px_4px_rgb(14_27_44/0.05),0_12px_28px_-12px_rgb(14_27_44/0.22)]"
        >
          <div className="border-hop-line flex items-center justify-between border-b px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-bold tracking-[-0.03em]">
              <HoplineMark className="h-5 w-5 rounded-[5px]" />
              Hopline
            </span>
            <span className="bg-hop-bg text-hop-muted rounded-full px-3 py-1 text-xs font-medium">
              Where&apos;s my train?
            </span>
          </div>

          <div className="bg-[#eef1f6]">
            <TransitMap className="block h-auto w-full" />
          </div>

          <div className="px-4 py-3">
            <div className="text-hop-muted flex items-center justify-between text-[0.7rem] font-semibold tracking-wide uppercase">
              <span>Next departures</span>
              <span>Sample board</span>
            </div>
            <ul className="mt-2.5 space-y-2 text-[0.82rem] tabular-nums">
              {BOARD.map((row) => (
                <li key={row.train} className="flex items-center gap-3">
                  <span className="text-hop-muted w-10 shrink-0 font-medium">
                    {row.train}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-medium">
                    {row.route}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${row.tone}`}
                  >
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operator strip. */}
          <div className="border-hop-line bg-hop-bg overflow-hidden border-t py-2.5">
            <div className="ticker-track flex w-max gap-8 pr-8 text-xs font-medium whitespace-nowrap">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-8">
                  {OPERATORS.map((op) => (
                    <span key={op} className="text-hop-muted">
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
