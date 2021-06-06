import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import {useState, useEffect} from "react";
import moment from "moment";

export default function App() {
  const locationParams = window.location.href.split("/")
  const types = {week: 'week', day: 'day', month: 'month'} //TODO Service Enum

  const [date, setDate] = useState(moment())
  const [type, setType] = useState((locationParams[3] in types) ? locationParams[3] : 'week')

  useEffect(() => {
    console.log('init!')
    if (locationParams.length === 7) {
      const dateArr = locationParams.slice(4, 7)
      console.log(dateArr)
      dateArr.forEach((el, ind) => {
        if (el === '') {
          dateArr[ind] = '999999'
        } //классный костыль :)
      })
      const date = moment(dateArr.join('-'))
      console.log(date)
      if (!date.isValid()) {
        window.history.replaceState(null, "", `/${type}`)
        setDate(moment())
      } else {
        setDate(date)
      }
    }
  }, [])

  console.log(type)
  if ((locationParams.length < 4) || (!(locationParams[3] in types)) || (type !== locationParams[3])) {
    console.log('change!')
    let url = `/${type}`
    if (locationParams.length === 7) {
      url += `/${locationParams.slice(4, 7)}`
    }
    console.log(url)
    window.history.replaceState(null, "", url)
  } else {
    if (locationParams[3] !== type) {
      setType(locationParams[3])
    }
  }

  return (
    <div>
      <Header type={type} setType={setType} />
      <Calendar type={type} date={date} setDate={setDate} />
    </div>
  )
}