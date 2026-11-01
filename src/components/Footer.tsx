import { apps } from "@/data/apps";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const link = "hover:text-ink underline-offset-4 hover:underline";
  return (
    <footer className="border-line-strong border-t">
      <div className="wrap py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Wordmark className="text-ink h-7 w-7" />
              <span className="font-display text-xl font-semibold">
                {site.name}
              </span>
            </div>
            <p className="text-ink-soft mt-4 leading-relaxed">
              {site.tagline} Free, open source, and built in my spare time by{" "}
              <a
                href={site.authorUrl}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-4"
              >
                {site.author}
              </a>
              .
            </p>
          </div>

          <nav aria-label="Apps">
            <h3 className="label text-ink-soft">Apps</h3>
            <ul className="mt-4 space-y-2">
              {apps.map((app) => (
                <li key={app.slug}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-ink ${link}`}
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h3 className="label text-ink-soft">Say hi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className={`text-ink ${link}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-ink ${link}`}
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={site.authorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-ink ${link}`}
                >
                  ryan-mack.dev ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="label text-muted border-line mt-12 border-t pt-6">
          © {new Date().getFullYear()} {site.name} · MIT licensed · made in the
          open
        </p>
      </div>
    </footer>
  );
}
