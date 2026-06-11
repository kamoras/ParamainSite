export type AppStatus = "live" | "beta" | "soon";

export type AppSource = "open" | "closed";

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
}

export const apps: ParamainApp[] = [
  {
    slug: "civitas",
    name: "Civitas",
    tagline: "Political transparency, powered by local AI",
    description:
      "A political transparency platform that runs open-weight models locally on a Raspberry Pi — no cloud, no surveillance, no gatekeepers. It distills public records and legislative activity into plain language so anyone can hold power to account.",
    url: "https://civitas.paramain.com",
    source: "closed",
    status: "live",
    category: "Civic tech",
    tags: ["Local AI", "Open weights", "Raspberry Pi", "Transparency"],
    monogram: "Cv",
    accent: "terracotta",
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
