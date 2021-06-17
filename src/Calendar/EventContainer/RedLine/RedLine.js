import "./RedLine.sass"
import moment from "moment";
import {useEffect, useState} from "react";

const baseStyle = (position) => {
  return {
    backgroundColor: "red",
    top: `${position / 1440 * 100}%`,
    height: "2px",
    left: "0%",
    width: "100%"
  }
}

const getNowMinutes = () => moment.duration(moment().format("HH:mm")).asMinutes()

export default function RedLine() {
  const [position, setPosition] = useState(getNowMinutes())
  const [style, setStyle] = useState(baseStyle(position))
  useEffect(() => setStyle(baseStyle(position)), [position])
  useEffect(() => {
    const interval = setInterval(
      () => setPosition(getNowMinutes()),
      10000
    )
    return () => clearInterval(interval)
  }, [])
  return (
    <div style={style} className="event-redline" />
  )
}
