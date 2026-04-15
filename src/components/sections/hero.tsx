import { ScrollLink } from '@/components/ui/scroll-link'

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Building things at TikTok
      </div>
      <h1>
        Hey, I&apos;m Weiqiang.<br />
        I build systems that <span className="serif">scale.</span>
      </h1>
      <p className="hero-body">
        Backend engineer at TikTok, based in Singapore. I graduated from NUS
        with a degree in Computer Science and now work on distributed systems
        and large-scale services. I care about writing clean, reliable code
        that holds up under pressure.
      </p>
      <div className="hero-cta">
        <ScrollLink href="/#work" className="pill pill-filled">
          See my work <span className="pill-icon">→</span>
        </ScrollLink>
        <a href="/resume.pdf" className="pill pill-ghost">
          Resume <span className="pill-icon">↗</span>
        </a>
      </div>
    </section>
  )
}
