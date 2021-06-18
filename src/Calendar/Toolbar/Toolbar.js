import './Toolbar.sass'
import {TYPES} from "../../Utils";
import moment from "moment";
import {Fab} from "@material-ui/core";
import {Add, NavigateBefore, NavigateNext} from "@material-ui/icons";
import {useRef, useState} from "react";
import CreateEventMenu from "./CreateEventMenu/CreateEventMenu";
import useOnClickOutside from "../../Header/Utilities/useOnClickOutside";

export default function Toolbar(props) {
  let name
  const isAdmin = false
  const [isCreateEventMenuOpen, setCreateEventMenuOpen] = useState(false);

  const prevPage = function () {
    props.setCurrentDate(moment(props.currentDate).add(-1, `${props.type}s`))
  }
  const nextPage = function () {
    props.setCurrentDate(moment(props.currentDate).add(1, `${props.type}s`))
  }

  const toggleCreateEventMenuVisibility =() =>{
    setCreateEventMenuOpen((visible)=>!visible)
  }

  const createEventMenuRef = useRef(null);

  useOnClickOutside(createEventMenuRef, () => setCreateEventMenuOpen(false));


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
    <div className="calendar-toolbar">
      <div className="calendar-toolbar-buttons">
        <Fab color="primary" aria-label="Next" size="small" onClick={prevPage}><NavigateBefore /></Fab>
        <Fab color="primary" aria-label="Prev" size="small" onClick={nextPage}><NavigateNext /></Fab>
      </div>
      <div className="calendar-toolbar-name">{name}</div>
      {isAdmin &&
          <div>
            <Fab color="primary" aria-label="Add" size="small" onClick={() => {toggleCreateEventMenuVisibility()}}><Add /></Fab>

            <button type="button">Создать модуль</button>
          </div>
        }
        {isCreateEventMenuOpen &&
      <div className="header-login-event-container" ref={createEventMenuRef}>
        <CreateEventMenu sideMenuState={isCreateEventMenuOpen} setSideMenuState={setCreateEventMenuOpen} />
      </div>
      }

    </div>
  )
}
