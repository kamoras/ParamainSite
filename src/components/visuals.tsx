import type { ReactNode } from "react";

/**
 * Decorative visuals for the portfolio panels, keyed by app slug. Everything
 * here is illustrative sample content (never live data) and is hidden from
 * assistive tech — the panels carry the real information as text.
 */

/** Civitas: one pane of glass over the whole federal government. */
function CivitasVisual() {
  const panes = [
    { name: "Congress", bars: [40, 70, 55, 90, 60] },
    { name: "White House", bars: [60, 35, 80, 50, 70] },
    { name: "Agencies", bars: [75, 55, 40, 65, 85] },
    { name: "Supreme Court", bars: [50, 80, 45, 70, 55] },
    { name: "Elections", bars: [35, 60, 90, 55, 75] },
    { name: "Action Center", bars: [65, 45, 70, 85, 40] },
  ];
  return (
    <div
      aria-hidden="true"
      className="bg-ink text-surface overflow-hidden rounded-md"
    >
      <div className="label text-surface/60 flex items-center justify-between px-5 pt-4">
        <span>One pane of glass</span>
        <span>U.S. federal government</span>
      </div>

      {/* A search box over everything. */}
      <div className="mx-5 mt-4 flex items-center gap-3 rounded-sm border border-white/15 bg-white/5 px-3.5 py-2.5">
        <svg
          viewBox="0 0 24 24"
          className="text-surface/60 h-4 w-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m20 20-4.2-4.2" />
        </svg>
        <span className="text-surface/60 font-mono text-[0.8rem]">
          Search votes, bills, agencies, courts
        </span>
        <span className="anim-blink bg-surface/70 h-4 w-px" />
      </div>

      {/* Every branch, side by side. */}
      <div className="grid grid-cols-3 gap-2.5 px-5 py-4">
        {panes.map((pane, i) => (
          <div key={pane.name} className="rounded-sm bg-white/5 p-2.5">
            <div className="font-mono text-[0.65rem] leading-tight">
              {pane.name}
            </div>
            <div className="mt-2.5 flex h-8 items-end gap-1">
              {pane.bars.map((h, j) => (
                <span
                  key={j}
                  className="anim-bar bg-terracotta/80 w-full rounded-[1px]"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${((i + j) % 5) * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* A Raspberry Pi, doing the work. */}
      <div className="border-surface/10 flex items-center gap-4 border-t px-5 py-4">
        <svg viewBox="0 0 120 76" className="h-14 w-auto shrink-0">
          <rect
            x="2"
            y="2"
            width="116"
            height="72"
            rx="7"
            className="fill-sage"
          />
          <rect
            x="8"
            y="8"
            width="104"
            height="60"
            rx="4"
            className="fill-black/15"
          />
          {/* GPIO header */}
          <g className="fill-amber">
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={i}
                x={14 + i * 4.6}
                y="9"
                width="2.6"
                height="5"
                rx="0.6"
              />
            ))}
          </g>
          {/* Chips and ports */}
          <rect
            x="44"
            y="26"
            width="26"
            height="26"
            rx="2"
            className="fill-surface/80"
          />
          <rect
            x="76"
            y="30"
            width="16"
            height="16"
            rx="2"
            className="fill-surface/50"
          />
          <rect
            x="98"
            y="22"
            width="14"
            height="14"
            rx="1.5"
            className="fill-surface/70"
          />
          <rect
            x="98"
            y="42"
            width="14"
            height="14"
            rx="1.5"
            className="fill-surface/70"
          />
          <rect
            x="12"
            y="46"
            width="22"
            height="16"
            rx="1.5"
            className="fill-surface/70"
          />
          {/* Status LEDs */}
          <circle
            cx="16"
            cy="28"
            r="2.4"
            className="anim-blink fill-terracotta"
          />
          <circle
            cx="16"
            cy="36"
            r="2.4"
            className="anim-blink fill-amber"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
        <div className="text-sm leading-snug">
          <div className="font-medium">Every figure shows its source</div>
          <div className="text-surface/60">
            Runs on one Raspberry Pi. No accounts, no tracking.
          </div>
        </div>
      </div>
    </div>
  );
}

/** Spliced: a waveform cut into clips, a mystery title, and a streak. */
function SplicedVisual() {
  const clips = [
    { bars: 9, tone: "bg-amber" },
    { bars: 7, tone: "bg-terracotta" },
    { bars: 8, tone: "bg-plum" },
    { bars: 6, tone: "bg-sage" },
  ];
  let n = 0;
  return (
    <div
      aria-hidden="true"
      className="border-line-strong bg-amber-soft/60 shadow-soft overflow-hidden rounded-md border"
    >
      <div className="text-ink-soft label flex items-center justify-between px-5 pt-4">
        <span>Today&apos;s splice</span>
        <span>Sample puzzle</span>
      </div>

      {/* Four clips spliced together, with a playhead sweeping across. */}
      <div className="relative mx-5 mt-4 flex h-20 items-center justify-between gap-3">
        {clips.map((clip, c) => (
          <div
            key={c}
            className="flex h-full flex-1 items-center justify-between"
          >
            {Array.from({ length: clip.bars }).map((_, i) => {
              const h = 30 + ((i * 37 + c * 23) % 60);
              const delay = (n++ % 9) * 0.12;
              return (
                <span
                  key={i}
                  className={`anim-bar w-[5px] rounded-full ${clip.tone}`}
                  style={{ height: `${h}%`, animationDelay: `${delay}s` }}
                />
              );
            })}
          </div>
        ))}
        <span className="anim-playhead bg-ink absolute top-0 bottom-0 w-0.5 rounded-sm" />
      </div>

      {/* The mystery track. */}
      <div className="mx-5 mt-5 flex gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="border-ink/25 bg-surface/70 flex h-8 flex-1 items-center justify-center rounded-md border font-mono text-sm"
          >
            {i === 0 ? "?" : ""}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between px-5 pb-4">
        <div className="flex gap-1.5">
          {["bg-sage", "bg-sage", "bg-amber", "bg-sage", "bg-muted"].map(
            (t, i) => (
              <span key={i} className={`h-4 w-4 rounded-[5px] ${t}`} />
            ),
          )}
        </div>
        <span className="bg-ink text-surface rounded-sm px-3 py-1 text-xs font-semibold">
          12-day streak
        </span>
      </div>
    </div>
  );
}

export const APP_VISUALS: Record<string, ReactNode> = {
  civitas: <CivitasVisual />,
  spliced: <SplicedVisual />,
};
