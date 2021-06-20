import './Calendar.scss';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Timetable from "./Timetable/Timetable";
import Toolbar from "./Toolbar/Toolbar";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import {getWeek, getMonth, TYPES} from "../Utils";

export default function Calendar(props) {
  let start, end, calendar

  if (props.type === TYPES.week) {
    [start, end] = getWeek(props.currentDate)
    calendar = <Week start={start} end={end}/>
  } else if (props.type === TYPES.month) {
    [start, end] = getMonth(props.currentDate)
    calendar = <Month start={start} end={end} currentDate={props.currentDate} />
  } else if (props.type === TYPES.day) {
    start = props.currentDate.format('YYYY-MM-DD')
    calendar = (
      <div className="calendar-week">
        <Timetable />
        <Day day={props.currentDate.format('YYYY-MM-DD')} standalone />
      </div>
    )
  }
  return (
    <div className="calendar">
      <Toolbar start={start} end={end} type={props.type} currentDate={props.currentDate} setCurrentDate={props.setCurrentDate} />
      <CalendarHeader type={props.type} start={start} />
      <div className="scroll-wrap">
        {calendar}
      </div>
    </div>
  )
}