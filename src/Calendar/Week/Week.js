import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import {useState, useEffect} from "react";
import moment from "moment";
import EventService from "../../Service";
// require('moment/locale/ru');


export default function Week(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!isLoaded) {
      EventService.getEvents(props.start, props.end)
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
  const eventsByDate = {}
  const week = []
  for (const x of Array(7).keys()) {
    const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDate[dat] = []
    week.push(<Day key={dat} date={dat} events={eventsByDate[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
  } else if (isLoaded) {
    Array.from(items).forEach((event) => {
      eventsByDate[event.date].push(event)
    })
    week.length = 0
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      week.push(<Day key={dat} events={eventsByDate[dat]}/>)
    }
  }
  return (
    <div className="calendar-week">
      <Timetable />
      {week}
    </div>
  )
}