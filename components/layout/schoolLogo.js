import {
  Box,
  Heading
} from 'viviui'

const Logo = () => (
  <Heading as='h1' size='lg' letterSpacing='-.1rem'>
    <Box as='span' d={{ base: 'none', sm: 'inline' }}>
      SCHOOL
    </Box>
    <Box as='span' d={{ base: 'inline', sm: 'none' }}>
      SCH
    </Box>
  </Heading>
)

export default Logo
