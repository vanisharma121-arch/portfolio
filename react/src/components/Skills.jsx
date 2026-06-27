import { useState } from 'react'
import { tools, domainSkills } from '../data'

function MiniPhoto() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="stats-mini-photo">
      {!failed ? (
        <img src="/photo.jpg" alt="Vani Sharma" onError={() => setFailed(true)} />
      ) : (
        <div className="mp-ph" style={{ display: 'flex' }}>
          👩‍🔬
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-wrap">
        <div className="section-eyebrow reveal">My Skills</div>
        <h2 className="section-title reveal">
          Built for both
          <br />
          science &amp; story.
        </h2>
        <p className="section-sub reveal">
          A rare mix of laboratory expertise, digital marketing know-how, and software
          proficiency.
        </p>

        <div className="skills-grid">
          {/* Left: stats card */}
          <div className="stats-card reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <MiniPhoto />
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  Vani Sharma
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  MS Biotechnology · Boston
                </div>
              </div>
            </div>

            <div className="stats-numbers">
              <div className="stat-block t1">
                <div className="s-num">6+</div>
                <div className="s-lbl">Internships &amp; roles</div>
              </div>
              <div className="stat-block t2">
                <div className="s-num">3</div>
                <div className="s-lbl">Countries of experience</div>
              </div>
            </div>

            <p className="stats-blurb">
              From research labs in India to consumer-trial work in Mumbai to graduate study
              in Boston — bringing global perspective to every project.
            </p>
          </div>

          {/* Right: tool cards */}
          <div className="tools-row">
            {tools.map((tool) => (
              <div className={`tool-card ${tool.color} reveal`} key={tool.name}>
                <div className="tc-icon">{tool.icon}</div>
                <div>
                  <div className="tc-name">{tool.name}</div>
                  <div className="tc-meta">{tool.meta}</div>
                </div>
                <span className="tc-bg-emoji">{tool.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain skill chips */}
        <div className="domain-skills reveal">
          <h4>Domain Skills</h4>
          <div className="domain-chips">
            {domainSkills.map((chip) => (
              <span className={`domain-chip ${chip.tone}`} key={chip.label}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
