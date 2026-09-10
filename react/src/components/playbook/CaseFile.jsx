import { caseFile } from '../../playbookData'

export default function CaseFile() {
  return (
    <section className="section" id="case">
      <div className="shell shell--narrow">
        <p className="eyebrow reveal">{caseFile.label}</p>
        <div className="big reveal">{caseFile.title}</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>When nothing shipped</div>

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
