import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import moment from "moment";
import useFetch from "react-fetch-hook";

export default function Week(props) {
  const { isLoading, items, error } = useFetch(
    `https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.start}&endDate=${props.end}`
  )

  const eventsByDate = {}
  const week = []
  for (const x of Array(7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDate[day] = []
    week.push(<Day key={day} day={day} events={eventsByDate[day]} />)
  }
  console.log(items)
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(items).forEach((event) => {
      eventsByDate[event.date].push(event)
    })
    console.log(items)
    week.length = 0
    for (const x of Array(7).keys()) {
      const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      week.push(<Day key={day} day={day} events={eventsByDate[day]} />)
    }
  }
  return (
    <div className="calendar-week">
      <Timetable />
      {week}
    </div>
  )
}