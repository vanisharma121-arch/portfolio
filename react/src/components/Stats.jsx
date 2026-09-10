import { stats } from '../data'
import { useCountUp } from '../hooks/useScrollEffects'

function Stat({ value, suffix, label, context }) {
  const [shown, ref] = useCountUp(value)

  return (
    <div className="stat reveal" ref={ref}>
      <div className="stat__value">
        {shown}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
      <div className="stat__context">{context}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section section--gray">
      <div className="shell">
        <p className="eyebrow reveal">By the numbers</p>
        <h2 className="h2 reveal">Outcomes, not adjectives.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          I measured and reported each figure below. Each one comes from real work.
        </p>

        <div className="stats">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
