import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { CAPABILITY_GROUPS } from '../data/capabilities'
import './capabilities.css'

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <SectionHeading title="Everything your digital business needs. Connected." />

        <div className="capabilities__grid">
          {CAPABILITY_GROUPS.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="cap-panel">
                <div className="cap-panel__head">
                  <h3 className="cap-panel__title">{group.group}</h3>
                  <p className="cap-panel__desc">{group.description}</p>
                </div>
                <ul className="cap-panel__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
