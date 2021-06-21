import DeleteEventModal from "../DeleteEventModal"
import {Close, Edit} from "@material-ui/icons";
import {Fab} from "@material-ui/core";

export default function EventModalToolbar(props) {
  return (
    <div className='event-popup-toolbar'>
      <Fab
        color='primary'
        aria-label='Edit'
        size='small'
        onClick={()=>props.setIsEdit(!props.isEdit)}>
        {props.isEdit ?
          <Close style={{color: 'black'}} /> :
          <Edit style={{color: 'black'}} />}>
      </Fab>
      <DeleteEventModal event={props.event} />
    </div>
  )
}