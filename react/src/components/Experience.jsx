import { experience, experienceChips } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

export default function Experience() {
  const { unlock } = useGame()
  // Fires near the end of the trail, so the badge means "walked the whole thing".
  const endRef = useSectionReached(() => unlock('experience'), 0.6)

  return (
    <section className="section" id="experience">
      <div className="shell">
        <p className="eyebrow reveal">Experience</p>
        <h2 className="h2 reveal">From the bench to program delivery.</h2>

        {/* Connection trail: a central spine with entries alternating sides,
            each tied back to the spine by a node and a connector hairline. */}
        <ol className="trail">
          {experience.map((e, i) => (
            <li
              className={`trail__item reveal ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
              key={`${e.year}-${e.title}`}
              ref={i === experience.length - 1 ? endRef : null}
            >
              <span className="trail__node" aria-hidden="true" />

              <div className="trail__card">
                <span className="tl-year">{e.year}</span>
                <h3 className="tl-title">{e.title}</h3>
                <div className="tl-org">{e.org}</div>
                <p className="tl-detail">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="chips reveal">
          {experienceChips.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
