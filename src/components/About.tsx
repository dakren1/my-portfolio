import { useTranslation } from 'react-i18next'
import Section from './Section'

interface Fact {
  label: string
  value: string
}

export default function About() {
  const { t } = useTranslation()
  const body = t('about.body', { returnObjects: true }) as string[]
  const facts = t('about.facts', { returnObjects: true }) as Fact[]

  return (
    <Section id="about" title={t('about.title')}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg text-muted">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="glass space-y-4 rounded-2xl p-6">
          {facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
              <dt className="text-muted">{f.label}</dt>
              <dd className="font-medium text-neon">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
