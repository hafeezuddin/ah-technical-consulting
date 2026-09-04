import { EcosystemDiagram } from '../components/EcosystemDiagram'
import './hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="kicker">Technology × Commerce × Growth</span>
          <h1 className="hero__title">
            Your digital ecosystem,
            <br />
            engineered end to end.
          </h1>
          <p className="hero__lede">
            AH Technical Consulting helps businesses build, connect, optimize and scale the
            technology and growth systems behind modern digital commerce — websites, e-commerce,
            applications, integrations, payments, SEO, paid acquisition, AI and customer lifecycle
            management.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Start a Conversation <span className="btn-arrow">→</span>
            </a>
            <a href="#capabilities" className="btn btn-secondary">
              Explore Capabilities
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <EcosystemDiagram />
        </div>
      </div>
    </section>
  )
}
