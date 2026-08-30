import { useState } from 'react'
import { projects } from '../data'
import { useGame } from '../game/GameContext'

export default function Projects() {
  const { unlock } = useGame()
  const [opened, setOpened] = useState([])

  const toggle = (num) => {
    setOpened((prev) => {
      if (prev.includes(num)) return prev.filter((n) => n !== num)

      const next = [...prev, num]
      unlock('work')
      if (next.length === projects.length) unlock('allwork')
      return next
    })
  }

  return (
    <section className="section section--dark" id="work">
      <div className="shell">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="h2 reveal">Four projects worth opening.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Tap any card to read what actually happened.
        </p>

        <div className="grid grid--2">
          {projects.map((p) => {
            const isOpen = opened.includes(p.num)
            return (
              <button
                key={p.num}
                className={`project reveal${isOpen ? ' is-open' : ''}`}
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
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
