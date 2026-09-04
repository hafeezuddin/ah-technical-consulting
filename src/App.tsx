import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Positioning } from './sections/Positioning'
import { Capabilities } from './sections/Capabilities'
import { Ecommerce } from './sections/Ecommerce'
import { PerformanceMarketing } from './sections/PerformanceMarketing'
import { SEO } from './sections/SEO'
import { Solutions } from './sections/Solutions'
import { Approach } from './sections/Approach'
import { AISection } from './sections/AISection'
import { TechEcosystem } from './sections/TechEcosystem'
import { WhyAH } from './sections/WhyAH'
import { Support } from './sections/Support'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Positioning />
        <Capabilities />
        <Ecommerce />
        <PerformanceMarketing />
        <SEO />
        <Solutions />
        <Approach />
        <AISection />
        <TechEcosystem />
        <WhyAH />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
