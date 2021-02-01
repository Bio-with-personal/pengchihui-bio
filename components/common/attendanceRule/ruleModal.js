import { memo } from 'react'
import { useRouter } from 'next/router'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Tag,
  TagCloseButton
} from '@chakra-ui/core'
import _ from 'lodash'

import { useQuery } from '@apollo/react-hooks'
import { getSchoolClassesBySchoolIdQuery } from 'shared/graphql/queries/school/getSchool'

const RuleModal = ({ isOpen, onClose, values, setFieldValue }) => {
  const router = useRouter()
  const { schoolId = '' } = router.query

  const { data } = useQuery(getSchoolClassesBySchoolIdQuery, {
    variables: { id: schoolId },
    fetchPolicy: 'network-only'
  })
  const schoolClasses = _.get(data, 'school.currentSchoolDashboard.classes') || []

  return (

    <Modal size='lg' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h='100%' my={0} background='rgba(255, 255, 255, 0.9)'>
        <ModalHeader>選擇班級</ModalHeader>
        <ModalCloseButton size='lg' />
        <ModalBody d='flex' overflow='hidden' flexDirection='column'>
          <Box flex='1' overflow='auto' d='flex' flexDirection='column'>
            <Box my={3}>
              {/* 顯示被tag的 */}
              <Box mx='23px' d='flex' flexWrap='wrap'>
                {/* 班級的tags */}
                {
                  Object.keys(values.clsIds).map(cls => {
                    if (!values.clsIds[cls]) return null
                    return (
                      <Box key={cls} mx='2px' my='3px'>
                        <Tag rounded='full' variant='solid' variantColor='cyan' fontSize={{ base: '13px', md: '16px' }} style={{ whiteSpace: 'nowrap' }}>
                          {values.clsIds[cls]}
                          <TagCloseButton
                            type='Button'
                            onClick={() => {
                              setFieldValue('clsIds', _.omit(values.clsIds, [cls]))
                            }}
                          />
                        </Tag>
                      </Box>
                    )
                  })
                }
              </Box>
            </Box>

            <Box minH='200px'>
              <Text px={2}>班級列表</Text>
              {!!schoolClasses.length && schoolClasses.map(cls => {
                if (values.clsIds[cls.id]) return null
                return (
                  <Button
                    ml={3}
                    mt={2}
                    key={cls.id}
                    onClick={() => {
                      setFieldValue(`clsIds.${cls.id}`, cls.name)
                    }}
                  >
                    {cls.name}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default memo(RuleModal)
