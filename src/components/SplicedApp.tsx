import { displayDomain, type ParamainApp } from "@/data/apps";
import { ArrowUpRight, GithubIcon } from "./icons";
import { SplicedMark } from "./marks";

/**
 * Spliced's panel, dressed as Spliced itself: an 80s analog mixing console.
 * Putty-painted metal with screws at the corners, silkscreened type, a
 * masking-tape label in marker pen, cream push buttons, a little LCD, a swinging
 * VU needle, and a level ladder of teal LEDs.
 */

const silk = { fontFamily: "var(--font-silk)" } as const;
const marker = { fontFamily: "var(--font-marker)" } as const;

const CART_BARS = [
  [40, 75, 55, 90, 60, 80, 45],
  [65, 40, 85, 50, 70, 35, 60],
  [50, 80, 35, 70, 90, 55, 40],
  [75, 55, 65, 40, 80, 60, 85],
];

export function SplicedApp({ app }: { app: ParamainApp }) {
  return (
    <article
      id={app.slug}
      className="bg-console border-groove relative scroll-mt-24 overflow-hidden rounded-[10px] border shadow-[inset_0_1px_0_var(--color-console-hi),0_1px_2px_rgb(30_24_14/0.18),0_4px_10px_rgb(30_24_14/0.1)]"
      style={{ color: "var(--color-silk)" }}
    >
      {/* Panel screws. */}
      {[
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
        "bottom-3 right-3",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`border-groove absolute ${pos} h-2.5 w-2.5 rounded-full border bg-[#b9bec3]`}
        >
          <span className="bg-silk/50 absolute top-1/2 left-0.5 h-px w-1.5 -rotate-[35deg]" />
        </span>
      ))}

      <div className="grid gap-10 p-9 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <div className="flex items-center gap-2.5" style={silk}>
            <span className="bg-led h-2.5 w-2.5 rounded-full shadow-[0_0_6px_var(--color-led)]" />
            <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase">
              Live
            </span>
          </div>

          <h3 className="mt-6 flex items-center gap-3.5">
            <SplicedMark className="h-12 w-12 shrink-0" />
            <span
              className="text-[clamp(1.9rem,4vw,2.6rem)] leading-none font-bold tracking-[0.16em] uppercase"
              style={silk}
            >
              {app.name}
            </span>
          </h3>

          {/* A strip of masking tape, written on in marker pen. */}
          <p
            className="bg-tape text-marker mt-5 inline-block -rotate-1 px-4 py-2 text-xl shadow-[0_1px_2px_rgb(30_24_14/0.25)]"
            style={marker}
          >
            {app.tagline}
          </p>

          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed">
            {app.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <li
                key={tag}
                className="bg-cap border-cap-edge rounded-md border px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] uppercase shadow-[0_2px_0_var(--color-cap-edge)]"
                style={silk}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="bg-console-blue inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold tracking-[0.1em] text-white uppercase shadow-[0_3px_0_#1d3f73] transition-transform active:translate-y-0.5 active:shadow-[0_1px_0_#1d3f73]"
              style={silk}
            >
              Play at {displayDomain(app.url)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {app.repo ? (
              <a
                href={app.repo}
                target="_blank"
                rel="noreferrer"
                className="bg-cap border-cap-edge inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-bold tracking-[0.1em] uppercase shadow-[0_3px_0_var(--color-cap-edge)] transition-transform active:translate-y-0.5"
                style={silk}
              >
                <GithubIcon className="h-4 w-4" />
                Read the source
                <span className="sr-only">for {app.name}</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* A channel strip: clip carts, an LCD, a VU meter and a level ladder. */}
        <div
          aria-hidden="true"
          className="bg-console-lo border-groove rounded-lg border p-4 shadow-[inset_0_2px_4px_rgb(30_24_14/0.18)]"
        >
          <div className="bg-lcd text-lcd-ink border-groove flex items-center justify-between rounded-sm border px-3 py-2 font-mono text-[0.78rem] shadow-[inset_0_1px_3px_rgb(0_0_0/0.25)]">
            <span className="tracking-[0.18em]">_ _ _ _ _ &nbsp;_ _ _ _</span>
            <span className="text-[0.65rem] tracking-[0.1em]">SAMPLE</span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2.5">
            {CART_BARS.map((bars, c) => (
              <div
                key={c}
                className="bg-cap border-cap-edge rounded-md border p-1.5 shadow-[0_2px_0_var(--color-cap-edge)]"
              >
                <div className="bg-window flex h-14 items-center justify-between gap-[3px] rounded-sm px-1.5">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="anim-bar bg-trace w-full rounded-[1px]"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${((c + i) % 6) * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-center">
                  <span className="border-cap-edge block h-3.5 w-3.5 rounded-full border bg-[radial-gradient(circle_at_35%_30%,#f7f5ef,#9e9b94)]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1fr_1.2fr] items-center gap-3">
            {/* VU meter. */}
            <svg viewBox="0 0 100 62" className="w-full">
              <rect
                x="1"
                y="1"
                width="98"
                height="60"
                rx="6"
                fill="var(--color-vu-face)"
                stroke="var(--color-cap-edge)"
              />
              <path
                d="M16 46 A40 40 0 0 1 84 46"
                fill="none"
                stroke="#3a2f1a"
                strokeWidth="1.4"
              />
              <path
                d="M70 21 A40 40 0 0 1 84 46"
                fill="none"
                stroke="var(--color-clip-red)"
                strokeWidth="3"
              />
              <g className="anim-needle">
                <line
                  x1="50"
                  y1="56"
                  x2="50"
                  y2="18"
                  stroke="#1b1200"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </g>
              <circle cx="50" cy="56" r="4" fill="#3a2f1a" />
            </svg>

            {/* Level ladder, a fader, and a red index line. */}
            <div className="space-y-2.5">
              <div className="flex gap-1">
                {[1, 1, 1, 1, 1, 0.55, 0.25].map((o, i) => (
                  <span
                    key={i}
                    className={`h-3 flex-1 rounded-[2px] ${i === 5 ? "bg-[#ffd76a]" : "bg-led"}`}
                    style={{ opacity: o }}
                  />
                ))}
                <span className="bg-clip-red h-3 flex-1 rounded-[2px] opacity-40" />
              </div>
              <div className="bg-window relative h-2.5 rounded-full">
                <span className="bg-cap border-cap-edge absolute top-1/2 left-[58%] h-5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[4px] border shadow-[0_1px_2px_rgb(0_0_0/0.4)]">
                  <span className="absolute top-1/2 right-1 left-1 h-0.5 -translate-y-1/2 rounded-full bg-[#d8432f]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
