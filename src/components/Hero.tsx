import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { useCvUrl } from '../hooks/useCvUrl'

function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const word = words[index % words.length]
    const delay = !deleting && text === word ? 1600 : deleting ? 40 : 80
    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words])

  return text
}

// Se remonta con `key` al cambiar de idioma, reiniciando el efecto de tipeo.
function Typewriter({ words }: { words: string[] }) {
  const typed = useTyping(words)
  return (
    <>
      {typed}
      <span className="ml-0.5 animate-pulse text-neon">|</span>
    </>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const cvUrl = useCvUrl()
  const roles = t('hero.roles', { returnObjects: true }) as string[]

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 pt-16 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 font-display text-lg text-neon">{t('hero.greeting')}</p>
        <h1 className="font-display text-5xl font-bold leading-tight text-glow sm:text-7xl">
          Mathias Brizuela
        </h1>
        <p className="mt-4 h-9 font-display text-2xl text-brand sm:text-3xl">
          <Typewriter key={roles[0]} words={roles} />
        </p>
        <p className="mt-6 max-w-xl text-lg text-muted">{t('hero.intro')}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-[0_0_24px_rgb(30_107_255/0.6)] transition hover:-translate-y-0.5 hover:box-glow"
          >
            {t('hero.projects')}
          </a>
          <a
            href={cvUrl}
            download
            className="rounded-lg border border-neon px-6 py-3 font-medium text-neon transition hover:-translate-y-0.5 hover:box-glow"
          >
            {t('hero.cv')}
          </a>
        </div>

        <div className="mt-10 flex gap-5 text-2xl text-muted">
          <a href="https://github.com/dakren1" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-neon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mathias-brizuela-526497172" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-neon">
            <FaLinkedin />
          </a>
          <a href="mailto:mathias.brizuela@gmail.com" aria-label="Email" className="transition hover:text-neon">
            <HiOutlineMail />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
