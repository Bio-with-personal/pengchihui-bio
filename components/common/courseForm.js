import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Divider,
  Heading,
  Link
} from '@chakra-ui/core'

import DeleteAlert from 'components/common/deleteAlert'
// import ArchivedAlert from 'components/common/archivedAlert'
import NextLink from 'next/link'

const validateName = (value) => {
  return (!value) ? '該選項不可為空！' : ''
}

const CourseForm = (props) => {
  const creditsList = []
  const termList = []
  if (props.initialValues.type === 'elective' || props.initialValues.type === 'required') {
    for (let creditIndex = 0; creditIndex < 5.5; creditIndex += 0.5) { creditsList.push(creditIndex) }
  }
  for (let termIndex = 0; termIndex <= 5; ++termIndex) { termList.push(termIndex) }

  const courseType = (props.initialValues.type === 'required')
  const [showCls] = useState(courseType)

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        if (props.submitHandle) {
          props.submitHandle(values, showCls, setSubmitting, setFieldError)
        }
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form: { touched, errors }, meta }) => (
              <FormControl mt={4} isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor='course-name'>課程名稱</FormLabel>
                <Input id='course-name' {...field} isDisabled={!!props.archivedAt} />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='englishName'>
            {({ field, form: { touched, errors }, meta }) => (
              <FormControl mt={4}>
                <FormLabel htmlFor='english-name'>課程英文名稱</FormLabel>
                <Input id='english-name' {...field} isDisabled={!!props.archivedAt} />
              </FormControl>
            )}
          </Field>
          <Field name='slug' validate={validateName}>
            {({ field, form: { touched, errors }, meta }) => (
              <FormControl mt={4} isInvalid={errors.slug && touched.slug}>
                <FormLabel htmlFor='slug'>課程編碼</FormLabel>
                <Input id='slug' {...field} isDisabled={!!props.archivedAt} />
                <FormErrorMessage>{errors.slug}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {
            (props.initialValues.type === 'elective' || props.initialValues.type === 'required') ? (
              <Field name='credits'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor='number-of-course-credits'> 課程單位數</FormLabel>
                    <Select
                      id='credits'
                      defaultValue={props.initialValues.credits || 0}
                      onChange={values => { setFieldValue('credits', values.target.value) }}
                      isDisabled={!!props.archivedAt}
                    >
                      {
                        creditsList.map((item, index) => (
                          <option key={index} value={item}>{item}</option>
                        ))
                      }
                    </Select>
                  </FormControl>
                )}
              </Field>
            ) : ''
          }

          <Field name='term'>
            {({ field, form: { touched, errors }, meta }) => (
              <FormControl mt={4}>
                <FormLabel htmlFor='number-of-semester'>課程學期數</FormLabel>
                <Select
                  id='number-of-semester'
                  defaultValue={props.initialValues.term || 0}
                  onChange={values => { setFieldValue('term', values.target.value) }}
                  isDisabled={!!props.archivedAt}
                >
                  {
                    termList.map((item, index) => (
                      <option key={index} value={item}>{(item === 0 ? '全年' : item)}</option>
                    ))
                  }
                </Select>
              </FormControl>
            )}
          </Field>
          <Box
            // display={{ base: 'block', sm: 'block', md: 'flex' }}
            d='flex'
            justifyContent={(props.type !== 'add' ? 'space-between' : 'center')}
            flexDirection={{ base: 'column-reverse', md: 'initial' }}
          >
            {
              props.prevurl && (
                <NextLink
                  href={props.prevurl.href}
                  as={props.prevurl.as}
                >
                  <Link _hover={{ textDecoration: 'none' }}>
                    <Button
                      backgroundColor='#c2c2c2'
                      minW={{ base: '100%', sm: '100%', md: '200px' }}
                      mr={3}
                      mt={8}
                      color='white'
                      _hover={{
                        backgroundColor: '#b8b8b8'
                      }}
                      _focus={{
                        boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
                      }}
                    >
                      返回
                    </Button>
                  </Link>
                </NextLink>
              )
            }

            <Button
              variantColor='blue'
              minW={{ base: '100%', sm: '100%', md: '200px' }}
              mr={3}
              mt={8}
              type='submit'
              isLoading={isSubmitting}
              isDisabled={!!props.archivedAt}
            >
              {(props.type === 'add') ? '添加' : '確認'}
            </Button>
          </Box>

          {
            (props.type !== 'add') && (
              <>
                {/* <Box border='1px solid #63B3ED' background='#CEEDFF' rounded={4} mt={20} p={5}>
                  <Box>
                    <Heading as='h4' size='md'>
                      {props.unblockOrArchive}這個課程
                    </Heading>
                    <Box mt={4}>{props.unblockOrArchive}這個課程</Box>
                  </Box>
                  <Divider />
                  <Box
                    textAlign='right'
                    pr={3}
                    pt={4}
                  >
                    <ArchivedAlert
                      title={`${props.unblockOrArchive}提示`}
                      toastTitle={`${props.unblockOrArchive}成員錯誤`}
                      arcHandle={props.arcinfo.arcHandle}
                      arcInfo={props.arcinfo.variables}
                      content={props.arcinfo.delmsg}
                      backurl={props.arcinfo.backurl}
                      buttonText={props.unblockOrArchive}
                    >
                      <Button
                        backgroundColor='#319795'
                        minW={{ base: '100%', md: '180px' }}
                        color='white'
                        _hover={{
                          backgroundColor: '#2C7A7B'
                        }}
                        _focus={{
                          boxShadow: '0 0 0 3px rgba(66,153,225,0.6)'
                        }}
                      >
                        {props.unblockOrArchive}
                      </Button>
                    </ArchivedAlert>
                  </Box>
                </Box> */}
                <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={10} p={5}>
                  <Box>
                    <Heading as='h4' size='md'>
                      删除這個課程
                    </Heading>
                    <Box mt={4}>删除課程後后，將會清空該課程成員，該操作不能還原，請謹慎操作！</Box>
                  </Box>
                  <Divider />
                  <Box
                    textAlign='right'
                    pr={3}
                    pt={4}
                  >
                    <DeleteAlert
                      title='刪除提示'
                      content={props.delinfo.delmsg}
                      delInfo={props.delinfo.variables}
                      delHandle={props.delinfo.delHandle}
                      backurl={props.delinfo.backurl}
                      toastTitle='刪除課程錯誤'
                    >
                      <Button
                        variantColor='red'
                        minW={{ base: '100%', md: '180px' }}
                        isDisabled={!!props.archivedAt}
                      >
                        删除
                      </Button>
                    </DeleteAlert>
                  </Box>
                </Box>
              </>
            )
          }
        </Form>
      )}
    </Formik>
  )
}

const OptionItem = (props) => {
  return (
    <option value={props.id}>
      {props.name}
    </option>
  )
}
export { OptionItem }
export default CourseForm
