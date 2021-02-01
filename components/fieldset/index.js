import React, { Children } from 'react'
import {
  Box,
  Heading,
  Flex
} from '@chakra-ui/core'

import Container from '../container'

import LeftFieldset from './leftFieldset'
import RightFieldset from './rightFieldset'
import FieldsetHeader from './fieldsetHeader'

// 线加 title 标题
const Fieldset = ({ Line = false, children, ...props }) => {
  let left = null
  let right = null
  let title = null
  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case LeftFieldset:
        left = c // 自定义左边数据,要使用 leftFieldset 文件才有效
        break
      case RightFieldset:
        right = c // 自定义右边数据，要使用 rightFieldset 文件才有效
        break
      case FieldsetHeader:
        title = c // 自定义title数据，要使用 fieldsetHeader 文件才有效
        break
      default:
        chil.push(c)
    }
  })

  return (
    <Container
      pb={4}
      maxW='960px'
      bg={props.bg || props.background}
      {...props}
    >
      <Box
        position='relative'
        width='full'
        textAlign='center'
        my='20px'
        bg={props.bg || props.background}
      // {...props}
      >
        {left}
        <Flex justify='center' align='center'>
          {!Line && (
            <Box borderBottom='1px solid #aaa6a6' w='100%' position='absolute' zIndex='0' />
          )}
          {title}
          {chil}
        </Flex>
        {right}
      </Box>
    </Container>
  )
}

export default Fieldset
