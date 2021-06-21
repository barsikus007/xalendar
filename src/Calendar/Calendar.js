import './Calendar.scss'
import Day from './Day/Day'
import Week from './Week/Week'
import Month from './Month/Month'
import Timetable from './Timetable/Timetable'
import Toolbar from './Toolbar/Toolbar'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import {Route, Switch} from 'react-router-dom'
import {getWeek, getMonth, TYPES} from '../Utils'

export default function Calendar(props) {
  let start, end, calendar

  if (props.type === TYPES.week) {
    [start, end] = getWeek(props.currentDate)
  } else if (props.type === TYPES.month) {
    [start, end] = getMonth(props.currentDate)
  } else if (props.type === TYPES.day) {
    start = props.currentDate.format('YYYY-MM-DD')
  }
  return (
    <div className='calendar'>
      <Toolbar start={start} end={end} type={props.type} currentDate={props.currentDate} setCurrentDate={props.setCurrentDate} />
      <CalendarHeader type={props.type} start={start} />
      <div className='scroll-wrap'>
        <Switch>
          <Route path='/week'>
            <Week start={start} end={end}/>
          </Route>
          <Route path='/month'>
            <Month start={start} end={end} currentDate={props.currentDate} />
          </Route>
          <Route path='/day'>
            <div className='calendar-week'>
              <Timetable />
              <Day day={props.currentDate.format('YYYY-MM-DD')} standalone />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}