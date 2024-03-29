import { cssBundleHref } from '@remix-run/css-bundle'
import { json } from '@remix-run/node'
import type { LoaderFunction, LinksFunction } from '@remix-run/node'
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
import Navigation from './widgets/navigation'
import Footer from './widgets/footer'
import store from './redux/store'
import { Provider, useDispatch } from 'react-redux'
import type { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchAuth } from './redux/slices/auth'

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      AXIOS_URL: process.env.AXIOS_URL,
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

export function OutletProvider() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  if (typeof window !== 'undefined') {
    let requestData = {
      Email: window.localStorage.getItem('email'),
      Password: window.localStorage.getItem('password'),
    }

    dispatch(fetchAuth(requestData))
  }

  return <Outlet />
}

export default function App() {
  const data = useLoaderData<typeof loader>()
  return (
    <html lang="ua" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Navigation />
          <OutletProvider />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <Scripts />
        </Provider>
      </body>
    </html>
  )
}
