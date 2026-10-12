import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Section from './Section'

interface Project {
  name: string
  period: string
  description: string
  bullets: string[]
  tags: string[]
  demo?: string
  repo?: string
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Project[]

  return (
    <Section id="projects" title={t('projects.title')}>
      <div className="grid gap-6">
        {items.map((p) => (
          <article
            key={p.name}
            className="glass flex flex-col rounded-2xl p-6 transition hover:border-neon/70 hover:box-glow sm:p-8"
          >
            <p className="text-sm text-neon">{p.period}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
            <p className="mt-3 text-lg text-muted">{p.description}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted marker:text-neon">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-neon/10 px-2.5 py-0.5 text-xs text-neon">
                  {tag}
                </li>
              ))}
            </ul>
            {(p.demo || p.repo) && (
              <div className="mt-5 flex gap-5 text-sm">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-muted transition hover:text-neon">
                    <HiOutlineExternalLink /> {t('projects.demo')}
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-muted transition hover:text-neon">
                    <FaGithub /> {t('projects.code')}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
