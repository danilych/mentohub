import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'

async function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <Provider store={store}>
          <RemixBrowser />
      </Provider>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
