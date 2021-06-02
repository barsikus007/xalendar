import Event from "./Event/Event";

export default function EventContainer(props) {
  return (
    <div className="calendar-event-container">
      {Array.from(props.events, (x, n) => <Event key={n} event={x}/>)}
    </div>
  )
}
