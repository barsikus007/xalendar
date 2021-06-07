import MonthEvent from "./MonthEvent/MonthEvent";

export default function MonthEventContainer(props) {
  // Calculate max count

  return (
      <div className="calendar-month-event-container">
        {Array.from(props.events, (x, n) => <MonthEvent key={n} event={x}/>)}
      </div>
  )
}