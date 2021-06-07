import MonthWeek from "./MonthWeek/MonthWeek";
import moment from "moment";
import useFetch from "react-fetch-hook";

export default function Month(props) {
  const { isLoading, items, error } = useFetch(
    `https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.start}&endDate=${props.end}`
  )

  const weeksCount = (moment.duration(moment(props.end).diff(moment(props.start))).asDays()+1)/7 | 0
  const eventsByWeek = {}
  const month = []
  for (const x of Array(weeksCount).keys()) {
    const week = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
    eventsByWeek[week] = []
    month.push(<MonthWeek key={week} date={props.date} events={eventsByWeek[week]} start={week} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(items).forEach((event) => {
      eventsByWeek[event.date].push(event)
    })
    month.length = 0
    for (const x of Array(7).keys()) {
      const week = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
      month.push(<MonthWeek key={week} date={props.date} events={eventsByWeek[week]} start={week} />)
    }
  }
  return (
    <div className="calendar-month">
      {month}
    </div>
  )
}