import { howCards } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

/** Photo-collage grid beside a checklist — the design's "strengths" layout. */
export default function HowIWork() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('approach'))

  return (
    <section className="split split--46" id="approach" ref={ref}>
      <div className="collage" aria-hidden="true">
        {howCards.slice(0, 4).map((c, i) => (
          <div className="collage__cell" key={c.num}>{c.icon}</div>
        ))}
        {howCards.length < 4 && <div className="collage__cell">⚗️</div>}
      </div>

      <div className="panel">
        <div className="big reveal">My<br />approach</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>What sets me apart</div>

        <ul className="str-list">
          {howCards.map((c, i) => (
            <li className="str-item reveal" key={c.num} style={{ transitionDelay: `${0.14 + i * 0.06}s` }}>
              <span className="str-chk" aria-hidden="true">✓</span>
              <div>
                <div className="str-name">{c.title}</div>
                <div className="str-desc">{c.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
