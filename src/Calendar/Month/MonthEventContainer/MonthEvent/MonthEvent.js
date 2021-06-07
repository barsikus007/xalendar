export default function MonthEvent(props) {
  // Calculate max count
  // console.log(props.event)
  // time 0000-2359 : 0-100%
  //Shitcoded for 5 minutes
  const startTime = +props.event.start_time.slice(0, 2)*60 + +props.event.start_time.slice(3, 5)
  const endTime = +props.event.end_time.slice(0, 2)*60 + +props.event.end_time.slice(3, 5)
  const eventStyle = {
    top: `${startTime/1440*100}%`,
    height: `${endTime/1440*100 - startTime/1440*100}%`,
    left: `0%`,
    width: `100%`,
  }
  return (
    <div className="month-event" style={eventStyle}>
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