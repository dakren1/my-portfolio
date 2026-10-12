import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineCheck, HiOutlineClipboardCopy, HiOutlineMail } from 'react-icons/hi'
import Section from './Section'

const EMAIL = 'mathias.brizuela@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/mathias-brizuela-526497172'
const GITHUB = 'https://github.com/dakren1'
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

interface ReasonOption {
  value: string
  label: string
}

const inputClass =
  'w-full rounded-lg border border-white/10 bg-night/60 px-4 py-2.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-neon focus:box-glow'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback para contextos sin Clipboard API
    const el = document.createElement('textarea')
    el.value = text
    el.style.position = 'fixed'
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(el)
    return ok
  }
}

export default function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const rawReasons: unknown = t('contact.form.types', { returnObjects: true })
  const reasons = Array.isArray(rawReasons) ? (rawReasons as ReasonOption[]) : []

  async function handleCopy() {
    if (await copyText(EMAIL)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot anti-spam: un bot completaría este campo oculto
    if (data.get('_gotcha')) return

    const name = String(data.get('name'))
    const email = String(data.get('email'))
    const reason = String(data.get('reason'))
    const message = String(data.get('message'))

    // Sin endpoint configurado: abre el cliente de correo con el mensaje prellenado
    if (!ENDPOINT) {
      const subject = encodeURIComponent(`[${reason}] ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          reason,
          message,
          _subject: `[Portfolio · ${reason}] ${name}`,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="text-lg text-muted">{t('contact.text')}</p>

          <p className="mt-8 text-sm uppercase tracking-wide text-muted">
            {t('contact.emailLabel')}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 break-all font-display text-lg text-neon text-glow sm:text-xl"
            >
              <HiOutlineMail className="shrink-0 text-2xl" />
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={() => void handleCopy()}
              className="flex items-center gap-1.5 rounded-md border border-neon/50 px-3 py-1.5 text-sm text-neon transition hover:box-glow"
            >
              {copied ? <HiOutlineCheck /> : <HiOutlineClipboardCopy />}
              <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copy')}</span>
            </button>
          </div>

          <div className="mt-8 flex gap-5 text-3xl text-muted">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-neon">
              <FaLinkedin />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-neon">
              <FaGithub />
            </a>
          </div>
        </div>

        <form onSubmit={(e) => void handleSubmit(e)} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold">{t('contact.form.title')}</h3>

          {/* Honeypot: oculto para personas */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-muted">
              {t('contact.form.name')}
              <input name="name" type="text" required maxLength={100} autoComplete="name" className={`${inputClass} mt-1`} />
            </label>
            <label className="block text-sm text-muted">
              {t('contact.form.email')}
              <input name="email" type="email" required maxLength={150} autoComplete="email" className={`${inputClass} mt-1`} />
            </label>
          </div>

          <label className="block text-sm text-muted">
            {t('contact.form.type')}
            <select name="reason" className={`${inputClass} mt-1`} defaultValue={reasons[0]?.value}>
              {reasons.map((r) => (
                <option key={r.value} value={r.value} className="bg-night">
                  {r.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm text-muted">
            {t('contact.form.message')}
            <textarea name="message" required rows={5} maxLength={2000} className={`${inputClass} mt-1 resize-y`} />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-[0_0_24px_rgb(30_107_255/0.6)] transition hover:-translate-y-0.5 hover:box-glow disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
          </button>

          <p role="status" aria-live="polite" className="min-h-6 text-sm">
            {status === 'success' && <span className="text-neon">{t('contact.form.success')}</span>}
            {status === 'error' && <span className="text-red-400">{t('contact.form.error')}</span>}
          </p>
        </form>
      </div>
    </Section>
  )
}
