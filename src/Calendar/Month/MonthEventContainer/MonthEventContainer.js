import MonthEvent from "./MonthEvent/MonthEvent";

export default function MonthEventContainer(props) {
  // TODO Calculate max count
  let events = Array.from(props.events)
  events.sort((el1, el2) => { return Date.parse(el1.startdate) - Date.parse(el2.startdate) })

  return (
      <div className="calendar-month-event-container">
        {Array.from(events, (x, n) => <MonthEvent key={n} event={x}/>)}
      </div>
  )
}