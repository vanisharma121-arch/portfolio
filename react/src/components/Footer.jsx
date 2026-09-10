import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>{profile.tagline}</span>
      <span>{profile.contact.location}</span>
      <span className="footer__hint">
        This page keeps score — one badge you can only type your way into.
      </span>
    </footer>
  )
}
