# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Akk** is a personal portfolio and blog website for Agnieszka Koń-Kogut, a frontend-focused fullstack developer. The project is a modern Next.js 15 application with internationalization (Polish/English), Tailwind CSS styling, and a connected backend API.

- **Name**: akk
- **Type**: Next.js 15 portfolio/blog application
- **Framework**: React 19 with TypeScript
- **Package Manager**: pnpm

## Quick Start Commands

```bash
# Development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Code formatting
pnpm format

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── admin/               # Admin dashboard (protected, token-based)
│   ├── blog/                # Blog listing page
│   ├── blog/[id]/           # Individual blog post page
│   ├── cases/               # Case studies/projects page
│   ├── login/               # Login page for admin access
│   ├── globals.css          # Global Tailwind styles with CSS variables
│   ├── layout.tsx           # Root layout with i18n setup
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # 404 page

├── components/              # React components
│   ├── About/               # About section components
│   ├── Blog/                # Blog-related components
|   ├── Projects/            # Projects related components
│   ├── Home/                # Home page components (HeroSection with rotating text)
│   ├── Layout/              # Header and Footer components
│   ├── Projects/            # Project showcase components
│   └── ui/                  # Reusable UI components (Button, LangSwitcher, etc.)

├── hooks/                   # Custom React hooks
│   └── useFadeInUp.ts       # Intersection Observer-based fade-in animation hook

├── i18n/                    # Internationalization configuration
│   ├── routing.ts           # Locale configuration (pl, en)
│   ├── request.ts           # Server-side i18n request handler with cookie-based locale
│   └── navigation.ts        # i18n navigation utilities

├── messages/                # Translation files
│   ├── en.json              # English translations
│   └── pl.json              # Polish translations

├── types/                   # TypeScript type definitions
│   ├── post.ts              # Post type for blog content
│   └── css.d.ts             # CSS module declarations

└── middleware.ts            # Next.js middleware for admin route protection
```

## Architecture & Key Patterns

### Routing & Navigation

- Uses Next.js App Router (server components by default)
- Locale-prefixed routing disabled (`localePrefix: 'never'`)—locale detected from cookies
- Pages: home, blog (list + detail), cases, about, login, admin

### Internationalization (next-intl)

- **Locales**: Polish (default) and English
- **Locale Detection**: via `NEXT_LOCALE` cookie set by `LangSwitcher`
- **Translation Files**: JSON in `src/messages/`
- **Usage**: Server components use `getLocale()` and `getMessages()`; client components use `useTranslations()` hook
- Language switcher component in header allows runtime locale switching

### Authentication & Authorization

- **Login Page**: Client component (`src/app/login/page.tsx`) posts credentials to `/api/auth/login`
- **Token Storage**: JWT stored in `token` cookie
- **Admin Protection**: Middleware (`src/middleware.ts`) redirects unauthenticated requests to `/admin` → `/login`
- **Token Parsing**: Admin page extracts username from JWT payload (base64 decoded)

### Styling

- **Tailwind CSS v4** with new `@import 'tailwindcss'` syntax
- **CSS Variables** in `:root` for theme (colors, fonts, radii, transitions)
- **Custom Theme Colors**: Dark mode (bg: `#291b29`, accent: `#2dd4c7` teal)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Animations**: Fade-in, slide animations; `useFadeInUp` hook uses Intersection Observer

### Data Fetching

- **Blog Posts**: Fetched server-side in `BlogPage` component from `process.env.API_URL/posts`
- **No Caching**: `cache: 'no-store'` for posts (real-time updates)
- **Error Handling**: Fallback UI if API unavailable

### Component Patterns

- **Client Components**: Use `'use client'` directive (Header, HeroSection, LangSwitcher, login form)
- **Server Components**: Default; used for layout and static pages
- **Reusable UI**: Button (primary/ghost variants), LangSwitcher, LogoBrand
- **Animation Components**: RotatingText, animated hero section with floating cards

## Development Workflow

### Adding a New Page

1. Create a new route folder under `src/app/` (e.g., `src/app/contact/`)
2. Add `page.tsx` with page component
3. Add translations to `src/messages/en.json` and `src/messages/pl.json`
4. Update Header navigation links if needed

### Adding Translations

- Edit `src/messages/en.json` and `src/messages/pl.json`
- Use `useTranslations('SectionName')` in client components
- Use `getMessages()` in server components
- Access nested keys with dot notation: `t('section.key')`

### Styling New Components

- Use Tailwind classes with theme variables: `text-primary`, `bg-surface`, `border-border`
- Reference CSS variables for colors: `style={{ color: 'var(--color-accent)' }}`
- Update `src/app/globals.css` for global styles or new variables

### Testing

- Jest configured with `next/jest` preset
- Test environment: jsdom
- Setup file: `jest.setup.ts` imports `@testing-library/jest-dom`
- Test file naming: `*.test.tsx` or `*.test.ts`

## Configuration Files

- **tsconfig.json**: TypeScript strict mode enabled; path alias `@/*` → `src/*`
- **next.config.ts**: next-intl plugin; Unsplash image remote patterns allowed
- **eslint.config.mjs**: ESLint 9 flat config; extends Next.js core-web-vitals and TypeScript rules
- **.prettierrc.json**: Prettier config (2-space indent, single quotes, print width 100)
- **jest.config.ts**: Jest with jsdom environment

## Environment Variables

- **API_URL**: External blog API endpoint (set in `.env.local`)
- **NEXT_LOCALE**: Cookie-based locale preference (set by LangSwitcher, persists for 1 year)
- **token**: Cookie storing JWT for admin authentication

## Performance Notes

- Images optimized via Next.js Image component
- Unsplash images are cached via Next.js image optimization
- Blog data fetched without caching for real-time updates
- Intersection Observer used for scroll-triggered animations (efficient)

## Common Issues & Patterns

1. **Locale Not Switching**: Ensure `NEXT_LOCALE` cookie is set and page calls `router.refresh()`
2. **Admin Access Denied**: Check if `token` cookie is present and valid; middleware checks this on `/admin` routes
3. **API Errors**: Blog page handles fetch errors gracefully with fallback UI; check `API_URL` environment variable
4. **Styling Issues**: Check CSS variable overrides; they may be shadowed by Tailwind or inline styles

## Security Rules

- NEVER read, display, or log any `.env` files
- NEVER hardcode secrets or API keys in code
- Use `process.env.VARIABLE_NAME` references only
