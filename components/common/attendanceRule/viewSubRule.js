import {
  Box,
  Text,
  Input,
  IconButton,
  Flex,
  Checkbox,
  Button
}
  from 'viviui'
import DatePicker from 'react-datepicker'

import Container from 'components/container'

const ViewSubRule = () => {
  return (
    <Container mt='20px' border='1px solid #CBD5E0' position='relative' lineHeight='32px'>
      <Box p='10px 0px'>
        <Flex align='center'>
          {/* 次規則名稱  */}
          <Box d='flex' w='48%'>
            <Text mr={2} fontWeight='bold'>
              次規則名稱:
            </Text>
            <Text h='32px' lineHeight='32px'>不准缺課</Text>
          </Box>
          <Box fontWeight='bold'>
            <Checkbox
              // isChecked={values.symptom === symptomData.englishName}
              mx={5}
              my={2}
            >
              豁免時段
            </Checkbox>
          </Box>
        </Flex>
        {/* 開始時間 結束時間 */}
        <Box d='flex' mt='10px'>
          <Box d='flex' my={1} w='50%'>
            <Text mr={2} fontWeight='bold'>
              開始日期:
            </Text>
            <Text h='32px' lineHeight='32px'>2020-9-12</Text>

          </Box>
          <Box d='flex' my={1}>
            <Text mr={2} fontWeight='bold'>
              結束日期:
            </Text>
            <Text h='32px' lineHeight='32px'>2020-6-14</Text>
          </Box>
        </Box>
        {/* 遲到次數 曠課次數 */}
        <Box d='flex' mt='10px'>
          <Box d='flex' my={1} w='50%'>
            <Text mr={2} fontWeight='bold'>
              遲到次數:
            </Text>
            <Text h='32px' lineHeight='32px'>3</Text>
          </Box>
          <Box d='flex' my={1}>
            <Text mr={2} fontWeight='bold'>
              曠課次數:
            </Text>
            <Text h='32px' lineHeight='32px'>5</Text>
          </Box>
        </Box>
        {/* 放學打卡時段 */}
        <Box fontWeight='bold'>
          <Checkbox
            // isChecked={values.symptom === symptomData.englishName}
            my={2}
          >
            放學打卡時段
          </Checkbox>
        </Box>
      </Box>
    </Container>
  )
}
export default ViewSubRule
