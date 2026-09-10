import { contactLinks, profile } from '../data'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function Contact() {
  return (
    <section className="split split--40" id="contact">
      <div className="photo-panel">
        <img src={asset(profile.photo)} alt="" style={{ objectPosition: 'center 30%' }} />
      </div>

      <div className="panel">
        <div className="ct-big reveal">Let&rsquo;s work<br />together</div>
        <div className="script reveal" style={{ transitionDelay: '.1s' }}>Get in touch</div>

        <div className="ct-links">
          {contactLinks.map((c, i) => {
            const inner = (
              <>
                <span className="ct-link__ico" aria-hidden="true">{c.icon}</span>
                {c.value}
              </>
            )
            const style = { transitionDelay: `${0.18 + i * 0.06}s` }

            return c.href ? (
              <a
                className="ct-link reveal"
                key={c.label}
                href={c.href}
                style={style}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {inner}
              </a>
            ) : (
              <div className="ct-link reveal" key={c.label} style={{ ...style, cursor: 'default' }}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
