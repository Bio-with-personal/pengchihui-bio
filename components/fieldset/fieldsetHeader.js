import React from 'react'
import {
  Heading
} from '@chakra-ui/core'

// 學校專業的 title 底綫模塊
const Fieldset = (props) => {
  return (
    <Heading
      // fontSize={{ base: '20px', sm: '25px', md: '35px' }}
      textAlign='center'
      bg={props.bg || props.background}
      color='black'
      zIndex='1'
      lineHeight='40px'
      p='0 5px'
      {...props}
    />
  )
}

export default Fieldset
