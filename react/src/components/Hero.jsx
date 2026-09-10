import { useEffect } from 'react'
import { profile } from '../data'
import { useGame } from '../game/GameContext'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Hero() {
  const { unlock } = useGame()

  useEffect(() => {
    const t = setTimeout(() => unlock('arrive'), 1200)
    return () => clearTimeout(t)
  }, [unlock])

  return (
    <header className="hero" id="top">
      <div className="hero__photo">
        <img src={asset(profile.photo)} alt={`${profile.name}, portrait`} />
      </div>

      <div className="hero__txt">
        <div className="eyebrow">{profile.tagline}</div>

        <h1 className="hero__name">
          {profile.headline.split('\n').map((line) => (
            <span key={line} style={{ display: 'block' }}>{line}</span>
          ))}
        </h1>

        <div className="hero__script">{profile.script}</div>

        <p className="hero__quote">{profile.quote}</p>

        <div className="hero__cta">
          <a className="btn" href="#work">
            Explore Now
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a className="btn btn--ghost" href={asset(profile.cv)} download onClick={() => unlock('cv')}>
            Download CV
          </a>
        </div>

        <div className="hero__vert vert">{profile.contact.email}</div>
      </div>
    </header>
  )
}
