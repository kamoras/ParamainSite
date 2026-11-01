import type { ReactNode } from "react";

/**
 * Decorative visuals for the portfolio panels, keyed by app slug. Everything
 * here is illustrative sample content (never live data) and is hidden from
 * assistive tech — the panels carry the real information as text.
 */

/** Civitas: dense public record in, plain language out, on a Raspberry Pi. */
function CivitasVisual() {
  const legalese = [92, 100, 78, 96, 88, 100, 64, 94, 82, 98];
  return (
    <div
      aria-hidden="true"
      className="bg-ink text-surface shadow-lift overflow-hidden rounded-md"
    >
      <div className="text-surface/60 label flex items-center justify-between px-5 pt-4">
        <span>Public record</span>
        <span>Plain language</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 px-5 py-4">
        {/* The dense source text, with a scanning highlight. */}
        <div className="relative min-h-36 overflow-hidden rounded-xl bg-white/5 p-3">
          <div className="space-y-2">
            {legalese.map((w, i) => (
              <div
                key={i}
                className="bg-surface/25 h-1.5 rounded-sm"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="anim-scan bg-terracotta/40 absolute inset-x-0 top-0 h-3 rounded-sm blur-[2px]" />
        </div>

        <span className="text-terracotta text-xl">→</span>

        {/* The plain-language summary. */}
        <div className="bg-surface text-ink min-h-36 rounded-xl p-3">
          {["What it does", "Who it affects", "What it costs"].map((h) => (
            <div key={h} className="mb-2.5 last:mb-0">
              <div className="text-terracotta text-[0.6rem] font-semibold tracking-[0.12em] uppercase">
                {h}
              </div>
              <div className="bg-ink/15 mt-1 h-1.5 w-full rounded-sm" />
              <div className="bg-ink/15 mt-1 h-1.5 w-2/3 rounded-sm" />
            </div>
          ))}
        </div>
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
          <div className="font-medium">Runs on a Raspberry Pi</div>
          <div className="text-surface/60">
            No cloud. No tracking. Just local models.
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
