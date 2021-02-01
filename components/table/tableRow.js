import React from 'react'
import { Box } from '@chakra-ui/core'

// 包装th或者td，让他们不会换行的 tr 标签
const TableRow = ({ children, ...props }) => {
  return (
    <Box
      as='tr'
      h='40px'
      // fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default TableRow
