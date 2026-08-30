import { useEffect } from 'react'
import { profile } from '../data'
import { useGame } from '../game/GameContext'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Hero() {
  const { unlock } = useGame()

  // "First Contact" — awarded shortly after arrival so the HUD has a reason to
  // appear before the visitor has scrolled anywhere.
  useEffect(() => {
    const t = setTimeout(() => unlock('arrive'), 1200)
    return () => clearTimeout(t)
  }, [unlock])

  return (
    <header className="hero" id="top">
      <div className="hero__inner shell">
        <span className="hero__badge">✦ {profile.badge}</span>

        <h1 className="hero__name">{profile.headline}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__sub">{profile.subhead}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#work">
            See the work
          </a>
          <a
            className="btn btn--ghost"
            href={asset(profile.cv)}
            download
            onClick={() => unlock('cv')}
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span>↓</span>
      </div>
    </header>
  )
}
