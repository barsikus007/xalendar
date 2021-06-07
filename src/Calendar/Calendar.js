import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Timetable from "./Timetable/Timetable";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import moment from "moment";

const getWeek = function(date) {
  return [
    moment(date).startOf('isoWeek').format('YYYY-MM-DD'),
    moment(date).endOf('isoWeek').format('YYYY-MM-DD')
  ]
}

const getMonth = function(date) {
  const startOfMonth = moment(date).startOf('month').format('YYYY-MM-DD')
  const endOfMonth = moment(date).endOf('month').format('YYYY-MM-DD')
  return [
    moment(startOfMonth).startOf('isoWeek').format('YYYY-MM-DD'),
    moment(endOfMonth).endOf('isoWeek').format('YYYY-MM-DD')
  ]
}

export default function Calendar(props) {
  const date = props.date.format('YYYY-MM-DD')
  const pageDate = function (offset) {
    props.setDate(moment(date).add(offset, `${props.type}s`))
  }
  let name, start, end
  let calendar
  if (props.type === 'week') {
    [start, end] = getWeek(date)
    const startMonth = moment(start).format("MMMM")
    const startYear = moment(start).format("YYYY")
    const endMonth = moment(end).format("MMMM")
    const endYear = moment(end).format("YYYY")
    if (startMonth === endMonth) {
      name = `${startMonth} ${startYear}`
    } else if (startYear === endYear) {
      name = `${startMonth} - ${endMonth} ${endYear}`
    } else {
      name = `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    }
    calendar = <Week start={start} end={end}/>
  } else if (props.type === 'month') {
    [start, end] = getMonth(date)
    name = props.date.format("MMMM YYYY")
    calendar = <Month start={start} end={end} date={date} />
  } else if (props.type === 'day') {
    start = date
    name = props.date.format("DD MMMM YYYY")
    calendar = (
      <div className="calendar-week">
        <Timetable />
        <Day date={props.date.format('YYYY-MM-DD')} standalone />
      </div>
    )
  }
  return (
    <div className="calendar">
      <Pagination name={name} pageDate={pageDate} />
      <CalendarHeader type={props.type} start={start} />
      {calendar}
    </div>
  )
}