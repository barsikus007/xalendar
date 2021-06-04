import moment from "moment";

export default function CalendarHeader(props) {
  let header = [<div className="calendar-header-day calendar-gutter">___</div>]
  if (props.type === 'day') {
    header = [
      <div key={props.start} className="calendar-header-day">
        <div>{moment(props.start).format('ddd')}</div>
        <div>{moment(props.start).format('DD')}</div>
      </div>
    ]
  } else if (props.type === 'week'){
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      header.push(
        <div key={dat} className="calendar-header-day">
          <div>{moment(props.start).add(x, 'days').format('ddd')}</div>
          <div>{moment(props.start).add(x, 'days').format('DD')}</div>
        </div>
      )
    }
  } else if (props.type === 'month'){
    header = []
    for (const x of Array(7).keys()) {
      const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
      header.push(
        <div key={dat} className="calendar-header-day">
          <div>{moment(props.start).add(x, 'days').format('ddd')}</div>
        </div>
      )
    }
  }
  return (
    <div className="calendar-header">
      {header}
    </div>
  )
}
