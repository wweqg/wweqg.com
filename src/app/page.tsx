import { Nav } from '@/components/layout/nav'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main
        id="main-content"
        className="mx-auto max-w-[1080px]"
        style={{ padding: '0 var(--s-7)' }}
      >
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        className="text-center"
        style={{
          padding: 'var(--s-5) var(--s-7)',
          fontSize: 'var(--t-xs)',
          color: 'var(--text-3)',
          borderTop: '1px solid var(--border)',
        }}
      >
        © 2026
      </footer>
    </>
  )
}
