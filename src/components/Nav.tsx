import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './nav.css'

const LINKS = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#approach', label: 'Approach' },
  { href: '#ai', label: 'AI' },
  { href: '#support', label: 'Support' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__row">
        <a href="#top" className="nav__brand" aria-label="AH Technical Consulting, home">
          <span className="nav__mark" aria-hidden="true">AH</span>
          <span className="nav__brand-text">AH Technical Consulting</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav__cta">
          Start a Conversation <span className="btn-arrow">→</span>
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{ transitionDelay: open ? `${i * 40 + 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
          Start a Conversation <span className="btn-arrow">→</span>
        </a>
      </div>
    </header>
  )
}
