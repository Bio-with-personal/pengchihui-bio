import { Box, CSSReset } from '@chakra-ui/core'

const EmptyLayout = ({ children, config }) => (
  <Box>
    <CSSReset config={config} />
    {children}
  </Box>
)

export default EmptyLayout
