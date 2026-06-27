import { education, experience, experienceChips } from '../data'

export default function Resume() {
  return (
    <section id="resume" className="section green">
      <span className="ghost-word">RESUME</span>
      <div className="section-inner">
        <div className="resume-grid">
          {/* Education */}
          <div>
            <h2 className="kicker reveal">
              <span className="star">✦</span> Education
            </h2>
            <div className="edu-list reveal">
              {education.map((edu) => (
                <div className="edu-item" key={edu.years}>
                  <div className="edu-years">{edu.years}</div>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-detail">{edu.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience gold card */}
          <div className="exp-card reveal">
            <h2 className="kicker">
              <span className="star">✦</span> Experience
            </h2>
            <div className="exp-list">
              {experience.map((exp) => (
                <div className="exp-item" key={exp.title + exp.year}>
                  <div className="exp-year">{exp.year}</div>
                  <div className="exp-title">{exp.title}</div>
                  <div className="exp-detail">{exp.detail}</div>
                  <div className="exp-org">{exp.org}</div>
                </div>
              ))}
            </div>
            <div className="exp-chips">
              {experienceChips.map((chip) => (
                <span className="exp-chip" key={chip}>
                  #{chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
