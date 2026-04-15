'use client'

import { forwardRef, useCallback, type ReactNode, type MouseEvent } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type ScrollLinkProps = {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
  onMouseMove?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  function ScrollLink({ href, className, children, onClick, onMouseMove, onMouseLeave }, ref) {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = useCallback(
      (e: MouseEvent) => {
        e.preventDefault()
        onClick?.()

        const [targetPath, hash] = href.split('#')
        const targetRoute = targetPath || '/'

        if (pathname === targetRoute || (targetRoute === '/' && pathname === '/')) {
          if (hash) {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        } else {
          router.push(targetRoute)
          if (hash) {
            setTimeout(() => {
              document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
            }, 150)
          }
        }
      },
      [href, pathname, router, onClick]
    )

    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onClick={handleClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    )
  }
)
