import {
  Box
} from '@chakra-ui/core'

const fieldset = ({ style, title, background, children, ...props }) => {
  return (
    <>
      <Box
        as='header'
        my='20px'
        position='relative'
        textAlign='center'
        className='header-line'
        style={style}
        mx='1%'
        w='98%'
      >
        <Box
          as='span'
          px='10px'
          fontSize={{ base: '20px', sm: '25px', md: '35px' }}
          fontWeight='bold'
          d={title ? '' : 'none'}
          background={background || '#f6f2ef'}
          position='relative'
          zIndex='1'
          {...props}
        >
          {title}
        </Box>
        {children}
      </Box>
      <style jsx>
        {`
          :global(.header-line:before){
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            width: 100%;
            border-bottom: 1px solid #CBD5E0;
            z-index: 0;
          }
        `}
      </style>
    </>
  )
}

export default fieldset
