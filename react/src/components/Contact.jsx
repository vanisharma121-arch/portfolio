import { useState } from 'react'
import { contactLinks } from '../data'

function ContactLink({ link }) {
  const inner = (
    <>
      <div className={`cl-icon ${link.iconTone}`}>{link.icon}</div>
      <div>
        <div className="cl-label">{link.label}</div>
        <div className="cl-val">{link.value}</div>
      </div>
    </>
  )

  if (link.static) {
    return (
      <span className="contact-link" style={{ cursor: 'default' }}>
        {inner}
      </span>
    )
  }

  return (
    <a
      className="contact-link"
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {inner}
    </a>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setSent(true)
    setTimeout(() => {
      setSent(false)
      form.reset()
    }, 3000)
  }

  return (
    <section id="contact">
      <div className="contact-wrap">
        <div className="contact-left">
          <div className="section-eyebrow reveal">Let's Connect</div>
          <h2 className="contact-heading reveal">
            Let's Talk
            <br />
            About Your
            <br />
            <span className="accent">Project</span>
          </h2>
          <p className="contact-sub reveal">
            Looking for a research collaborator, a creative marketer, or someone who does
            both? Drop me a line.
          </p>

          <div className="contact-links reveal">
            {contactLinks.map((link) => (
              <ContactLink link={link} key={link.label} />
            ))}
          </div>
        </div>

        <div className="contact-form-card reveal">
          <div className="ff-title">Send me a message</div>
          <div className="ff-sub">I'll get back to you within 24 hours.</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="e.g. Alex Johnson" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Research collab / Opportunity / Other" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project or opportunity…"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-send"
              style={sent ? { background: 'var(--green)' } : undefined}
            >
              {sent ? 'Message Sent ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
