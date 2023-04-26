import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "macro-css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}