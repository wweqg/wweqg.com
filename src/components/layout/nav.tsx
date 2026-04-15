'use client'

import { useEffect, useRef, useState } from 'react'
import { navLinks, siteConfig } from '@/lib/constants'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-100"
      style={{
        background: 'rgba(12,12,11,0.8)',
        backdropFilter: 'blur(24px) saturate(1.5)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-[var(--s-7)]">
        <div
          className="font-bold"
          style={{ fontSize: 'var(--t-base)', letterSpacing: '-0.3px' }}
        >
          {siteConfig.name}
        </div>

        <button
          className="hidden max-md:block border-none bg-transparent text-[var(--text-2)] text-xl cursor-pointer p-[var(--s-2)]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          ref={navRef}
          className={`flex gap-[var(--s-2)] max-md:hidden ${
            menuOpen
              ? 'max-md:!flex max-md:flex-col max-md:absolute max-md:top-14 max-md:left-0 max-md:right-0 max-md:p-[var(--s-4)_var(--s-5)] max-md:border-b max-md:border-[var(--border)]'
              : ''
          }`}
          style={
            menuOpen
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: 56,
                  left: 0,
                  right: 0,
                  background: 'rgba(12,12,11,0.95)',
                  backdropFilter: 'blur(24px)',
                  padding: 'var(--s-4) var(--s-5)',
                  borderBottom: '1px solid var(--border)',
                }
              : undefined
          }
        >
          {navLinks.map((link) => (
            <MagneticNavLink key={link.href} {...link} />
          ))}
        </div>
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
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.3s ease, color 0.2s, background 0.2s'
    el.style.transform = ''
    setTimeout(() => {
      if (el) el.style.transition = 'color 0.2s, background 0.2s, transform 0.3s ease'
    }, 300)
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`text-[var(--t-sm)] font-medium text-[var(--text-3)] no-underline rounded-[var(--r-sm)] transition-[color,background] duration-200
        hover:text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.04)]
        focus-visible:text-[var(--text-1)] focus-visible:bg-[rgba(255,255,255,0.04)]
        focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2
        ${external ? '!text-[var(--accent)]' : ''}`}
      style={{ padding: 'var(--s-2) var(--s-3)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {label}
      {external && ' ↗'}
    </a>
  )
}
