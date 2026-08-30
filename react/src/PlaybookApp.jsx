import PlaybookNav from './components/playbook/PlaybookNav'
import PlaybookHero from './components/playbook/PlaybookHero'
import Plays from './components/playbook/Plays'
import FieldNotes from './components/playbook/FieldNotes'
import CaseFile from './components/playbook/CaseFile'
import Artifacts from './components/playbook/Artifacts'
import Faq from './components/playbook/Faq'
import PlaybookCta from './components/playbook/PlaybookCta'
import Footer from './components/Footer'
import HUD from './game/HUD'
import Toasts from './game/Toasts'
import { useScrollReveal } from './hooks/useScrollEffects'

export default function PlaybookApp() {
  useScrollReveal()

  return (
    <>
      <PlaybookNav />
      <main>
        <PlaybookHero />
        <Plays />
        <FieldNotes />
        <CaseFile />
        <Artifacts />
        <Faq />
        <PlaybookCta />
      </main>
      <Footer />
      <HUD />
      <Toasts />
    </>
  )
}
