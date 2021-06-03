Date.prototype.getWeekDay = function() {
  const weekDays = [
    "Sun",
    "Mon",
    "Thu",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]
  return weekDays[this.getDay()]
}

Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
}

export default function CalendarHeader(props) {
  let header
  const start = new Date(props.start)
  if (props.type === 'day') {
    header = [
      <div className="calendar-header-day"><div>{start.getWeekDay()}</div></div>
    ]
  } else if (props.type === 'week'){
    let dateMon = new Date(props.start)
    let dateTue = new Date(props.start)
    dateTue.setDate(dateMon.getDate()+1)
    let dateWed = new Date(props.start)
    dateWed.setDate(dateMon.getDate()+2)
    let dateThu = new Date(props.start)
    dateThu.setDate(dateMon.getDate()+3)
    let dateFri = new Date(props.start)
    dateFri.setDate(dateMon.getDate()+4)
    let dateSat = new Date(props.start)
    dateSat.setDate(dateMon.getDate()+5)
    let dateSun = new Date(props.start)
    dateSun.setDate(dateMon.getDate()+6)
    header = [
      <div className="calendar-header-day"><div>Mon</div><div>{dateMon.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Thu</div><div>{dateThu.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Wed</div><div>{dateWed.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Thu</div><div>{dateThu.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Fri</div><div>{dateFri.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Sat</div><div>{dateSat.yyyymmdd()}</div></div>,
      <div className="calendar-header-day"><div>Sun</div><div>{dateSun.yyyymmdd()}</div></div>
    ]
  }
  return (
    <div className="calendar-header">
      <div className="calendar-header-day calendar-gutter">___</div>
      {header}
    </div>
  )
}
