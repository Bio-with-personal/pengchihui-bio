import {
    Grid,
    FormControl,
    Flex,
    Button,
    Text,
    Tooltip,
    CheckboxGroup,
    Checkbox,
    Select,
    Box,
    useDisclosure,
    Input,
    Divider,
    Radio,
    RadioGroup,
    IconButton
} from '@chakra-ui/core'
import { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/router'


import Table from 'components/table'
import TableHead from 'components/table/tableHead'
import TableBody from 'components/table/tableBody'
import TableCell from 'components/table/tableCell'
import TableRow from 'components/table/tableRow'
import LabelName from 'components/labelName'

const PrintPage = () => {

    const [sex, setSex] = useState("1");//性别

    return (
        <Box m='0 auto' maxW='800px' py={10}>
            <Text textAlign='center' fontSize='18px' fontWeight={700}>简历列印</Text>
            <Divider mt={10} />
            <Text fontSize='18px' fontWeight={700}>基本信息</Text>
            <Divider />
            <Box px={10}>
                <Flex mt={2} justify='space-between'>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='姓名' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='籍贯' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                </Flex>
                <Flex mt={2} justify='space-between'>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='岗位' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='民族' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                </Flex>
                <Flex mt={2} justify='space-between'>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='手机' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                    <Flex flexDirection='row' align='center'>
                        <LabelName label='邮箱' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                        <Input placeholder="请输入" />
                    </Flex>
                </Flex>
                <Flex align='center' justify='flex-start' mt={2}>
                    <LabelName label='年龄' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                    <Box maxW='400px' className='date-picker-content' border='1px solid #CBD5E0'>
                        <DatePicker
                            maxW='400px'
                            className='input'
                            dateFormat='yyyy-MM-dd'
                            selected={new Date()}
                            onChange={date => {
                                if (date) {
                                    date.setHours(0)
                                    date.setMinutes(0)
                                    date.setSeconds(0)
                                    date.setMilliseconds(0)
                                }
                            }}
                            showTimeSelect
                            // timeIntervals={15}
                            autoComplete='off'
                        />
                    </Box>
                </Flex>
                <Flex mt={2}>
                    <LabelName label='性别' labelProps={{ fontSize: '17px', w: '135px', mr: '0.75rem', alignItems: 'center' }} />
                    <RadioGroup defaultValue={sex} isInline onChange={e => setSex(e.target.value)}  >
                        <Radio value="1">女</Radio>
                        <Radio value="2">男 </Radio>
                    </RadioGroup>
                </Flex>
            </Box>
            <Divider mt={10} />
            <Flex align='center' justify='space-between'>
                <Text fontSize='18px' fontWeight={700} >教育背景</Text>
                <IconButton
                    icon='add'
                />
            </Flex>
            <Divider mt={10} />
            <Flex align='center' justify='space-between'>
                <Text fontSize='18px' fontWeight={700} >工作经历</Text>
                <IconButton
                    icon='add'
                />
            </Flex>
            <Divider mt={10} />
            <Flex align='center' justify='space-between'>
                <Text fontSize='18px' fontWeight={700} >兴趣爱好</Text>
                <IconButton
                    icon='add'
                />
            </Flex>
            <Divider />
            <Flex justify='space-around'>
                <Button variantColor="teal" size="md">返回</Button>
                <Button variantColor="teal" size="md">列印</Button>
            </Flex>

            {/* 為了去掉 DatePicker 點擊是會有黑色邊框 */}
            <style jsx global>
                {`
                    .input{
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
                    .react-datepicker__input-container input {
                    align-items: center;
                    width: 100%;
                    display: flex;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 2rem;
                    }
                `}
            </style>
        </Box >
    )
}

export default PrintPage