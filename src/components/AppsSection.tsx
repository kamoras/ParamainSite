import {
  displayDomain,
  featuredApp,
  minorApps,
  spotlightApp,
  standardApps,
} from "@/data/apps";
import { AppCard } from "./AppCard";
import { FeaturedApp } from "./FeaturedApp";
import { Reveal } from "./Reveal";
import { SpotlightApp } from "./SpotlightApp";
import { WideApp } from "./WideApp";
import { APP_VISUALS } from "./visuals";

/**
 * The portfolio, loudest to quietest: the flagship panel, the spotlight panel,
 * full cards, then a quiet list for the smallest tools. The order and the tier
 * of each app are set in `src/data/apps.ts`.
 */
export function AppsSection() {
  return (
    <section id="apps" className="border-line scroll-mt-16 border-t">
      <div className="wrap py-16 sm:py-24">
        {featuredApp ? (
          <>
            <div className="max-w-2xl">
              <SectionLabel>01 · The main event</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]">
                One project at the center of it all.
              </h2>
              <p className="text-ink-soft mt-5 text-lg leading-relaxed">
                {featuredApp.name} is the reason this workshop exists — the
                thing most of the time, care, and stubbornness goes into. It is
                free, local-first, and now entirely open source.
              </p>
            </div>

            <Reveal className="mt-12">
              <FeaturedApp app={featuredApp} />
            </Reveal>
          </>
        ) : null}

        {spotlightApp ? (
          <>
            <div className={`max-w-2xl ${featuredApp ? "mt-20 sm:mt-28" : ""}`}>
              <SectionLabel>02 · Right behind it</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] font-light tracking-[-0.02em]">
                Every train, bus, and plane on one map.
              </h2>
            </div>

            <Reveal className="mt-10">
              <SpotlightApp app={spotlightApp} />
            </Reveal>
          </>
        ) : null}

        {standardApps.length ? (
          <>
            <div className="mt-20 max-w-2xl sm:mt-28">
              <SectionLabel>03 · Also on the shelf</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.1] font-light tracking-[-0.02em]">
                A small daily ritual.
              </h2>
            </div>

            <div className="mt-10 grid gap-6">
              {standardApps.map((app, i) => (
                <Reveal as="div" key={app.slug} delay={i * 90}>
                  {APP_VISUALS[app.slug] ? (
                    <WideApp app={app} visual={APP_VISUALS[app.slug]} />
                  ) : (
                    <AppCard app={app} />
                  )}
                </Reveal>
              ))}
            </div>
          </>
        ) : null}

        {minorApps.length ? (
          <div className="mt-20 sm:mt-28">
            <h2 className="label text-ink-soft">04 · Smaller tools</h2>
            <ul className="divide-line border-line mt-4 divide-y border-y">
              {minorApps.map((app) => (
                <li key={app.slug} id={app.slug} className="scroll-mt-24">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group hover:bg-surface/60 -mx-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xl px-3 py-4 transition-colors"
                  >
                    <span className="font-display text-ink text-lg font-medium">
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
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="label text-ink-soft">{children}</p>;
}
