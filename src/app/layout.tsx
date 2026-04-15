import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import { SkipLink } from '@/components/ui/skip-link'
import './globals.css'
import '@/styles/components.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'YourName — Software Engineer',
  description: 'Software engineer focused on distributed systems and developer tools.',
  other: {
    'theme-color': '#0c0c0b',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', var(--font-inter), system-ui, sans-serif" }}
      >
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
