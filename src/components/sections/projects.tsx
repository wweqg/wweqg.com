import { projects } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="two-col">
        <ScrollReveal>
          <div className="side-label">Selected Work</div>
        </ScrollReveal>
        <div className="proj-list">
          {projects.map((proj, i) => (
            <ScrollReveal key={proj.title} delay={0.05 * (i + 1)}>
              <a href={proj.href} className="proj">
                <div className="proj-metric">
                  {proj.metric} <span>{proj.metricLabel}</span>
                </div>
                <div className="proj-head">
                  <h3>{proj.title}</h3>
                  <span className="proj-ext">↗</span>
                </div>
                <p>{proj.description}</p>
                <div className="exp-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag tag-accent">{tag}</span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
