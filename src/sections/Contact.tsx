import { Mail } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'
import './contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__layout">
        <SectionHeading
          title="Let's build what's next."
          lede="Tell us where you are today, where you want to go, and what's getting in the way. We'll help map the technology and growth path between the two."
        />
        <Reveal delay={60}>
          <div className="contact__card">
            <span className="contact__card-icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            <p className="contact__card-label">Email us directly</p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="contact__card-email">
              {siteConfig.contactEmail}
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className="btn btn-primary contact__card-cta">
              Start a Conversation <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
