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


export const loader: LoaderFunction = async ({ request }) => {
  return json({
    ENV: {
      TEST: process.env.TEST,
    },
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
  return (
    <html lang='ua' className="antialiased">
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
