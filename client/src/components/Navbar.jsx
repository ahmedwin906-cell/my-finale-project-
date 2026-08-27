import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/ateliers', label: 'Ateliers' },
  { to: '/contact', label: 'Contact' },
  { to: '/actus', label: 'Actus' },
]

export default function Navbar() {
  return (
    <header className="jp-nav">
      <NavLink to="/" className="jp-brand">
        <span className="jp-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="22" height="22">
            <path
              d="M16 29s-9-6.2-9-13.2C7 10 10.6 7 16 11c5.4-4 9-1 9 4.8C25 22.8 16 29 16 29z"
              fill="#2c4a2c"
            />
            <path d="M16 12v17" stroke="#c4a35a" strokeWidth="1.6" fill="none" />
          </svg>
        </span>
        Jardins Partagés
      </NavLink>

      <nav className="jp-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              isActive ? 'jp-link is-active' : 'jp-link'
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
