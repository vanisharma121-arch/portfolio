import Nav from './components/Nav'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollEffects } from './hooks/useScrollEffects'

export default function App() {
  useScrollEffects()

  return (
    <>
      <Nav />
      <Hero />
      <HowIWork />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
