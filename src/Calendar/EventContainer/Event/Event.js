export default function Event(props) {
  // time 0000-2359 : 0-100%
  const startTime = 8*60
  const endTime = 10*60
  const eventStyle = {
    top: `${startTime/1440*100}%`,
    height: `${endTime/1440*100 - startTime/1440*100}%`,
    left: `0%`,
    width: `100%`,
  }
  return (
    <div className="event" style={eventStyle}>
      <div>
        props.name
      </div>
      <div>
        props.description
      </div>
      <div>
        props.time
      </div>
    </div>
  )
}
