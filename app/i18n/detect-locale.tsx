import acceptLanguage from 'accept-language'
import { matchPath } from 'react-router'

import { SUPPORTED_LOCALES, SupportedLocale } from './supported-locales'

export function detectLocale(request: Request): SupportedLocale {
  const url = new URL(request.url)
  const pathMatch = matchPath<'locale', string>(
    { path: ':locale', end: false },
    url.pathname
  )
  const localeFromPath = SUPPORTED_LOCALES.find(
    locale => locale === pathMatch?.params.locale
  )
  if (localeFromPath) {
    return localeFromPath
  }
  acceptLanguage.languages(Object.values(SupportedLocale))
  return acceptLanguage.get(
    request.headers.get('Accept-Language')
  ) as SupportedLocale
}
