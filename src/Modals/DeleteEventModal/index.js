import './index.sass'
import {Delete} from '@material-ui/icons'
import {Fab} from "@material-ui/core";
import Popup from "reactjs-popup";

export default function DeleteEventModal(props) {
  return (
    <Popup
      trigger={
        <Fab
          color='primary'
          aria-label='Delete'
          size='small'
          onClick={() => {}}>
          <Delete style={{ color: 'black' }} />
        </Fab>
      }>
      <div className='edit-event-popup'>
        <h3>Are you sure?</h3>
        <button type="button">Yes</button>
        <button type="button">No</button>
      </div>
    </Popup>
  )
}