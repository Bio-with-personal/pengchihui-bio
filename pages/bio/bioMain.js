import React from 'react'
import { ThemeProvider, CSSReset, theme, Box, Text } from '@chakra-ui/core'
import { Container } from '../../components/cometainer'
import { DarkModeSwitch } from '../../components/Swich'
import { DarkModeButton } from '../../components/Button'

const bj = '#00CED1'

const Leftk = function () {
  return (
    <>
      {/* 个人信息 */}
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        background={bj}
        padding='5px'

      >
        <Box>
          <Text fontSize='18px'>个人信息 </Text>
        </Box>

      </Box>
      {/* 姓名 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>姓名：</Text>
        </Box>
        <Box width='50%'>
          <Text>彭持辉</Text>
        </Box>
      </Box>
      {/* 性别 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>性别：</Text>
        </Box>
        <Box width='50%'>
          <Text>男</Text>
        </Box>
      </Box>
      {/* 籍贯 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>籍贯：</Text>
        </Box>
        <Box width='50%'>
          <Text>湖南永州</Text>
        </Box>
      </Box>
      {/* 电话 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>电话：</Text>
        </Box>
        <Box width='50%'>
          <Text>18674802502</Text>
        </Box>
      </Box>
      {/* 民族 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>民族：</Text>
        </Box>
        <Box width='50%'>
          <Text>汉族</Text>
        </Box>
      </Box>
      {/* 初始日期 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>出生：</Text>
        </Box>
        <Box width='50%'>
          <Text>1998-06-21</Text>
        </Box>
      </Box>
      {/* 毕业院校 */}
      <Box display='flex' mt='10px'>
        <Box width='30%'>
          <Text>毕业院校：</Text>
        </Box>
        <Box width='60%'>
          <Text>长沙华信智原电脑学院</Text>
        </Box>
      </Box>
      {/* 学历 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>学历：</Text>
        </Box>
        <Box width='50%'>
          <Text>大专</Text>
        </Box>
      </Box>
      {/* 邮箱 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>邮箱：</Text>
        </Box>
        <Box width='50%'>
          <Text>2015430746@qq.com</Text>
        </Box>
      </Box>
      {/* 邮编 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>邮编：</Text>
        </Box>
        <Box width='50%'>
          <Text>337200</Text>
        </Box>
      </Box>
      {/* 政治面貌 */}
      <Box display='flex' mt='10px'>
        <Box width='30%'>
          <Text>政治面貌：</Text>
        </Box>
        <Box width='50%'>
          <Text>团员</Text>
        </Box>
      </Box>
    </>
  )
}
const skilla = []
const skill = ['html5 css3 javaScript ajax', 'sass less预编译', 'mongdb node.js  vue element-ui', 'springboot  mybatis hibernate spa mysql tomcat', 'storybook vercel chakra-ui next.js react', 'es6 extjs', '关注前端前沿技术']

const Right = function () {
  return (
    <>
      {/* 教育背景 */}
      <Box>
        <Box background={bj} padding='5px'><Text fontSize='18px'>教育背景</Text></Box>
        <Box display='flex' justifyContent='space-between' margin='5px 0'>
          <Text>2017年-2019年</Text>
          <Text>长沙新华电脑学院</Text>
          <Text>专科</Text>
          <Text>软件开发</Text>
        </Box>
      </Box>
      {/* 职业技能 */}
      <Box marginTop='20px'>
        <Box background={bj} padding='5px'><Text fontSize='18px'>职业技能</Text></Box>
        <Box margin='5px 0'>
          {/* 循环skill */}

          {
            skilla.map((item, index) => {
              return <Box key={index}><Text letterSpacing='1px' fontSize='md'>{item} </Text></Box>
            })
          }
        </Box>
      </Box>
      {/* 工作经历 */}
      <Box marginTop='20px'>
        <Box background={bj} padding='5px'><Text fontSize='18px'>工作经历</Text></Box>
        <Box margin='5px 0'>
          <Text>描述：</Text>
          <Text>公司：湖南浮云网络科技有限公司</Text>
          <Text>职位：web前端开发</Text>
        </Box>
      </Box>

    </>
  )
}

const breakpoints = ['600px', '600px', '800px', '1000px']
// aliases  1em=16px 字体 宽高 字体
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const BioMain = () => (
  <>
    <Container>
      <DarkModeSwitch />
      <Box>
        <Box width={['100%', '600px', '800px', '1000px']} border={{ sm: 'none', md: '1px solid #7d7d7d' }} h margin='0 auto' mt='20px' padding='20px'>
          <Box padding='20px' backgroundColor='yellow ' opacity='0.4' color='black'>
            <Text display='flex' justifyContent='center' fontSize='24px' b>
              个人简历
            </Text>
          </Box>

          <Box height='auto' display={{ sm: 'block', md: 'flex' }} justifyContent='space-between ' mt='20px'>
            <Box
              width={{ sm: '100%', md: '30%' }}
              h
              display='flex'
              flexDirection='column'
              justifyContent='flex-start'
              padding='0 5px 5px 5px'
            >
              <Leftk />
            </Box>
            <Box width={{ sm: '100%', md: '60%' }}>
              <Right />
            </Box>
          </Box>
        </Box>
      </Box>

    </Container>
  </>
)

export default BioMain
