export function Hero() {
  return (
    <section className="max-w-[640px]" id="about" style={{ padding: '160px 0 var(--s-9)' }}>
      <div
        className="inline-flex items-center font-medium animate-[enter_0.5s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]"
        style={{
          gap: 'var(--s-2)',
          padding: 'var(--s-1) var(--s-3)',
          background: 'var(--accent-dim)',
          borderRadius: 'var(--r-full)',
          fontSize: 'var(--t-xs)',
          color: 'var(--accent)',
          marginBottom: 'var(--s-6)',
          opacity: 0,
        }}
      >
        <span
          className="animate-[pulse_2.5s_ease-in-out_infinite]"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--accent)',
          }}
        />
        Available for opportunities
      </div>

      <h1
        className="font-bold animate-[enter_0.6s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
        style={{
          fontSize: 'var(--t-3xl)',
          lineHeight: 1.18,
          letterSpacing: 'clamp(-0.8px, -0.025em, -1.5px)',
          marginBottom: 'var(--s-5)',
          opacity: 0,
        }}
      >
        I build systems<br />
        that scale with <span className="serif">elegance.</span>
      </h1>

      <p
        className="animate-[enter_0.6s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]"
        style={{
          fontSize: 'var(--t-base)',
          lineHeight: 1.6,
          color: 'var(--text-2)',
          maxWidth: 480,
          marginBottom: 'var(--s-6)',
          opacity: 0,
        }}
      >
        Software engineer at ByteDance, focused on{' '}
        <span className="serif">distributed systems</span> and developer tools.
        I believe great engineering is invisible — the best systems feel
        effortless to use and effortless to maintain.
      </p>

      <div
        className="flex animate-[enter_0.6s_cubic-bezier(0.16,1,0.3,1)_0.45s_forwards]"
        style={{ gap: 'var(--s-3)', opacity: 0 }}
      >
        <a href="#work" className="pill pill-filled">
          See my work <span className="pill-icon">→</span>
        </a>
        <a href="#" className="pill pill-ghost">
          Resume <span className="pill-icon">↗</span>
        </a>
      </div>
    </section>
  )
}
