import "./RedLine.sass"
import {useEffect, useState} from "react";
import {getNowMinutes} from "../../../Utils";

const baseStyle = (position) => {
  return {
    backgroundColor: "red",
    top: `${position / 1440 * 100}%`,
    height: "2px",
    left: "0%",
    width: "100%"
  }
}

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