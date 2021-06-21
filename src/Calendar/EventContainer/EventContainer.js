import './EventContainer.sass'
import Event from './Event/Event';
import moment from 'moment';
import RedLine from './RedLine/RedLine';
import {useEffect, useState} from 'react';

export default function EventContainer(props) {
  const [redline, setRedline] = useState(moment().isSame(moment(props.date), 'day'))
  const events = Array.from(props.events)
  const timetable = Array.from({length: 1440}, () => [])
  
  const isAdmin = true
  const handleClick = () => {
    isAdmin && console.log('aboba')
  }


  useEffect(() => {
    const interval = setInterval(
      () => setRedline(moment().isSame(moment(props.date), 'day')),
      60000
    )
    return () => clearInterval(interval)
  }, [props])

  events.sort((event1, event2) => Date.parse(event1.startdate) - Date.parse(event2.startdate))

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
  })

  return (
    <div className='calendar-event-container' onClick={handleClick}>
      {events.map((x, n) => <Event key={n} event={x} />)}
      {(redline) ? <RedLine /> : null}
    </div>
  )
}
