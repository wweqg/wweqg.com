'use client'

import { useRef } from 'react'
import { experiences } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="two-col">
        <ScrollReveal>
          <div className="side-label">Experience</div>
        </ScrollReveal>
        <div>
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
    ref.current?.style.setProperty('--mx', '50%')
    ref.current?.style.setProperty('--my', '50%')
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
          <h3 className="exp-title">
            {exp.title} <span className="exp-company">· {exp.company}</span>
          </h3>
          <p className="exp-desc">{exp.description}</p>
          {exp.tags.length > 0 && (
            <div className="exp-tags">
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
