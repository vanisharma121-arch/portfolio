import { useState } from 'react'
import { navLinks, profile } from '../data'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
        {profile.name}
      </a>

      {/* Centre column: role — rule — year, as in the reference design. */}
      <div className="nav__mid">
        <span>{profile.navMid}</span>
        <span className="dash" />
        <span>{profile.navYear}</span>
      </div>

      <div className="nav__right">
        <div className={`nav__links${open ? ' is-open' : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
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
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
