import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { FlowRail } from '../components/FlowRail'
import './ecommerce.css'

const JOURNEY = ['Traffic', 'Product', 'Cart', 'Checkout', 'Payment', 'Fulfillment', 'Retention']

const COVERAGE = [
  'E-commerce websites',
  'Product experiences',
  'Checkout',
  'Payments',
  'Customer journeys',
  'Integrations',
  'Marketing',
  'SEO',
  'Analytics',
  'Automation',
  'Retention',
]

export function Ecommerce() {
  return (
    <section className="section section--tight ecommerce">
      <div className="container">
        <div className="ecommerce__layout">
          <SectionHeading
            title="Commerce built around the customer."
            lede="From the first product view to the repeat purchase — the storefront, checkout, payments and everything that supports them, working as one system."
          />
          <Reveal>
            <ul className="ecommerce__coverage">
              {COVERAGE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="ecommerce__journey">
            <FlowRail steps={JOURNEY} label="E-commerce customer journey" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
