import {useState} from "react";
import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
// import EventService from "../Service";
import Timetable from "./Timetable/Timetable";
import moment from "moment";


const getWeek = function(date, offset) {
  return [
    moment(date).add(offset, 'weeks').startOf('isoWeek').format('YYYY-MM-DD'),
    moment(date).add(offset, 'weeks').endOf('isoWeek').format('YYYY-MM-DD')
  ]
}

const getMonth = function(date, offset) {
  const startOfMonth = moment(date).add(offset, 'months').startOf('month').format('YYYY-MM-DD')
  const endOfMonth = moment(date).add(offset, 'months').endOf('month').format('YYYY-MM-DD')
  return [
    moment(startOfMonth).startOf('isoWeek').format('YYYY-MM-DD'),
    moment(endOfMonth).endOf('isoWeek').format('YYYY-MM-DD')
  ]
}

export default function Calendar(props) {
  const [offset, setOffset] = useState(0);
  const nowDate = moment().format('YYYY-MM-DD')
  let calendar
  if (props.type === 'week') {
    const [start, end] = getWeek(nowDate, offset)
    calendar = [
      <CalendarHeader key={props.type} type={props.type} start={start} end={end}/>,
      <Week start={start} end={end} key={start+end}/>
    ]
  } else if (props.type === 'month') {
    const [start, end] = getMonth(nowDate, offset)
    calendar = [
        <CalendarHeader key={props.type} type={props.type} start={start} end={end}/>,
        <Month />
    ]
  } else if (props.type === 'day') {
    calendar = [
      <CalendarHeader key={props.type} type={props.type} start={moment().add(offset, 'days').format('YYYY-MM-DD')} end={moment().add(offset, 'days').format('YYYY-MM-DD')}/>,
      <div className="calendar-week">
        <Timetable />
        <Day date={moment().add(offset, 'days').format('YYYY-MM-DD')} standalone={true} />
      </div>
    ]
  }
  return (
    <div className="calendar">
      <Pagination name={'June'} offset={offset} offsetHook={setOffset}/>
      {calendar}
    </div>
  )
}