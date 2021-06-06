import MonthWeek from "./MonthWeek/MonthWeek";
import moment from "moment";
import useFetch from "react-fetch-hook";

export default function Month(props) {
  const { isLoaded, items, error } = useFetch(`https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.start}&endDate=${props.end}`)

  const weeksCount = (moment.duration(moment(props.end).diff(moment(props.start))).asDays()+1)/7

  const eventsByWeek = {}
  const month = []
  for (const x of Array(weeksCount).keys()) {
    const start = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
    eventsByWeek[start] = []
    month.push(<MonthWeek events={eventsByWeek[start]} start={start} date={props.date} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
      return (
        <div className="calendar-month">
          {month}
        </div>
      )
  } else if (!isLoaded) {
      return (
        <div className="calendar-month">
          {month}
        </div>
      )
  } else {
    Array.from(items).forEach((event) => {
      eventsByWeek[event.date].push(event)
    })
    month.length = 0
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      month.push(<MonthWeek key={dat}  date={dat} events={eventsByWeek[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
    }
    return (
      <div className="calendar-month">
        {month}
      </div>
    )
  }
}