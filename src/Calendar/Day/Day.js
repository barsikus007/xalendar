import Timeslot from '../Timeslot/Timeslot';
import EventContainer from "../EventContainer/EventContainer";
import useFetch from "react-fetch-hook";

export default function Day(props) {
  const { isLoading, data, error } = useFetch(
    `https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.date}&endDate=${props.date}`,
    { depends: [props.standalone] }
  )
  let events = props?.events ? props.events : []

  if (props.standalone) {
    if (error) {
      console.error('ERROR TODO POP-IT')
    } else if (!isLoading) {
      events = data
    }
  }
  return (
    <div className="calendar-day">
      {Array.from({length: 24}, (x, n) => <Timeslot key={n} />)}
      <EventContainer events={events} />
    </div>
  )
}
