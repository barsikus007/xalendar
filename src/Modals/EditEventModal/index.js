import './index.sass'
import {Info} from '@material-ui/icons'
import moment from 'moment'

export default function EditEventModal(props) {
  return (
    <div className='create-event-popup'>
      <h3>Добавить Ивент</h3>
      <input type="text" placeholder="название"/>
      <input type="text" placeholder="тема"/>
      <input type="text" placeholder="аудитория"/>
      <input type="text" placeholder="преподаватель"/>
      <p>
        <input type="date" id="date" name="date"/>
        <input type="time" id="time" name="time"/>
      </p>
      <button type="button">Добавить ивент</button>
    </div>
  )
}