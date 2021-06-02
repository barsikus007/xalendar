// import { useState } from 'react'
import Timeslot from '../Timeslot/Timeslot'
import EventContainer from "../EventContainer/EventContainer";

export default function Day(props) {
  return (
    <div className="calendar-day">
      {Array.from({length: 24}, (x, n) => <Timeslot key={n} />)}
      <EventContainer events={props.events} />
    </div>
  )
}
