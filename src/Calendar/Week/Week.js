import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import moment from "moment";
import useFetch from "react-fetch-hook";
import {useEffect} from "react";

export default function Week(props) {
  const { isLoading, data: eventsRaw, error } = useFetch(
    `http://165.22.72.61/events?userId=269788&startDate=${props.start}&endDate=${props.end}`
  )

  useEffect(() => {
    if (eventsRaw !== undefined) eventsRaw.length = 0
  })

  const eventsByDate = {}
  for (const x of Array(7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDate[day] = []
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(eventsRaw).forEach((event) => {
      eventsByDate[moment(event.start_date).format('YYYY-MM-DD')].push(event)
    })
  }
  return (
    <div className="calendar-week">
      <Timetable />
      {Array.from({length: 7}, (x, n) => {
        const day = moment(props.start).add(n, 'days').format('YYYY-MM-DD')
        return <Day key={day} day={day} events={eventsByDate[day]} />
      })}
    </div>
  )
}