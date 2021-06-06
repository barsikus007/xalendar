import MonthDay from "../MonthDay/MonthDay";
import moment from "moment";

export default function MonthWeek(props) {
  const eventsByDay = {}
  const week = []
  for (const x of Array(7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDay[day] = []
    week.push(<MonthDay key={day} day={day} date={props.date} events={eventsByDay[day]} />)
  }
  return (
      <div className="calendar-month-week">
        {week}
      </div>
  )
}