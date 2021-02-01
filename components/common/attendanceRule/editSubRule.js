import {
  Box,
  Text,
  Input,
  IconButton,
  Flex,
  Checkbox
}
  from 'viviui'
import DatePicker from 'react-datepicker'

import Container from 'components/container'
import LabelName from 'components/labelName'

const EditSubRule = ({ setFieldValue, values, subAttendanceRulesOnClick, subAttendanceRule, type }) => {
  if (!values.subAttendanceRules[type][subAttendanceRule]) return null
  const {
    index,
    remarks,
    startTime,
    endTime,
    lates,
    absenteeisms,
    isExempt,
    isAfterSchool
  } = values.subAttendanceRules[type][subAttendanceRule]

  const startAt = new Date()
  if (typeof startTime === 'string') {
    startAt.setHours(startTime.split(':')[0])
    startAt.setMinutes(startTime.split(':')[1])
    startAt.setSeconds(startTime.split(':')[2])
  }

  const endAt = new Date()
  if (typeof endTime === 'string') {
    endAt.setHours(endTime.split(':')[0])
    endAt.setMinutes(endTime.split(':')[1])
    endAt.setSeconds(endTime.split(':')[2])
  }

  return (
    <Container mt='20px' border='1px solid #CBD5E0' position='relative'>
      {/* 刪除按鈕 */}
      <Box position='absolute' right='5px' top='5px'>
        <IconButton
          icon='delete'
          onClick={() => {
            subAttendanceRulesOnClick(index)
          }}
        />
      </Box>

      <Box mt={10}>
        <Flex justifyContent='space-between'>
          <Box my={1}>
            <Flex alignItems='center' my={1}>
              <LabelName label='次規則名稱' labelProps={{ fontSize: '17px', w: '120px' }} />
              <Input
                value={remarks}
                placeholder='請輸入'
                onChange={(e) => {
                  setFieldValue(`subAttendanceRules.${type}.${index}`, {
                    ...values.subAttendanceRules[type][subAttendanceRule],
                    remarks: e.target.value
                  })
                }}
              />
            </Flex>

            <Flex alignItems='center'>
              <LabelName label='開始日期' labelProps={{ fontSize: '17px', w: '120px' }}>
                <Box className='date-picker-content' border='1px solid #CBD5E0'>
                  <DatePicker
                    id='startTime'
                    className='date-input'
                    dateFormat='HH:mm'
                    selected={typeof startTime === 'string' ? startAt : startTime}
                    onChange={date => {
                      console.log(date)
                      setFieldValue(`subAttendanceRules.${type}.${index}`, {
                        ...values.subAttendanceRules[type][subAttendanceRule],
                        startTime: date
                      })
                    }}
                    timeIntervals={5}
                    showTimeSelect
                    showTimeSelectOnly
                    autocomplete='nope'
                  />
                </Box>
              </LabelName>
            </Flex>

            <Flex alignItems='center' my={1}>
              <LabelName label='遲到次數' labelProps={{ fontSize: '17px', w: '120px' }} />
              <Input
                value={lates}
                placeholder='請輸入'
                onChange={(e) => {
                  setFieldValue(`subAttendanceRules.${type}.${index}`, {
                    ...values.subAttendanceRules[type][subAttendanceRule],
                    lates: e.target.value
                  })
                }}
              />
            </Flex>

            <Flex>
              <LabelName label='規則時段' labelProps={{ fontSize: '17px', w: '120px' }} />
              <Text>上午</Text>
            </Flex>
          </Box>

          <Box my={1}>
            <Box lineHeight='40px'>
              <Checkbox
                isChecked={isExempt}
                onChange={e => {
                  setFieldValue(`subAttendanceRules.${type}.${index}`, {
                    ...values.subAttendanceRules[type][subAttendanceRule],
                    isExempt: e.target.checked
                  })
                }}
              >
                豁免時段
              </Checkbox>
            </Box>

            <Flex alignItems='center'>
              <LabelName label='結束日期' labelProps={{ fontSize: '17px', w: '120px' }}>
                <Box className='date-picker-content' border='1px solid #CBD5E0'>
                  <DatePicker
                    id='endTime'
                    className='date-input'
                    dateFormat='HH:mm'
                    selected={typeof endTime === 'string' ? endAt : endTime}
                    onChange={date => {
                      setFieldValue(`subAttendanceRules.${type}.${index}`, {
                        ...values.subAttendanceRules[type][subAttendanceRule],
                        endTime: date
                      })
                    }}
                    timeIntervals={5}
                    showTimeSelect
                    showTimeSelectOnly
                    autocomplete='nope'
                  />
                </Box>
              </LabelName>
            </Flex>

            <Flex alignItems='center' my={1}>
              <LabelName label='曠課節數' labelProps={{ fontSize: '17px', w: '120px' }} />
              <Input
                value={absenteeisms}
                placeholder='請輸入'
                onChange={e => {
                  setFieldValue(`subAttendanceRules.${type}.${index}`, {
                    ...values.subAttendanceRules[type][subAttendanceRule],
                    absenteeisms: e.target.value
                  })
                }}
              />
            </Flex>

            <Box lineHeight='40px'>
              <Checkbox
                isChecked={isAfterSchool}
                onChange={e => {
                  setFieldValue(`subAttendanceRules.${type}.${index}`, {
                    ...values.subAttendanceRules[type][subAttendanceRule],
                    isAfterSchool: e.target.checked
                  })
                }}
              >
                放學打卡時段
              </Checkbox>
            </Box>
          </Box>
        </Flex>
      </Box>
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
          font-size:none !important
        }
        .date-input:focus{
          outline: none;
        }
        .react-datepicker-wrapper,
        .react-datepicker__input-container,
        .react-datepicker__input-container input {
            text-align: center;
            display: block;
            width: 100%;
        }
      `}
      </style>
    </Container>
  )
}
export default EditSubRule
