import {
  Box,
  Spinner
} from '@chakra-ui/core'

import Layout from 'components/layout'

const LoadingLayout = () => {
  return (
    <Layout>
      <Box mt={16} py={4}>
        <LoadingItem />
      </Box>
    </Layout>
  )
}

const LoadingItem = () => {
  return (
    <Box textAlign='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='lg'
      />
    </Box>
  )
}
const Loading = (props) => {
  return (props.layout ? <LoadingLayout /> : <LoadingItem />)
}

export default Loading
