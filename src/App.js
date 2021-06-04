import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import {useState} from "react";

export default function App() {
  let initialType = window.location.href.split("/")
  const types = ['week', 'day', 'month']
  if ((initialType.length < 4) || (!('week' in ['week']))) {
    console.log('not in abaoa')
    console.log((initialType.length < 4))
    console.log((!(initialType[3] in types)))
    console.log(typeof initialType[3])
    initialType = 'week'
    window.history.pushState(initialType, 'Xalendar', initialType)
  } else {
    initialType = initialType[3]
  }

  const [type, setType] = useState(initialType)
  return (
    <div>
      <Header setType={setType} />
      <Calendar type={type} />
    </div>
  )
} //TODO location router