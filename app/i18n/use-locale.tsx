import { useLocation } from '@remix-run/react'

import { DEFAULT_LOCALE, isSupportedLocale } from './supported-locales'

export default function useLocale() {
  const { pathname } = useLocation()
  const localeString = pathname.split('/')[1]
  if (isSupportedLocale(localeString)) return localeString
  return DEFAULT_LOCALE
}
