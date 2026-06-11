# Contributing to Paramain

First off — thank you. Paramain exists because people believe useful software
should be free and open. Contributions of every size are welcome, whether
that's fixing a typo, improving accessibility, or pitching a whole new app.

## Ways to contribute

- **Found a bug?** [Open a bug report.](../../issues/new?template=bug_report.yml)
- **Have an app idea?** [Suggest it.](../../issues/new?template=app_idea.yml)
- **Want a feature?** [Request it.](../../issues/new?template=feature_request.yml)
- **Curious about automation?** Dependency PRs from Dependabot are approved and
  auto-merged automatically once CI passes — see the
  [auto-merge workflow](.github/workflows/dependabot-auto-merge.yml).
- **Want to write code?** Read on.

## Development setup

> Requires **Node.js 20+** (this project targets Node 24 — see `.nvmrc`).

```bash
npm install
npm run dev
```

Before opening a pull request, please make sure everything is green:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Adding or editing an app in the showcase

The portfolio is data-driven. To add a new app or update an existing one, edit
**[`src/data/apps.ts`](src/data/apps.ts)** — no component changes needed.

```ts
{
  slug: "my-app",
  name: "My App",
  tagline: "A one-line pitch",
  description: "A sentence or two on what it does and who it helps.",
  url: "https://my-app.paramain.com",
  repo: "https://github.com/paramain/my-app", // omit if closed source
  source: "open",            // "open" | "closed"
  status: "live",            // "live" | "beta" | "soon"
  category: "Creator tools",
  tags: ["Self-hostable", "No lock-in"],
  monogram: "Ma",            // two characters
  accent: "teal",            // terracotta | amber | sage | plum | teal
}
```

## Pull request guidelines

1. **Branch** from `main` (e.g. `feat/add-foo`, `fix/header-overflow`).
2. **Keep PRs focused** — one logical change per PR is easiest to review.
3. **Write a clear description** of what changed and why. Screenshots for any
   visual change are hugely appreciated.
4. **Match the existing style** — Prettier and ESLint enforce most of it.
5. Be kind in review. We follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Code style

- TypeScript, strict mode. Prefer explicit, readable code over clever code.
- Tailwind utility classes; shared tokens live in `src/app/globals.css`.
- Components are small and composable; keep them in `src/components/`.

## Questions?

Open a [discussion](../../discussions) or email
[hello@paramain.com](mailto:hello@paramain.com). We're friendly.
