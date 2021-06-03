import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import {Component, useState, useEffect} from "react";

Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
}

export default function Week(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [start, setStart] = useState(props.start)
  const [end, setEnd] = useState(props.end)

  useEffect(() => {
    if (!(props.start === start && props.end === end)) {
      // setItems([])
      setIsLoaded(false)
      setStart(props.start)
      setEnd(props.end)
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
  })
  console.log([error, isLoaded, items])
  let dateMon = new Date(props.start)
  let dateTue = new Date(props.start)
  dateTue.setDate(dateMon.getDate()+1)
  let dateWed = new Date(props.start)
  dateWed.setDate(dateMon.getDate()+2)
  let dateThu = new Date(props.start)
  dateThu.setDate(dateMon.getDate()+3)
  let dateFri = new Date(props.start)
  dateFri.setDate(dateMon.getDate()+4)
  let dateSat = new Date(props.start)
  dateSat.setDate(dateMon.getDate()+5)
  let dateSun = new Date(props.start)
  dateSun.setDate(dateMon.getDate()+6)

  if (error) {
      console.error('ERROR')
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={[]} name="Monday" />
          <Day date={dateTue} events={[]} name="Tuesday" />
          <Day date={dateWed} events={[]} name="Wednesday" />
          <Day date={dateThu} events={[]} name="Thursday" />
          <Day date={dateFri} events={[]} name="Friday" />
          <Day date={dateSat} events={[]} name="Saturday" />
          <Day date={dateSun} events={[]} name="Sunday" />
        </div>
      )
  } else if (!isLoaded) {
      // setItems([])
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={[]} name="Monday" />
          <Day date={dateTue} events={[]} name="Tuesday" />
          <Day date={dateWed} events={[]} name="Wednesday" />
          <Day date={dateThu} events={[]} name="Thursday" />
          <Day date={dateFri} events={[]} name="Friday" />
          <Day date={dateSat} events={[]} name="Saturday" />
          <Day date={dateSun} events={[]} name="Sunday" />
        </div>
      )
  } else {
      const eventsByDate = {
        [dateMon.yyyymmdd()]: [],
        [dateTue.yyyymmdd()]: [],
        [dateWed.yyyymmdd()]: [],
        [dateThu.yyyymmdd()]: [],
        [dateFri.yyyymmdd()]: [],
        [dateSat.yyyymmdd()]: [],
        [dateSun.yyyymmdd()]: [],
      }
      Array.from(items).forEach((event) => {
        if (event.message) {
          return;
        }
        eventsByDate[event.date].push(event)
      })
      // setItems([])
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={eventsByDate[dateMon.yyyymmdd()]} name="Monday" />
          <Day date={dateTue} events={eventsByDate[dateTue.yyyymmdd()]} name="Tuesday" />
          <Day date={dateWed} events={eventsByDate[dateWed.yyyymmdd()]} name="Wednesday" />
          <Day date={dateThu} events={eventsByDate[dateThu.yyyymmdd()]} name="Thursday" />
          <Day date={dateFri} events={eventsByDate[dateFri.yyyymmdd()]} name="Friday" />
          <Day date={dateSat} events={eventsByDate[dateSat.yyyymmdd()]} name="Saturday" />
          <Day date={dateSun} events={eventsByDate[dateSun.yyyymmdd()]} name="Sunday" />
        </div>
      )
  }
}