import moment from "moment";

export default function Event(props) {
  // time 0000-2359 : 0-100%
  //2 or more events
  // moment.duration(moment(props.event.start_date).format('HH:mm')).asMinutes()
  // moment.duration(moment(props.event.end_date).format('HH:mm')).asMinutes()
  const startTime = (moment(props.event.start_date).hour()-3)*60 + moment(props.event.start_date).minute() // TODO kostil
  const endTime = (moment(props.event.end_date).hour()-3)*60 + moment(props.event.end_date).minute()
  const eventStyle = {
    top: `${startTime/1440*100}%`,
    height: `${endTime/1440*100 - startTime/1440*100}%`,
    left: `0%`,
    width: `100%`,
  }
  return (
    <div className="event" style={eventStyle}>
      <div>
        {props.event.name}
      </div>
      <div>
        {props.event.theme}
      </div>
      <div>
        {props.event.aud}
      </div>
    </div>
  )
}
