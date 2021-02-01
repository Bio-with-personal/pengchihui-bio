import { Formik, Form, Field } from 'formik'
import { useRef, useState } from 'react'
import Router from 'next/router'
import {
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  // AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Text,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/core'

import ToastMessage from './toastMessage'

const Archived = (props) => {
  const cancelRef = useRef()
  const [isOpen, setIsOpen] = useState()
  const toast = useToast()
  const onClose = () => (setIsOpen(false))

  // const onConfirm = (arcInfo, arcHandle, url, success) => {
  //   arcHandle({
  //     variables: arcInfo
  //   }).then((val) => {
  //     success ? success(val, () => { setIsOpen(false) }) : setIsOpen(false)
  //     if (url) Router.replace(url.href, url.as)
  //   }).catch((error) => {
  //     ToastMessage({
  //       title: props.toastTitle,
  //       message: error.message,
  //       toast
  //     })
  //   })
  // }

  return (
    <>
      <Box as='span' display={{ base: 'block', sm: 'block', md: 'inline-block' }} {...props.style} onClick={() => setIsOpen(true)}>
        {props.children}
      </Box>

      {
        !!isOpen && (
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {props.title}
              </AlertDialogHeader>

              <AlertDialogBody>
                <Text>{props.content}</Text>
                <Formik
                  initialValues={{
                    archivedReason: '畢業'
                  }}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    props.arcHandle({
                      variables: { input: { schooluserId: props.arcInfo, archivedReason: values.archivedReason } }
                    }).then((val) => {
                      setSubmitting(false)
                      props.onSuccess ? props.onSuccess(() => { setIsOpen(false) }) : setIsOpen(false)
                      if (props.backurl) Router.replace(props.backurl.href, props.backurl.as)
                    }).catch((error) => {
                      ToastMessage({
                        title: props.toastTitle,
                        message: error.message,
                        toast
                      })
                    })
                  }}
                >
                  {({ isSubmitting, values, setFieldValue }) => (
                    <Form>
                      <Field name='archivedReason'>
                        {({ field, form: { touched, errors }, meta }) => (
                          <FormControl mt={4}>
                            <FormLabel>封存原因</FormLabel>
                            <RadioGroup
                              isInline spacing={4}
                              value={field.value === '畢業' || field.value === '轉學'
                                ? field.value
                                : '其它'}
                              onChange={(e) => { setFieldValue('archivedReason', e.target.value) }}
                            >
                              <Radio value='畢業'>畢業</Radio>
                              <Radio value='轉學'>轉學</Radio>
                              <Radio value='其它'>其它</Radio>
                            </RadioGroup>
                            <Input isDisabled={field.value === '畢業' || field.value === '轉學'} placeholder='出生地點' {...field} />
                          </FormControl>
                        )}
                      </Field>
                      <Box
                        as='footer'
                        d='flex'
                        justifyContent='flex-end'
                        py={6}
                        px={5}
                      >
                        <Button
                          h={{ base: '36px', md: '40px' }}
                          fontSize={{ base: '14px', md: '16px' }}
                          ref={cancelRef} onClick={onClose}
                        >
                          取消
                        </Button>
                        <Button
                          variantColor='blue'
                          h={{ base: '36px', md: '40px' }}
                          fontSize={{ base: '14px', md: '16px' }}
                          ml={3}
                          type='submit'
                          isLoading={isSubmitting}
                        >
                          {props.buttonText}
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </AlertDialogBody>

              {/* <AlertDialogFooter>
                <Button
                  h={{ base: '36px', md: '40px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  ref={cancelRef} onClick={onClose}
                >
                  取消
                </Button>
                <Button
                  variantColor='blue'
                  h={{ base: '36px', md: '40px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  onClick={() => {
                    onConfirm(
                      props.arcInfo,
                      props.arcHandle,
                      props.backurl,
                      props.onSuccess
                    )
                  }} ml={3}
                >
                  {props.buttonText}
                </Button>
              </AlertDialogFooter> */}
            </AlertDialogContent>
          </AlertDialog>
        )
      }
    </>
  )
}

export default Archived
