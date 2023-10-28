import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './supported-locales'
import machineTranslationsProcessor from './machine-translations-processor'

export const SHARED_I18N_CONFIG = {
  supportedLngs: SUPPORTED_LOCALES,
  fallbackLng: DEFAULT_LOCALE,
  ns: ['common', 'home'],
  defaultNS: ['common'],
  react: { useSuspense: false },
  postProcess: machineTranslationsProcessor.name,
  interpolation: {
    escapeValue: false, // react already saves from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
}
