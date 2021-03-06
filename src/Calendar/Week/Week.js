import Day from '../Day/Day'
import Timetable from '../Timetable/Timetable'
import moment from 'moment'
import useFetch from 'react-fetch-hook'
import {Service} from '../../Service'
import {getWeek} from '../../Utils'

export default function Week(props) {
  const [startOfWeek, endOfWeek] = getWeek(props.currentDate)
  
  const { isLoading, data: eventsRaw, error } = useFetch(Service.getEvents(startOfWeek, endOfWeek))

  const eventsByDay = {}

  for (const x of Array(7).keys()) {
    const day = moment(startOfWeek).add(x, 'days').format('YYYY-MM-DD')
    eventsByDay[day] = []
  }

  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(eventsRaw).forEach((event) => {
      const eventStart = moment(event.startdate).format('YYYY-MM-DD')
      if (eventStart in eventsByDay) eventsByDay[eventStart].push(event)
    })
  }

  const el = document.querySelector('.scroll-wrap')
  if (!!el) el.scrollTop = 1000

  return (
    <div className='calendar-week'>
      <Timetable />
      {Array.from({length: 7}, (x, n) => {
        const day = moment(startOfWeek).add(n, 'days').format('YYYY-MM-DD')
        return <Day key={day} day={day} events={eventsByDay[day]} />
      })}
    </div>
  )
}