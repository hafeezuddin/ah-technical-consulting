import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import './seo.css'

const SEO_ITEMS = [
  'Technical audits',
  'Site architecture',
  'On-page optimization',
  'Search strategy',
  'Performance',
  'Structured data',
  'Organic growth',
  'Conversion-focused SEO',
]

export function SEO() {
  return (
    <section className="section section--tight seo">
      <div className="container seo__layout">
        <SectionHeading
          title="Be discoverable. Be relevant. Be fast."
          lede="Technical SEO, content and website architecture working together — search visibility, page performance and user experience are the same problem, not three separate ones."
        />
        <Reveal>
          <ul className="seo__list">
            {SEO_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
