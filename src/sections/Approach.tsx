import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { APPROACH_STEPS } from '../data/approach'
import './approach.css'

export function Approach() {
  return (
    <section id="approach" className="section approach">
      <div className="container">
        <SectionHeading title="Strategy first. Execution without the handoff." />

        <ol className="approach__list">
          {APPROACH_STEPS.map((step, i) => (
            <li className="approach__step" key={step.title}>
              <Reveal delay={i * 50}>
                <div className="approach__step-inner">
                  <span className="approach__index">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="approach__title">{step.title}</h3>
                    <p className="approach__desc">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
