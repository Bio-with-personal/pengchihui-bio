import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import { TableContext } from './tableContext'

// table 的 tbody
const TableBody = ({ children, ...props }) => {
  return (
    <Box as='tbody' {...props}>
      <TableContext.Provider
        value={{ parent: 'TableBody' }}// 在 TableBody 下的所有组件都能共享到 value 里的数据
      >
        {children}
      </TableContext.Provider>
    </Box>
  )
}
export default TableBody
