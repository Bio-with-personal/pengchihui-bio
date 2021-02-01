import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

// 用戶信息的 component ，類型加名字加職業
const LabelName = ({ label, text, labelProps, children, ...props }) => {
  return (
    <Box as='div' d='flex' lineHeight='25px' {...props}>
      {!!label && (
        <Box d='flex' flexShrink='0' {...labelProps}>
          <Text w='100%' fontWeight='600' className='textlabel-align-last'>
            {label}
          </Text>
          :
        </Box>
      )}
      <Text wordBreak='break-word'>{text}</Text>
      {children}
      <style jsx global>
        {
          // chakra 没有 text-align-last 样式，要利用 css 样式来给它定义文本字体均匀分布
          `
          .textlabel-align-last{
            text-align-last: justify;
          }
        `
        }
      </style>
    </Box>
  )
}

export default LabelName
