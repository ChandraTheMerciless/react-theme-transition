# Agent Instructions

## User Preferences

- **Do NOT auto-generate code in the project** — provide instructions and code snippets so the user can create files themselves (learning-focused workflow)
- Explain the "why" behind decisions, not just the "what"
- When presenting options, include trade-off comparisons

---

## Code Formatting

After editing any `.ts`, `.tsx`, `.js`, `.jsx`, `.json`, `.css`, or `.scss` file, run Prettier to format it:

```bash
npx prettier --write <file_path>
```

---

## Project Overview

**Stack:** React 19 + Vite 7 + TypeScript + TanStack Router (file-based routing)

**Goal:** Build a dynamic theming system where colors smoothly transition when navigating between pages.

---

## Architecture Decisions

### Styling Strategy: CSS Custom Properties (Hybrid Model)

Chosen over CSS-in-JS or Tailwind because:
- **Native browser transitions** — no JS animation libraries needed
- **Zero runtime overhead** — CSS handles all animation math
- **97%+ browser support** — production-ready today

### File Structure

```
src/
├── hooks/
│   └── useTheme.ts          # Route → theme mapping, sets data-theme attribute
├── styles/
│   └── theme.scss           # Global CSS variables & transition definitions
├── routes/
│   ├── __root.tsx           # App shell, calls useTheme()
│   ├── index.tsx            # Home page (theme: "home")
│   └── about.tsx            # About page (theme: "about")
└── main.tsx                  # Imports theme.scss globally
```

### How Theme Transitions Work

1. `useTheme()` hook watches `useLocation()` from TanStack Router
2. Maps pathname to theme name (e.g., `/about` → `"about"`)
3. Sets `document.documentElement.dataset.theme = "about"`
4. CSS `[data-theme="about"]` selector overrides CSS variables
5. `transition: background-color 0.8s` animates the change

---

## Current Setup Status

| Item | Status |
|------|--------|
| ESLint 9 + Prettier | ✅ Configured |
| TanStack Router | ✅ File-based routing active |
| SASS (`sass-embedded`) | ✅ Installed |
| `theme.scss` | 🔲 User to create |
| `useTheme.ts` | 🔲 User to create |
| Root layout integration | 🔲 Pending |

---

## Themes Planned

| Route | Theme Name | Style |
|-------|------------|-------|
| `/` | `home` | Warm, light (cream bg, coral accent) |
| `/about` | `about` | Cool, dark (deep navy bg, blue accent) |

---

## Future Considerations

- **View Transitions API** — Progressive enhancement when browser support improves
- **Per-route CSS Modules** — For layout/spacing that doesn't need to transition
- **Theme persistence** — Could add localStorage to remember user's last theme
