# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Display font switched from Fraunces to Source Serif 4; Fraunces' curled,
  wavy "f" looked uneven in large headings.
- **DBD Manager** is now **Streamer Tools**, at
  [streamer-tools.paramain.com](https://streamer-tools.paramain.com)
  (source: [`kamoras/streamer-tools`](https://github.com/kamoras/streamer-tools)).
  It now bundles multiple Twitch integrations; the latest is Hues and Cues.
- **Civitas** now lives at
  [civitas-research.org](https://civitas-research.org) (previously
  `civitas.paramain.com`).
- **Civitas is open source.** It launched closed source; the source is now
  public at [`kamoras/civitas`](https://github.com/kamoras/civitas), so every
  app in the portfolio is open.
- Reframed the portfolio around Civitas as the flagship: it gets a dedicated
  feature panel (`FeaturedApp`) at the top of the apps section, with the other
  projects presented below as smaller side projects.
- Refreshed hero, ethos, footer, and metadata copy to match the new framing and
  the fully-open-source portfolio.

### Added

- **Hopline** ([hopline.paramain.com](https://hopline.paramain.com)) joins the
  portfolio as the runner-up, with its own `SpotlightApp` panel (animated
  transit map, sample departure board, operator ticker).
- Presentation tiers (`flagship` / `spotlight` / `standard` / `minor`) on
  `ParamainApp`, replacing the `featured` flag. Portfolio order is now Civitas,
  Hopline, Spliced, Streamer Tools, Linkertree; the last two are shown as quiet
  one-line entries.
- `featured` and `highlights` fields on `ParamainApp`, plus `featuredApp` /
  `otherApps` / `displayDomain` helpers in `src/data/apps.ts`.
- `codeRepository` and `isAccessibleForFree` in the JSON-LD for each app.

## [1.0.0] — 2026-06-10

### Added

- Initial release of the Paramain showcase site.
- Warm, open, modern design system built on Tailwind CSS v4 (Fraunces +
  Hanken Grotesk).
- Data-driven app portfolio featuring **Civitas**, **Linkertree**,
  **Spliced**, and **DBD Manager**.
- "Suggest an app" flow that opens a prefilled GitHub issue (with email
  fallback).
- Ethos section, SEO metadata, JSON-LD, `robots.txt`, and `sitemap.xml`.
- Full open-source project scaffolding: CI, issue/PR templates, Dependabot,
  Code of Conduct, security policy, and contribution guide.

[1.0.0]: https://github.com/kamoras/ParamainSite/releases/tag/v1.0.0
