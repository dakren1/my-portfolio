import { useTranslation } from 'react-i18next'

/** CV en el idioma activo (archivos en public/cv). */
export function useCvUrl() {
  const { i18n } = useTranslation()
  return i18n.language.startsWith('es')
    ? '/cv/CV-Mathias-Brizuela-ES.pdf'
    : '/cv/CV-Mathias-Brizuela-EN.pdf'
}
