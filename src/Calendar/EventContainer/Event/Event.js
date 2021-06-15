import './Event.sass'
import moment from "moment";

export default function Event(props) {
  // time 0000-2359 : 0-100%
  //2 or more events
  // moment.duration(moment(props.event.start_date).format('HH:mm')).asMinutes()
  // moment.duration(moment(props.event.end_date).format('HH:mm')).asMinutes()
  const startTime = moment.duration(moment(props.event.start_date).format('HH:mm')).asMinutes() - 180 // TODO kostil
  const endTime = moment.duration(moment(props.event.end_date).format('HH:mm')).asMinutes() - 180
  const style = {
    backgroundColor: props.event.color,
    top: `${startTime/1440*100}%`,
    height: `calc(${endTime/1440*100 - startTime/1440*100}% - 7px)`,
    left: `0%`,
    width: `calc(100% - 10px)`,
  }
  return (
    <div className="event" style={style}>
      <div className="event-text">
        {props.event.name}
      </div>
      <div className="event-text">
        {props.event.theme}
      </div>
      <div className="event-text">
        {props.event.aud}
      </div>
    </div>
  )
}
