'use client'

import { useEffect, useRef, useState } from 'react'
import { navLinks, siteConfig } from '@/lib/constants'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="nav-logo">{siteConfig.name}</div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <MagneticNavLink key={link.href} {...link} />
          ))}
        </nav>

        <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${'external' in link ? 'nav-link--blog' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {'external' in link && ' ↗'}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function MagneticNavLink({
  href,
  label,
  external,
}: {
  href: string
  label: string
  external?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.15
    const y = (e.clientY - r.top - r.height / 2) * 0.15
    el.style.setProperty('--tx', `${x}px`)
    el.style.setProperty('--ty', `${y}px`)
  }

  const handleMouseLeave = () => {
    ref.current?.style.removeProperty('--tx')
    ref.current?.style.removeProperty('--ty')
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`nav-link ${external ? 'nav-link--blog' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {label}
      {external && ' ↗'}
    </a>
  )
}
