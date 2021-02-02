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

const PrintPage = () => {
    return (
        <Box>
            <Box mt={16} py={4}>
                <Formik
                    initialValues={{ name: 'king' }}
                // onSubmit={async (values, { setSubmitting }) => {
                //  })}
                >
                    {({ isSubmitting, setFieldValue, values }) => {
                        return (
                            <Form>
                                <Box>456789</Box>
                            </Form>
                        )
                    }}
                </Formik>
            </Box>
        </Box>
    )
}

export default PrintPage