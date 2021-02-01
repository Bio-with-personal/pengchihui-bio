import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// 定位左边的数据
const LeftFieldset = (props) => {
  return (
    <Box
      position=' absolute'
      top='0'
      left=' 0'
      {...props}
    />
  )
}

export default LeftFieldset
