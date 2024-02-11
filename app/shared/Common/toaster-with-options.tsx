import { Toaster } from 'react-hot-toast'

export function ToasterWithOptions() {
  return (
    <Toaster
      toastOptions={{
        duration: 5000,
        success: {
          style: {
            background: 'green',
            color: 'white',
          },
        },
        error: {
          style: {
            background: 'red',
            color: 'white',
          },
        },
      }}
    />
  )
}
