import { apps } from "@/data/apps";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Wordmark className="text-terracotta h-7 w-7" />
              <span className="font-display text-xl font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="text-ink-soft mt-4 text-[0.95rem] leading-relaxed">
              {site.tagline} A small workshop of free, independent tools made to
              respect the people who use them — open source by default.
            </p>
          </div>

          <nav aria-label="Apps">
            <h3 className="text-ink-soft text-xs font-semibold tracking-[0.14em] uppercase">
              Apps
            </h3>
            <ul className="mt-4 space-y-2.5">
              {apps.map((app) => (
                <li key={app.slug}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-terracotta text-[0.95rem] transition-colors"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Project">
            <h3 className="text-ink-soft text-xs font-semibold tracking-[0.14em] uppercase">
              Project
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-terracotta text-[0.95rem] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#suggest"
                  className="text-ink hover:text-terracotta text-[0.95rem] transition-colors"
                >
                  Suggest an app
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink hover:text-terracotta text-[0.95rem] transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-line text-ink-soft mt-14 flex flex-col gap-3 border-t pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Released under the MIT
            License.
          </p>
          <p className="flex items-center gap-1.5">
            Made in the open
            <span aria-hidden="true" className="text-terracotta">
              ◇
            </span>
            for everyone
          </p>
        </div>
      </div>
    </footer>
  );
}
