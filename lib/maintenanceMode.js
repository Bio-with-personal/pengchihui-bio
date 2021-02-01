const options = {
  timeZone: 'Asia/Macau',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
}

const formatter = new Intl.DateTimeFormat([], options)

export const getMaintenanceMode = () => {
  let maintenanceMode = process.env.MAINTENANCE_MODE

  // * ============= 常規維護 ==================
  if (!maintenanceMode) {
    const parts = formatter.formatToParts(new Date())
    if (parts && parts[0] && parts[0].value) {
      const hours = parseInt(parts[0].value)
      const mins = parseInt(parts[2].value)
      const n = hours * 100 + mins
      if (n >= 500 && n < 500) {
        maintenanceMode = 'enabled'
      } else {
        maintenanceMode = 'disabled'
      }
    }
  }
  // * ============= 常規維護 ==================

  return maintenanceMode
}
