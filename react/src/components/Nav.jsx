import { navLinks } from '../data'

export default function Nav() {
  return (
    <nav>
      <span className="nav-logo">
        <span className="star">✦</span> Vani Sharma
      </span>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a className="nav-cta" href="#contact">
        Get in touch!
      </a>
    </nav>
  )
}
