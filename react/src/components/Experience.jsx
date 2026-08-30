import { experience, experienceChips } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

export default function Experience() {
  const { unlock } = useGame()
  // Fires near the end of the timeline, so the badge means "walked the whole thing".
  const endRef = useSectionReached(() => unlock('experience'), 0.6)

  return (
    <section className="section" id="experience">
      <div className="shell">
        <p className="eyebrow reveal">Experience</p>
        <h2 className="h2 reveal">Four years, two disciplines.</h2>

        <div className="timeline">
          {experience.map((e, i) => (
            <div
              className="tl-item reveal"
              key={`${e.year}-${e.title}`}
              ref={i === experience.length - 1 ? endRef : null}
            >
              <div className="tl-year">{e.year}</div>
              <div className="tl-title">{e.title}</div>
              <div className="tl-org">{e.org}</div>
              <p className="tl-detail">{e.detail}</p>
            </div>
          ))}
        </div>

        <div className="chips reveal">
          {experienceChips.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
