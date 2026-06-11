import Link from "next/link";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.55-.3-5.24-1.3-5.24-5.76 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.2a11 11 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.62.23 2.82.11 3.12.75.82 1.2 1.85 1.2 3.12 0 4.47-2.7 5.45-5.27 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}
