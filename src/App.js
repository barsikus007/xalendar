import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import {useState, useEffect} from "react";
import moment from "moment";

export default function App() {
  const locationParams = window.location.href.split("/")
  const types = {week: 'week', day: 'day', month: 'month'} //TODO Service Enum

  const [type, setType] = useState((locationParams[3] in types) ? locationParams[3] : 'week')
  const [date, setDate] = useState(() => {
    if (locationParams.length === 7) {
      const dateArr = locationParams.slice(4, 7)
      dateArr.forEach((el, ind) => {
        if (el === '') {
          dateArr[ind] = '999999'
        } //классный костыль :)
      })
      const date = moment(dateArr.join('-'))
      if (date.isValid()) {
        return date
      }
    }
    return moment()
  })

  useEffect(() => {
    const locationParams = window.location.href.split("/")
    window.history.replaceState(null, "", `/${type}`)
    if (locationParams.length === 7) {
      const dateArr = locationParams.slice(4, 7)
      dateArr.forEach((el, ind) => {
        if (el === '') {
          dateArr[ind] = '999999'
        } //классный костыль :)
      })
      const date = moment(dateArr.join('-'))
      if (!date.isValid()) {
        setDate(moment())
      } else {
        setDate(date)
      }
    } else {
      setDate(moment())
    }
  }, [type])

  useEffect(() => {
    const locationParams = window.location.href.split("/")
    let url = `/${locationParams[3]}`
    url += moment(date).format("/YYYY/MM/DD")
    window.history.pushState(null, "", url)
  }, [date])

  return (
    <div>
      <Header type={type} setType={setType} />
      <Calendar type={type} date={date} setDate={setDate} />
    </div>
  )
}