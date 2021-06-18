import MonthWeek from "./MonthWeek/MonthWeek";
import moment from "moment";
import useFetch from "react-fetch-hook";
import EventService from "../../Service";

export default function Month(props) {
  const { isLoading, data: eventsRaw, error } = useFetch(EventService.getEvents(props.start, props.end))

  const eventsByWeek = {}
  const weeksCount = (moment.duration(moment(props.end).diff(moment(props.start))).asDays()+1)/7 | 0

  for (const x of Array(weeksCount).keys()) {
    const week = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
    eventsByWeek[week] = []
  }

  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(eventsRaw).forEach((event) => {
      const eventWeekStart = moment(event.startdate).startOf('isoWeek').format('YYYY-MM-DD')
      if (eventWeekStart in eventsByWeek) eventsByWeek[eventWeekStart].push(event)
    })
  }

  return (
    <div className="calendar-month">
      {Array.from({length: weeksCount}, (x, n) => {
        const week = moment(props.start).add(n, 'weeks').format('YYYY-MM-DD')
        return <MonthWeek key={week} currentDate={props.currentDate} start={week} events={eventsByWeek[week]} />
      })}
    </div>
  )
}