import {
  Footer,
  Flex,
  Box,
  Heading,
  Text
} from 'viviui'

const homeFooter = () => {
  return (
    <Footer>
      <Flex flexWrap='wrap'>
        <Box w={{ base: '100%', md: '100%' }} borderLeftWidth={{ base: 0, md: 0 }} pl={{ base: 0, md: 0 }} mb={4}>
          <Heading as='p' size='lg' letterSpacing='-.1rem' mb={5}>
            <Box as='span'>
              Macau School 學不停
            </Box>
          </Heading>
          <Text mb={2}>
            Macau School 的宗旨為在生活中不停學習。提供線上學習平台，線上學校管理系統。通過視頻課程，在您的瀏覽器中舒適地教授課程，為澳門學生而設。
          </Text>
        </Box>
        <Box d={{ base: 'block', md: 'block' }}>
          © 2020 Macau School. Crafted lovingly in Macau.
        </Box>
      </Flex>
    </Footer>
  )
}

export default homeFooter
