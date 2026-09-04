import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { LIFECYCLE_STAGES } from '../data/lifecycle'
import './positioning.css'

export function Positioning() {
  return (
    <section className="section section--tight positioning">
      <div className="container">
        <SectionHeading
          title="From first click to lifelong customer."
          lede="The strongest digital businesses don't treat technology, marketing, commerce and customer experience as separate systems. We connect them."
        />

        <Reveal>
          <ol className="lifecycle" aria-label="Customer lifecycle stages">
            {LIFECYCLE_STAGES.map((item, i) => (
              <li className="lifecycle__item" key={item.stage}>
                <div className="lifecycle__card">
                  <span className="lifecycle__stage">{item.stage}</span>
                  <span className="lifecycle__systems">{item.systems}</span>
                </div>
                {i < LIFECYCLE_STAGES.length - 1 && (
                  <ArrowRight size={18} className="lifecycle__arrow" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
