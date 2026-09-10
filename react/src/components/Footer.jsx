import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div>
          © {new Date().getFullYear()} {profile.name} · {profile.contact.location}
        </div>
        <div style={{ marginTop: 6 }}>
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
        </div>
        <div className="footer__hint">
          This page records your progress. You can get one badge only from the keyboard.
        </div>
      </div>
    </footer>
  )
}
