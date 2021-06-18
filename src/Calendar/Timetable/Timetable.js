import Timeslot from "../Timeslot/Timeslot";

export default function Timetable(props) {
  return (
    <div className="calendar-gutter">
      {
        Array.from(
        {length: 24},
        (x, n) => <Timeslot
          key={n}
          type="gutter"
          name={`${n > 9 ? '' + n: '0' + n}:00`}
        />)
      }
    </div>
  )
}
