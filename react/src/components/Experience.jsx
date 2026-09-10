import { experience } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

const ICONS = ['🤖', '🧬', '⚗️', '📊']
const ANGLES = [-60, 60, 30, 90]

export default function Experience() {
  const { unlock } = useGame()
  const endRef = useSectionReached(() => unlock('experience'), 0.5)

  return (
    <section className="section" id="experience">
      <div className="shell" style={{ paddingBottom: '2.5rem' }}>
        <div className="eyebrow reveal">Experience</div>
        <div className="big reveal">Experience</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>Where I&rsquo;ve built things</div>
      </div>

      <div className="exp-grid">
        {experience.map((e, i) => (
          <article
            className="exp-card"
            key={`${e.year}-${e.title}`}
            ref={i === experience.length - 1 ? endRef : null}
          >
            <div
              className="exp-vis"
              style={{
                background: `repeating-linear-gradient(${ANGLES[i % 4]}deg, #0d0d0d 0, #0d0d0d 1px, #131313 1px, #131313 30px)`,
              }}
            >
              <span className="exp-vis__ico" aria-hidden="true">{ICONS[i % 4]}</span>
              <span className="exp-vis__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <div className="exp-body reveal">
              <span className="exp-date">{e.year}</span>
              <div className="exp-co">{e.title}</div>
              <div className="exp-role">{e.org}</div>
              <p className="exp-desc">{e.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
