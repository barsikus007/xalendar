import './Pagination.sass'
import moment from "moment";
import {TYPES} from "../../../Utils";
import {Fab} from "@material-ui/core";
import {NavigateBefore, NavigateNext} from "@material-ui/icons";

export default function Pagination(props) {
  let name

  const prevPage = function () {
    props.setCurrentDate(moment(props.currentDate).add(-1, `${props.type}s`))
  }
  const nextPage = function () {
    props.setCurrentDate(moment(props.currentDate).add(1, `${props.type}s`))
  }

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
    name = props.currentDate.format("MMMM YYYY")
  } else if (props.type === TYPES.day) {
    name = props.currentDate.format("DD MMMM YYYY")
  }

  return (
    <div className="pagination">
      <div className="pagination-buttons">
        <Fab color="primary" aria-label="Next" size="small" onClick={prevPage}><NavigateBefore style={{ color: 'black' }} /></Fab>
        <Fab color="primary" aria-label="Prev" size="small" onClick={nextPage}><NavigateNext style={{ color: 'black' }} /></Fab>
      </div>
      <div className="pagination-name">{name}</div>
    </div>
  )
}
