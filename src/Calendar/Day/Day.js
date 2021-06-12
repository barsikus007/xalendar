import Timeslot from '../Timeslot/Timeslot';
import EventContainer from "../EventContainer/EventContainer";
import useFetch from "react-fetch-hook";
import EventService from "../../Service";

export default function Day(props) {
  const { isLoading, data: eventsRaw, error } = useFetch(
    EventService.getEvents(props.date, props.date),
    { depends: [props.standalone] }
  )
  let events = props?.events ? props.events : []

  if (props.standalone) {
    if (error) {
      console.error('ERROR TODO POP-IT')
    } else if (!isLoading) {
      events = eventsRaw
    }
  }
  return (
    <div className="calendar-day">
      {Array.from({length: 24}, (x, n) => <Timeslot key={n} />)}
      <EventContainer events={events} />
    </div>
  )
}
