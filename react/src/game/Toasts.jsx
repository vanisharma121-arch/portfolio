import { useGame } from './GameContext'

export default function Toasts() {
  const { toasts } = useGame()

  return (
    <div className="toasts" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <div className="toast" key={t.key}>
          <span className="toast__icon" aria-hidden="true">{t.icon}</span>
          <span>
            <span className="toast__label" style={{ display: 'block' }}>ACHIEVEMENT UNLOCKED</span>
            <span className="toast__name">{t.name}</span>
            <span className="toast__xp">+{t.xp} XP</span>
          </span>
        </div>
      ))}
    </div>
  )
}
