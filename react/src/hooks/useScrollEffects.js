import { useEffect, useRef, useState } from 'react'

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Marks every `.reveal` element as revealed once it scrolls into view.
 * Re-runs when `deps` change so late-mounted content still animates.
 *
 * The flag is the `data-revealed` attribute rather than a class, deliberately.
 * React owns `className` on these elements — a component that toggles its own
 * class (an open project card, an expanded FAQ row) re-renders and rewrites the
 * whole class attribute, which would silently strip a class added out-of-band
 * here and leave the element stuck at opacity 0. React does not manage this
 * attribute, so it survives re-renders.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not([data-revealed])')

    if (reduceMotion()) {
      nodes.forEach((el) => el.setAttribute('data-revealed', ''))
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-revealed', '')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** True once the page has scrolled past `offset` — used for the nav backdrop. */
export function useScrolled(offset = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/**
 * Fires `onEnter` once, the first time the returned ref's element is meaningfully
 * on screen. Used to award an achievement for reaching a section.
 */
export function useSectionReached(onEnter, threshold = 0.35) {
  const ref = useRef(null)
  const fired = useRef(false)
  const cb = useRef(onEnter)
  cb.current = onEnter

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          cb.current?.()
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}

/** Counts 0 → `target` once the returned ref scrolls into view. */
export function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion()) {
      setValue(target)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          // easeOutExpo — fast start, gentle settle
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          setValue(Math.round(target * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [value, ref]
}

/** Calls `onUnlock` when the Konami code is typed. */
export function useKonami(onUnlock) {
  const cb = useRef(onUnlock)
  cb.current = onUnlock

  useEffect(() => {
    const CODE = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a',
    ]
    let pos = 0
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === CODE[pos]) {
        pos++
        if (pos === CODE.length) {
          pos = 0
          cb.current?.()
        }
      } else {
        // Allow a mistyped key to still start a fresh attempt.
        pos = key === CODE[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
