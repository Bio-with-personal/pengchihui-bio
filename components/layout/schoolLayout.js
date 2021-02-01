import _ from 'lodash'
import { useRouter } from 'next/router'
import { Box, CSSReset, Spinner } from '@chakra-ui/core'
import { useQuery } from '@apollo/react-hooks'

import { getCurrentSchooluserQuery } from 'shared/graphql/queries/user/getUser'

import SchoolHeader from './schoolHeader'
import SchoolFooter from './schoolFooter'

const SchoolLayout = ({ children, config, hideFooter = false, isLoading = false, errorMessage = '' }) => {
  const router = useRouter()
  const { schoolId = '' } = router.query

  // 用於檢查 currentUser
  // 用於檢查 currentUser.schooluser
  // 用於檢查 currentUser.schooluser.school
  // 一次過檢查三樣東西
  const { data, loading, error } = useQuery(getCurrentSchooluserQuery, { variables: { schoolId } })

  // router query 是否準備好
  const isRouterQueryReady = router.asPath.indexOf('[') === -1

  let layoutLoading = false
  let layoutErrorMessage = ''

  // 查詢有錯誤時
  if (errorMessage) {
    layoutErrorMessage = errorMessage
  } else if (error) {
    layoutErrorMessage = error.message || 'Error'
  } else if (isLoading) {
    layoutLoading = isLoading
  } else if (loading || !data || !schoolId) {
    // 載入中時
    layoutLoading = true
  } else if (!data.user) {
    // 沒有登入
    layoutErrorMessage = '請先登入'
  } else if (!data.user.schooluser) {
    // 沒有登入學校用戶身份
    layoutErrorMessage = '你沒有權限去檢視此頁面'
  } else if (!data.user.schooluser.school) {
    // 沒有學校
    layoutErrorMessage = '學校不存在'
  }

  const school = _.get(data, 'user.schooluser.school')
  const schooluser = _.get(data, 'user.schooluser')

  return (
    <Box>
      <CSSReset config={config} />
      {/* 有錯誤或者沒有學校資料都要 hide nav links */}
      <SchoolHeader hideNavLinks={!!layoutErrorMessage || !school} loading={loading} schooluser={schooluser} />
      {
        // layout 的查詢載入中或 router還未準備好
        // 就顯示 spinner
        layoutLoading || !isRouterQueryReady
          ? (
            <Box pt={40} pb={24} textAlign='center'>
              <Spinner data-cy='page-loading' />
            </Box>
          )
          // 有錯誤訊息嗎
          : layoutErrorMessage
            // 顯示錯誤訊息
            ? (
              <Box pt={40} pb={24} textAlign='center'>
                {layoutErrorMessage}
              </Box>
            )
            // 沒有錯誤就顯示 children
            : children
      }
      <SchoolFooter hide={hideFooter} />
    </Box>
  )
}

export default SchoolLayout

export const schoolConfig = theme => ({
  light: {
    color: theme.colors.gray[800],
    bg: theme.colors.blue[50],
    borderColor: theme.colors.gray[300],
    placeholderColor: theme.colors.gray[400]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.blue[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  }
})
