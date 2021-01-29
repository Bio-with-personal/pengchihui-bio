
import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import BioMain from './bioMain'
import Es6Function from './es6function'
import EcmaScript from './ecmaScript'

const Home = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          {children}
          {/*  运行实例   */}
          <EcmaScript />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
export default Home
