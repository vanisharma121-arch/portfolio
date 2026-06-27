import { useEffect } from 'react'

/**
 * Ports the two vanilla-JS behaviors from the original site:
 *  1. Reveal-on-scroll: every `.reveal` element fades/slides in once it
 *     enters the viewport, with a staggered transition delay.
 *  2. Nav background darkens after the page is scrolled past 30px.
 *
 * Run once after the component tree has mounted so all `.reveal`
 * elements already exist in the DOM.
 */
export function useScrollEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`
      observer.observe(el)
    })

    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
