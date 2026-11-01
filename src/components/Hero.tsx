import { apps } from "@/data/apps";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section>
      <div className="wrap pt-16 pb-14 sm:pt-24 sm:pb-20">
        <p className="label text-ink-soft">
          Made by {site.author}, in spare time
        </p>

        <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[1] font-light">
          Software should be <span className="marker">accessible</span> to
          everyone.
        </h1>

        <p className="text-ink-soft mt-8 max-w-xl text-xl leading-relaxed">
          This is where I keep the things I build. They&apos;re free,
          they&apos;re open source, none of them show ads or track you, and
          it&apos;s all volunteer work, done for the love of it.
        </p>

        <nav aria-label="Projects" className="mt-12 max-w-xl">
          <p className="label text-ink-soft">The index</p>
          <ol className="border-line divide-line mt-3 divide-y border-y">
            {apps.map((app, i) => (
              <li key={app.slug}>
                <a
                  href={`#${app.slug}`}
                  className="hover:bg-surface group flex items-baseline gap-4 px-1 py-2.5"
                >
                  <span className="label text-muted w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-medium underline-offset-4 group-hover:underline">
                    {app.name}
                  </span>
                  <span className="text-ink-soft hidden min-w-0 flex-1 truncate text-sm sm:block">
                    {app.tagline}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
