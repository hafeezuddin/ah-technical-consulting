import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { FlowRail } from '../components/FlowRail'
import './ai-section.css'

const AI_FLOW = ['Customer data', 'AI', 'Decision', 'Automation', 'Customer experience', 'Business outcome']

const APPLICATIONS = [
  'Support',
  'Lead qualification',
  'Marketing',
  'Personalization',
  'Content operations',
  'Analytics',
  'Internal automation',
  'Customer journey',
  'Intelligent workflows',
]

export function AISection() {
  return (
    <section id="ai" className="section section--tight ai-section">
      <div className="container">
        <SectionHeading
          title="AI should do more than generate text."
          lede="We help identify where AI and automation can create practical value across customer experiences, marketing and business operations."
        />

        <Reveal>
          <div className="ai-section__flow">
            <FlowRail steps={AI_FLOW} label="AI decision flow" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="ai-section__applications">
            {APPLICATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
