import {
  Box,
  Text,
  Flex
} from 'viviui'

import Container from 'components/container'
import LabelName from 'components/labelName'

import format from 'date-fns/format'

const ViewRule = ({ attendanceRule, ...props }) => {
  const { classes } = attendanceRule
  return (
    <Container d='flex' flexDirection='column' {...props}>
      {/* 規則名稱  */}
      <Flex alignItems='center' my={1}>
        <LabelName label='規則名稱' w='100px' labelProps={{ fontSize: '17px' }} />
        <Text>{attendanceRule.remarks}</Text>
      </Flex>

      {/* 開始日期  結束日期 */}
      <Flex justifyContent='space-between'>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='開始日期' w='100px' labelProps={{ fontSize: '17px' }} />
          <Text>{attendanceRule.startDate ? format(new Date(attendanceRule.startDate), 'yyyy-MM-dd') : ''}</Text>
        </Box>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='結束日期' w='100px' labelProps={{ fontSize: '17px' }} />
          <Text>{attendanceRule.startDate ? format(new Date(attendanceRule.startDate), 'yyyy-MM-dd') : ''}</Text>
        </Box>
      </Flex>

      {/* 規則對象 規則時段 */}
      <Flex justifyContent='space-between'>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='規則對象' w='100px' labelProps={{ fontSize: '17px' }} />
          {!!classes.length && classes.map(cls => (
            <Text key={cls.id}>{cls.name}</Text>
          ))}
        </Box>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='優先級別' w='100px' labelProps={{ fontSize: '17px' }} />
          <Text>{attendanceRule.priority}</Text>
        </Box>
      </Flex>

      {/* 適用星期日子 */}
      <Flex>
        <LabelName label='適用星期日子' w='100px' labelProps={{ fontSize: '17px' }} />
        <Text>
          {attendanceRule.days}
        </Text>
      </Flex>

      {/* 規則 */}
      <Flex>
        <LabelName label='規則' w='100px' labelProps={{ fontSize: '17px' }} />
        <Text>{attendanceRule.isExempt ? '豁免規則' : '無規則'}</Text>
      </Flex>
      {/* 為了去掉點擊是會有黑色邊框 */}
      <style jsx global>
        {`
        .input{
          width: 130px;
          text-align:center;
          cursor:pointer;
        }
        .date-picker-content button:focus,
        .input:focus{
          outline: none;
        }
        .css-6qsuox{
          font-size:none!important
        }
      `}
      </style>
    </Container>

  )
}
export default ViewRule
