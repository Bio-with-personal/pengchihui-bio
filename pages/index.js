
import React from 'react'
import Box from './box/boxMain'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
export default function ({ children }) {
  return (
    <>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          {children}
          <Box />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
