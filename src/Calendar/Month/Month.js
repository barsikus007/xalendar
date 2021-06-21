import MonthWeek from './MonthWeek/MonthWeek';
import moment from 'moment';
import useFetch from 'react-fetch-hook';
import {Service} from '../../Service';
import {getMonth} from "../../Utils";

export default function Month(props) {
  const [startOfMonth, endOfMonth] = getMonth(props.currentDate)
  
  const { isLoading, data: eventsRaw, error } = useFetch(Service.getEvents(startOfMonth, endOfMonth))

  const eventsByWeek = {}
  const weeksCount = (moment.duration(moment(endOfMonth).diff(moment(startOfMonth))).asDays()+1)/7 | 0

  for (const x of Array(weeksCount).keys()) {
    const week = moment(startOfMonth).add(x, 'weeks').format('YYYY-MM-DD')
    eventsByWeek[week] = []
  }

  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (!isLoading) {
    Array.from(eventsRaw).forEach((event) => {
      const eventWeekStart = moment(event.startdate).startOf('isoWeek').format('YYYY-MM-DD')
      if (eventWeekStart in eventsByWeek) eventsByWeek[eventWeekStart].push(event)
    })
  }

  return (
    <div className='calendar-month'>
      {Array.from({length: weeksCount}, (x, n) => {
        const week = moment(startOfMonth).add(n, 'weeks').format('YYYY-MM-DD')
        return <MonthWeek key={week} currentDate={props.currentDate} start={week} events={eventsByWeek[week]} />
      })}
    </div>
  )
}