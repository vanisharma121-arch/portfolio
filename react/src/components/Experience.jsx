import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head-center">
        <div className="section-eyebrow reveal">Career Journey</div>
        <h2 className="section-title reveal">Work Experience</h2>
        <p className="section-sub reveal">
          Six roles across research labs, agencies, and student organisations.
        </p>
      </div>

      <div className="timeline">
        {experience.map((role) => (
          <div className="tl-item reveal" key={role.title + role.date}>
            <div>
              <div className="tl-label">{role.label}</div>
              <div className="tl-card">
                <div className="tl-header">
                  <span className="tl-title">{role.title}</span>
                  <span className="tl-date">{role.date}</span>
                </div>
                <div className="tl-org">{role.org}</div>
                <ul className="tl-bullets">
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
