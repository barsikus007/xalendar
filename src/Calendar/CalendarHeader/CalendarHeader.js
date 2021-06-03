import moment from "moment";
import Day from "../Day/Day";

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

Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
}

export default function CalendarHeader(props) {
  let header = []
  const start = new Date(props.start)
  if (props.type === 'day') {
    header = [
      <div className="calendar-header-day"><div>{start.getWeekDay()}</div></div>
    ]
  } else if (props.type === 'week'){
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      header.push(
        <div key={dat} className="calendar-header-day">
          <div>{moment(props.start).add(x, 'days').format('ddd')}</div>
          <div>{moment(props.start).add(x, 'days').format('DD')}</div>
        </div>
      )
    }
  }
  return (
    <div className="calendar-header">
      <div className="calendar-header-day calendar-gutter">___</div>
      {header}
    </div>
  )
}
