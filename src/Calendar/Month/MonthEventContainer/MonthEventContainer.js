import MonthEvent from "./MonthEvent/MonthEvent";

export default function MonthEventContainer(props) {
  // Calculate max count
  let events = Array.from(props.events)
  events.sort((el1, el2) => { return Date.parse(el1.start_date) - Date.parse(el2.start_date) })

  return (
      <div className="calendar-month-event-container">
        {Array.from(events, (x, n) => <MonthEvent key={n} event={x}/>)}
      </div>
  )
}