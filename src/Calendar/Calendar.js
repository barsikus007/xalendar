import {useState} from "react";
import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import EventService from "../Service";
import Timetable from "./Timetable/Timetable";


Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
}


Date.prototype.getWeek = function(offset=0) {
  const tmp_date = new Date(this)
  tmp_date.setDate(tmp_date.getDate()-tmp_date.getDay()+(7*offset)+1)
  const mon = new Date(tmp_date)
  tmp_date.setDate(tmp_date.getDate()+6)
  const sun = new Date(tmp_date)
  return [mon.yyyymmdd(), sun.yyyymmdd()]
}

Date.prototype.getWeekDay = function() {
  const weekDays = [
    "Sun",
    "Mon",
    "Thu",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]
  return weekDays[this.getDay()]
}

export default function Calendar(props) {
  const [offset, setOffset] = useState(0);
  const now_date = new Date()
  const [start, end] = now_date.getWeek(offset)
  let calendar
  if (props.type === 'week') {
    calendar = <Week start={start} end={end} key={start+end}/>
  } else if (props.type === 'month') {
    calendar = <Month />
  } else if (props.type === 'day') {
    calendar = [
      <Timetable />,
      <Day date={now_date.yyyymmdd()}/>,
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