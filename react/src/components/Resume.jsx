import { education, hobbies, languages, profile } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

/** Education rows with a big ghost word behind, per the reference design. */
export default function Resume() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('resume'))

  return (
    <section className="section" id="resume" ref={ref} style={{ overflow: 'hidden' }}>
      <div className="ghost" aria-hidden="true">EDU</div>

      <div className="shell" style={{ paddingBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
        <div className="eyebrow reveal">Education</div>
        <div className="big reveal">Education</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>Academic foundation</div>
      </div>

      {education.map((e, i) => (
        <div className="edu-row reveal" key={e.school} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
          <div className="edu-idx">{String(i + 1).padStart(2, '0')}</div>
          <div className="edu-school">{e.school}</div>

          <div className="edu-mid">
            <div className="edu-deg">{e.detail}</div>
            {e.coursework && (
              <div className="edu-pills">
                {e.coursework.split(' · ').map((c) => (
                  <span className="edu-pill" key={c}>{c}</span>
                ))}
              </div>
            )}
          </div>

          <div className="edu-right">
            <span className="edu-yr">{e.years}</span>
          </div>
        </div>
      ))}

      <div className="split split--38">
        <div className="panel panel--divide">
          <div className="eyebrow">Languages</div>
          {languages.map((l) => (
            <div className="lang-row" key={l.name}>
              <span>{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}

          <a
            className="btn"
            style={{ marginTop: '2rem' }}
            href={asset(profile.cv)}
            download
            onClick={() => unlock('cv')}
          >
            Download full CV
          </a>
        </div>

        <div>
          <div className="panel" style={{ paddingBottom: '1.5rem' }}>
            <div className="eyebrow">Beyond the bench</div>
          </div>
          <div className="hobbies">
            {hobbies.map((h) => (
              <div className="hobby" key={h.label}>
                <div className="hobby__icon" aria-hidden="true">{h.icon}</div>
                <div className="hobby__label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
