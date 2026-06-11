import { apps } from "@/data/apps";
import { site } from "@/data/site";

export function Hero() {
  const liveCount = apps.filter((a) => a.status === "live").length;
  const openCount = apps.filter((a) => a.source === "open").length;

  return (
    <section className="relative overflow-hidden">
      <div className="wrap pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p
          className="reveal text-ink-soft flex items-center gap-2.5 text-sm font-medium tracking-wide"
          style={{ animationDelay: "60ms" }}
        >
          <span className="bg-sage inline-flex h-2 w-2 rounded-full" />A
          portfolio of free, independent apps
        </p>

        <h1
          className="reveal font-display mt-6 max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-light tracking-[-0.02em]"
          style={{ animationDelay: "140ms" }}
        >
          Software should be{" "}
          <span className="text-terracotta relative whitespace-nowrap">
            accessible
            <Underline />
          </span>{" "}
          to everyone.
        </h1>

        <p
          className="reveal text-ink-soft mt-7 max-w-xl text-lg leading-relaxed"
          style={{ animationDelay: "230ms" }}
        >
          {site.name} is a small workshop of useful tools — free to use,
          privacy-first, and made to respect the people who use them. Open
          source by default. No ads, no lock-in, no surveillance.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#apps"
            className="group bg-ink text-surface shadow-soft inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium transition-transform hover:-translate-y-0.5"
          >
            Explore the apps
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#suggest"
            className="border-line-strong text-ink hover:bg-surface inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-base font-medium transition-colors"
          >
            Suggest an idea
          </a>
        </div>

        <dl
          className="reveal border-line mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t pt-8"
          style={{ animationDelay: "420ms" }}
        >
          <Stat value={String(apps.length)} label="apps in the portfolio" />
          <Stat value={String(liveCount)} label="live right now" />
          <Stat value={String(openCount)} label="open source" />
          <Stat value="$0" label="forever, no ads" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-ink text-4xl font-medium tracking-tight">
        {value}
      </dt>
      <dd className="text-ink-soft mt-1 text-sm">{label}</dd>
    </div>
  );
}

function Underline() {
  return (
    <svg
      className="text-amber absolute -bottom-2 left-0 w-full"
      viewBox="0 0 300 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8C60 3 120 3 160 6c40 3 90 2 138-3"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
