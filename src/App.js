import './App.css';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import {useState} from "react";

export default function App() {
  const [type, setType] = useState('week')
  return (
    <div>
      <Header setType={setType} />
      <Calendar type={type} />
    </div>
  )
}