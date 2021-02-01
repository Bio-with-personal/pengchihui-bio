import React, { useContext } from 'react'
import { Box, Tooltip } from '@chakra-ui/core'

import { TableContext } from './tableContext'

// th 或者 td
const TableCell = ({ label, children, ...props }) => {
  // 从组件 context 里取值
  const { parent } = useContext(TableContext)
  // 使用三元表达式判断它是否等于 TableHead， 再去赋值。
  const Component = (parent === 'TableHead' ? 'th' : 'td')
  return (
    <Box
      as={Component}
      border='1px #e6e6e6 solid'
      // wordBreak='break-word'
      {...props}
    >
      {
        // 有label时，就会执行这一段
        !!label && (
          <Tooltip label={label} wordBreak='break-word' placement='auto-start' zIndex='10000'>
            <Box as='span' d='inline-block'>
              {children}
            </Box>
          </Tooltip>
        )
      }

      {
        // 只有 children 且没有 label 时，执行这段代码
        (!!children && !label) && (children)
      }
    </Box>
  )
}
export default TableCell
