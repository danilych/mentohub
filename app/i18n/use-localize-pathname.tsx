import { useLocation } from '@remix-run/react'
import { generatePath, resolvePath } from 'react-router-dom'

import useLocale from './use-locale'

function removeTrailingSlash(pathname: string) {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

function prependLocale(absolutePathname: string, locale: string) {
  if (absolutePathname.startsWith(`/${locale}`)) return absolutePathname
  return generatePath(`/:locale${absolutePathname}`, { locale })
}

export default function useLocalizePathname() {
  const locale = useLocale()
  const location = useLocation()
  return (pathname: string) => {
    const resolvedPath = resolvePath(pathname, location.pathname)
    if (locale === undefined) {
      return removeTrailingSlash(pathname)
    }
    return removeTrailingSlash(prependLocale(resolvedPath.pathname, locale))
  }
}
