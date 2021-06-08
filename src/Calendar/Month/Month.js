import MonthWeek from "./MonthWeek/MonthWeek";
import moment from "moment";
import useFetch from "react-fetch-hook";
import {useEffect} from "react";

export default function Month(props) {
  const { isLoading, data: eventsRaw, error } = useFetch(
    `http://165.22.72.61/events?userId=269788&startDate=${props.start}&endDate=${props.end}`
  )

  useEffect(() => {
    if (eventsRaw !== undefined) eventsRaw.length = 0
  })

  const weeksCount = (moment.duration(moment(props.end).diff(moment(props.start))).asDays()+1)/7 | 0
  const eventsByWeek = {}
  for (const x of Array(weeksCount).keys()) {
    const week = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
    eventsByWeek[week] = []
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(eventsRaw).forEach((event) => {
      eventsByWeek[moment(event.start_date).startOf('isoWeek').format('YYYY-MM-DD')].push(event)
    })
  }
  return (
    <div className="calendar-month">
      {Array.from({length: weeksCount}, (x, n) => {
        const week = moment(props.start).add(n, 'weeks').format('YYYY-MM-DD')
        return <MonthWeek key={week} date={props.date} start={week} events={eventsByWeek[week]} />
      })}
    </div>
  )
}