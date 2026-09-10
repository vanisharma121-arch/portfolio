import { caseFile } from '../../playbookData'

export default function CaseFile() {
  return (
    <section className="section" id="case">
      <div className="shell shell--narrow">
        <p className="eyebrow reveal">{caseFile.label}</p>
        <h2 className="h2 reveal">{caseFile.title}</h2>

        <div className="case">
          {caseFile.body.map((para, i) => (
            <p className="case__para reveal" key={i}>{para}</p>
          ))}

          <blockquote className="case__takeaway reveal">
            {caseFile.takeaway}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
