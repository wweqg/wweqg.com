'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { navLinks, siteConfig } from '@/lib/constants'
import { ScrollLink } from '@/components/ui/scroll-link'

function isHashLink(href: string) {
  return href.includes('#')
}

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
        <Link href="/" className="nav-logo">{siteConfig.name}</Link>

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
          {navLinks.map((link) =>
            isHashLink(link.href) ? (
              <ScrollLink
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

function MagneticNavLink({
  href,
  label,
}: {
  href: string
  label: string
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

  if (isHashLink(href)) {
    return (
      <ScrollLink
        ref={ref}
        href={href}
        className="nav-link"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </ScrollLink>
    )
  }

  return (
    <Link
      ref={ref}
      href={href}
      className="nav-link"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Link>
  )
}
