import { useRef } from 'react'
import { projects } from '../data'
import { useGame } from '../game/GameContext'

export default function Projects() {
  const { unlock } = useGame()
  const visited = useRef(new Set())

  // Every card opens in a new tab, so the visitor stays on this page and we
  // can still tell when they've been through both.
  const onVisit = (num) => {
    if (visited.current.has(num)) return
    visited.current.add(num)
    unlock('work')
    if (visited.current.size === projects.length) unlock('allwork')
  }

  return (
    <section className="section section--dark" id="work">
      <div className="shell">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="h2 reveal">Two projects worth opening.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Both projects are live. Click a card to open it.
        </p>

        <div className="grid grid--2">
          {projects.map((p) => (
            <a
              className="project reveal"
              key={p.num}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => onVisit(p.num)}
            >
              <span className="project__top">
                <span className="project__num">{p.num}</span>
                <span className="project__open" aria-hidden="true">↗</span>
              </span>

              <span className="project__name">{p.name}</span>
              <span className="project__sub">{p.sub}</span>

              <span className="project__detail">{p.detail}</span>

              <span className="project__tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </span>

              <span className="project__cta">
                {p.urlLabel ?? 'Visit site'}
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
