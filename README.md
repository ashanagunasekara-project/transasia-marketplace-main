# Unimart Next.js

A multi-demo eCommerce frontend template built with Next.js (App Router), React, TypeScript, and Zustand.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Zustand for UI/store state
- Bootstrap + Sass
- Swiper and other UI-focused libraries

## Prerequisites

- Node.js 20+ (recommended)
- npm 10+ (or compatible package manager)

## Installation

```bash
npm install
```

## Development

Start dev server (Turbopack default):

```bash
npm run dev
```

Start dev server with Webpack:

```bash
npm run dev:webpack
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run dev:webpack` - Start development server (Webpack)
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Build with bundle analyzer enabled

## Project Structure

```text
app/          Route groups and page entries (App Router)
components/   Reusable UI blocks, home/demo sections, modals, product UIs
context/      Zustand stores (cart, wishlist, UI state)
data/         Static data sources used by demos/pages
hooks/        Custom React hooks
lib/          Utilities and shared helpers
types/        TypeScript shared types
public/       Static assets (images, fonts, styles)
scripts/      Utility scripts for project maintenance
```

## Architecture Notes

- The app contains many demo routes and presentation variants.
- Modal rendering is centralized in `components/common/other-components/LayoutModals.tsx`.
- Global UI state is managed in `context/uiStore.ts`.
- Cart/wishlist state persistence is managed in `context/store.ts`.

## Quality Workflow

Before opening a PR:

```bash
npm run lint
npm run build
```

Recommended additions for stricter quality gates:

- Add a `typecheck` script (`tsc --noEmit`)
- Add unit tests for utility and store logic
- Add E2E smoke tests for core shopping flows

## Common Tasks

### Add a new page

1. Create a route under `app/` using App Router conventions.
2. Reuse existing section components from `components/` whenever possible.
3. Keep data in `data/` and avoid embedding large static arrays in UI files.

### Add a new modal

1. Create the modal component under `components/modals/`.
2. Register it in `LayoutModals`.
3. Map modal open/close actions in `context/uiStore.ts`.

### Analyze bundle size

```bash
npm run analyze
```

## Deployment

Standard Next.js production flow:

```bash
npm run build
npm run start
```

Deploy on any platform that supports Node.js and Next.js (Vercel recommended for easiest setup).

## Troubleshooting

- If dev server behaves unexpectedly, remove `.next/` and restart.
- If styles do not refresh properly, restart the dev server.
- If you change dependencies, run `npm install` again before building.

## License

Use according to your project's licensing terms.
