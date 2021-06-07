import moment from "moment";
import MonthEventContainer from "../MonthEventContainer/MonthEventContainer";

export default function MonthDay(props) {
  return (
      <div className={
          (moment(props.day).month() === moment(props.date).month())
              ? "calendar-month-week-day"
              : "calendar-month-week-day__othermonth"
      }>
        {moment(props.day).date()}
        <MonthEventContainer events={props.events} />
      </div>
  )
}