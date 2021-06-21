import './Event.sass'
import EventModal from '../../../Modals/EventModal';
import moment from 'moment';
import {useState} from 'react';
import Popup from 'reactjs-popup';

export default function Event(props) {
  const [className, setClass] = useState('event')

  const startTime = moment.duration(moment(props.event.startdate).format('HH:mm')).asMinutes()
  const endTime = moment.duration(moment(props.event.enddate).format('HH:mm')).asMinutes()
  const eventWidth = 100/props.event.overlapCount
  const eventPos = props.event.position

  const style = {
    backgroundColor: props.event.color,
    top: `${startTime/1440*100}%`,
    height: `${endTime/1440*100 - startTime/1440*100}%`,
    left: `${eventWidth*(eventPos-1)}%`,
    width: `calc(${eventWidth}% - 10px)`,
  }

  const eventBody = (
    <div className={className} style={style}>
      <div
        className='event-text'
        title={props.event.name}
      >
        {props.event.name}
      </div>
      <div
        className='event-text'
        title={props.event.theme}
      >
        {props.event.theme}
      </div>
      <div
        className='event-text'
        title={props.event.aud}
      >
        {props.event.aud}
      </div>
      <div
        className='event-text'
        title={`${moment(props.event.startdate).format('HH:mm')}-${moment(props.event.enddate).format('HH:mm')}`}
      >
        {moment(props.event.startdate).format('HH:mm')}-{moment(props.event.enddate).format('HH:mm')}
      </div>
    </div>
  )

  return (
    <Popup
      onOpen={() => {
        setClass('event event__selected')
        document.querySelector('.scroll-wrap').style.overflowY = 'hidden'
      }}
      onClose={() => {
        setClass('event')
        document.querySelector('.scroll-wrap').style.overflowY = 'scroll'
      }}
      keepTooltipInside='.scroll-wrap'
      trigger={ eventBody }>
        <EventModal event={props.event}/>
    </Popup>
  )
}
