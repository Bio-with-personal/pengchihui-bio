import { useRouter } from 'next/router'
import { Box, Spinner } from '@chakra-ui/core'

import EmptyLayout from './emptyLayout'
import HomeLayout, { homeConfig } from './homeLayout'
import SchoolLayout, { schoolConfig } from './schoolLayout'

const Layout = ({ children, empty = false, hideFooter = false, isLoading = false, errorMessage = '' }) => {
  const router = useRouter()

  // router query 是否準備好
  // 當 router.asPath 包含 `[` 時代表未準備好
  const isRouterQueryReady = router.asPath.indexOf('[') === -1

  // 根據不同的 path 使用不同的 layout
  let Layout = HomeLayout
  let config = homeConfig

  if (empty) {
    Layout = EmptyLayout
  } else if (router.pathname.indexOf('/login') === 0) {
    Layout = EmptyLayout
  } else if (router.pathname.indexOf('/school/mobile') === 0) {
    Layout = EmptyLayout
  } else if (router.pathname.indexOf('/school/') === 0) {
    Layout = SchoolLayout
    config = schoolConfig
  }

  return (
    <Layout
      config={config}
      // 當 props 有 hideFooter
      // 或者 props 有載入中
      // 或者 router query 未準備好
      // 就會隱藏 footer
      hideFooter={hideFooter || isLoading || !isRouterQueryReady}
      // 當 props 有載入中時
      // 就會將 isLoading 交比 Layout component 處理
      isLoading={isLoading}
      // 當 props 有 errorMessage 時
      // 就會將 isLoading 交比 Layout component 處理
      errorMessage={errorMessage}
    >
      {/*
        當 Layout component 認為可以顯示 children 時
        雖然 Layout component 認為無問題
        但這裡要再檢查一下 props 的資訊
        再決定是否真的顯示 children
      */}
      {
        // props 有載入中，或 router 未準備好時
        // 顯示 spinner
        isLoading || !isRouterQueryReady
          ? (
            <Box pt={40} pb={24} textAlign='center'>
              <Spinner data-cy='page-loading' />
            </Box>
          )
          // 已載入時
          // 但有錯誤訊息時
          // 顯示錯誤訊息
          : errorMessage
            ? (
              <Box pt={40} pb={24} textAlign='center'>
                {errorMessage}
              </Box>
            )
            // 沒有錯誤訊息時
            // 可顯示 children
            : children
      }
    </Layout>
  )
}

export default Layout
