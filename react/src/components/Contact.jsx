import { contactLinks, profile } from '../data'

export default function Contact() {
  return (
    <section className="section section--dark" id="contact">
      <div className="shell">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="h2 reveal">Let's build something worth explaining.</h2>
        <p className="lede reveal">
          Open to research, R&amp;D and science-communication roles from {profile.contact.location}.
        </p>

        <div className="contact-grid">
          {contactLinks.map((c) => {
            const inner = (
              <>
                <span className="contact-card__icon" aria-hidden="true">{c.icon}</span>
                <span>
                  <span className="contact-card__label">{c.label}</span>
                  <span className="contact-card__value" style={{ display: 'block' }}>{c.value}</span>
                </span>
              </>
            )

            return c.href ? (
              <a
                className="contact-card reveal"
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {inner}
              </a>
            ) : (
              <div className="contact-card reveal" key={c.label}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
