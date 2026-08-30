# Vani Sharma — Portfolio

Vite + React 18 single-page portfolio, deployed to GitHub Pages at
**https://vanisharma121-arch.github.io/portfolio/**

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives in [`src/data.js`](src/data.js) — profile, stats, approach cards,
education, experience, projects, skills, languages, hobbies, contact links, and
the achievement list. Components read from it and stay presentational, so
content edits shouldn't need a component change.

Assets in `public/` (`photo.jpg`, `Vani_Sharma_CV.pdf`) are copied to the build
root. Reference them through `import.meta.env.BASE_URL`, never as a bare `/path`
— the site is served from the `/portfolio/` subpath.

## Structure

```
src/
  main.jsx              # entry — wraps <App> in <GameProvider>
  App.jsx               # composes the page sections
  index.css             # complete design system, no framework
  data.js               # all content
  game/
    GameContext.jsx     # XP + achievements, persisted to localStorage
    HUD.jsx             # level ring, XP readout, trophy tray
    Toasts.jsx          # "achievement unlocked" toasts
  hooks/
    useScrollEffects.js # scroll reveal, count-up, section-reached, Konami
  components/
    Nav  Hero  Stats  HowIWork  Skills
    Experience  Projects  Resume  Contact  Footer  PhotoFrame
```

## The game layer

Visitors earn XP for exploring: reaching each section, opening project cards,
downloading the CV, and one Konami-code easter egg. Progress persists in
`localStorage` under `vs-portfolio-progress` and can be cleared from the trophy
tray's *Reset progress* button.

Note that the displayed statistics (45% engagement, 75% impressions, 57% traffic)
are real figures from the CV. The gamification deliberately scores *site
exploration* rather than assigning invented proficiency ratings to skills.
