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

const PrintFormat = ({ size }) => {

  return (
    <Box>
      <Flex>列印格式</Flex>
      <style jsx global>
        {`
            @media print{
              @page { 
                size: ${size} landscape;
              }
              .clsGrade {
                page-break-after: always;
              }
            }
       `}
      </style>
    </Box>
  )
}

export default PrintFormat