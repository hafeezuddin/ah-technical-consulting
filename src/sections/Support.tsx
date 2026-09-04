import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import './support.css'

const SUPPORT_CATEGORIES = [
  'Websites',
  'Applications',
  'E-commerce',
  'Payments',
  'Integrations',
  'SEO',
  'Marketing',
  'Technical troubleshooting',
  'Optimization',
]

export function Support() {
  return (
    <section id="support" className="section support">
      <div className="container">
        <div className="support__layout">
          <SectionHeading
            title="Built doesn't mean finished."
            lede="Digital businesses need technology that keeps working after launch. AH Technical Consulting provides ongoing technical and digital support designed around continuity, responsiveness and long-term improvement."
          />

          <Reveal delay={60}>
            <div className="support__panel">
              <div className="support__status">
                <span className="support__status-dot" aria-hidden="true" />
                <span className="support__status-text">Support desk active</span>
              </div>

              <div className="support__stat">
                <span className="support__stat-number">24×7</span>
                <span className="support__stat-label">Support</span>
              </div>

              <div className="support__stat support__stat--secondary">
                <span className="support__stat-number support__stat-number--small">Up to 6 hrs</span>
                <span className="support__stat-label">Response time</span>
              </div>

              <p className="support__clarify">
                Response time refers to initial response and acknowledgment, not a guaranteed
                issue-resolution time.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ul className="support__categories">
            {SUPPORT_CATEGORIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
