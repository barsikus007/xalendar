import './index.sass'
import EventModalToolbar from "./EventModalToolbar"
import {useState} from "react";
import EventModalEdit from "./EventModalEdit";
import EventModalCard from "./EventModalCard";

export default function EventModal(props) {
  const [isEdit, setIsEdit] = useState(false)
  const [event, setEvent] = useState(props.event)
  const isAdmin = (localStorage.getItem('isAdmin') === 'true')

  return (
    <div className='event-popup'>
      {
        isAdmin &&
        <EventModalToolbar event={event} isEdit={isEdit} setIsEdit={setIsEdit} />
      }
      {isEdit ?
        <EventModalEdit event={event} setEvent={setEvent} setIsEdit={setIsEdit} /> :
        <EventModalCard event={event} />
      }
    </div>
  )
}