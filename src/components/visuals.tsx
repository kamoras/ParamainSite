import type { ReactNode } from "react";
import { CivitasWordmark } from "./CivitasWordmark";

/**
 * Decorative visuals for the portfolio panels, keyed by app slug. Everything
 * here is illustrative sample content (never live data) and is hidden from
 * assistive tech — the panels carry the real information as text.
 */

/**
 * Civitas Research: a miniature of its own masthead and front page, in the
 * real site's "register paper" look — parchment, hairline rules, ledger
 * green, party colours from its maps. Illustrative, not live data.
 */
function CivitasVisual() {
  // A little seat map: D, R and I marks, never colour alone on the real site.
  const seats = "dddrdrrdidrrdrdddrridrdrdddrirdr".split("");
  const seatTone: Record<string, string> = {
    d: "bg-dem",
    r: "bg-rep",
    i: "bg-ind",
  };
  const mapTiles = [
    "d",
    "d",
    "r",
    "x",
    "r",
    "r",
    "d",
    "x",
    "d",
    "r",
    "r",
    "c",
    "x",
    "d",
    "c",
    "r",
    "d",
    "r",
  ];
  const mapTone: Record<string, string> = {
    d: "bg-dem/80",
    r: "bg-rep/80",
    c: "bg-chart-faint",
    x: "bg-register",
  };

  return (
    <div
      aria-hidden="true"
      className="bg-paper text-civ-ink border-civ-ink overflow-hidden rounded-sm border"
    >
      {/* Masthead, as on the real site. */}
      <div className="border-civ-ink/20 flex items-center justify-between border-t-[3px] border-b border-t-[var(--color-ledger)] px-4 py-2.5">
        <CivitasWordmark size="sm" />
        <span className="text-civ-ink-lo label flex items-center gap-2">
          <span className="anim-blink bg-ledger h-2 w-2" />
          <span className="hidden sm:inline">Records current</span>
        </span>
      </div>

      <div className="bg-parchment p-4">
        {/* One search box over everything. */}
        <div className="border-civ-ink/30 bg-paper flex items-center gap-3 border px-3 py-2.5">
          <svg
            viewBox="0 0 24 24"
            className="text-civ-ink-lo h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-4.2-4.2" />
          </svg>
          <span className="text-civ-ink-lo text-[0.8rem]">
            Search votes, bills, agencies, courts
          </span>
          <span className="anim-blink bg-civ-ink h-4 w-px" />
        </div>

        {/* Every branch, side by side. */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <Pane name="Congress">
            <div className="grid grid-cols-8 gap-[3px]">
              {seats.map((v, i) => (
                <span key={i} className={`aspect-square ${seatTone[v]}`} />
              ))}
            </div>
          </Pane>
          <Pane name="White House">
            <div className="flex h-9 items-end gap-1.5">
              {[45, 70, 55, 90, 62].map((h, i) => (
                <span
                  key={i}
                  className={`w-full ${i === 3 ? "bg-chart-gold" : "bg-chart-muted"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </Pane>
          <Pane name="Agencies">
            <div className="space-y-1.5">
              {[88, 62, 40].map((w) => (
                <div key={w} className="bg-register h-2">
                  <div
                    className="bg-ledger h-full"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </Pane>
          <Pane name="Supreme Court">
            <div className="grid grid-cols-9 gap-[3px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-[1/2] ${i < 6 ? "bg-civ-ink" : "bg-chart-faint"}`}
                />
              ))}
            </div>
          </Pane>
          <Pane name="Elections">
            <div className="grid grid-cols-6 gap-[3px]">
              {mapTiles.map((t, i) => (
                <span key={i} className={`aspect-square ${mapTone[t]}`} />
              ))}
            </div>
          </Pane>
          <Pane name="Action Center">
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-[#9a3412]" : "bg-chart-muted"}`}
                  />
                  <span
                    className="bg-civ-ink/20 h-1.5"
                    style={{ width: `${[85, 65, 75][i]}%` }}
                  />
                </div>
              ))}
            </div>
          </Pane>
        </div>
      </div>

      {/* Receipts, and the Raspberry Pi it all runs on. */}
      <div className="border-civ-ink/20 bg-paper flex items-center gap-3.5 border-t px-4 py-3">
        <svg viewBox="0 0 120 76" className="h-10 w-auto shrink-0">
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
          <rect
            x="44"
            y="26"
            width="26"
            height="26"
            rx="2"
            className="fill-paper/80"
          />
          <rect
            x="76"
            y="30"
            width="16"
            height="16"
            rx="2"
            className="fill-paper/50"
          />
          <rect
            x="98"
            y="22"
            width="14"
            height="14"
            rx="1.5"
            className="fill-paper/70"
          />
          <rect
            x="98"
            y="42"
            width="14"
            height="14"
            rx="1.5"
            className="fill-paper/70"
          />
          <rect
            x="12"
            y="46"
            width="22"
            height="16"
            rx="1.5"
            className="fill-paper/70"
          />
          <circle cx="16" cy="28" r="2.4" className="anim-blink fill-rep" />
          <circle
            cx="16"
            cy="36"
            r="2.4"
            className="anim-blink fill-ledger"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
        <div className="text-[0.8rem] leading-snug">
          <div className="font-medium">Every figure shows its source</div>
          <div className="text-civ-ink-lo">
            Runs on one Raspberry Pi. No cloud AI.
          </div>
        </div>
      </div>
    </div>
  );
}

function Pane({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="border-civ-ink/15 bg-paper border p-2">
      <div className="label text-civ-ink-lo mb-2 !text-[0.6rem] leading-tight">
        {name}
      </div>
      {children}
    </div>
  );
}

export const APP_VISUALS: Record<string, ReactNode> = {
  civitas: <CivitasVisual />,
};
