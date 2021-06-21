import {Assignment, Description, Info, LocationOn, Person, ViewModule} from '@material-ui/icons'
import moment from 'moment'
import {Service} from '../../Service'

export default function EventModalEdit(props) {
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
      startDate: moment(`${rawData[4]} ${rawData[5]}`).toISOString(),
      endDate: moment(`${rawData[6]} ${rawData[7]}`).toISOString(),
    }
    console.log(data)
    const response = await Service.editEvent(props.event.id, data)
    console.log(response)
    data.startdate = data.startDate
    data.enddate = data.endDate
    props.setEvent(Object.assign({}, props.event, data))
    props.setIsEdit(false)
  }
  const style = { fontSize: 20 }

  return (
    <form onSubmit={handleSubmit}>
      <div className='event-popup-row'>
        <Info style={style} />
        <div>
          {props.event.id}
        </div>
      </div>
      <div className='event-popup-row'>
        <Assignment style={style} />
        <input type='text' placeholder='Title' defaultValue={props.event.name} />
      </div>
      <div className='event-popup-row'>
        <Description style={style} />
        <input type='text' placeholder='Theme' defaultValue={props.event.theme} />
      </div>
      <div className='event-popup-row'>
        <Person style={style} />
        <input type='text' placeholder='Teacher' defaultValue={props.event.teacher} />
      </div>
      <div className='event-popup-row'>
        <ViewModule style={style} />
        <div>
          {props.event.modulename}
        </div>
      </div>
      <div className='event-popup-row'>
        <LocationOn style={style} />
        <input type='text' placeholder='Aud' defaultValue={props.event.place} />
      </div>
      <div className='event-popup-row'>
        <input type='date' name='date' defaultValue={moment(props.event.startdate).format('YYYY-MM-DD')} />
        <input type='time' name='time' defaultValue={moment(props.event.startdate).format('HH:mm')} />
      </div>
      <div className='event-popup-row'>
        <input type='date' name='date' defaultValue={moment(props.event.enddate).format('YYYY-MM-DD')} />
        <input type='time' name='time' defaultValue={moment(props.event.enddate).format('HH:mm')} />
      </div>
      <button type='submit'>Edit</button>
    </form>
  )
}