import './index.sass'
import EventModalToolbar from "./EventModalToolbar"
import {useState} from "react";
import EventModalEdit from "./EventModalEdit";
import EventModalCard from "./EventModalCard";
import EventModalDelete from "./EventModalDelete";

export default function EventModal(props) {
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [event, setEvent] = useState(props.event)
  const isAdmin = (localStorage.getItem('isAdmin') === 'true')

  return (
    <div className='event-popup'>
      {
        isAdmin &&
        <EventModalToolbar event={event} isEdit={isEdit} isDelete={isDelete} setIsEdit={setIsEdit} setIsDelete={setIsDelete} />
      }
      {isEdit ?
        <EventModalEdit event={event} setEvent={setEvent} setIsEdit={setIsEdit} /> :
      isDelete ?
        <EventModalDelete event={event} setEvent={setEvent} setIsDelete={setIsDelete} /> :
        <EventModalCard event={event} />
      }
    </div>
  )
}