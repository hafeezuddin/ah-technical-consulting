import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { TECH_ECOSYSTEM } from '../data/techEcosystem'
import './tech-ecosystem.css'

export function TechEcosystem() {
  return (
    <section className="section section--tight tech-ecosystem">
      <div className="container">
        <SectionHeading
          title="A layer that sits across your existing tools."
          lede="We work with the platforms and systems you already run — connecting them rather than replacing them wholesale."
        />

        <Reveal>
          <div className="tech-table">
            {TECH_ECOSYSTEM.map((row) => (
              <div className="tech-table__row" key={row.category}>
                <span className="tech-table__category">{row.category}</span>
                <span className="tech-table__detail">{row.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
