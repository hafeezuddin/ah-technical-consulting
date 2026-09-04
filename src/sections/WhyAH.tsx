import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { WHY_AH } from '../data/whyAH'
import './why-ah.css'

export function WhyAH() {
  return (
    <section className="section why-ah">
      <div className="container">
        <SectionHeading title="Technology should serve the business." />

        <div className="why-ah__grid">
          {WHY_AH.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="why-item">
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
