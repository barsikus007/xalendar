import {TYPES} from "../../Utils";
import moment from "moment";

export default function Pagination(props) {
  let name

  if (props.type === TYPES.week) {
    const startMonth = moment(props.start).format("MMMM")
    const startYear = moment(props.start).format("YYYY")
    const endMonth = moment(props.end).format("MMMM")
    const endYear = moment(props.end).format("YYYY")
    if (startMonth === endMonth) {
      name = `${startMonth} ${startYear}`
    } else if (startYear === endYear) {
      name = `${startMonth} - ${endMonth} ${endYear}`
    } else {
      name = `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    }
  } else if (props.type === TYPES.month) {
    name = props.date.format("MMMM YYYY")
  } else if (props.type === TYPES.day) {
    name = props.date.format("DD MMMM YYYY")
  }

  return (
    <div className="calendar-pagination">
      <button onClick={() => props.prevDatePage()}>{"<"}</button>
      <div>{name}</div>
      <button onClick={() => props.nextDatePage()}>{">"}</button>
    </div>
  )
}
