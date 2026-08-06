# Design Notes

## Overview
Personal / research group website built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Stack
- Framework: Vite 8, React 19
- Language: TypeScript
- Styling: Tailwind CSS v3 + shadcn/ui (slate base color, CSS variables)
- Routing: react-router-dom v7
- Icons: lucide-react

## Structure
- `src/pages/` — route pages (Home, News, Papers, Contact)
- `src/components/` — shared UI; `components/generated/Footer.tsx` is the generated footer
- `src/components/ui/` — shadcn/ui primitives (Button, Card, Input, Textarea, Separator, Badge)

## Design system
- Color tokens defined as HSL variables in `src/index.css` (`--background`, `--foreground`, `--primary`, ...)
- Radius: `0.5rem`
- Dark mode supported via `.dark` class on root
- Container: centered, 2rem padding, max 1400px

## How to edit
- Change global colors in `src/index.css`
- Add a page: create `src/pages/Xxx.tsx`, register the route in `src/App.tsx`
- Add a UI component: use `pnpm dlx shadcn@latest add <name>`
- Format/lint: `pnpm lint` (biome) / `pnpm format`

## Commands
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm preview` — preview production build
