import './index.sass'
import {Delete} from '@material-ui/icons'
import {Fab} from "@material-ui/core"
import Popup from 'reactjs-popup'
import {Service} from "../../Service"

export default function DeleteEventModal(props) {
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await Service.deleteEvent(props.event.id)
    console.log(response)
    window.location.reload()
  }

  return (
    <Popup
      modal
      nested
      closeOnDocumentClick={false}
      trigger={
        <Fab
          color='primary'
          aria-label='Delete'
          size='small'>
          <Delete style={{ color: 'black' }} />
        </Fab>
      }>
      <div className='edit-event-popup'>
        <h3>Are you sure?</h3>
        <button onClick={handleClick} type="button">Yes</button>
        <button type="button">No</button>
      </div>
    </Popup>
  )
}