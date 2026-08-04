export type AppStatus = "live" | "beta" | "soon";

export type AppSource = "open" | "closed";

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
  /** Two-character monogram used in the card's emblem. */
  monogram: string;
  /** Accent theme key — see ACCENTS in components. */
  accent: "terracotta" | "amber" | "sage" | "plum" | "teal";
  /**
   * The flagship. Exactly one app should carry this — it gets the large
   * feature panel at the top of the portfolio instead of a grid card.
   */
  featured?: boolean;
  /** Feature-panel only: a few short "at a glance" facts. */
  highlights?: { label: string; value: string }[];
}

export const apps: ParamainApp[] = [
  {
    slug: "civitas",
    name: "Civitas",
    tagline: "Political transparency, powered by local AI",
    description:
      "The project everything else here orbits. Civitas distills public records and legislative activity into plain language so anyone can hold power to account — running open-weight models locally on a Raspberry Pi, with no cloud, no surveillance, and no gatekeepers. It started life closed source; it's now open, end to end, so the pipeline that shapes what you read is auditable by anyone who cares to look.",
    url: "https://civitas-research.org",
    repo: "https://github.com/kamoras/civitas",
    source: "open",
    status: "live",
    category: "Civic tech",
    tags: ["Local AI", "Open weights", "Raspberry Pi", "Transparency"],
    monogram: "Cv",
    accent: "terracotta",
    featured: true,
    highlights: [
      { label: "Runs on", value: "A Raspberry Pi in a spare room" },
      { label: "Models", value: "Open weights, entirely local" },
      { label: "Source", value: "Open — every line of it" },
      { label: "Cost", value: "$0, no ads, no accounts" },
    ],
  },
  {
    slug: "linkertree",
    name: "Linkertree",
    tagline: "A free, open-source link-in-bio",
    description:
      "Everything you love about a link-in-bio page, with none of the lock-in. Self-host it or run it free — own your links, your data, and your audience. A genuine open alternative to the usual suspects.",
    url: "https://linkertree.paramain.com",
    repo: "https://github.com/kamoras/linkertree",
    source: "open",
    status: "live",
    category: "Creator tools",
    tags: ["Self-hostable", "No lock-in", "Link-in-bio"],
    monogram: "Lt",
    accent: "sage",
  },
  {
    slug: "spliced",
    name: "Spliced",
    tagline: "A daily music puzzle, no ads ever",
    description:
      "One fresh music puzzle every day. Splice the clips, name the track, share your streak. No ads, no tracking, no paywall — just a small, joyful ritual that respects your attention.",
    url: "https://spliced.paramain.com",
    repo: "https://github.com/kamoras/spliced",
    source: "open",
    status: "live",
    category: "Games & play",
    tags: ["Daily puzzle", "Music", "Ad-free"],
    monogram: "Sp",
    accent: "amber",
  },
  {
    slug: "deadbydaylight-manager",
    name: "DBD Manager",
    tagline: "Stream utilities for Dead by Daylight",
    description:
      "A free, open-source toolkit for Twitch streamers playing Dead by Daylight. Run a viewer queue so your community can jump into the match on stream, plus the small utilities that make playing with chat effortless.",
    url: "https://deadbydaylight-manager.paramain.com",
    repo: "https://github.com/kamoras/deadbydaylight-manager",
    source: "open",
    status: "live",
    category: "Streaming tools",
    tags: ["Twitch", "Viewer queue", "Dead by Daylight"],
    monogram: "Db",
    accent: "plum",
  },
];

/** The flagship, given the feature panel at the top of the portfolio. */
export const featuredApp = apps.find((app) => app.featured);

/**
 * Everything else — the smaller side projects, shown as grid cards. Compared
 * against the resolved flagship rather than the `featured` flag, so a stray
 * second `featured: true` still renders as a card instead of vanishing.
 */
export const otherApps = apps.filter((app) => app !== featuredApp);

/** `civitas-research.org` from `https://civitas-research.org` — for display. */
export function displayDomain(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}
