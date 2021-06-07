import moment from "moment";
// require('moment/locale/ru');

export default function CalendarHeader(props) {
  let header = (props.type !== 'month') ? [<div key="" className="calendar-header-day calendar-header-gutter" />] : []
  for (const x of Array((props.type === 'day') ? 1 : 7).keys()) {
    const day = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
    header.push(
      <div key={day} className="calendar-header-day">
        <div>{moment(props.start).add(x, 'days').format('ddd')}</div>
        {(props.type !== 'month') ? <div>{moment(props.start).add(x, 'days').format('DD')}</div> : null}
      </div>
    )
  }

  return (
    <div className="calendar-header">
      {header}
    </div>
  )
}
