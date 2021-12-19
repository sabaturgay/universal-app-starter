import '@config'

import { COOKIES } from '@constants'
import { CookiesProvider } from 'react-cookie'
import Head from 'next/head'
import { QUERY_CLIENT_CONFIG } from '@config/react-query'
import React from 'react'
// import { parseCookies, isServer } from '@utils'
// import parser from 'ua-parser-js'
// import { setInitialDimensions } from '@config/polyfills/Dimensions'

import App, { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useInitializer } from '@hooks/useInitializer/server'

const { RootProvider } = true
  ? require('@root/providers/ServerRootProvider')
  : require('@root/providers/ClientRootProvider')

function MyApp({
  Component, pageProps, ...rest
}: AppProps) {
  const { cookies = {} } = pageProps
  const [queryClient] = React.useState(() => new QueryClient(QUERY_CLIENT_CONFIG))
  useInitializer()
  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CookiesProvider>
            <RootProvider colorMode={'dark' ?? cookies[COOKIES.colorMode]}>
              <Component {...pageProps} />
            </RootProvider>
          </CookiesProvider>
        </Hydrate>
      </QueryClientProvider>

    </>
  )
}

export default MyApp

// MyApp.getInitialProps = async (appContext) => {
//   const { ctx: { req } } = appContext
//   const appProps = await App.getInitialProps(appContext)
//   let cookies = {}
//   let userAgent = {}
//   if (isServer()) {
//     cookies = parseCookies(req)
//     userAgent = parser(req.headers['user-agent'])
//     const deviceType = parser(req.headers['user-agent']).device.type || 'desktop'
//     setInitialDimensions(deviceType)
//   }
//   // const auth = await getUser(appContext.ctx)
//   return { ...appProps, pageProps: { cookies, userAgent } }
// }
