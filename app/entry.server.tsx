import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@remix-run/server-runtime'
import { renderToString } from 'react-dom/server'
import type { HandleDataRequestFunction } from '@remix-run/node'

export default async function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={context} url={request.url} />
  )

  headers.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: statusCode,
    headers: headers,
  })
}

// Set header Cache-Control for vercel
export const handleDataRequest: HandleDataRequestFunction = (
  response: Response
) => {
  if (!response.headers.get('Cache-Control')) {
    response.headers.set(
      'Cache-Control',
      'max-age=0, s-maxage=2678400, stale-while-revalidate'
    )
  }
  return response
}
