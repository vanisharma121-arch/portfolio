import { education, hobbies, languages, profile } from '../data'
import { useGame } from '../game/GameContext'
import { useSectionReached } from '../hooks/useScrollEffects'
import PhotoFrame from './PhotoFrame'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Resume() {
  const { unlock } = useGame()
  const ref = useSectionReached(() => unlock('resume'))

  return (
    <section className="section section--gray" id="resume" ref={ref}>
      <div className="shell">
        <p className="eyebrow reveal">Resume</p>
        <h2 className="h2 reveal">The short version.</h2>

        <div className="grid grid--2" style={{ alignItems: 'start', marginTop: 40 }}>
          <div className="reveal">
            <h3 className="h3">Education</h3>
            {education.map((e) => (
              <div className="edu-item" key={e.school}>
                <div className="edu-years">{e.years}</div>
                <div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-detail">{e.detail}</div>
                  {e.coursework && <div className="edu-coursework">{e.coursework}</div>}
                </div>
              </div>
            ))}

            <a
              className="btn btn--primary"
              style={{ marginTop: 26 }}
              href={asset(profile.cv)}
              download
              onClick={() => unlock('cv')}
            >
              ↓ Download full CV
            </a>
          </div>

          <div className="reveal">
            <PhotoFrame />

            <h3 className="h3" style={{ marginTop: 32 }}>Languages</h3>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <span>{l.name}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="h3 reveal" style={{ marginTop: 56 }}>Beyond the bench</h3>
        <div className="hobbies">
          {hobbies.map((h) => (
            <div className="hobby reveal" key={h.label}>
              <div className="hobby__icon" aria-hidden="true">{h.icon}</div>
              <div className="hobby__label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
