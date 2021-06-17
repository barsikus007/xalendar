import "./RedLine.sass"
import moment from "moment";

export default function RedLine(props) {
  const startTime = moment.duration(moment().format('HH:mm')).asMinutes()
  console.log(startTime)
  const style = {
    backgroundColor: "red",
    top: `${startTime/1440*100}%`,
    height: "2px",
    left: `0%`,
    width: `100%`,
  }
  return (
    <div style={style} className="event-redline" />
  )
}
