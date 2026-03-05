# Miguel E. Escobar P. — Portfolio

**mescobar.dev** · Web UI Developer · Medellín, Colombia

A production-grade personal portfolio built with React 18, Vite, Framer Motion, and Tailwind CSS. Not a template. Every animation, transition, layout decision, and line of code written from scratch with intentionality.

---

## Live

🌐 Coming soon to: [mescobar.dev](https://mescobar.dev)

---

## What's inside

### Pages

**Home (`/`)**
The entry point. A full dark-themed experience with five distinct sections that flow into each other:

- **Hero** — Name, role, short bio, and three CTAs (Projects, Contact, About). Parallax scroll with `useScroll` + `useTransform` from Framer Motion. Opacity, Y position, and scale all respond to scroll simultaneously.
- **Core Values** — Three words: Discovery, Learning, Progress. Each word has a **text scramble effect on hover** — the letters cycle through random characters before revealing the final word. Pure JS, no library.
- **Capabilities Section** — A 400vh scroll-locked section with four slides. As the user scrolls, each slide fades in and out with blur transitions, scale, and opacity — all driven by scroll position. Background has a mouse-following radial glow and floating tech icons (React, Next.js, Tailwind, Vite, Framer, JS) that parallax on mouse move. The last slide shows the CTA buttons (View Profile + Download CV).
- **Projects Slider** — A fullscreen horizontal slider showcasing the three main projects with real screenshots, smooth slide transitions using `cubic-bezier(.83,0,.17,1)`, staggered text animations per slide, dot navigation, and two action buttons per slide: Live Demo + All Projects.
- **Footer** — Sitemap + socials. Signature with name large in serif. Version 2026. Macaw illustration.

**Projects (`/projects`)**
Editorial-style project showcase. Not a grid of cards — a long-scroll document where each project gets the space it deserves.

- **Hero** with stats row: 03 projects · 03 live deploys · 05+ APIs integrated · 2026
- **Each project** has: numbered heading with color-coded accent, tag pill, tech stack badges, browser mockup with grid decoration, Live Demo + GitHub CTAs, description, technical highlight box, "How it was built" prose, and three numbered challenges solved.
- **Scroll-triggered animations** via IntersectionObserver — each project card slides up on viewport enter.
- **Coming Soon** card as the fourth slot — teases the next project.
- Full bilingual support.

**About (`/about`)**
Professional background, experience timeline, and technical capabilities.

**Contact**
Mailto link — direct, no friction.

---

### Features

**Bilingual (EN / ES)**
Every string in the app lives in `src/translations.js`. A single `useLanguage()` context hook exposes `language` and `toggleLanguage()`. Switching language re-renders all text instantly with no page reload. The toggle button is accessible from every page.

**Page transitions**
`PageTransition` component wraps every route. Smooth fade between pages using Framer Motion's `AnimationPresence`.

**Fullscreen menu overlay**
A dark overlay with the four routes in large display type. Opens/closes with a clean animation. Accessible with keyboard (Escape to close).

**SEO & Open Graph**
Full meta tag setup in `index.html`:
- Primary meta (title, description, keywords, canonical)
- Open Graph for LinkedIn, WhatsApp, Facebook previews
- Twitter Card with large image
- Custom `og-image.png` (1200×630) designed in the portfolio's visual language
- Theme color for mobile browser chrome (`#09090b`)

---

## Tech stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Routing | React Router DOM 6 |
| Icons | Simple Icons |
| Language | JavaScript (ES2024) |
| Deployment | Vercel |
| Domain | mescobar.dev (Cloudflare Registrar) |

---

## Architecture

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── macaw.png
│   ├── og-image.png
│   └── CV_Miguel_Escobar.docx
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AboutPage.jsx          # Professional background + timeline
│   │   ├── CapabilitiesSection.jsx # 400vh scroll-locked slides
│   │   ├── CoreValues.jsx         # Text scramble on hover
│   │   ├── Footer.jsx             # Per-page footer
│   │   ├── Home.jsx               # Hero + all home sections
│   │   ├── MagneticButton.jsx     # Magnetic hover effect
│   │   ├── MainFooter.jsx         # Shared full footer
│   │   ├── MenuOverlay.jsx        # Fullscreen nav overlay
│   │   ├── PageTransition.jsx     # Route transition wrapper
│   │   ├── ProjectSection.jsx     # Single slide for the slider
│   │   ├── ProjectsPage.jsx       # Full projects showcase page
│   │   └── ProjectsSlider.jsx     # Home horizontal slider
│   ├── constants/
│   ├── context/
│   │   ├── language-context.js
│   │   ├── LanguageContext.jsx
│   │   └── useLanguage.js
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx                    # Routes setup
│   ├── main.jsx                   # Entry point (no StrictMode)
│   └── translations.js            # All EN/ES strings
├── index.html                     # Full SEO meta tags
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Design decisions

**Why no UI library?**
Every component is custom. No shadcn, no MUI, no Chakra. The visual identity only works because every detail is controlled — padding, border radius, opacity, timing. A library would fight the design at every step.

**Why Tailwind instead of pure CSS?**
Tailwind for layout and spacing (the predictable stuff), inline styles + CSS variables for dynamic values (colors, transforms driven by motion values). Best of both.

**Why Framer Motion over CSS animations?**
The `useScroll` + `useTransform` pattern gives spring-physics-aware, scroll-position-driven values that CSS `@keyframes` simply can't do. The capabilities section alone uses 12+ motion values derived from a single scroll progress tracker.

**Why no i18n library?**
The translation system is intentionally minimal — a single object in `translations.js`, accessed through a context hook. Zero dependencies, zero config, instant switching. For a personal portfolio this is the right level of complexity.

**Why Vite over CRA?**
Vite's dev server proxy was essential during development of the sub-projects (Pulse in particular) — it allowed forwarding `/api/*` requests to CoinGecko server-side without CORS issues, mirroring Vercel's serverless function behavior in production.

---

## Getting started

```bash
# Clone
git clone https://github.com/MiguelEscobar0345/Miguelportfolio.git
cd portfolio

# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

---

## Related projects

Projects built specifically for this portfolio — each with its own README explaining the technical decisions:

| Project | Description | Live |
|---------|-------------|------|
| [MeDex](https://github.com/MiguelEscobar0345/Medex-Pokedex-) | Pokédex app — 898 Pokémon, type filter, detail modal | [medex-pokedex.vercel.app](https://medex-pokedex.vercel.app) |
| [Atmos](https://github.com/MiguelEscobar0345/MeAtmos) | Weather & air quality dashboard — Open-Meteo APIs | [me-atmos.vercel.app](https://me-atmos.vercel.app) |
| [Pulse](https://github.com/MiguelEscobar0345/MePulse) | Crypto dashboard — Vercel Serverless Functions proxy | [me-pulse.vercel.app](https://me-pulse.vercel.app) |

---

## License

MIT © Miguel E. Escobar P.