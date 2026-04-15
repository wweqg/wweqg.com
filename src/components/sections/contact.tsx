import { socialLinks } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Contact() {
  return (
    <ScrollReveal>
      <section
        id="contact"
        className="text-center"
        style={{ padding: 'var(--s-9) 0 var(--s-8)' }}
      >
        <h2
          className="font-bold"
          style={{
            fontSize: 'var(--t-xl)',
            letterSpacing: '-0.5px',
            marginBottom: 'var(--s-3)',
          }}
        >
          Let&apos;s build something <span className="serif">together.</span>
        </h2>
        <p
          style={{
            fontSize: 'var(--t-base)',
            color: 'var(--text-2)',
            marginBottom: 'var(--s-5)',
          }}
        >
          Open to conversations about engineering, design, and interesting problems.
        </p>
        <div className="flex justify-center" style={{ gap: 'var(--s-2)' }}>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="pill pill-ghost">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}
