<div align="center">

<img src="public/favicon.svg" alt="Paramain" width="72" height="72" />

# Paramain

**Software should be accessible to everyone.**

The showcase site for [Paramain](https://paramain.com) — a portfolio of free,
independent apps led by [Civitas](https://civitas-research.org). Open source all
the way down, with no ads, no lock-in, and no surveillance.

[![Built with Next.js](https://img.shields.io/badge/Next.js-16-000?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-c2552d.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-5f7a48.svg)](CONTRIBUTING.md)

[**Live site →**](https://paramain.com) · [Suggest an app](https://paramain.com/#suggest) · [The ethos](https://paramain.com/#ethos)

</div>

---

## About

Paramain is a small workshop of useful tools, built on a simple belief: good
software should belong to everyone. This repository is the marketing/showcase
site that ties the portfolio together. It's intentionally a complete,
professional, open-source project — fork it, learn from it, or use it as a
template for your own portfolio.

### The flagship

**[Civitas](https://civitas-research.org)** — `civitas-research.org` — is the
project the site is built around. It's a political transparency platform that
runs open-weight models locally on a Raspberry Pi, distilling public records and
legislative activity into plain language. Originally closed source, it is now
**fully open source**: [`kamoras/civitas`](https://github.com/kamoras/civitas).

On the site it gets its own feature panel above the rest of the portfolio (see
[`FeaturedApp.tsx`](src/components/FeaturedApp.tsx)).

### The rest of the shelf

Smaller side projects, shown as grid cards below the flagship:

| App                                                        | What it is                                                                            | Source |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------ |
| [Linkertree](https://linkertree.paramain.com)              | A free, open-source link-in-bio with no lock-in.                                      | Open   |
| [Spliced](https://spliced.paramain.com)                    | A daily music puzzle — no ads, ever.                                                  | Open   |
| [DBD Manager](https://deadbydaylight-manager.paramain.com) | Stream utilities (like a viewer queue) for Twitch streamers playing Dead by Daylight. | Open   |

> Adding or updating an app is a one-file change: edit
> [`src/data/apps.ts`](src/data/apps.ts). Set `featured: true` on exactly one
> app to give it the flagship panel.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, React 19, TypeScript)
- **[Tailwind CSS v4](https://tailwindcss.com)** with a custom warm design system
- **[next/font](https://nextjs.org/docs/app/api-reference/components/font)** —
  Fraunces (display) + Hanken Grotesk (body)
- Zero client-side data dependencies; deploys statically to
  **[Vercel](https://vercel.com)**

## Getting started

> Requires **Node.js 20+** (see [`.nvmrc`](.nvmrc) — this project targets Node 24).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
open http://localhost:3000
```

### Available scripts

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start the local dev server     |
| `npm run build`        | Production build               |
| `npm run start`        | Serve the production build     |
| `npm run lint`         | Lint with ESLint               |
| `npm run typecheck`    | Type-check with `tsc --noEmit` |
| `npm run format`       | Format with Prettier           |
| `npm run format:check` | Check formatting in CI         |

## Project structure

```
src/
├─ app/                # App Router: layout, page, metadata, robots, sitemap
│  ├─ globals.css      # The warm design system (Tailwind v4 @theme)
│  ├─ layout.tsx       # Fonts, metadata, skip link
│  └─ page.tsx         # Composes the sections + JSON-LD
├─ components/         # Header, Hero, AppsSection, Ethos, Suggest, Footer …
└─ data/
   ├─ apps.ts          # ← The single source of truth for the portfolio
   └─ site.ts          # Site-wide config (name, links, contact)
```

## Deploying to Vercel

This repo is ready to deploy as-is:

1. Push it to GitHub.
2. In Vercel, **New Project → Import** this repository.
3. Framework preset auto-detects as **Next.js**. No environment variables are
   required.
4. Deploy. Point your domain (`paramain.com`) at the project.

## Contributing

Contributions are warmly welcome — see [CONTRIBUTING.md](CONTRIBUTING.md) and our
[Code of Conduct](CODE_OF_CONDUCT.md). Have an idea for a new app?
[Open an issue](https://github.com/kamoras/ParamainSite/issues/new?labels=idea)
or use the form on the site.

### Autonomous CI/CD

- **CI** ([`ci.yml`](.github/workflows/ci.yml)) runs format, lint, type-check,
  and build on every push and PR.
- **CD** is handled by Vercel: every push to `main` ships to production and
  every PR gets a preview deployment.
- **Dependabot** ([`dependabot.yml`](.github/dependabot.yml)) opens grouped
  dependency PRs weekly;
  [`dependabot-auto-merge.yml`](.github/workflows/dependabot-auto-merge.yml)
  approves them and enables auto-merge so they land **automatically once CI is
  green** — no human in the loop unless a check fails.

The required GitHub settings (auto-merge, Actions PR approval, and a branch
protection rule on `main` requiring the **`Lint, type-check & build`** check)
are already configured on this repository.

## License

[MIT](LICENSE) © Paramain. Made in the open, for everyone.
