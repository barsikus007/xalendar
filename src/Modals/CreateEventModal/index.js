import './index.sass'
import {Add} from '@material-ui/icons'
import Popup from "reactjs-popup";
import {Fab} from "@material-ui/core";

export default function CreateEventModal(props) {
  return (
    <Popup
      trigger={
        <Fab
          color='primary'
          aria-label='Add'
          size='small'>
          <Add style={{ color: 'black' }} />
        </Fab>
      }>
      <div className='create-event-popup'>
        <h3>Add Event</h3>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Theme"/>
        <input type="text" placeholder="Aud"/>
        <input type="text" placeholder="Teacher"/>
        <p>
          <input type="date" id="date" name="date"/>
          <input type="time" id="time" name="time"/>
        </p>
        <p>
          <input type="date" id="date" name="date"/>
          <input type="time" id="time" name="time"/>
        </p>
        <button type="button">Add</button>
      </div>
    </Popup>

  )
}