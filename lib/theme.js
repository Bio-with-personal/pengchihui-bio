import { theme as chakraTheme } from '@chakra-ui/core'

const fonts = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Tahoma, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif',
  heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Tahoma, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif',
  mono: 'Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif'
}

// var breakpoints = ['30em', '48em', '62em', '80em', '81em'] // aliases

// breakpoints.sm = breakpoints[0]
// breakpoints.md = breakpoints[1]
// breakpoints.lg = breakpoints[2]
// breakpoints.xl = breakpoints[3]
// breakpoints.xxl = breakpoints[4]

const theme = {
  ...chakraTheme,
  // colors: {
  //   ...chakraTheme.colors,
  //   black: '#16161D'
  // },
  fonts
}

export default theme
