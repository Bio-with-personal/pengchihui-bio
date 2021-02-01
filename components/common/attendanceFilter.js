import { useState, useRef, memo } from 'react'
import {
  Box,
  Input,
  RadioGroup,
  IconButton,
  Radio,
  Select
} from 'viviui'

import Container from 'components/container'
import Router, { useRouter } from 'next/router'

const AttendanceFilter = ({ select = false, setFilter, filter, hasFilter = false, ...props }) => {
  const router = useRouter()
  const searchInputRef = useRef('')
  let { section, state, search, page = 1, schoolId } = router.query

  // 如果是小於1的話，就直接為1
  page = page > 0 ? page : 1

  const Attendance = [
    { name: '未到/準時', color: '#FFFFFF' },
    { name: '遲到', color: '#FFFF00' },
    { name: '缺席', color: '#1C86EE' },
    { name: '曠課', color: '#CD6090' }
  ]

  //   # 指定上午或下午
  //   section: Int
  //   # 指定有曠課的
  //   isAbsenteeism: Boolean
  //   # 指定遲到的
  //   isLate: Boolean
  //   # 指定公假的
  //   isOfficialLeave: Boolean
  //   # 指定缺席的
  //   isAbsence: Boolean
  //   # 指定準時到校的
  //   isOnTime: Boolean

  return (
    <Container>
      {
        // 有 filter 的權限下
        !!hasFilter && (
          <>
            {/* 搜索 */}
            <Box d='flex' w={{ base: '100%', md: '700px' }} mx='auto'>
              <Input
                value={(search || '')}
                placeholder='學生姓名、班級、學號'
                onChange={(e) => { searchInputRef.current = e.target.value }}
              />
              <IconButton
                aria-label='Search database'
                variantColor='blue'
                icon='search'
                ml={4}
                onClick={(e) => {
                  let attachedUrl = ''
                  if (page) attachedUrl = `?page=${page}`
                  if (searchInputRef.current) {
                    attachedUrl += `${attachedUrl.length ? '&' : '?'}search=${searchInputRef.current}`
                  }
                  if (state !== 'all' && !!state) {
                    attachedUrl += `${attachedUrl.length ? '&' : '?'}state=${state}`
                  }
                  if (section) {
                    attachedUrl += `${attachedUrl.length ? '&' : '?'}section=${section}`
                  }

                  Router.push(
                    `/school/[schoolId]/attendance${attachedUrl}`,
                    `/school/${schoolId}/attendance${attachedUrl}`
                  )
                }}
              />
            </Box>
            {/* 考勤篩子按鈕 全部 未到/準時 遲到 缺席 曠課    */}
            <RadioGroup
              mt={5}
              textAlign='center'
              value={(state || 'all')}
              spacing={5}
              isInline
              onChange={e => {
                let attachedUrl = ''
                if (page) attachedUrl = `?page=${page}`
                if (search) {
                  attachedUrl += `${attachedUrl.length ? '&' : '?'}search=${search}`
                }
                if (e.target.value !== 'all') {
                  attachedUrl += `${attachedUrl.length ? '&' : '?'}state=${e.target.value}`
                }
                if (section) {
                  attachedUrl += `${attachedUrl.length ? '&' : '?'}section=${section}`
                }

                Router.push(
                  `/school/[schoolId]/attendance${attachedUrl}`,
                  `/school/${schoolId}/attendance${attachedUrl}`
                )
              }}
            >
              <Radio value='all'>
                全部
              </Radio>
              <Radio value='onTime'>
                未到/準時
              </Radio>
              <Radio value='late'>
                遲到
              </Radio>
              <Radio value='absence'>
                缺席
              </Radio>
              <Radio value='absenteeism'>
                曠課
              </Radio>
            </RadioGroup>
          </>
        )
      }

      {/* select 上午 下午 全部 未到/準時 遲到 缺席 曠課 不同的顔色   */}
      <Box d='flex' mt={2} justifyContent='center'>
        {select && (
          <Select
            w='86px'
            h='30px'
            value={(section || '1')}
            onChange={(e) => {
              let attachedUrl = ''
              if (page) attachedUrl = `?page=${page}`
              if (search) {
                attachedUrl += `${attachedUrl.length ? '&' : '?'}search=${search}`
              }
              if (state !== 'all' && !!state) {
                attachedUrl += `${attachedUrl.length ? '&' : '?'}state=${state}`
              }
              if (e.target.value) {
                attachedUrl += `${attachedUrl.length ? '&' : '?'}section=${e.target.value}`
              }
              Router.push(
                `/school/[schoolId]/attendance${attachedUrl}`,
                `/school/${schoolId}/attendance${attachedUrl}`
              )
            }}
          >
            <option value='1'>上午</option>
            <option value='2'>下午</option>
          </Select>
        )}
        {Attendance.map((item, i) => {
          return (
            <Box d='flex' justifyContent='center' alignItems='center' ml={6} key={i}>
              <Box bg={item.color} w='24px' h='24px' border='1px solid #ddd' />
              <Box ml='5px'>{item.name}</Box>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}
export default AttendanceFilter
