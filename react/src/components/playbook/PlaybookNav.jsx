import { profile } from '../../data'

const home = () => import.meta.env.BASE_URL

const sections = [
  { href: '#plays', label: 'Plays' },
  { href: '#notes', label: 'Notes' },
  { href: '#case', label: 'Case file' },
  { href: '#artifacts', label: 'Artifacts' },
  { href: '#faq', label: 'FAQ' },
]

export default function PlaybookNav() {
  return (
    <nav className="nav">
      <a href={home()} className="nav__brand">← {profile.name}</a>

      <div className="nav__mid">
        <span>The PM Playbook</span>
        <span className="dash" />
        <span>{profile.navYear}</span>
      </div>

      <div className="nav__right">
        <div className="nav__links">
        {sections.map((s) => (
            <a key={s.href} href={s.href} className="nav__link">{s.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
