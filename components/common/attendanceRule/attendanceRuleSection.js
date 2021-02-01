
import AddRule from './addRule'
import EditRule from './editRule'
import ViewRule from './viewRule'

const AttendanceRuleSection = ({ add, edit, view, setFieldValue, values, attendanceRule, ...props }) => {
  return (
    <>
      {!!add && (
        <AddRule setFieldValue={setFieldValue} values={values} />
      )}
      {!!edit && (
        <EditRule setFieldValue={setFieldValue} values={values} />
      )}
      {!!view && (
        <ViewRule attendanceRule={attendanceRule} />
      )}
    </>
  )
}
export default AttendanceRuleSection
