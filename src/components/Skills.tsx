import { useTranslation } from 'react-i18next'
import Section from './Section'

interface Group {
  name: string
  items: string[]
}

export default function Skills() {
  const { t } = useTranslation()
  const groups = t('skills.groups', { returnObjects: true }) as Group[]

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.name}
            className="glass rounded-2xl p-6 transition hover:border-neon/70 hover:box-glow"
          >
            <h3 className="mb-4 font-display text-xl font-semibold text-neon">{g.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-brand/50 bg-brand/10 px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
