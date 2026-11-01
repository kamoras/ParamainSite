export type AppStatus = "live" | "beta" | "soon";

export type AppSource = "open" | "closed";

/**
 * How loudly the portfolio presents an app, from loudest to quietest:
 *
 * - `flagship`  — the large feature panel (exactly one app).
 * - `spotlight` — a big, playful panel just beneath the flagship (exactly one).
 * - `standard`  — a full card.
 * - `minor`     — a quiet one-line entry; there if you go looking.
 *
 * The order of `apps` below is the priority order within and across tiers.
 */
export type AppTier = "flagship" | "spotlight" | "standard" | "minor";

/** Human labels for the lifecycle badge, shared by every card that shows one. */
export const STATUS_LABEL: Record<AppStatus, string> = {
  live: "Live",
  beta: "Beta",
  soon: "Coming soon",
};

export interface ParamainApp {
  /** Stable slug, also used as a React key and anchor id. */
  slug: string;
  /** Display name. */
  name: string;
  /** One-line tagline shown under the name. */
  tagline: string;
  /** Longer description for the card body. */
  description: string;
  /** Live URL. */
  url: string;
  /** Source repository, when public. */
  repo?: string;
  /** Whether the source is open or closed. */
  source: AppSource;
  /** Lifecycle status. */
  status: AppStatus;
  /** Short, human category label. */
  category: string;
  /** A few keywords / tech highlights. */
  tags: string[];
  /** Accent theme key — see ACCENTS in components. */
  accent: "ledger" | "azure" | "cobalt" | "violet" | "emerald";
  /** Presentation tier — see {@link AppTier}. */
  tier: AppTier;
  /** Flagship panel only: a few short "at a glance" facts. */
  highlights?: { label: string; value: string }[];
}

export const apps: ParamainApp[] = [
  {
    slug: "civitas",
    name: "Civitas Research",
    tagline: "A single pane of glass for the U.S. government",
    description:
      "The project everything else here orbits. Civitas Research puts the public record of the U.S. federal government in one place: every member of Congress, the president, federal agencies and the Supreme Court, with votes, bills, campaign money, stock trades and elections, and each figure shown with its source. Members are compared with their peers, never given a grade.",
    url: "https://civitas-research.org",
    repo: "https://github.com/kamoras/civitas",
    source: "open",
    status: "live",
    category: "Civic tech",
    tags: [
      "Congress",
      "Executive branch",
      "Supreme Court",
      "Elections",
      "Open data",
    ],
    accent: "ledger",
    tier: "flagship",
    highlights: [
      {
        label: "Covers",
        value: "Congress, the White House, agencies and the courts",
      },
      { label: "Receipts", value: "Every figure shown with its source" },
      { label: "Runs on", value: "One Raspberry Pi, no cloud AI" },
      {
        label: "Search",
        value: "One box over every page and federal document",
      },
    ],
  },
  {
    slug: "hopline",
    name: "Hopline",
    tagline: "Where's my train?",
    description:
      "A fast single pane of glass for public transit. Hopline merges live data from a dozen operators into one calm, game-like model of everything moving right now — which trains are running, who's late, why, and where each one is on the map. Trains, subways, buses and even the flights overhead, from Boston down to Norfolk. Your saved commutes and location stay in your browser.",
    url: "https://hopline.paramain.com",
    repo: "https://github.com/kamoras/hopline",
    source: "open",
    status: "live",
    category: "Transit",
    tags: ["Live map", "Trains & buses", "Flights", "Delays explained"],
    accent: "azure",
    tier: "spotlight",
  },
  {
    slug: "spliced",
    name: "Spliced",
    tagline: "A daily music puzzle",
    description:
      "One fresh music puzzle every day. Splice the clips, name the track, share your streak. A small, joyful ritual that respects your attention.",
    url: "https://spliced.paramain.com",
    repo: "https://github.com/kamoras/spliced",
    source: "open",
    status: "live",
    category: "Games & play",
    tags: ["Daily puzzle", "Music", "Streaks"],
    accent: "cobalt",
    tier: "standard",
  },
  {
    slug: "streamer-tools",
    name: "Streamer Tools",
    tagline: "Interactive Twitch integrations for streamers",
    description:
      "A toolkit of Twitch integrations that put your chat in the game. Started as a Dead by Daylight viewer queue, and has grown into a set of interactive experiences — the latest is Hues and Cues, a colour-guessing party game your community plays together on stream.",
    url: "https://streamer-tools.paramain.com",
    repo: "https://github.com/kamoras/stream-tools",
    source: "open",
    status: "live",
    category: "Streaming tools",
    tags: ["Twitch", "Hues and Cues", "Viewer queue", "Chat games"],
    accent: "violet",
    tier: "minor",
  },
  {
    slug: "linkertree",
    name: "Linkertree",
    tagline: "A link-in-bio page you own",
    description:
      "Everything you love about a link-in-bio page, with none of the lock-in. Self-host it and own your links, your data, and your audience. A genuine alternative to the usual suspects.",
    url: "https://linkertree.paramain.com",
    repo: "https://github.com/kamoras/linkertree",
    source: "open",
    status: "live",
    category: "Creator tools",
    tags: ["Self-hostable", "Link-in-bio"],
    accent: "emerald",
    tier: "minor",
  },
];

/** The flagship, given the feature panel at the top of the portfolio. */
export const featuredApp = apps.find((app) => app.tier === "flagship");

/** The runner-up, given its own playful panel right under the flagship. */
export const spotlightApp = apps.find((app) => app.tier === "spotlight");

/** Full-size cards, in priority order. */
export const standardApps = apps.filter((app) => app.tier === "standard");

/** Quiet one-line entries, in priority order. */
export const minorApps = apps.filter((app) => app.tier === "minor");

/** `civitas-research.org` from `https://civitas-research.org` — for display. */
export function displayDomain(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}
