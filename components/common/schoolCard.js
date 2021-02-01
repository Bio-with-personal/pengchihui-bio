import {
  Box
} from '@chakra-ui/core'
import NextLink from 'next/link'

const schoolCard = (props) => {
  return (
    <>
      <Box
        as='article'
        boxSizing='border-box'
        w={{ base: '46%', sm: '31%', md: '23%', lg: '23%' }}
        // w={{ base: '50%', sm: '30%' }}
        // m={{ base: 0, sm: '3%' }}
        bg='white'
        d='inline-block'
        borderRadius='10px'
        position='relative'
        // mr='20px'
        // mb='20px'
        m={{ base: '2%', sm: '1%', md: '1%', lg: '1%' }}
        shadow='2px 2px 6px 0px #b9b9b9'
        className='home-card-item'
      >
        <NextLink
          href={props.href ? props.href : '/'}
          as={props.as}
          passHref
        >
          <Box
            as='a'
            className='card-link'
          >
            <Box
              as='div'
              p='15px'
              className='card-content'
            >
              <Box as='div'>
                <Box
                  as='h2'
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  fontWeight='bold'
                >
                  {props.title}
                </Box>
                <Box
                  as='p'
                  wordBreak='break-all'
                  fontSize='13px'
                >
                  {props.content ? props.content : ''}
                </Box>
              </Box>
            </Box>
          </Box>
        </NextLink>
        {/* <Box as='div' position='absolute' top='0px' /> */}
      </Box>
      <style jsx global>
        {`
          .home-card-item:before{
            content: '';
            display: block;
            padding-top: 55%;
          }
          .card-link,
          .card-content{
            position:absolute;
            top:0px;
            left:0px;
            right:0px;
            bottom:0px;
            text-align: left;
            overflow: hidden;
            word-wrap:break-word;
          }
        `}
      </style>
    </>
  )
}

export default schoolCard
