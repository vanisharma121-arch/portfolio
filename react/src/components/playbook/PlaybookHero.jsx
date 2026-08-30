import { useEffect } from 'react'
import { playbookMeta, programStats } from '../../playbookData'
import { useGame } from '../../game/GameContext'
import { useCountUp } from '../../hooks/useScrollEffects'

function Stat({ value, suffix, label, context }) {
  const [shown, ref] = useCountUp(value)
  return (
    <div className="stat reveal" ref={ref}>
      <div className="stat__value">{shown}{suffix}</div>
      <div className="stat__label">{label}</div>
      <div className="stat__context">{context}</div>
    </div>
  )
}

export default function PlaybookHero() {
  const { unlock } = useGame()

  useEffect(() => {
    const t = setTimeout(() => unlock('playbook'), 900)
    return () => clearTimeout(t)
  }, [unlock])

  return (
    <>
      <header className="hero hero--playbook" id="top">
        <div className="hero__inner shell">
          <span className="hero__badge">◆ {playbookMeta.kicker}</span>
          <h1 className="hero__name hero__name--playbook">{playbookMeta.title}</h1>
          <p className="hero__sub">{playbookMeta.subtitle}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#plays">Read the plays</a>
            <a className="btn btn--ghost" href="#case">See a case file</a>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </header>

      <section className="section section--gray">
        <div className="shell">
          <p className="eyebrow reveal">The programme</p>
          <h2 className="h2 reveal">Where this came from.</h2>
          <p className="lede reveal" style={{ marginBottom: 46 }}>{playbookMeta.context}</p>

          <div className="stats">
            {programStats.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
