'use client'

import { useRef } from 'react'
import { experiences } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Experience() {
  return (
    <section className="section" id="experience" style={{ padding: 'var(--s-9) 0', borderTop: '1px solid var(--border)' }}>
      <div className="two-col">
        <ScrollReveal>
          <div className="side-label">Experience</div>
        </ScrollReveal>
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.date} exp={exp} delay={0.05 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  exp,
  delay,
}: {
  exp: (typeof experiences)[number]
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '50%')
    el.style.setProperty('--my', '50%')
  }

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="exp-item"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="item-glow" />
        <div className="exp-date">{exp.date}</div>
        <div>
          <h3 style={{ fontSize: 'var(--t-lg)', fontWeight: 600, letterSpacing: '-0.3px', marginBottom: 'var(--s-2)', lineHeight: 1.3 }}>
            {exp.title} <span style={{ color: 'var(--text-2)', fontWeight: 400 }}>· {exp.company}</span>
          </h3>
          <p style={{ fontSize: 'var(--t-sm)', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 480 }}>
            {exp.description}
          </p>
          {exp.tags.length > 0 && (
            <div className="flex flex-wrap" style={{ gap: 'var(--s-1)', marginTop: 'var(--s-3)' }}>
              {exp.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
