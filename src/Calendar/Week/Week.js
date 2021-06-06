import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import moment from "moment";
import useFetch from "react-fetch-hook";


export default function Week(props) {
  const { isLoaded, items, error } = useFetch(`https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.start}&endDate=${props.end}`)

  const eventsByDate = {}
  const week = []
  for (const x of Array(7).keys()) {
    const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDate[dat] = []
    week.push(<Day key={dat} date={props.date} events={eventsByDate[dat]} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (isLoaded) {
    Array.from(items).forEach((event) => {
      eventsByDate[event.date].push(event)
    })
    week.length = 0
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      week.push(<Day key={dat} date={props.date} events={eventsByDate[dat]} />)
    }
  }
  return (
    <div className="calendar-week">
      <Timetable />
      {week}
    </div>
  )
}