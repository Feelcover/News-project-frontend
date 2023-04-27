import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "macro-css"
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import {theme} from "../theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <MuiThemeProvider theme={theme}>
  <Component {...pageProps} />
  <CssBaseline />
</MuiThemeProvider>)
}