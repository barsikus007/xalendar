import './App.sass';
import SideMenu from './Header/SideMenu/SideMenu';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import moment from 'moment';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { TYPES, checkDate } from './Utils';

export default function App() {
  const locationParams = window.location.href.split('/')

  const [type, setType] = useState((locationParams[3] in TYPES) ? locationParams[3] : 'week')
  const [currentDate, setCurrentDate] = useState(checkDate(locationParams))
  const [isSideMenuOpen, setSideMenuState] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const locationParams = window.location.href.split('/')
    history.push(`/${type}`)
    setCurrentDate(checkDate(locationParams))
  }, [type])

  useEffect(() => {
    const locationParams = window.location.href.split('/')
    history.push(`/${locationParams[3]}/${moment(currentDate).format('YYYY/MM/DD')}`)
  }, [currentDate])

  return (
    <div>
      {isSideMenuOpen &&
      <SideMenu sideMenuState={isSideMenuOpen} setSideMenuState={setSideMenuState} />
      }
      <Header currentType={type} selectType={setType} sideMenuState={isSideMenuOpen} setSideMenuState={setSideMenuState} />
      <Calendar type={type} currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
  )
}