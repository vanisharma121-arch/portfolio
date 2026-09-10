import { skillChips, skillColumns, profile } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

export default function Skills() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('skills'))

  return (
    <section className="split split--38" id="skills" ref={ref}>
      <div className="panel panel--divide">
        <div className="big reveal">Skills</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>What I bring</div>
        <p className="lede reveal" style={{ transitionDelay: '.16s', marginTop: '2rem', maxWidth: 300 }}>
          {profile.tagline} — wet-lab science, statistical analysis and AI product delivery in one place.
        </p>

        <div className="chips reveal" style={{ transitionDelay: '.22s' }}>
          {skillChips.map((c) => <span className="chip" key={c}>{c}</span>)}
        </div>
      </div>

      <div className="sk-groups">
        {skillColumns.map((col, i) => (
          <div className="reveal" key={col.heading} style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="sg-title">{col.heading}</span>
            <ul className="sg-list">
              {col.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
