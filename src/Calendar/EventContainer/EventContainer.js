import Event from "./Event/Event";

export default function EventContainer(props) {

  let events = Array.from(props.events)
  events.sort((el1, el2) => { return Date.parse(el1.start_date) - Date.parse(el2.start_date) })

  return (
    <div className="calendar-event-container">
      {events.map((x, n) => <Event key={n} event={x}/>)}
    </div>
  )
}
