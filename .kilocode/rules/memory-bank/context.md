# Active Context: Next.js Starter Template

## Current State

**Project Status**: ✅ SMC Scanner v7 — Full Auto-Signal System

The project is a landing page + Pine Script v6 institutional market scanner. The indicator (1376 lines) now includes 15 toggleable modules with auto BUY/SELL signals, Entry/SL/TP levels, HTF bias filter, and killzone sessions. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

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
- [x] Complete rewrite of Pine Script indicator as "All-in-One Institutional Market Scanner" (981 lines)
- [x] All 11 modules implemented with individual toggles: Diagonal Lines, Confluence Engine, S/D Zones, BOS/CHoCH, Order Blocks, Liquidity & Sweeps, FVG + OTE, Sweep+Reversal Trigger, Premium/Discount, Market Phase, Volume Climax
- [x] Fixed Pine Script v6 compliance: alertcondition at global scope, request.security at global scope, ta.* functions at global scope
- [x] Added Equal Highs/Lows detection, PDH/PDL liquidity, 50% OB mitigation, proper Sweep+Reversal with CHoCH/FVG confirmation
- [x] Drawing object cleanup system for barstate.islast redraws
- [x] Market Phase table + Dashboard table with full scanner status
- [x] 15 alertcondition events at global scope
- [x] **v7 Major Upgrade** — expanded from 984 to 1376 lines with 4 new modules:
- [x] Module 12: Auto-Signal Engine — BUY/SELL signals based on confluence scoring, trend, premium/discount, with configurable cooldown
- [x] Module 13: Entry/SL/TP System — automatic SL from nearest OB (ATR fallback), 3 TP levels at configurable R:R ratios, line drawing, hit tracking
- [x] Module 14: HTF Bias Filter — higher timeframe EMA 21/50 cross for directional bias, optional strict filtering
- [x] Module 15: Killzone/Session Filter — London/NY/Asia sessions with background bands, optional signal filtering
- [x] Signal arrows via plotshape() at global scope, dynamic alert() messages with prices
- [x] 15-row expanded dashboard: signal status, entry/SL, TP1-3 status, HTF bias, killzone, all scanner stats
- [x] 19 alertcondition events + 6 dynamic alert() calls at global scope
- [x] All for-loops use math.max(0,...) bounds + inner size guards (21 loops audited)

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Landing page with all sections | ✅ Complete |
| `src/app/layout.tsx` | Root layout with SMC metadata | ✅ Complete |
| `src/app/globals.css` | Global styles (dark theme) | ✅ Complete |
| `SMC_Ultimate_Indicator_v6.pine` | Pine Script v7 scanner (1376 lines, 15 modules) | ✅ Complete |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Pine Script v6 indicator and landing page are complete. Potential next steps:

1. Add interactivity (animations, scroll effects) to landing page
2. Add documentation page for indicator modules
3. Fine-tune indicator logic (test on live TradingView chart)
4. Add more Pine Script alert types or webhook integration

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
| 2026-02-27 | Complete rewrite of Pine Script indicator: 11 modules, v6 compliant, 981 lines, all toggleable, with cleanup system and 15 alert conditions |
| 2026-02-28 | v7 Major Upgrade: 1376 lines, 15 modules, auto BUY/SELL signals, Entry/SL/TP with R:R, HTF bias filter, killzones, expanded 15-row dashboard, 19 alertconditions + 6 dynamic alerts |
