'use client'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: -9999,
        top: 'auto',
        padding: 'var(--s-2) var(--s-4)',
        background: 'var(--accent)',
        color: 'var(--bg)',
        fontWeight: 600,
        zIndex: 10000,
        borderRadius: '0 0 var(--r-md) 0',
        textDecoration: 'none',
      }}
      onFocus={(e) => { e.currentTarget.style.left = '0' }}
      onBlur={(e) => { e.currentTarget.style.left = '-9999px' }}
    >
      Skip to content
    </a>
  )
}
