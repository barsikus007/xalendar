import moment from "moment";

export default function MonthEvent(props) {
  // Calculate max count
  // console.log(props.event)
  // time 0000-2359 : 0-100%
  //Shitcoded for 5 minutes
  // TODO kostyl
  return (
    <div className="month-event">
      <span>
        {moment(props.event.start_date).add(-3, 'hours').format('HH:mm ')}
      </span>
      <span>
        {props.event.theme}
      </span>
    </div>
  )
}