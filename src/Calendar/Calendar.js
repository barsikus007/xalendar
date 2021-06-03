import {useState} from "react";
import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
// import EventService from "../Service";
import Timetable from "./Timetable/Timetable";


const yyyymmdd = function(date) {
  return date.toISOString().slice(0, 10)
}


const getWeek = function(date, offset=0) {
  const tmp_date = new Date(date)
  tmp_date.setDate(tmp_date.getDate()-tmp_date.getDay()+(7*offset)+1)
  const mon = new Date(tmp_date)
  tmp_date.setDate(tmp_date.getDate()+6)
  const sun = new Date(tmp_date)
  return [yyyymmdd(mon), yyyymmdd(sun)]
}

export default function Calendar(props) {
  const [offset, setOffset] = useState(0);
  const now_date = new Date()
  const [start, end] = getWeek(now_date, offset)
  let calendar
  if (props.type === 'week') {
    calendar = <Week start={start} end={end} key={start+end}/>
  } else if (props.type === 'month') {
    calendar = <Month />
  } else if (props.type === 'day') {
    calendar = [
      <Timetable />,
      <Day date={yyyymmdd(now_date)}/>,
    ]
  }
  return (
    <div className="calendar">
      <Pagination offset={offset} offsetHook={setOffset}/>
      <CalendarHeader type={props.type} start={start} end={end}/>
      {calendar}
    </div>
  )
}