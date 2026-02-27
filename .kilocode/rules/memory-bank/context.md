# Active Context: Next.js Starter Template

## Current State

**Project Status**: ✅ SMC Ultimate Trading Toolkit v6 Landing Page

The project is a landing page / marketing site for the SMC Ultimate Trading Toolkit v6 TradingView indicator. Built with Next.js 16, TypeScript, and Tailwind CSS 4. Dark theme with yellow accent colors.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] SMC Ultimate Trading Toolkit v6 Pine Script indicator added
- [x] Full landing page: hero, features, 14 modules list, dashboard preview, extra features, CTA
- [x] Updated metadata for SMC Trading Toolkit branding
- [x] Global styles: smooth scrolling, font smoothing, selection color
- [x] Dark theme (#0a0a0f background) with yellow-400 accent

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Landing page with all sections | ✅ Complete |
| `src/app/layout.tsx` | Root layout with SMC metadata | ✅ Complete |
| `src/app/globals.css` | Global styles (dark theme) | ✅ Complete |
| `SMC_Ultimate_Indicator_v6.pine` | Pine Script indicator source | ✅ Present |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Landing page is complete. Potential next steps:

1. Add interactivity (animations, scroll effects)
2. Add more pages (documentation, changelog)
3. Improve mobile responsiveness
4. Add analytics or contact form

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-02-27 | Added SMC Ultimate Trading Toolkit v6 Pine Script indicator (970 lines) |
| 2026-02-27 | Built full landing page with hero, features, modules, dashboard, CTA sections; dark theme with yellow accents |
