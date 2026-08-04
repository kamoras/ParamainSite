# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

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
