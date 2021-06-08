import './Calendar.scss';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Timetable from "./Timetable/Timetable";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import moment from "moment";
import {getWeek, getMonth, TYPES} from "../Utils";

export default function Calendar(props) {
  const date = props.currentDate.format('YYYY-MM-DD')
  const prevDatePage = function () {
    props.setCurrentDate(moment(date).add(-1, `${props.type}s`))
  }
  const nextDatePage = function () {
    props.setCurrentDate(moment(date).add(1, `${props.type}s`))
  }
  let start, end, calendar

  if (props.type === TYPES.week) {
    [start, end] = getWeek(date)
    calendar = <Week start={start} end={end}/>
  } else if (props.type === TYPES.month) {
    [start, end] = getMonth(date)
    calendar = <Month start={start} end={end} date={date} />
  } else if (props.type === TYPES.day) {
    start = date
    calendar = (
      <div className="calendar-week">
        <Timetable />
        <Day date={props.currentDate.format('YYYY-MM-DD')} standalone />
      </div>
    )
  }
  return (
    <div className="calendar">
      <Pagination
        prevDatePage={prevDatePage} nextDatePage={nextDatePage}
        start={start} end={end} type={props.type} date={props.currentDate}
      />
      <CalendarHeader type={props.type} start={start} />
      {calendar}
    </div>
  )
}