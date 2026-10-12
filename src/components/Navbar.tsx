import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useCvUrl } from '../hooks/useCvUrl'

const links = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const cvUrl = useCvUrl()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-display text-xl font-bold text-neon text-glow">
          MB
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="text-sm text-muted transition hover:text-neon">
                {t(`nav.${l}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => void i18n.changeLanguage(lang === 'es' ? 'en' : 'es')}
            className="rounded-md border border-neon/40 px-2 py-1 text-xs font-semibold uppercase text-neon transition hover:box-glow"
            aria-label="Change language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href={cvUrl}
            download
            className="hidden rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white transition hover:box-glow sm:inline-block"
          >
            {t('nav.cv')}
          </a>
          <button
            type="button"
            className="text-2xl text-neon md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="text-muted transition hover:text-neon"
              >
                {t(`nav.${l}`)}
              </a>
            </li>
          ))}
          <li>
            <a href={cvUrl} download className="text-neon">
              {t('nav.cv')}
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
