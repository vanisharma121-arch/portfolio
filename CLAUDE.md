# Vani Sharma — portfolio

Personal portfolio site. Deployed to GitHub Pages at
**https://vanisharma121-arch.github.io/portfolio/**

## The site lives in `react/`

`react/` is the real site — a Vite + React 18 single-page app. Work there.

```bash
cd react
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → react/dist
npm run preview   # serve the production build
```

### Structure

```
react/
  index.html            # document head: title, meta, OG tags, favicon
  vite.config.js        # base = '/portfolio/' on build (Pages project site), '/' in dev
  public/               # copied verbatim into the build root
    photo.jpg           # portrait used in the resume section
    Vani_Sharma_CV.pdf  # target of every "Download CV" button
  src/
    main.jsx            # entry; wraps <App> in <GameProvider>
    App.jsx             # composes the page sections
    index.css           # the whole design system (no CSS framework)
    data.js             # ALL copy and content — edit here, not in components
    game/
      GameContext.jsx   # XP + achievement state, persisted to localStorage
      HUD.jsx           # level ring, XP readout, trophy tray
      Toasts.jsx        # "achievement unlocked" toasts
    hooks/
      useScrollEffects.js  # scroll reveal, count-up, section-reached, Konami
    components/         # one file per section, all presentational
```

## Conventions that matter

**Content goes in `src/data.js`.** Components are presentational and read from it.
To change copy, projects, experience, or achievements, edit that file only.

**Public assets need the base path.** Because the site is served from
`/portfolio/`, never hardcode `/photo.jpg`. Use the `asset()` helper pattern:

```js
const asset = (file) => `${import.meta.env.BASE_URL}${file}`
```

**Design language is Apple-inspired.** System font stack (SF Pro on Apple
devices, Inter elsewhere), large tight-tracked headlines, alternating
light/gray/dark full-bleed sections, a dark translucent fixed nav, and pill
buttons. Section colors come from CSS custom properties that `.section--dark`
and `.section--gray` override — style against `var(--fg)` / `var(--bg)` /
`var(--line)` / `var(--card)` rather than hardcoding colors, so components work
on any section background.

**Gamification rewards exploring the site, not rating Vani.** Achievements fire
for reaching sections, opening projects, downloading the CV, and one Konami
easter egg. Every *number* the site displays (45%, 75%, 57%) is a real figure
from her CV — never invent proficiency scores or metrics.

**Respect `prefers-reduced-motion`.** Reveals and count-ups check it and jump
straight to the final state.

## Deployment

`.github/workflows/deploy.yml` builds `react/` and publishes `react/dist` on
every push to `main`. The Pages source must be set to **GitHub Actions** in the
repository settings for it to work.

## The old static site

The original hand-written static site (`index.html`, `experience.html`,
`skills.html`, `how-i-work.html`, `styles.css` at the repo root) predates the
React app and is no longer deployed. It is kept only for reference.
