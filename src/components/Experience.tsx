import { useTranslation } from 'react-i18next'
import Section from './Section'

interface Job {
  period: string
  company: string
  role: string
  bullets: string[]
}

interface Study {
  name: string
  place: string
  year: string
}

export default function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.items', { returnObjects: true }) as Job[]
  const studies = t('experience.education', { returnObjects: true }) as Study[]

  return (
    <Section id="experience" title={t('experience.title')}>
      <ol className="relative space-y-8 border-l border-neon/30 pl-6 sm:pl-8">
        {jobs.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-neon box-glow sm:-left-[39px]" />
            <article className="glass rounded-2xl p-6">
              <p className="text-sm text-neon">{job.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{job.company}</h3>
              <p className="text-brand">{job.role}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-neon">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <h3 className="mb-4 mt-14 font-display text-2xl font-semibold">
        {t('experience.educationTitle')}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {studies.map((s) => (
          <div key={s.name} className="glass rounded-2xl p-6">
            <p className="font-medium">{s.name}</p>
            <p className="text-muted">
              {s.place} · <span className="text-neon">{s.year}</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
