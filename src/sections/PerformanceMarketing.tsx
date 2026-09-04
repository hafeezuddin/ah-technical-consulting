import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { FlowRail } from '../components/FlowRail'
import './performance-marketing.css'

const CHANNELS = [
  {
    name: 'Google Ads',
    items: ['Search', 'Shopping', 'Performance Max', 'YouTube', 'Display', 'Remarketing'],
  },
  {
    name: 'Meta Ads',
    items: ['Facebook', 'Instagram', 'Retargeting', 'Audience strategy', 'Conversion campaigns'],
  },
]

const SYSTEM_FLOW = [
  'Landing pages',
  'Website / e-commerce',
  'Analytics',
  'Conversion',
  'Customer lifecycle',
  'Retention',
  'Growth',
]

export function PerformanceMarketing() {
  return (
    <section className="section performance">
      <div className="container">
        <SectionHeading
          title="Turn attention into measurable growth."
          lede="Advertising performs best when it is connected to everything that happens after the click."
        />

        <div className="performance__channels">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.name} delay={i * 90}>
              <div className="channel-card">
                <h3 className="channel-card__title">{channel.name}</h3>
                <ul className="channel-card__list">
                  {channel.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="performance__system">
            <p className="performance__system-label">The infrastructure behind acquisition</p>
            <FlowRail steps={SYSTEM_FLOW} label="Acquisition to growth system" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
