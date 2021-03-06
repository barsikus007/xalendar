import './MonthEvent.sass'
import moment from 'moment';
import EventModal from '../../../../Modals/EventModal';
import Popup from 'reactjs-popup';
import {useState} from 'react';

export default function MonthEvent(props) {
  const [className, setClass] = useState('month-event')

  const style = {
    backgroundColor: props.event.color,
  }

  return (
    <Popup
      onOpen={() => {
        setClass('month-event month-event__selected')
        document.querySelector('.scroll-wrap').style.overflowY = 'hidden'
      }}
      onClose={() => {
        setClass('month-event')
        document.querySelector('.scroll-wrap').style.overflowY = 'scroll'
      }}
      keepTooltipInside='.scroll-wrap'
      trigger={
        <div className={className} style={style}>
          {moment(props.event.startdate).format('HH:mm ')}{props.event.theme}
        </div>}>
        <EventModal event={props.event}/>
    </Popup>
  )
}