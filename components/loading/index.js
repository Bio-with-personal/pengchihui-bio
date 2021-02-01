import {
  Box
} from '@chakra-ui/core'

export const FlowDotLoading = (props) => {
  return (
    <Box d='flex' w='40px' justifyContent='center' {...props}>
      <div className='sk-flow'>
        <div className='sk-flow-dot' />
        <div className='sk-flow-dot' />
        <div className='sk-flow-dot' />
      </div>
      <style jsx>{`
        --sk-color: currentColor;
        --sk-size: 16px;
        .sk-flow {
          opacity: 0.25;
          display: flex;
          align-items: center;
        }
      `}
      </style>
    </Box>
  )
}
