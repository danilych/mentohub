import { resolve } from 'node:path'

import FsBackend from 'i18next-fs-backend'
import { RemixI18Next } from 'remix-i18next'

import { SHARED_I18N_CONFIG } from './config'

import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '~/i18n/supported-locales'

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: SUPPORTED_LOCALES,
    fallbackLanguage: DEFAULT_LOCALE,
  },
  i18next: {
    ...SHARED_I18N_CONFIG,
    backend: {
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  },
  backend: FsBackend,
})

export default i18next
