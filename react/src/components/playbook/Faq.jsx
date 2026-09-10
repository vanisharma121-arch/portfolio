import { useState } from 'react'
import { faqs } from '../../playbookData'

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="shell shell--narrow">
        <p className="eyebrow reveal">FAQ</p>
        <div className="big reveal">Questions I get asked.</div>
        <div className="script reveal" style={{ transitionDelay: '.08s', marginBottom: '1.4rem' }}>Straight answers</div>

        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item reveal${isOpen ? ' is-open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq__sign" aria-hidden="true">+</span>
                </button>

                <div className="faq__a">
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
