import React, { memo, useContext } from 'react'
import {
  Box,
  useColorMode,
  Button,
  Menu,
  Avatar,
  MenuList,
  Link,
  MenuItem,
  Header as HeaderComponent,
  HeaderMenuButton,
  DrawerItemButton,
  DrawerItemDivider,
  HeaderLogo,
  HeaderCenter,
  HeaderMobileNav,
  HeaderRight
} from 'viviui'

import NextLink from 'next/link'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoIosMail, IoLogoGoogleplus, IoIosFolder, IoMdPaper, IoMdHome, IoMdSearch } from 'react-icons/io'
import { useRouter } from 'next/router'
import { MdDashboard, MdNotificationsActive } from 'react-icons/md'
import { getImgixUrl } from 'lib/imgix'

import { RefetchContext } from 'lib/refetchContext'

import { FlowDotLoading } from 'components/loading'
import { IconTopNavLink } from 'components/link'

import SchoolLogo from './schoolLogo'

// 上層 layout 若果有錯誤
// 就會將 hideNavLinks 設為 true
// 上層 layout 若果沒有 school, 即查詢不到
// 也會將 hideNavLinks 設為 true

const Header = ({ hideNavLinks = false, loading = false, schooluser, ...rest }) => {
  // 按 logo 需要更新 school feed refetch
  const { colorMode } = useColorMode()
  const bg = { light: 'blue.50', dark: 'blue.800' }
  const [, setRefetch] = useContext(RefetchContext)
  const router = useRouter()
  const { schoolId = '' } = router.query

  // Logo 被按時
  const handleLogoClick = e => {
    e.preventDefault()
    if (schoolId) {
      if (router.route === '/school/[schoolId]') {
        // nothing
        // 如果已在 school feed 頁面就不用 redirect 了
      } else {
        // 如果不在 school feed 頁面就要 redirect
        router.push(
          '/school/[schoolId]',
          `/school/${schoolId}`
        )
      }
      // 啟動 school feed refetch
      setRefetch({
        schoolFeed: Date.now()
      })
    }
  }

  return (
    <HeaderComponent bg={bg[colorMode]} containerProps={{ h: '4rem', px: '2' }} {...rest}>
      <HeaderLogo>
        <Box as='a' href={`/school/${schoolId}`} onClick={handleLogoClick}>
          <SchoolLogo />
        </Box>
      </HeaderLogo>
      <HeaderRight>
        {/* 當 schoolHeader 要載入 currentUser 時 */}
        {/* 顯示 FlowDotLoading */}
        {loading && (
          <FlowDotLoading />
        )}

        {/* 當載入完畢和登入中時 */}
        {/* 顯示 menu，有返回和登出 */}
        {(!loading && !!schooluser) && (
          <Menu placement='bottom-end'>
            <HeaderMenuButton as='div' display={{ base: 'none', sm: 'none', md: 'flex' }}>
              <Box position='relative'>
                {!!schooluser.school && !!schooluser.school.hasNotificationModule && !!schooluser.unreadNotificationsCount && (
                  <Box w='10px' h='10px' bg='red.500' borderRadius='9999px' position='absolute' top='0' right='0' zIndex='999' />
                )}
                <Avatar
                  name={schooluser.name}
                  src={getImgixUrl(schooluser.profilePhoto, '?w=100')}
                  size='sm'
                  cursor='pointer'
                  display={{ base: 'none', sm: 'none', md: 'flex' }}
                />
              </Box>
            </HeaderMenuButton>
            <MenuList w='280px'>
              {!!schooluser.school && !!schooluser.school.hasNotificationModule && (
                <NextLink href='/school/[schoolId]/notifications' as={`/school/${schoolId}/notifications`} passHref>
                  <MenuItem as='a' position='relative'>
                    <Box as={MdNotificationsActive} mr='4px' />
                    <span>未讀通告</span>
                    {!!schooluser.unreadNotificationsCount && (
                      <Box w='10px' h='10px' bg='red.500' borderRadius='9999px' position='absolute' right='10px' />
                    )}
                  </MenuItem>
                </NextLink>
              )}

              <NextLink href='/' passHref>
                <MenuItem as='a'>
                  <Box as={IoMdHome} mr='4px' />
                  <span>返回 Macau School</span>
                </MenuItem>
              </NextLink>
              <Link href='/api/school/auth/logout'>
                <MenuItem>
                  <Box as={AiOutlineLogout} mr='4px' />
                  <span>登出</span>
                </MenuItem>
              </Link>

              <DrawerItemDivider />

              <Link href='https://mail.google.com' isExternal>
                <MenuItem>
                  <Box as={IoIosMail} mr='4px' />
                  <span>Gmail</span>
                </MenuItem>
              </Link>
              <Link href='https://drive.google.com' isExternal>
                <MenuItem>
                  <Box as={IoIosFolder} mr='4px' />
                  <span>Google Drive</span>
                </MenuItem>
              </Link>
              <Link href='https://classroom.google.com' isExternal>
                <MenuItem>
                  <Box as={IoLogoGoogleplus} mr='4px' />
                  <span>Google Classroom</span>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        )}

        {/* // ! 沒有登入用戶? */}
        {(!loading && !schooluser) && (
          <Box>
            <NextLink
              passHref
              href={{
                pathname: '/school/login',
                query: {
                  r: '/school/launch'
                }
              }}
            >
              <Button data-cy='btn-school-header-login' as='a' bg='transparent' border='1px' px={2}>
                登入
              </Button>
            </NextLink>
          </Box>
        )}
      </HeaderRight>
      <HeaderCenter>
        {
          !hideNavLinks && (
            <>
              <IconTopNavLink
                isActive={/\/school\/[^/]+$/.test(router.pathname)}
                href='/school/[schoolId]'
                as={`/school/${schoolId}`}
                icon={IoMdPaper}
              >
                首頁
              </IconTopNavLink>

              <IconTopNavLink
                isActive={/\/school\/.+\/dashboards\/[^/]+$/.test(router.pathname)}
                href='/school/[schoolId]/dashboard'
                as={`/school/${schoolId}/dashboard`}
                icon={MdDashboard}
              >
                學校專頁
              </IconTopNavLink>

              <IconTopNavLink
                isActive={/\/school\/.+\/search\/[^/]+$/.test(router.pathname)}
                href='/school/[schoolId]/search'
                as={`/school/${schoolId}/search`}
                icon={IoMdSearch}
              >
                搜索
              </IconTopNavLink>
            </>
          )
        }
      </HeaderCenter>

      {/* 手機時才會顯示 */}
      <HeaderMobileNav>
        {
          !hideNavLinks && (
            <>
              <NextLink
                href='/school/[schoolId]'
                as={`/school/${schoolId}`}
                passHref
              >
                <DrawerItemButton icon={IoMdPaper}>首頁</DrawerItemButton>
              </NextLink>
              <DrawerItemDivider />
              <NextLink
                href='/school/[schoolId]/dashboard'
                as={`/school/${schoolId}/dashboard`}
                passHref
              >
                <DrawerItemButton icon={MdDashboard}>學校專頁</DrawerItemButton>
              </NextLink>
              <DrawerItemDivider />
              <NextLink
                href='/school/[schoolId]/search'
                as={`/school/${schoolId}/search`}
                passHref
              >
                <DrawerItemButton icon={IoMdSearch}>搜索</DrawerItemButton>
              </NextLink>
              <DrawerItemDivider />

              {!!schooluser.school && !!schooluser.school.hasNotificationModule && (
                <>

                  <NextLink
                    href='/school/[schoolId]/notifications'
                    as={`/school/${schoolId}/notifications`}
                    passHref
                  >
                    <DrawerItemButton icon={MdNotificationsActive}>
                      未讀通告
                      {!!schooluser.unreadNotificationsCount && (
                        <Box w='10px' h='10px' bg='red.500' borderRadius='9999px' position='absolute' right='10px' />
                      )}
                    </DrawerItemButton>
                  </NextLink>
                  <DrawerItemDivider />
                </>
              )}
              <NextLink
                href='/'
                passHref
              >
                <DrawerItemButton icon={IoMdHome}>返回 Macau School</DrawerItemButton>
              </NextLink>
              <DrawerItemDivider />
              <Link
                href='/api/school/auth/logout'
              >
                <DrawerItemButton icon={AiOutlineLogout}>登出</DrawerItemButton>
              </Link>
              <DrawerItemDivider />
            </>
          )
        }
      </HeaderMobileNav>
    </HeaderComponent>
  )
}

export default memo(Header)
