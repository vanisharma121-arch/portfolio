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

The build has **two pages**, not one route tree:

| Document | Served at | Entry |
| --- | --- | --- |
| Homepage | `/portfolio/` | `src/main.jsx` → `App.jsx` |
| PM Playbook | `/portfolio/playbook/` | `src/playbook.jsx` → `PlaybookApp.jsx` |

They are separate HTML documents registered as Vite `rollupOptions.input`, not
client-side routes. That is deliberate: GitHub Pages has no SPA 404 fallback, so
a client-side route would break on direct load or refresh. Both share the same
stylesheet, game layer and `localStorage` key, so XP carries across pages.

```
react/
  index.html            # homepage document head
  playbook/index.html   # playbook document head
  vite.config.js        # base = '/portfolio/' on build; two-page rollup input
  public/               # copied verbatim into the build root
    photo.jpg           # portrait used in the resume section
    Vani_Sharma_CV.pdf  # target of every "Download CV" button
  src/
    main.jsx            # homepage entry; wraps <App> in <GameProvider>
    playbook.jsx        # playbook entry; same provider, same storage key
    App.jsx             # composes the homepage sections
    PlaybookApp.jsx     # composes the playbook sections
    index.css           # the whole design system (no CSS framework)
    data.js             # homepage copy, nav, achievements
    playbookData.js     # playbook copy — plays, field notes, case file, FAQ
    game/
      GameContext.jsx   # XP + achievement state, persisted to localStorage
      HUD.jsx           # level ring, XP readout, trophy tray
      Toasts.jsx        # "achievement unlocked" toasts
    hooks/
      useScrollEffects.js  # scroll reveal, count-up, section-reached, Konami
    components/         # homepage sections
      playbook/         # playbook sections
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

**Scroll reveal uses `data-revealed`, not a class — don't "simplify" it back.**
The IntersectionObserver marks revealed elements with an attribute because React
owns `className` on many of them. Any component that toggles its own class (an
open project card, an expanded play, a FAQ row) rewrites the whole class
attribute on re-render, which silently strips an out-of-band class and leaves
the element stranded at `opacity: 0` forever, since the observer has already
unobserved it. React does not manage `data-revealed`, so it survives.

**The playbook's numbers are quoted from real reports.** Sprint figures,
completion percentages and efficiency scores come from the DMSB Dash Labs sprint
plan, the Sprints 1–3 executive report and the W17–W18 RA dashboard. Treat
`playbookData.js` as a quotation, not a template — don't adjust figures to make
a point land better.

## Deployment

`.github/workflows/deploy.yml` builds `react/` and publishes `react/dist` on
every push to `main`. The Pages source must be set to **GitHub Actions** in the
repository settings for it to work.

## The old static site

The original hand-written static site (`index.html`, `experience.html`,
`skills.html`, `how-i-work.html`, `styles.css` at the repo root) predates the
React app and is no longer deployed. It is kept only for reference.
