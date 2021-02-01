import React from 'react'
import { Box } from '@chakra-ui/core'

import { TableContext } from './tableContext'

// table 的 thead
const TableHead = ({ children, ...props }) => {
  return (
    <Box as='thead' {...props}>
      <TableContext.Provider
        value={{ parent: 'TableHead' }}// 在 TableHead 下的所有组件都能共享到 value 里的数据
      >
        {children}
      </TableContext.Provider>
    </Box>
  )
}

export default TableHead
