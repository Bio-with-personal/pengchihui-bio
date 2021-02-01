import { useRef, useState } from 'react'
import Router from 'next/router'
import {
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast
} from '@chakra-ui/core'

import ToastMessage from './toastMessage'

const DelAlert = (props) => {
  const cancelRef = useRef()
  const [isOpen, setIsOpen] = useState()
  const toast = useToast()
  const onClose = () => (setIsOpen(false))

  const onConfirm = (delInfo, delHandle, url, success) => {
    delHandle({
      variables: delInfo
    }).then((val) => {
      success ? success(val, () => { setIsOpen(false) }) : setIsOpen(false)
      if (url) Router.replace(url.href, url.as)
    }).catch((error) => {
      ToastMessage({
        title: props.toastTitle,
        message: error.message,
        toast
      })
    })
  }

  return (
    <>
      <Box as='span' display={{ base: 'block', sm: 'block', md: 'inline-block' }} {...props.style} onClick={() => !props.isArchive ? setIsOpen(true) : setIsOpen(false)}>
        {props.children}
      </Box>
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

          <AlertDialogBody data-cy='delete-body-text'>
            {props.content}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              h={{ base: '36px', md: '40px' }}
              fontSize={{ base: '14px', md: '16px' }}
              ref={cancelRef} onClick={onClose}
            >
              取消
            </Button>
            <Button
              data-cy='btn-alert-delete'
              variantColor='red'
              h={{ base: '36px', md: '40px' }}
              fontSize={{ base: '14px', md: '16px' }}
              onClick={() => {
                onConfirm(
                  props.delInfo,
                  props.delHandle,
                  props.backurl,
                  props.onSuccess
                )
              }} ml={3}
            >
              删除
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DelAlert
