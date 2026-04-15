export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for opportunities
      </div>
      <h1>
        I build systems<br />
        that scale with <span className="serif">elegance.</span>
      </h1>
      <p className="hero-body">
        Software engineer at ByteDance, focused on{' '}
        <span className="serif">distributed systems</span> and developer tools.
        I believe great engineering is invisible — the best systems feel
        effortless to use and effortless to maintain.
      </p>
      <div className="hero-cta">
        <a href="#work" className="pill pill-filled">
          See my work <span className="pill-icon">→</span>
        </a>
        <a href="/resume.pdf" className="pill pill-ghost">
          Resume <span className="pill-icon">↗</span>
        </a>
      </div>
    </section>
  )
}
