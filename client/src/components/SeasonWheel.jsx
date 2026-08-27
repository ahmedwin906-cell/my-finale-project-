import { useEffect, useState } from 'react'
import { SEASONS, applySeason, initSeason, nextSeason } from '../theme'

export default function SeasonWheel() {
  const [id, setId] = useState(() => localStorage.getItem('jp-season') || 'printemps')
  const [spin, setSpin] = useState(0)
  const current = SEASONS.find((s) => s.id === id)

  useEffect(() => {
    initSeason()
  }, [])

  function pick(next) {
    setId(next)
    applySeason(next)
    setSpin((n) => n + 90)
  }

  return (
    <div className="sw">
      <button
        type="button"
        className="sw-disc"
        style={{ transform: `rotate(${spin}deg)` }}
        onClick={() => pick(nextSeason(id))}
        aria-label="Changer de saison"
      >
        <span className="sw-q sw-q1">🌸</span>
        <span className="sw-q sw-q2">☀️</span>
        <span className="sw-q sw-q3">🍂</span>
        <span className="sw-q sw-q4">❄️</span>
        <span className="sw-hub">
          <b>Clique</b>
        </span>
      </button>

      <p className="sw-now">
        {current.emoji} <strong>{current.label}</strong>
        <span> — le site change de couleur</span>
      </p>

      <div className="sw-dots">
        {SEASONS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={s.id === id ? 'is-on' : ''}
            onClick={() => pick(s.id)}
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
