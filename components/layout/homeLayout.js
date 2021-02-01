import { Box, CSSReset } from '@chakra-ui/core'

import HomeHeader from './homeHeader'
import HomeFooter from './homeFooter'

const HomeLayout = ({ children, config, hideFooter = false }) => (
  <Box data-cy='page-home'>
    <CSSReset config={config} />
    <HomeHeader />
    {children}
    {!hideFooter && <HomeFooter />}
  </Box>
)

export default HomeLayout

export const homeConfig = theme => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  }
})
