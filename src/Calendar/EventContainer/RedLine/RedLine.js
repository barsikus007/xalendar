import "./RedLine.sass"
import moment from "moment";
import {useEffect, useState} from "react";

export default function RedLine(props) {
  const [position, setPosition] = useState(moment.duration(moment().format("HH:mm")).asMinutes())
  console.log(position)
  const style = {
    backgroundColor: "red",
    top: `${position/1440*100}%`,
    height: "2px",
    left: "0%",
    width: "100%"
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(moment.duration(moment().format("HH:mm")).asMinutes())
    }, 15000)
    return clearInterval(interval)
  }, [])
  return (
    <div style={style} className="event-redline" />
  )
}
