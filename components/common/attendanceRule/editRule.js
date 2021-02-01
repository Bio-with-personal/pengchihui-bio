import { Field } from 'formik'
import {
  Box,
  Input,
  Flex,
  Select,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  useDisclosure
} from 'viviui'
import DatePicker from 'react-datepicker'

import Container from 'components/container'
import LabelName from 'components/labelName'

import RuleModal from './ruleModal'

const days = ['週一', '週二', '週三', '週四', '週五', '週六', '週日']
const prioritys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const EditRule = ({ setFieldValue, values, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container d='flex' flexDirection='column' {...props}>
      {/* 規則名稱  */}
      <Field name='remarks'>
        {({ field, form: { touched, errors }, meta }) => (
          <Flex alignItems='center' my={1}>
            <LabelName label='規則名稱' w='100px' labelProps={{ fontSize: '17px' }} />
            <Input placeholder='請輸入' {...field} />
          </Flex>
        )}
      </Field>

      {/* 開始日期  結束日期 */}
      <Flex justifyContent='space-between'>
        <Box d='flex' my={1}>
          <LabelName label='開始日期' w='100px' labelProps={{ fontSize: '17px' }} />
          <Box className='date-picker-content' border='1px solid #CBD5E0'>
            <DatePicker
              id='startDate'
              className='input'
              dateFormat='yyyy-MM-dd'
              selected={values.startDate}
              onChange={date => setFieldValue('startDate', date)}
              autoComplete='off'
            />
          </Box>
        </Box>
        <Box d='flex' my={1}>
          <LabelName label='結束日期' w='100px' labelProps={{ fontSize: '17px' }} />
          <Box className='date-picker-content' border='1px solid #CBD5E0'>
            <DatePicker
              id='endDate'
              className='input'
              dateFormat='yyyy-MM-dd'
              selected={values.endDate}
              onChange={date => setFieldValue('endDate', date)}
              autoComplete='off'
            />
          </Box>
        </Box>
      </Flex>

      {/* 規則對象 規則時段 */}
      <Flex justifyContent='space-between'>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='規則對象' w='100px' labelProps={{ fontSize: '17px' }} />
          <Button w='130px' variant='outline' onClick={onOpen}>規則對象</Button>
          {!!isOpen && (
            <RuleModal
              isOpen={isOpen}
              onClose={onClose}
              setFieldValue={setFieldValue}
              values={values}
            />
          )}
        </Box>
        <Box d='flex' alignItems='center' my={1}>
          <LabelName label='優先級別' w='100px' labelProps={{ fontSize: '17px' }} />
          <Select
            w='130px'
            cursor='pointer'
            onChange={(e) => setFieldValue('priority', parseInt(e.currentTarget.value))}
          >
            {prioritys.map((priority, i) => (
              <option value={i + 1} key={i}>{priority}</option>
            ))}
          </Select>
        </Box>
      </Flex>

      {/* 適用星期日子 */}
      <Box>
        <LabelName label='適用星期日子' w='100px' labelProps={{ fontSize: '17px' }} />
        <CheckboxGroup
          // variantColor='green'
          isInline
          spacing={7}
          value={values.days.map(x => x.toString())}
          onChange={value => setFieldValue('days', [...value])}
        >
          {days.map((day, i) => {
            return (
              <Checkbox
                mx={5}
                my={2}
                value={(i + 1).toString()}
                key={i}
              >
                {day}
              </Checkbox>
            )
          })}
        </CheckboxGroup>
      </Box>

      {/* 優先等級 */}
      <Stack spacing={10} isInline>
        <Checkbox
          mx={5}
          my={2}
        >
          常駐規則
        </Checkbox>
        <Checkbox
          isChecked={values.isExempt}
          mx={5}
          my={2}
          onChange={() => {
            if (values.isExempt) {
              setFieldValue('isExempt', false)
            } else {
              setFieldValue('isExempt', true)
            }
          }}
        >
          豁免規則
        </Checkbox>
      </Stack>
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
export default EditRule
