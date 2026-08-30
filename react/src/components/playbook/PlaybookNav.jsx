import { profile } from '../../data'
import { useScrolled } from '../../hooks/useScrollEffects'

const home = () => import.meta.env.BASE_URL

const sections = [
  { href: '#plays', label: 'The plays' },
  { href: '#notes', label: 'Field notes' },
  { href: '#case', label: 'Case file' },
  { href: '#artifacts', label: 'Artifacts' },
  { href: '#faq', label: 'FAQ' },
]

export default function PlaybookNav() {
  const scrolled = useScrolled(20)

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href={home()} className="nav__brand">
          ← {profile.name}
        </a>

        <div className="nav__links nav__links--playbook">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="nav__link">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
