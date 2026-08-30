import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PlaybookApp from './PlaybookApp'
import { GameProvider } from './game/GameContext'
import './index.css'

// Separate document from the homepage, but the same GameProvider and the same
// localStorage key — so XP and achievements carry across both pages.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
      <PlaybookApp />
    </GameProvider>
  </StrictMode>,
)
