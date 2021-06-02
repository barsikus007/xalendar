import {useState} from "react";
import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import EventService from "../Service";


Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
};


Date.prototype.getWeek = function(offset=0) {
  const tmp_date = new Date(this)
  tmp_date.setDate(tmp_date.getDate()-tmp_date.getDay()+(7*offset)+1)
  const mon = new Date(tmp_date)
  tmp_date.setDate(tmp_date.getDate()+6)
  const sun = new Date(tmp_date)
  return [mon.yyyymmdd(), sun.yyyymmdd()]
}

export default function Calendar(props) {
  const [offset, setOffset] = useState(0);
  const now_date = new Date()
  const [start, end] = now_date.getWeek(offset)
  console.log(start, end)
  if (props.type === 'week') {
    return (
      <div className="calendar">
        <Pagination offset={offset} offsetHook={setOffset}/>
        <CalendarHeader />
        <Week start={start} end={end}/>
      </div>
    )
  } else if (props.type === 'month') {
    return (
      <div className="calendar">
        <Pagination offset={offset} offsetHook={setOffset}/>
        <CalendarHeader />
        <Month />
      </div>
    )
  } else if (props.type === 'day') {
    return (
      <div className="calendar">
        <Pagination offset={offset} offsetHook={setOffset}/>
        <CalendarHeader />
        <Day />
      </div>
    )
  }
}