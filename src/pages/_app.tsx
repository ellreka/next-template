import '../styles/style.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { Layout } from '~components/Layout'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
