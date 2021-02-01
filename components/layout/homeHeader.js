import React, { memo } from 'react'
import {
  Box,
  Button,
  Menu,
  Avatar,
  MenuList,
  Link,
  MenuItem,
  MenuDivider,
  Header as HeaderComponent,
  HeaderMenuButton,
  HeaderLogo,
  HeaderRight
} from 'viviui'

import NextLink from 'next/link'
import { AiOutlineLogout } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { getImgixUrl } from 'lib/imgix'

import useCurrentUserState from 'lib/useCurrentUserState'

import { FlowDotLoading } from 'components/loading'

import HomeLogo from './homeLogo'

const Header = props => {
  const { currentUser, isLoadingCurrentUser } = useCurrentUserState()
  return (
    <HeaderComponent containerProps={{ h: '4rem', px: '2' }}>
      <HeaderLogo>
        <NextLink href='/' passHref>
          <Box
            as='a'
            d='block'
          >
            <HomeLogo />
          </Box>
        </NextLink>
      </HeaderLogo>
      <HeaderRight>
        {
          // 因為 homeHeader 需要 currentUser
          // 所以若果 query 還在查詢中時
          // 顯示 FlowDotLoading
          isLoadingCurrentUser
            ? <FlowDotLoading />
            // 載入完
            // 有登入到時
            // 顯示 menu 有 launch 和登出
            : currentUser
              ? (
                <Menu placement='bottom-end'>
                  <HeaderMenuButton as='div'>
                    {/* 因為不是在學校中，所以顯示 user.profilePhoto 而不是 schooluser.profilePhoto */}
                    <Avatar
                      data-cy='avatar-currentuser'
                      name={currentUser.name}
                      src={getImgixUrl(currentUser.profilePhoto, '?w=100')}
                      size='sm'
                      cursor='pointer'
                    />
                  </HeaderMenuButton>
                  <MenuList>
                    <NextLink href='/school/launch' passHref>
                      <MenuItem as='a'>
                        <Box as={MdDashboard} mr='4px' />
                        <span data-cy='span-my-school'>
                          我的學校
                        </span>
                      </MenuItem>
                    </NextLink>

                    <MenuDivider />

                    <Link href='/api/school/auth/logout'>
                      <MenuItem>
                        <Box as={AiOutlineLogout} mr='4px' />
                        <span data-cy='span-logout'>
                          登出
                        </span>
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              )
              // 沒有登入時, 顯示登入按鈕
              : (
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
                    <Button data-cy='btn-login' as='a' bg='transparent' border='1px' px={2}>
                      登入
                    </Button>
                  </NextLink>
                </Box>)
        }
      </HeaderRight>
    </HeaderComponent>
  )
}

export default memo(Header)
