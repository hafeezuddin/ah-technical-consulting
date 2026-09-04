import { siteConfig } from '../data/siteConfig'
import './footer.css'

const LINKS = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#approach', label: 'Approach' },
  { href: '#ai', label: 'AI' },
  { href: '#support', label: 'Support' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <span className="footer__name">{siteConfig.companyName}</span>
          <span className="footer__tagline">{siteConfig.tagline}</span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer__bottom">
        <p>
          © {siteConfig.year} {siteConfig.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
