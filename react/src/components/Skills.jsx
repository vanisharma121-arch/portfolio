import { skillChips, skillColumns } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

export default function Skills() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('skills'))

  return (
    <section className="section section--gray" id="skills" ref={ref}>
      <div className="shell">
        <p className="eyebrow reveal">Skills</p>
        <h2 className="h2 reveal">Four domains, one throughline.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Delivery, compliance, analytics and the bench — the span is the point.
        </p>

        <div className="grid grid--2">
          {skillColumns.map((col) => (
            <div className="reveal" key={col.heading}>
              <div className="skill-col__head">
                <span className="skill-col__icon" aria-hidden="true">{col.icon}</span>
                <h3 className="h3" style={{ margin: 0 }}>{col.heading}</h3>
              </div>
              <ul className="skill-list">
                {col.items.map((item) => (
                  <li className="skill-item" key={item}>
                    <span className="skill-item__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="chips reveal">
          {skillChips.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
