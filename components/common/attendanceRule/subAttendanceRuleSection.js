import AddSubRule from './addSubRule'
import EditSubRule from './editSubRule'
import ViewSubRule from './viewSubRule'

const SubAttendanceRuleSection = ({ add, edit, view, setFieldValue, values, subAttendanceRulesOnClick, subAttendanceRule, type, ...props }) => {
  return (
    <>
      {!!add && (
        <AddSubRule
          setFieldValue={setFieldValue}
          values={values}
          subAttendanceRule={subAttendanceRule}
          type={type}
          subAttendanceRulesOnClick={subAttendanceRulesOnClick}
        />
      )}
      {!!edit && (
        <EditSubRule
          setFieldValue={setFieldValue}
          values={values}
          subAttendanceRule={subAttendanceRule}
          type={type}
          subAttendanceRulesOnClick={subAttendanceRulesOnClick}
        />
      )}
      {!!view && (
        <ViewSubRule />
      )}
    </>
  )
}
export default SubAttendanceRuleSection
