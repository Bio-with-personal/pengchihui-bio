import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// 定位右边的数据
const RightFieldset = (props) => {
  return (
    <Box
      position=' absolute'
      top='0'
      right=' 0'
      {...props}
    />
  )
}

export default RightFieldset
