
import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import BioMain from './bio/bioMain'
import Es6Function from './es6function'

const Home = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          {children}
          <Es6Function />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
export default Home
