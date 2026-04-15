import { socialLinks } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Contact() {
  return (
    <ScrollReveal>
      <section className="contact-section" id="contact">
        <h2>
          Let&apos;s build something <span className="serif">together.</span>
        </h2>
        <p>Open to conversations about engineering, design, and interesting problems.</p>
        <div className="contact-links">
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
