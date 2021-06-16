import "./EventContainer.sass"
import Event from "./Event/Event";
import moment from "moment";

// const isCrossing = (event1, event2) => {
//   return (event1.start_date <= event2.end_date) && (event1.end_date >= event2.start_date)
// }

export default function EventContainer(props) {

  const events = Array.from(props.events)
  events.sort((event1, event2) => { return Date.parse(event1.startdate) - Date.parse(event2.startdate) })
  // const eventsCopy = events.slice()
  const timetable = Array.from({length: 1440}, () => [])
  events.forEach(event => {
    let position = 1
    for (
      let i = moment.duration(moment(event.startdate).format('HH:mm')).asMinutes()-1;
      i < moment.duration(moment(event.enddate).format('HH:mm')).asMinutes();
      i++
    ) {
      timetable[i].push(event.id)
      if (position < timetable[i].length) position = timetable[i].length
    }
    event.position = position
  })
  events.forEach(event => {
    let overlapCount = 1
    for (
      let i = moment.duration(moment(event.startdate).format('HH:mm')).asMinutes()-1;
      i < moment.duration(moment(event.enddate).format('HH:mm')).asMinutes();
      i++
    ) {
      if (overlapCount < timetable[i].length) overlapCount = timetable[i].length
    }
    event.overlapCount = overlapCount
    // console.log(`${event.position}/${overlapCount}`)
  })
  return (
    <div className="calendar-event-container">
      {events.map((x, n) => <Event key={n} event={x}/>)}
    </div>
  )
}
