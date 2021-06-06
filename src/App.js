import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import {useState} from "react";
import moment from "moment";

export default function App() {
  let locationParams = window.location.href.split("/")

  const [date, setDate] = useState(moment())
  const [type, setType] = useState('week')

  const types = {week: 'week', day: 'day', month: 'month'} //TODO Service Enum
  if ((locationParams.length < 4) || (!(locationParams[3] in types))) {
    window.history.pushState(type, 'Xalendar', `/${type}`)
  } else {
    if (locationParams[3] !== type) {
      setType(locationParams[3])
    }
  }

  useState(() => {
    if (locationParams.length === 7) {
      const dateArr = locationParams.slice(4, 7)
      dateArr.forEach((el, ind) => {
        if (el === '') {
          dateArr[ind] = '999999'
        } //классный костыль :)
      })
      setDate(moment(dateArr.join('-'))) //TODO fix
    }
  })
  return (
    <div>
      <Header type={type} setType={setType} />
      <Calendar type={type} date={date} setDate={setDate} />
    </div>
  )
}