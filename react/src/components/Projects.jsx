import { useState } from 'react'
import { projects } from '../data'
import { useGame } from '../game/GameContext'

export default function Projects() {
  const { unlock } = useGame()
  const [opened, setOpened] = useState([])

  // Next state computed outside the updater — unlock() sets state on the
  // provider, which must not happen during render.
  const toggle = (num) => {
    const isOpen = opened.includes(num)
    const next = isOpen ? opened.filter((n) => n !== num) : [...opened, num]
    setOpened(next)

    if (!isOpen) {
      unlock('work')
      if (next.length === projects.length) unlock('allwork')
    }
  }

  return (
    <section className="section" id="work">
      <div className="shell" style={{ paddingBottom: '2.5rem' }}>
        <div className="eyebrow reveal">Selected work</div>
        <div className="big reveal">Work</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>Things I&rsquo;ve shipped</div>
      </div>

      <div className="grid grid--2">
        {projects.map((p) => {
          const isOpen = opened.includes(p.num)
          return (
            <button
              key={p.num}
              className={`project${isOpen ? ' is-open' : ''}`}
              onClick={() => toggle(p.num)}
              aria-expanded={isOpen}
            >
              <div className="project__top">
                <span className="project__num">{p.num}</span>
                <span className="project__open" aria-hidden="true">+</span>
              </div>

              <div className="project__name">{p.name}</div>
              <p className="project__sub">{p.sub}</p>

              <div className="project__detail">
                <div>
                  <p>{p.detail}</p>
                  <div className="project__tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
