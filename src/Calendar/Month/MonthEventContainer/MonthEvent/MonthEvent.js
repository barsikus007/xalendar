import "./MonthEvent.sass"
import moment from "moment";

export default function MonthEvent(props) {
  // TODO Calculate max count

  const style = {
    backgroundColor: props.event.color,
  }
  return (
    <div className="month-event" style={style}>
      {moment(props.event.startdate).format('HH:mm ')}{props.event.theme}
    </div>
  )
}