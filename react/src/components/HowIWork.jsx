import { howCards } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

export default function HowIWork() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('approach'))

  return (
    <section className="section" id="approach" ref={ref}>
      <div className="shell">
        <p className="eyebrow reveal">My approach</p>
        <h2 className="h2 reveal">Three ways I create impact.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          The same discipline runs through the lab bench and the content calendar.
        </p>

        <div className="grid grid--3">
          {howCards.map((c) => (
            <article className="card reveal" key={c.num}>
              <div className="card__icon" aria-hidden="true">{c.icon}</div>
              <div className="card__num">{c.num}</div>
              <h3 className="h3">{c.title}</h3>
              <p className="card__body">{c.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
