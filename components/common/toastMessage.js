const ToastMessage = ({ toast, title, message, status = 'error', timeout = 3000, position = 'top' }) => {
  let cleanedMessage = message
  if (message.indexOf('GraphQL error: ') >= 0) {
    cleanedMessage = message.replace('GraphQL error: ', '')
  }
  // /\{.*\}/g.test(message)
  toast({
    title,
    description: cleanedMessage,
    status,
    duration: timeout,
    isClosable: true,
    position
  })
}

export default ToastMessage
