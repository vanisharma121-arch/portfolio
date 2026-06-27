import PhotoFrame from './PhotoFrame'
import { profile } from '../data'

export default function Hero() {
  const { contact } = profile

  return (
    <section id="hero">
      <span className="ghost-word">PORTFOLIO</span>

      <div className="hero-left">
        <h1 className="hero-greet">
          Hello,
          <br />
          I'm {profile.firstName} <span className="excl">!</span>
        </h1>
        <p className="hero-bio">{profile.bio}</p>
        <a
          className="hero-search"
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener"
        >
          <span className="mag">🔍</span>
          {profile.linkedin}
        </a>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap">
          <PhotoFrame />
          <span className="badge-date">{profile.badge}</span>
          <span className="badge-nat">{profile.nationality}</span>

          <div className="contact-card">
            <h4>Contact</h4>
            <div className="cc-row">
              <span className="cc-ic">📍</span> {contact.location}
            </div>
            <a className="cc-row" href={`mailto:${contact.email}`}>
              <span className="cc-ic">✉️</span> {contact.email}
            </a>
            <a className="cc-row" href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>
              <span className="cc-ic">📞</span> {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
