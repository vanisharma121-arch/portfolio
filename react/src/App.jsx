import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import HowIWork from './components/HowIWork'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HUD from './game/HUD'
import Toasts from './game/Toasts'
import { useGame } from './game/GameContext'
import { useKonami, useScrollReveal } from './hooks/useScrollEffects'

export default function App() {
  const { unlock } = useGame()

  useScrollReveal()
  useKonami(() => unlock('konami'))

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Stats />
        <Experience />
        <Projects />
        <Research />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <HUD />
      <Toasts />
    </>
  )
}
