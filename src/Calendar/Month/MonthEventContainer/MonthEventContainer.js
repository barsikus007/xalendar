import MonthEvent from "./MonthEvent/MonthEvent";

export default function MonthEventContainer(props) {
  const events = Array.from(props.events)

  events.sort((event1, event2) => Date.parse(event1.startdate) - Date.parse(event2.startdate))

  return (
      <div className="calendar-month-event-container">
        {Array.from(events, (x, n) => <MonthEvent key={n} event={x}/>)}
      </div>
  )
}