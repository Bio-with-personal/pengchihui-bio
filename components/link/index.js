import React, { forwardRef } from 'react'
import NextLinkComponent from 'next/link'
import { useRouter } from 'next/router'
import {
  Button,
  HeaderButton,
  Link
} from 'viviui'

export const NextLink = (props) => {
  return <NextLinkComponent {...props} />
}

export const NavLink = ({ children, ...props }) => {
  const router = useRouter()
  let isActive = false

  if (router.pathname === props.href) {
    isActive = true
  }

  return (
    <NextLink passHref {...props}>
      {typeof children === 'function' ? children(isActive) : children}
    </NextLink>
  )
}

export const TopNavLink = forwardRef(({ href, ...props }, ref) => {
  return (
    <NavLink href={href}>
      {isActive => (
        <Button
          ref={ref}
          isActive={isActive}
          {...props}
        />
      )}
    </NavLink>
  )
})

export const IconTopNavLink = forwardRef(({ href, as, ...props }, ref) => {
  return (
    <NavLink href={href} as={as}>
      {isActive => (
        <HeaderButton
          ref={ref}
          isActive={props.isActive || isActive}
          icon={props.icon}
          title={props.children}
        />
      )}
    </NavLink>
  )
})
