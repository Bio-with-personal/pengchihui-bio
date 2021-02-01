import {
  Box
} from '@chakra-ui/core'

import Layout from 'components/layout'

const EditBgLayout = (props) => {
  return (
    <Layout>
      <Box
        position='absolute'
        top='0px'
        bottom='0px'
        left='0px'
        right='0px'
        overflow='hidden'
        display='flex'

        w='100%'
        mt='2px'
        mx='auto'
        bg='white'
        maxWidth='1280px'
        borderRadius='4px 4px 0 0'
        px={{ base: 0, sm: 10, md: 16 }}
      >
        <Box pt='1px' w='100%' display='flex'>
          <Box mt={32} display='flex' flex='1'>
            {props.children}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default EditBgLayout

const TabPanelContent = (props) => {
  return (
    <Box
      position='absolute'
      top='0px'
      bottom='0px'
      left='0px'
      right='0px'
      display='flex'
      overflow='hidden'
      flexDirection='column'
      mt={10}
    >
      <Box flex='1' overflowY='auto'>
        {props.children}
      </Box>
    </Box>
  )
}
export { TabPanelContent }
