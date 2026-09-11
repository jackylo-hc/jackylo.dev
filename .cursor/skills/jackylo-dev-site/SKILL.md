---
name: jackylo-dev-site
description: How to update, extend, and debug the jackylo.dev portfolio site (Next.js 16 App Router + React 19 + Tailwind v4 + Biome, pnpm). Use this whenever working anywhere in this repository — adding or editing content in src/data/*.json, changing the layout/components in src/app/page.tsx, adjusting theme colors, fixing build, type, or lint errors, investigating broken/missing images, or preparing a Vercel deploy — even if the user just says "add a project", "update my site", or "the build is broken".
---

# jackylo.dev portfolio site

A single-page, data-driven personal portfolio. One route, one rendering
component, and four JSON files that hold all the content. Almost every
"update" is a data edit; almost every "bug" is a data edit that broke a
type, a key, or an asset path.

## Architecture at a glance

- **One route**: `src/app/page.tsx` renders everything —
  profile card → experience timeline → project grid → education list.
- **Content is data**, not JSX: `src/data/profile.json`,
  `projects.json`, `experiences.json`, `education.json`.
- **Rich text is an HTML string**, rendered with `parseHtml(...)` from
  `html-react-parser` (see `intro` and `desc` fields).
- **Theme lives in CSS**: color tokens are declared in `@theme` inside
  `src/app/globals.css`.
- **Deployed on Vercel** as a standard Next.js app.

### The stack (and why it matters when editing)

| Area      | Choice                        | Gotcha it creates |
|-----------|-------------------------------|-------------------|
| Framework | Next.js `16.3.4`, App Router  | Server components by default; no client hooks without `'use client'` |
| Runtime   | React `19.3`                  | Keys still matter; duplicate keys warn |
| Styling   | Tailwind CSS `4.3`            | **No `tailwind.config`** — theme is in `globals.css` |
| Types     | TypeScript `7` (`strict`)     | `resolveJsonModule` is on, so JSON is typed/inferred |
| Lint/fmt  | Biome `2.5`                   | Semicolons off, single quotes, 120 cols |
| Tooling   | pnpm `12`, Node `24.x`, Husky | Pre-commit runs Biome via `nano-staged` |

## File map

- `src/app/page.tsx` — all page sections and markup
- `src/app/layout.tsx` — `<Metadata>`, Inconsolata font, Vercel Analytics + Speed Insights
- `src/app/globals.css` — `@import "tailwindcss"`, `@theme` color tokens, border-color compat layer
- `src/data/*.json` — all content (see recipes below)
- `public/assets/**`, `public/resume.pdf` — static assets referenced as `/assets/...`
- `next.config.js` — only `images.remotePatterns` (currently allows `placehold.co`)
- `biome.json`, `tsconfig.json` (`@/*` → `./src/*`), `postcss.config.js`

## Commands

```bash
pnpm dev      # next dev --turbo
pnpm build    # production build (run before declaring done)
pnpm start    # serve the build
pnpm check    # biome check .
pnpm format   # biome format --write .
```

Run `pnpm check` and `pnpm build` as the final gate on any code change.
Biome will also run automatically on commit via Husky.

## Recipe: content updates (the common case)

Editing content means editing JSON, not JSX. Match the existing shape
exactly — the page destructures these fields by name, so a typo'd or
renamed key renders as blank rather than erroring.

### `projects.json` — array of projects

```json
{
  "image": { "src": "/assets/projects/x.jpg", "alt": "X preview" },
  "link": "https://example.com",
  "title": "X",
  "tech": "Next.js | Shadcn UI",
  "desc": "Plain text description."
}
```

- Each project card is keyed by `title` — keep titles unique.
- `link: ""` is treated as "no link" and renders a plain heading
  (`{project.link && ...}` / `{!project.link && ...}` in `page.tsx`).

### `experiences.json` — ordered, newest first

```json
{
  "logo": { "src": "/assets/logo/x.jpg", "alt": "X Logo" },
  "title": "Senior Frontend Engineer",
  "company": "X",
  "year": "Aug 2022 to Sept 2023",
  "location": "Hong Kong",
  "desc": "Short text.<br/><br/>Second paragraph."
}
```

- The timeline is keyed by `company` — keep company names unique.
- `desc` is an **HTML string**. Use `<br/><br/>` for paragraph breaks;
  do **not** use JSX (`<br />` only works here because it's inside a
  string). The last item's connector line is hidden via
  `index !== education.length - 1` in the education list — experiences
  always draw the connector.

### `education.json` — array, rendered in order

```json
{ "name": "University", "program": "Degree name" }
```

### `profile.json` — single object

- `profilePic.src` / `.alt`, `title`, `name`, `location`
- `socialMedia[]`: `{ "icon": "github" | "linkedin" | "instagram", "url": "..." }`
- `intro`: **HTML string** (parsed with `parseHtml`)
- `skills[]`: array of strings rendered as badges

> Adding a new social network means editing **three** places: the data,
> the icon `import` from `iconoir-react` in `page.tsx`, and the
> `{item.icon === '...' && <Icon />}` conditional chain.

## Recipe: UI / layout changes

`src/app/page.tsx` is organized as profile → experiences → projects →
education, each a commented block. Keep that structure.

- **Icons**: `iconoir-react`, e.g. `<MapPin strokeWidth={2} width={16} height={16} />`.
- **Images**: `next/image` with explicit `width`/`height`; local files
  under `public/` are referenced as root-relative `/assets/...`.
- **Rich text**: `parseHtml(profile.intro)` / `parseHtml(experience.desc)`.
- **Conditional classes**: `clsx` is already a dependency.

## Recipe: styling

- Add a color under `@theme` in `globals.css` as
  `--color-themeXxx: #hex`; it then becomes usable as `text-themeXxx`,
  `bg-themeXxx`, `border-themeXxx`, `from-themeXxx`, and with opacity
  like `bg-themeLightBlue/20`.
- Tailwind v4 syntax is in use (`bg-linear-to-r`, trailing `!` for
  important like `pt-0!`). Don't reach for the old v3 gradient names.
- `globals.css` includes a border-color compatibility layer — leave it
  unless you're intentionally migrating.
- Respect Biome: no semicolons, single quotes, 120-column width. Run
  `pnpm format` rather than hand-fighting it.

## Debug playbook

| Symptom | Likely cause | Fix |
|---|---|---|
| Broken/blank images | `src` points at a file missing from `public/` | Run the `check-content.mjs` script below, add the asset |
| Build fails on a data field | Malformed JSON or wrong shape | Validate the JSON, match the shapes above |
| Literal `<br/>` or tags shown as text | JSX used where an HTML **string** is required | Quote the HTML inside the JSON string |
| React duplicate-key warning | Two entries share `title`/`company`/`name` | Make the key field unique |
| Hooks or browser APIs error | Client hook used in a server component | Add `'use client'` to the top of that component |
| Repeated stale/wonky dev behavior | Turbopack cache | Stop dev, delete `.next/`, rerun `pnpm dev` |
| Remote image rejected | Host not in `next.config.js` `remotePatterns` | Add the hostname there |
| Biome fails in CI/commit | Formatting/lint drift | `pnpm format && pnpm check` |

## Bundled script: content-asset check

`node .cursor/skills/jackylo-dev-site/scripts/check-content.mjs`

Scans every `src` under `src/data/*.json` and verifies the target exists
in `public/`. Exit code `0` = all good, `1` = missing assets listed.
Reach for this first on any "image is broken" report.

## Pre-flight checklist

Before calling a change done:

1. `pnpm check` is clean.
2. `pnpm build` succeeds.
3. `node .cursor/skills/jackylo-dev-site/scripts/check-content.mjs` passes.
4. Any new content matches the exact JSON shape for its file.
5. Keys (`title`, `company`, `name`) are unique.
