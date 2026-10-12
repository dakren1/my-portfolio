import { useTranslation } from 'react-i18next'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import Projects from './components/Projects'
import Skills from './components/Skills'

const YEAR = new Date().getFullYear()

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-muted">
        © {YEAR} Mathias Brizuela · {t('footer')}
      </footer>
    </>
  )
}
