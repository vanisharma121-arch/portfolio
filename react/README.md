# Vani Sharma — Portfolio (React)

The portfolio rebuilt as a Vite + React app. This is a 1:1 port of the original
single-file `../index.html`, split into idiomatic components with the repeated
content (experience, projects, skills, etc.) moved into `src/data.js`.

## Run it

```bash
cd react
npm install
npm run dev      # local dev server (hot reload)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Add your assets

Drop these into the `public/` folder (create it if it doesn't exist) so they're
served from the site root:

- `public/photo.jpg` — the hero / about portrait (falls back to a placeholder if missing)
- `public/Vani_Sharma_CV.pdf` — the file the "Download CV" button links to

## Structure

```
src/
  main.jsx              # React entry point
  App.jsx               # composes the page sections
  index.css             # global styles (ported verbatim from the original)
  data.js               # all repeated content (nav, skills, experience, projects, contact)
  hooks/
    useScrollEffects.js # scroll-reveal animations + nav background on scroll
  components/
    Nav.jsx  Hero.jsx  PhotoFrame.jsx  HowIWork.jsx
    Skills.jsx  Experience.jsx  Projects.jsx  Contact.jsx  Footer.jsx
```
