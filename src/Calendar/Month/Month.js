import {useState, useEffect} from "react";
import moment from "moment";
import MonthWeek from "./MonthWeek/MonthWeek";
// require('moment/locale/ru');


export default function Month(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const weeksCount = (moment.duration(moment(props.end).diff(moment(props.start))).asDays()+1)/7

  useEffect(() => {
    if (!isLoaded) {
      fetch(`https://xalendar.herokuapp.com/events?userId=256720&startDate=${props.start}&endDate=${props.end}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true)
            setItems(result)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
    }
    return () => {
      setIsLoaded(true)
    }
  })

  const eventsByWeek = {}
  const month = []
  for (const x of Array(weeksCount).keys()) {
    const start = moment(props.start).add(x, 'weeks').format('YYYY-MM-DD')
    const end = moment(start).add(6, 'days').format('YYYY-MM-DD')
    eventsByWeek[start] = []
    month.push(<MonthWeek events={eventsByWeek[start]} start={start} end={end} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
      return (
        <div className="calendar-week">
          {month}
        </div>
      )
  } else if (!isLoaded) {
      return (
        <div className="calendar-week">
          {month}
        </div>
      )
  } else {
    Array.from(items).forEach((event) => {
      // if (event.message) {
      //   return
      // }
      eventsByWeek[event.date].push(event)
    })
    month.length = 0
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      month.push(<MonthWeek key={dat}  date={dat} events={eventsByWeek[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
    }
    return (
      <div className="calendar-month">
        {month}
      </div>
    )
  }
}