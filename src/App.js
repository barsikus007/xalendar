import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import moment from "moment";
import {useState, useEffect} from "react";

const checkDate = (locationParams) => {
  if (locationParams.length === 7) {
    const dateArr = locationParams.slice(4, 7)
    for (const el of dateArr) {
      if (el === '') {
        return moment()
      }
    }
    return moment(dateArr.join('-'))
  }
  return moment()
}

export default function App() {
  const locationParams = window.location.href.split("/")
  const TYPES = {week: 'week', day: 'day', month: 'month'}

  const [type, setType] = useState((locationParams[3] in TYPES) ? locationParams[3] : 'week')
  const [date, setDate] = useState(checkDate(locationParams))

  useEffect(() => {
    const locationParams = window.location.href.split("/")
    window.history.replaceState(null, "", `/${type}`)
    setDate(checkDate(locationParams))
  }, [type])

  useEffect(() => {
    const locationParams = window.location.href.split("/")
    window.history.pushState(null, "", `/${locationParams[3]}/${moment(date).format("YYYY/MM/DD")}`)
  }, [date])

  return (
    <div>
      <Header type={type} setType={setType} />
      <Calendar type={type} date={date} setDate={setDate} />
    </div>
  )
}