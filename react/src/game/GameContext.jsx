import { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { achievements, LEVELS } from '../data'

const STORAGE_KEY = 'vs-portfolio-progress'

const GameContext = createContext(null)

/** Total XP available if every achievement is unlocked. */
const MAX_XP = achievements.reduce((sum, a) => sum + a.xp, 0)

function levelFor(xp) {
  // Walk backwards to the highest threshold this XP total clears.
  let index = 0
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].at) {
      index = i
      break
    }
  }
  const current = LEVELS[index]
  const next = LEVELS[index + 1] ?? null
  // Progress towards the next level, or a full bar once maxed out.
  const span = next ? next.at - current.at : 1
  const progress = next ? (xp - current.at) / span : 1
  return { index, name: current.name, next, progress: Math.min(1, Math.max(0, progress)) }
}

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    // Drop anything that isn't a known achievement id, so renaming or removing
    // an achievement can't resurrect stale XP.
    const known = new Set(achievements.map((a) => a.id))
    return Array.isArray(parsed) ? parsed.filter((id) => known.has(id)) : []
  } catch {
    return []
  }
}

export function GameProvider({ children }) {
  const [unlocked, setUnlocked] = useState(readStored)
  const [toasts, setToasts] = useState([])
  const toastId = useRef(0)

  // `unlocked` is also read inside unlock(); keeping a ref avoids making the
  // callback identity change on every unlock (it's used inside effects).
  const unlockedRef = useRef(unlocked)
  useEffect(() => {
    unlockedRef.current = unlocked
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
    } catch {
      /* private browsing — progress just won't persist */
    }
  }, [unlocked])

  const unlock = useCallback((id) => {
    if (unlockedRef.current.includes(id)) return
    const achievement = achievements.find((a) => a.id === id)
    if (!achievement) return

    unlockedRef.current = [...unlockedRef.current, id]
    setUnlocked(unlockedRef.current)

    const key = ++toastId.current
    setToasts((t) => [...t, { key, ...achievement }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.key !== key)), 4200)
  }, [])

  const reset = useCallback(() => {
    unlockedRef.current = []
    setUnlocked([])
    setToasts([])
  }, [])

  const xp = useMemo(
    () => unlocked.reduce((sum, id) => sum + (achievements.find((a) => a.id === id)?.xp ?? 0), 0),
    [unlocked],
  )

  const value = useMemo(
    () => ({ unlocked, unlock, reset, xp, maxXp: MAX_XP, level: levelFor(xp), toasts }),
    [unlocked, unlock, reset, xp, toasts],
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used inside <GameProvider>')
  return ctx
}
