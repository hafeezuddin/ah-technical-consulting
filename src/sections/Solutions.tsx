import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { SOLUTIONS } from '../data/solutions'
import './solutions.css'

export function Solutions() {
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <SectionHeading
          title="Solutions shaped around where you are, not a fixed package."
          lede="Every engagement starts from the business, not a menu. These are the situations we're most often brought in for."
        />

        <div className="solutions__list">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 60}>
              <div className="solution-row">
                <div className="solution-row__name">{solution.name}</div>
                <div className="solution-row__body">
                  <p className="solution-row__for">{solution.forWhom}</p>
                  <ul className="solution-row__items">
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
