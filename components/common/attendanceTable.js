import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from 'viviui'

const tableTitle = ['姓名', '班級', '學號', '到校狀態', '缺席（次數）', '曠課（節數）', '備注']

const AttendanceTable = ({ data }) => {
  return (
    <Table mt={4}>
      <TableHead bg='#f2f2f2'>
        <TableRow h='50px' bg='#f2f2f2'>
          {tableTitle.map((item, i) => {
            return (
              <TableCell key={i}>
                {item}
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody textAlign='center'>
        {!!data && !!data.length && data.map((item, i) => {
          const {
            currentClsMember,
            punchRecords: punchRecordsInfo,
            currentClsMember: {
              cls
            }
          } = item
          const punchRecord = punchRecordsInfo.edges.map(edge => edge.node)[0]
          return (
            <TableRow key={i}>
              <TableCell>
                {(item.name || '')}
              </TableCell>
              <TableCell>
                {(!!cls && !!cls.name) ? cls.name : ''}
              </TableCell>
              <TableCell>
                {(!!currentClsMember && !!currentClsMember.num) ? currentClsMember.num : ''}
              </TableCell>
              <TableCell>
                {((!!punchRecord && !punchRecord.punchInAt) || !punchRecord) && '未到'}
                {!!punchRecord && !!punchRecord.punchInAt && (
                  <>
                    {/* 有遲到次數，並且曠課和缺席次數為 0 */}
                    {(!!punchRecord.lates && !punchRecord.absenteeisms && !punchRecord.absences) && '遲到'}
                    {/* 沒有遲到和缺席次數，曠課有次數 */}
                    {!punchRecord.lates && !!punchRecord.absenteeisms && !punchRecord.absences && '曠課'}
                    {/* 沒有遲到和曠課次數，缺席有次數 */}
                    {!punchRecord.lates && !punchRecord.absenteeisms && !!punchRecord.absences && '缺席'}
                    {/* 沒有遲到、缺席、曠課，那它就是準時了 */}
                    {!punchRecord.lates && !punchRecord.absenteeisms && !punchRecord.absences && '準時'}
                    {/* 有遲到次數和缺席，曠課次數為 0 */}
                    {(!!punchRecord.lates && !punchRecord.absenteeisms && !!punchRecord.absences) && '遲到'}
                    {/* 有遲到次數和曠課，缺席次數為 0 */}
                    {(!!punchRecord.lates && !!punchRecord.absenteeisms && !punchRecord.absences) && '曠課'}
                    {/* 沒有遲到次數，曠課和缺席都有次數 */}
                    {!punchRecord.lates && !!punchRecord.absenteeisms && !!punchRecord.absences && '曠課'}
                  </>
                )}
              </TableCell>
              <TableCell>
                {(!!punchRecord && !!punchRecord.absences) ? punchRecord.absences : '0'}
              </TableCell>
              <TableCell>
                {(!!punchRecord && !!punchRecord.absenteeisms) ? punchRecord.absenteeisms : '0'}
              </TableCell>
              <TableCell>
                {''}
              </TableCell>
            </TableRow>
          )
        })}
        {
          (!!data && !data.length) && (
            <Box as='tr' border='1px #e6e6e6 solid' className='table-border-color'>
              <Box as='td' colSpan='8' className='table-td'>
                <Box textAlign='center' py={8}>
                  無數據
                </Box>
              </Box>
            </Box>
          )
        }
      </TableBody>
    </Table>
  )
}
export default AttendanceTable
