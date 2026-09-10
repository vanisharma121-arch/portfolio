import { artifacts } from '../../playbookData'

export default function Artifacts() {
  return (
    <section className="section section--gray" id="artifacts">
      <div className="shell">
        <p className="eyebrow reveal">Artifacts</p>
        <div className="big reveal">What I actually produced.</div>
        <div className="script reveal" style={{ transitionDelay: '.08s', marginBottom: '1.4rem' }}>The paper trail</div>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          The documents the plays above came out of.
        </p>

        <div className="grid grid--2">
          {artifacts.map((a) => (
            <article className="card reveal" key={a.name}>
              <div className="card__num">{a.kind}</div>
              <h3 className="h3">{a.name}</h3>
              <p className="card__body">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
