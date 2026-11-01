import { displayDomain, type ParamainApp } from "@/data/apps";
import { ACCENTS } from "./accents";
import { SourceBadge, StatusBadge } from "./badges";
import { CivitasWordmark } from "./CivitasWordmark";
import { ArrowUpRight, GithubIcon, Star } from "./icons";
import { APP_VISUALS } from "./visuals";

/**
 * The flagship panel. Deliberately much louder than an AppCard: it carries
 * the portfolio, and everything below it is quieter by contrast.
 */
export function FeaturedApp({ app }: { app: ParamainApp }) {
  const accent = ACCENTS[app.accent];

  return (
    <article
      id={app.slug}
      className="bg-parchment text-civ-ink border-civ-ink rounded-card relative scroll-mt-24 overflow-hidden border border-t-[3px] border-t-[var(--color-ledger)]"
      style={
        {
          "--accent": accent.color,
          "--accent-soft": accent.soft,
        } as React.CSSProperties
      }
    >
      <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="label bg-ledger text-parchment inline-flex items-center gap-2 rounded-sm px-2.5 py-1">
              <Star className="h-3.5 w-3.5" />
              The flagship
            </span>
            <StatusBadge status={app.status} size="md" />
            <SourceBadge source={app.source} size="md" />
          </div>

          <h3 className="mt-8">
            <span className="sr-only">{app.name}</span>
            <CivitasWordmark size="lg" className="" />
          </h3>
          <p className="text-ledger mt-3 font-mono text-sm font-medium break-all">
            {displayDomain(app.url)}
          </p>

          <p className="mt-8 text-xl leading-snug font-medium">
            <Highlighted text={app.tagline} phrase="single pane of glass" />
          </p>
          <p className="text-civ-ink-lo mt-4 max-w-2xl text-[1.02rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="border-civ-ink/20 bg-paper text-civ-ink-lo rounded-sm border px-3 py-1 text-xs font-medium"
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
              className="bg-ledger text-parchment hover:bg-civ-ink inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-base font-medium transition-colors"
            >
              Visit {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="border-civ-ink hover:bg-paper inline-flex items-center gap-2 rounded-sm border px-6 py-3.5 text-base font-medium transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex h-fit flex-col gap-5">
          {APP_VISUALS[app.slug]}
          {app.highlights?.length ? (
            <dl className="border-civ-ink/25 bg-paper grid grid-cols-2 border border-t-[3px] border-t-[var(--color-civ-ink)]">
              {app.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`border-civ-ink/15 px-4 py-3.5 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
                >
                  <dt className="label text-civ-ink-lo">{h.label}</dt>
                  <dd className="mt-1.5 text-[0.92rem] leading-snug font-medium">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Wraps `phrase` in the way civitas-research.org marks a search match. */
function Highlighted({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-civ-mark text-civ-ink px-0.5">{phrase}</mark>
      {text.slice(i + phrase.length)}
    </>
  );
}
