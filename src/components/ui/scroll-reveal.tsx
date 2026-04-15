'use client'

import { useEffect, useRef, type ReactNode } from 'react'

const delayClasses: Record<number, string> = {
  0: '',
  0.05: 'scroll-reveal--d1',
  0.1: 'scroll-reveal--d2',
  0.15: 'scroll-reveal--d3',
  0.2: 'scroll-reveal--d4',
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dc = delayClasses[delay] ?? ''

  return (
    <div ref={ref} className={`scroll-reveal ${dc} ${className}`}>
      {children}
    </div>
  )
}
