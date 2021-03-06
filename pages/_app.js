const Sentry = require("@sentry/node");

// 載入 packages
import React from 'react'
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core'
import { DefaultSeo } from 'next-seo'
import { useTheme, withTheme } from '@emotion/react'
import Router from 'next/router'
import Head from 'next/head'

// import App from 'next/app'

// 載入 global 的 css 放這裡
// import 'spinkit/spinkit.min.css'
// import 'video-react/dist/video-react.css'
// import 'react-dates/lib/css/_datepicker.css'
// import 'react-datepicker/dist/react-datepicker.css'
// 載入 lib

import theme from 'lib/theme'
import getSEOConfig from 'lib/seo.config'
// import withApollo from 'lib/withApollo'
import { RefetchProvider } from 'lib/refetchContext'
// import 'mescroll.js/mescroll.min.css'

const MaintenanceScreen = () => (
  <div className='container'>
    <div className='item'>
      <span>🛠</span>
      <h1>我們目前正在進行維護。</h1>
      <p>我們很快就會回來。在 Facebook 上關注 <a href='https://www.facebook.com/macauschoolplatform' target='_black'>@macauschoolplatform</a> 以保持最新資訊。</p>
    </div>
    <style jsx global>{`
      html, body {
        margin: 0;
      }

      html {
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      }

      h1,
      p {
        line-height: 1.5;
      }

      .container {
        background: rgb(15, 40, 91);
        width: 100%;
        display: flex;
        height: 100vh;
        justify-content: center;
      }

      .item {
        color: white;
        font-weight: bold;
        align-self: center;
        text-align: center;
      }

      a {
        color: white;
      }

      span {
        font-size: 40px;
        padding: 0;
        margin: 0;
      }
    `}
    </style>
  </div>
)

function MyApp({ Component, pageProps, router, maintenanceMode, err, ...rest }) {
  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production') {
  //     if (window.location.protocol !== 'https:') {
  //       window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`)
  //     }
  //   }
  // }, [])

  if (maintenanceMode === 'enabled') {
    return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <MaintenanceScreen />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value='light'>
          <RefetchProvider>
            <>
              {/* seo */}
              {/* <DefaultSeo {...getSEOConfig()} /> */}
              {/* page component */}
              {/* <ErrorBoundary> */}
              <Component {...pageProps} err={err} />
              {/* </ErrorBoundary> */}
            </>
          </RefetchProvider>
          <CSSReset />
        </ColorModeProvider>
        {/* 其他 global css 放這裡 */}
        <style jsx global>{`
          .fsp-button--authgoogle svg {
            display: inline;
          }
          .react-datepicker-popper {
            z-index: 100000;
          }
          button.no-padding {
            padding: 0
          }
        `}
        </style>
      </ThemeProvider>
    </>
  )
}
export default withTheme(MyApp)

// export default withTheme(withApollo(MyApp))

initRouterListeners()

const ROUTES_TO_RETAIN = ['/peng/[pengId]']

function initRouterListeners() {
  if (typeof window === 'undefined' || window.__initializedRouterListeners) return
  window.__initializedRouterListeners = true

  // console.log('Init router listeners')

  const routes = []

  Router.events.on('routeChangeStart', (url) => {
    routes[Router.pathname] = window.scrollY
  })

  Router.events.on('routeChangeComplete', (url) => {
    if (ROUTES_TO_RETAIN.includes(Router.pathname)) {
      const scrollY = routes[Router.pathname] || 0
      // console.log('Scrolling to', scrollY)
      window.requestAnimationFrame(() => window.scrollTo(0, scrollY))
      // console.log('routes now:', routes)
    }
  })
}
