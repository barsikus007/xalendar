import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import {Component, useState, useEffect} from "react";
import moment from "moment";
// require('moment/locale/ru');


export default function Week(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

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
  const eventsByDate = {}
  const week = []
  for (const x of Array(7).keys()) {
    const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    eventsByDate[dat] = []
    week.push(<Day key={dat} date={dat} events={eventsByDate[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
  }
  if (error) {
      console.error('ERROR TODO POP-IT')
      return (
        <div className="calendar-week">
          <Timetable />
          {week}
        </div>
      )
  } else if (!isLoaded) {
      return (
        <div className="calendar-week">
          <Timetable />
          {week}
        </div>
      )
  } else {
    Array.from(items).forEach((event) => {
      if (event.message) {
        return
      }
      eventsByDate[event.date].push(event)
    })
    const week = []
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      week.push(<Day key={dat}  date={dat} events={eventsByDate[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
    }
    return (
      <div className="calendar-week">
        <Timetable />
        {week}
      </div>
    )
  }
}