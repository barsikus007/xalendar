import moment from "moment";

export const TYPES = {week: 'week', day: 'day', month: 'month'}

export const checkDate = (locationParams) => {
  if (locationParams.length === 7) {
    const preparedDate = moment(locationParams.slice(4, 7).join('/'), 'YYYY/MM/DD', true)
    return preparedDate.isValid() ? preparedDate : moment()
  }
  return moment()
}

export const getWeek = (date) => {
  return [
    moment(date).startOf('isoWeek').format('YYYY-MM-DD'),
    moment(date).endOf('isoWeek').format('YYYY-MM-DD')
  ]
}

export const getMonth = (date) => {
  const startOfMonth = moment(date).startOf('month').format('YYYY-MM-DD')
  const endOfMonth = moment(date).endOf('month').format('YYYY-MM-DD')
  return [
    moment(startOfMonth).startOf('isoWeek').format('YYYY-MM-DD'),
    moment(endOfMonth).endOf('isoWeek').format('YYYY-MM-DD')
  ]
}