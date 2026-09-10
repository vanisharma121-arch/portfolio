import { useState } from 'react'
import { plays } from '../../playbookData'
import { useGame } from '../../game/GameContext'

export default function Plays() {
  const { unlock } = useGame()
  const [read, setRead] = useState([])

  // Next state is computed outside the updater — unlock() sets state on the
  // provider, which must not happen during render.
  const toggle = (num) => {
    const isOpen = read.includes(num)
    const next = isOpen ? read.filter((n) => n !== num) : [...read, num]
    setRead(next)

    if (!isOpen && next.length === plays.length) unlock('plays')
  }

  return (
    <section className="section" id="plays">
      <div className="shell">
        <p className="eyebrow reveal">What&rsquo;s inside</p>
        <h2 className="h2 reveal">Six plays.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Each one earned on a real programme. Open a play to see the evidence behind it.
        </p>

        <div className="plays">
          {plays.map((p) => {
            const isOpen = read.includes(p.num)
            return (
              <button
                key={p.num}
                className={`play reveal${isOpen ? ' is-open' : ''}`}
                onClick={() => toggle(p.num)}
                aria-expanded={isOpen}
              >
                <div className="play__head">
                  <span className="play__icon" aria-hidden="true">{p.icon}</span>
                  <span className="play__num">{p.num}</span>
                  <span className="play__toggle" aria-hidden="true">+</span>
                </div>

                <h3 className="play__title">{p.title}</h3>
                <p className="play__body">{p.body}</p>

                <div className="play__evidence">
                  <div>
                    <div className="play__evidence-inner">
                      <span className="play__evidence-label">In practice</span>
                      <p>{p.evidence}</p>
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
