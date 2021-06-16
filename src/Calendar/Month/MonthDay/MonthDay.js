import moment from "moment";
import MonthEventContainer from "../MonthEventContainer/MonthEventContainer";

export default function MonthDay(props) {
  const events = props?.events ? props.events : []
  const classes = [(moment(props.day).month() === moment(props.currentDate).month())
              ? "calendar-month-week-day"
              : "calendar-month-week-day__othermonth"]
  if (moment().format('YYYY-MM-DD')===moment(props.day).format('YYYY-MM-DD')) classes.push("calendar-month-week-day__today")
  return (
    <div className={classes.join(' ')}>
      <a className="day-link" href={'/day' + moment(props.day).format('/YYYY/MM/DD')}>
        {moment(props.day).date()}
      </a>
      <MonthEventContainer events={events} />
    </div>
  )
}