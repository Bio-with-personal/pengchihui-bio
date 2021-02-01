import {
    Box,
    Flex,
    Radio,
    Button,
    Text,
    Input,
    IconButton,
    Spinner,
    useToast
} from '@chakra-ui/core'
import { Formik, Form, Field } from 'formik'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// 组件引用
import Layout from 'components/layout'

const PrintPage = () => {
    return (
        <Layout>
            <Box mt={16} py={4}>
                <LoadingItem />
            </Box>
        </Layout>
    )
}

export default PrintPage