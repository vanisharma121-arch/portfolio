import { stats } from '../data'
import { useCountUp } from '../hooks/useScrollEffects'

function Stat({ value, suffix, label, context }) {
  const [shown, ref] = useCountUp(value)

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">{shown}{suffix}</div>
      <div className="stat__label">{label}</div>
      <div className="stat__context">{context}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section">
      <div className="shell" style={{ paddingBottom: '2.5rem' }}>
        <div className="eyebrow reveal">By the numbers</div>
        <div className="big reveal">Outcomes</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>Measured, not claimed</div>
      </div>

      <div className="stats">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  )
}
