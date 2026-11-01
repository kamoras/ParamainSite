import Link from "next/link";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  return (
    <header className="border-line bg-canvas/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="wrap flex items-center justify-between py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <Wordmark className="text-ink h-7 w-7" />
          <span className="font-display text-xl font-semibold">
            {site.name}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="label text-ink-soft flex items-center gap-5 sm:gap-7"
        >
          <a
            href="#apps"
            className="hover:text-ink underline-offset-4 hover:underline"
          >
            Apps
          </a>
          <a
            href="#suggest"
            className="hover:text-ink hidden underline-offset-4 hover:underline sm:inline"
          >
            Ideas
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline underline-offset-4"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
