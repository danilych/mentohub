import { cssBundleHref } from '@remix-run/css-bundle'
import {
  json,
  LoaderArgs,
  type LinksFunction,
  redirect,
  LoaderFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'

import stylesheet from '~/tailwind.css'
import Navigation from './entities/navigation'
import Footer from './entities/footer'

import { useChangeLanguage } from 'remix-i18next'
import { useTranslation } from 'react-i18next'
import { detectLocale } from './i18n/detect-locale'

export const loader: LoaderFunction = async ({ request }) => {
  const locale = detectLocale(request)

  const url = new URL(request.url)
  if (url.pathname === '/') {
    return redirect(`/${locale}`, {
      status: 301,
      headers: { 'Cache-Control': 'no-cache' },
    })
  }

  return json({
    locale,
  })
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export let handle = {
  i18n: 'common',
}

export default function App() {
  let { locale } = useLoaderData()

  let { i18n } = useTranslation()

  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()} className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  )
}
