import { fieldNotes } from '../../playbookData'

export default function FieldNotes() {
  return (
    <section className="section section--dark" id="notes">
      <div className="shell">
        <p className="eyebrow reveal">Field notes</p>
        <h2 className="h2 reveal">Five things the reports taught me.</h2>
        <p className="lede reveal" style={{ marginBottom: 46 }}>
          Less methodology, more scar tissue.
        </p>

        <div className="notes">
          {fieldNotes.map((n) => (
            <article className="note reveal" key={n.num}>
              <div className="note__num">{n.num}</div>
              <div>
                <h3 className="note__title">{n.title}</h3>
                <p className="note__body">{n.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
