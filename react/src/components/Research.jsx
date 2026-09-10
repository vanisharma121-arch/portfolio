import { useState } from 'react'
import { research } from '../data'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

/**
 * The grading-study analysis. Charts open into a lightbox because they carry
 * real detail — at grid size they read as texture, full size they're readable.
 */
export default function Research() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="research">
      <div className="shell" style={{ paddingBottom: '2.5rem' }}>
        <div className="eyebrow reveal">{research.kicker}</div>
        <div className="big reveal">{research.title}</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>{research.script}</div>
        <p className="lede reveal" style={{ transitionDelay: '.14s', marginTop: '1.6rem' }}>
          {research.intro}
        </p>
      </div>

      <div className="stats">
        {research.findings.map((f) => (
          <div className="stat" key={f.label}>
            <div className="stat__value">{f.value}</div>
            <div className="stat__label">{f.label}</div>
            <div className="stat__context">{f.context}</div>
          </div>
        ))}
      </div>

      <div className="chart-grid">
        {research.charts.map((c, i) => (
          <button
            className="chart reveal"
            key={c.src}
            style={{ transitionDelay: `${i * 0.05}s` }}
            onClick={() => setOpen(c)}
            aria-label={`Enlarge chart: ${c.title}`}
          >
            <div className="chart__img">
              <img src={asset(c.src)} alt={c.caption} loading="lazy" />
            </div>
            <div className="chart__meta">
              <span className="chart__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="chart__title">{c.title}</div>
                <div className="chart__caption">{c.caption}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button className="lightbox__close" aria-label="Close">✕</button>
          <figure className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={asset(open.src)} alt={open.caption} />
            <figcaption>
              <strong>{open.title}</strong> — {open.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
