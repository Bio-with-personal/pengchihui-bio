import {
  Box,
  Heading
} from '@chakra-ui/core'

const Logo = () => (
  <Heading as='h1' size='lg' letterSpacing='-.1rem'>
    <Box as='span' d={{ base: 'none', sm: 'inline' }}>
      Macau School
    </Box>
    <Box as='span' d={{ base: 'inline', sm: 'none' }}>
      MS
    </Box>
    <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
      {' '}學不停
    </Box>
  </Heading>
)

export default Logo
