import "./EventContainer.sass"
import Event from "./Event/Event";

// const isCrossing = (event1, event2) => {
//   return (event1.start_date <= event2.end_date) && (event1.end_date >= event2.start_date)
// }

export default function EventContainer(props) {

  const events = Array.from(props.events)
  events.sort((event1, event2) => { return Date.parse(event1.start_date) - Date.parse(event2.start_date) })
  // const eventsCopy = events.slice()
  // const timetable = Array.from({length: 1440}, () => [])
  // const timetable2 = []
  // console.log(timetable)
  // events.forEach(event => {
  //   console.log(event)
  //   eventsCopy.reduce((len, _event) => {
  //     if (isCrossing(event, _event)) {
  //       return len + 1
  //     }
  //     return len
  //   }, 0)
  // })
  return (
    <div className="calendar-event-container">
      {events.map((x, n) => <Event key={n} event={x}/>)}
    </div>
  )
}
