import { Nav } from '@/components/layout/nav'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="page-wrap">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">© 2026</footer>
    </>
  )
}
