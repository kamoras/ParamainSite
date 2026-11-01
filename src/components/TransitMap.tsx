"use client";

import { useEffect, useRef } from "react";

/**
 * A little decorative "live model of transit" for the Hopline panel: three
 * lines, a handful of stations, and trains, a bus and a plane gliding along
 * them. Trains are colour-coded by delay, just like the real map. Purely
 * illustrative — it is not live data, so it is hidden from assistive tech.
 */
export function TransitMap({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  // SMIL animations ignore the prefers-reduced-motion media query, so freeze
  // them by hand.
  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof svg.pauseAnimations !== "function") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      query.matches ? svg.pauseAnimations() : svg.unpauseAnimations();
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 240"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      {/* Faint street grid. */}
      <g className="stroke-surface/10" strokeWidth="1">
        {[40, 80, 120, 160, 200].map((y) => (
          <path key={`h${y}`} d={`M0 ${y}H400`} />
        ))}
        {[50, 100, 150, 200, 250, 300, 350].map((x) => (
          <path key={`v${x}`} d={`M${x} 0V240`} />
        ))}
      </g>

      {/* Rail lines. */}
      <path
        id="hl-line-a"
        d="M14 196C86 196 112 128 192 124S322 76 388 44"
        className="stroke-teal"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        id="hl-line-b"
        d="M18 52C92 52 124 112 196 128S300 202 388 204"
        className="stroke-terracotta"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* A bus route. */}
      <path
        id="hl-line-c"
        d="M58 226L176 176 268 146 380 122"
        className="stroke-amber"
        fill="none"
        strokeWidth="3"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      {/* A flight, arcing overhead. */}
      <path
        id="hl-flight"
        d="M20 120C120 -10 270 -10 380 100"
        className="stroke-surface/25"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />

      {/* Stations. */}
      <g className="fill-ink stroke-surface" strokeWidth="2.5">
        {[
          [14, 196],
          [192, 124],
          [388, 44],
          [18, 52],
          [196, 128],
          [388, 204],
          [268, 146],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
        ))}
      </g>

      {/* "You are here" pulse at the big interchange. */}
      <circle cx="194" cy="126" r="6" className="fill-surface">
        <animate
          attributeName="r"
          values="6;22"
          dur="2.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.55;0"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Trains, coloured by delay: on time, a few minutes late, very late. */}
      <Vehicle path="#hl-line-a" dur="15s" begin="0s" tone="fill-sage" />
      <Vehicle
        path="#hl-line-a"
        dur="15s"
        begin="-8s"
        tone="fill-amber"
        reverse
      />
      <Vehicle path="#hl-line-b" dur="18s" begin="-3s" tone="fill-sage" />
      <Vehicle
        path="#hl-line-b"
        dur="18s"
        begin="-12s"
        tone="fill-terracotta"
        reverse
      />
      <Vehicle
        path="#hl-line-c"
        dur="13s"
        begin="-5s"
        tone="fill-amber"
        small
      />

      {/* The plane. */}
      <g className="fill-surface">
        <path d="M0 -6 L2 -1 L9 2 L9 4 L2 2 L1 6 L3 8 L3 9 L-3 9 L-3 8 L-1 6 L-2 2 L-9 4 L-9 2 L-2 -1 Z" />
        <animateMotion
          dur="22s"
          repeatCount="indefinite"
          rotate="auto"
          begin="-4s"
        >
          <mpath href="#hl-flight" />
        </animateMotion>
      </g>
    </svg>
  );
}

function Vehicle({
  path,
  dur,
  begin,
  tone,
  reverse = false,
  small = false,
}: {
  path: string;
  dur: string;
  begin: string;
  tone: string;
  reverse?: boolean;
  small?: boolean;
}) {
  const r = small ? 4 : 6;
  return (
    <g className={`${tone} stroke-ink`} strokeWidth="2">
      <circle r={r} />
      <animateMotion
        dur={dur}
        begin={begin}
        repeatCount="indefinite"
        keyPoints={reverse ? "1;0" : "0;1"}
        keyTimes="0;1"
        calcMode="linear"
      >
        <mpath href={path} />
      </animateMotion>
    </g>
  );
}
