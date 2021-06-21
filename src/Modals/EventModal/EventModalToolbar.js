import {Fab} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";

export default function EventModalToolbar(props) {
  return (
    <div className='event-popup-toolbar'>
      <Fab color='primary' aria-label='Edit' size='small' onClick={() => {}}><Edit style={{ color: 'black' }} /></Fab>
      <Fab color='primary' aria-label='Add' size='small' onClick={() => {}}><Delete style={{ color: 'black' }} /></Fab>
    </div>
  )
}