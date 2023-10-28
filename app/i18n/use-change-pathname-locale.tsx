import { useLocation } from '@remix-run/react'
import { generatePath } from 'react-router'

import type { SupportedLocale } from './supported-locales'

export default function useChangePathnameLocale() {
  const location = useLocation()
  return (newLocale: SupportedLocale) => {
    const pathnameWithoutLocale = location.pathname
      .split('/')
      .slice(2)
      .join('/')
    return generatePath(
      ['/:locale', pathnameWithoutLocale].filter(Boolean).join('/'),
      {
        locale: newLocale,
      }
    )
  }
}
