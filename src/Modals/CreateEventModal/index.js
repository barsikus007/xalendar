import './index.sass'
import {Add} from '@material-ui/icons'
import Popup from "reactjs-popup";
import {Fab} from "@material-ui/core";
import moment from "moment";
import {Service} from "../../Service";

export default function CreateEventModal(props) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const rawData = []
    for (const el of e.target) {
      rawData.push(el.value)
    }
    const data = {
      name: rawData[0],
      theme: rawData[1],
      teacher: rawData[2],
      place: rawData[3],
      startdate: moment(`${rawData[4]} ${rawData[5]}`).toISOString(),
      enddate: moment(`${rawData[6]} ${rawData[7]}`).toISOString(),
    }
    console.log(data)
    const response = await Service.createEvent(data)
    console.log(response)
  }

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
      <form onSubmit={handleSubmit} className='create-event-popup'>
        <h3>Add Event</h3>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Theme"/>
        <input type="text" placeholder="Aud"/>
        <input type="text" placeholder="Teacher"/>
        <p>
          <input type="date" name="date"/>
          <input type="time" name="time"/>
        </p>
        <p>
          <input type="date" name="date"/>
          <input type="time" name="time"/>
        </p>
        <button type="submit">Add</button>
      </form>
    </Popup>

  )
}