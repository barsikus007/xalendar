import MonthDay from '../MonthDay/MonthDay';
import moment from 'moment';

export default function MonthWeek(props) {
  const eventsByDay = {}
  const week = []

  for (const x of Array(7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDay[day] = []
  }

  Array.from(props.events).forEach((event) => {
    eventsByDay[moment(event.startdate).format('YYYY-MM-DD')].push(event)
  })

  for (const x of Array(7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    week.push(<MonthDay key={day} day={day} currentDate={props.currentDate} events={eventsByDay[day]} />)
  }

  return (
      <div className='calendar-month-week'>
        {week}
      </div>
  )
}