import Link from "next/link";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";
import { GithubIcon } from "./icons";

export function Header() {
  return (
    <header className="reveal sticky top-0 z-50">
      <div className="wrap">
        <div className="border-line bg-surface/70 mt-4 flex items-center justify-between rounded-full border py-2.5 pr-2.5 pl-5 backdrop-blur-md">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Wordmark className="text-terracotta h-7 w-7" />
            <span className="font-display text-xl font-semibold tracking-tight">
              {site.name}
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="text-ink-soft hidden items-center gap-7 text-sm sm:flex"
          >
            <a href="#apps" className="hover:text-ink transition-colors">
              Apps
            </a>
            <a href="#ethos" className="hover:text-ink transition-colors">
              Ethos
            </a>
            <a href="#suggest" className="hover:text-ink transition-colors">
              Suggest an app
            </a>
          </nav>

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="group bg-ink text-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
