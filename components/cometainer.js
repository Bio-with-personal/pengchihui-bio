import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Box
      direction='column'
      alignItems='center'
      justifyContent='flex-start'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
