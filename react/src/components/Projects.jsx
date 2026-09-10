import { useState } from 'react'
import { projects } from '../data'
import { useGame } from '../game/GameContext'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Projects() {
  const { unlock } = useGame()
  const [opened, setOpened] = useState([])

  // Next state is computed outside the updater: unlock() sets state on the
  // provider, and calling it from inside a setState callback would be a
  // state update during render.
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
    <section className="section section--dark" id="work">
      <div className="shell">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="h2 reveal">Two projects worth opening.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Tap any card to read what actually happened.
        </p>

        <div className="grid grid--2">
          {projects.map((p) => {
            const isOpen = opened.includes(p.num)
            return (
              // An <article> wrapper, not a <button>: projects with a live site
              // need a real <a>, and an anchor nested inside a button is
              // invalid HTML. The toggle is its own button alongside it.
              <article className={`project reveal${isOpen ? ' is-open' : ''}`} key={p.num}>
                <button
                  className="project__head"
                  onClick={() => toggle(p.num)}
                  aria-expanded={isOpen}
                >
                  <span className="project__top">
                    <span className="project__num">{p.num}</span>
                    <span className="project__open" aria-hidden="true">+</span>
                  </span>

                  <span className="project__name">{p.name}</span>
                  <span className="project__sub">{p.sub}</span>
                </button>

                {p.url && (
                  <a
                    className="project__link"
                    href={p.urlInternal ? asset(p.url) : p.url}
                    target={p.urlInternal ? undefined : '_blank'}
                    rel={p.urlInternal ? undefined : 'noreferrer'}
                  >
                    {p.urlLabel ?? 'Visit site'}
                    <span aria-hidden="true">{p.urlInternal ? ' →' : ' ↗'}</span>
                  </a>
                )}

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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
