import { useState } from 'react'
import { navLinks, profile } from '../data'
import { useScrolled } from '../hooks/useScrollEffects'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Nav() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <div className={`nav__links${open ? ' is-open' : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              // External links point at other documents in the build, so they
              // need the deployed base path; in-page anchors must not get it.
              href={l.external ? asset(l.href) : l.href}
              className={`nav__link${l.external ? ' nav__link--cta' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
