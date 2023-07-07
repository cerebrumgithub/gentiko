import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
  <>
      <Head>
        <link rel="shortcut icon" href="/img/icon.png"></link>
      </Head>
      <Component {...pageProps} />
  </>
  )
}
