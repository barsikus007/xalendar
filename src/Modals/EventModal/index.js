import './index.sass'
import {Info, QueryBuilder, Assignment, Description, Person, ViewModule, LocationOn} from '@material-ui/icons'
import moment from 'moment'
import EventModalToolbar from "./EventModalToolbar"

export default function EventModal(props) {
  const style = { fontSize: 20 }
  return (
    <div className='event-popup'>
      <EventModalToolbar />
      <div className='event-popup-row'>
        <Info style={style} />
        <div>
          {props.event.id}
        </div>
      </div>
      <div className='event-popup-row'>
        <QueryBuilder style={style} />
        <div>
          {moment(props.event.startdate).format('HH:mm')}-{moment(props.event.enddate).format('HH:mm')}
        </div>
      </div>
      <div className='event-popup-row'>
        <Assignment style={style} />
        <div>
          {props.event.name}
        </div>
      </div>
      <div className='event-popup-row'>
        <Description style={style} />
        <div>
          {props.event.theme}
        </div>
      </div>
      <div className='event-popup-row'>
        <Person style={style} />
        <div>
          {props.event.teacher}
        </div>
      </div>
      <div className='event-popup-row'>
        <ViewModule style={style} />
        <div>
          {props.event.modulename}
        </div>
      </div>
      <div className='event-popup-row'>
        <LocationOn style={style} />
        <div>
          {props.event.place}
        </div>
      </div>
    </div>
  )
}