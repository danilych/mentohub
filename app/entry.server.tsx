import { PassThrough } from 'stream'
import type { EntryContext } from '@remix-run/node'
import { Response } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import isbot from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { createInstance } from 'i18next'
import i18next from './i18n/i18next.server'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import FsBackend from 'i18next-fs-backend'
import { SHARED_I18N_CONFIG } from './i18n/config' // your i18n configuration file
import { resolve } from 'node:path'
import { detectLocale } from './i18n/detect-locale'

const ABORT_DELAY = 5_000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let callbackName = isbot(request.headers.get('user-agent'))
    ? 'onAllReady'
    : 'onShellReady'

  let instance = createInstance()
  const lng = detectLocale(request)
  let ns = i18next.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(FsBackend)
    .init({
      ...SHARED_I18N_CONFIG,
      lng,
      backend: {
        loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
    })

  return new Promise((resolve, reject) => {
    let didError = false

    let { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer context={remixContext} url={request.url} />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          let body = new PassThrough()

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          didError = true

          console.error(error)
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
