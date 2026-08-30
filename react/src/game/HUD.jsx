import { useState } from 'react'
import { achievements } from '../data'
import { useGame } from './GameContext'

const R = 15                       // ring radius
const C = 2 * Math.PI * R          // circumference

export default function HUD() {
  const { unlocked, xp, maxXp, level, reset } = useGame()
  const [open, setOpen] = useState(false)

  // Ring shows overall completion, the label shows the named level.
  const completion = maxXp ? xp / maxXp : 0

  return (
    <div className="hud">
      {/* Gradient is defined once here and referenced by the ring's stroke. */}
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="xpGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6ee7f9" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>

      {open && (
        <div className="tray" role="dialog" aria-label="Achievements">
          <div className="tray__head">
            <span className="tray__title">Achievements</span>
            <span className="tray__count">
              {unlocked.length}/{achievements.length} · {xp} XP
            </span>
          </div>

          <div className="tray__list">
            {achievements.map((a) => {
              const got = unlocked.includes(a.id)
              return (
                <div className={`trophy${got ? '' : ' is-locked'}`} key={a.id}>
                  <span className="trophy__icon" aria-hidden="true">{got ? a.icon : '🔒'}</span>
                  <span>
                    <span className="trophy__name">{got ? a.name : 'Locked'}</span>
                    <span className="trophy__hint" style={{ display: 'block' }}>{a.hint}</span>
                  </span>
                  <span className="trophy__xp">+{a.xp}</span>
                </div>
              )
            })}
          </div>

          <button className="tray__reset" onClick={reset}>
            Reset progress
          </button>
        </div>
      )}

      <button
        className="hud__btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Level ${level.name}, ${xp} of ${maxXp} XP. ${open ? 'Hide' : 'Show'} achievements.`}
      >
        <span className="hud__ring">
          <svg width="34" height="34" viewBox="0 0 34 34">
            <circle className="track" cx="17" cy="17" r={R} />
            <circle
              className="fill"
              cx="17"
              cy="17"
              r={R}
              strokeDasharray={C}
              strokeDashoffset={C * (1 - completion)}
            />
          </svg>
        </span>

        <span className="hud__meta">
          <span className="hud__level" style={{ display: 'block' }}>{level.name}</span>
          <span className="hud__xp">{xp} / {maxXp} XP</span>
        </span>
      </button>
    </div>
  )
}
