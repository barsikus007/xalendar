import {Assignment, Description, Info, LocationOn, Person, QueryBuilder, ViewModule} from "@material-ui/icons";
import moment from "moment";

export default function EventModalCard(props) {
  const style = { fontSize: 20 }

  return <>
    <div className='event-popup-row'>
      <Info style={style} />
      <div>
        {props.event.id}
      </div>
    </div>
    <div className='event-popup-row'>
      <QueryBuilder style={style} />
      <div>
        {moment(props.event.startdate).format('HH:mm')}-{moment(props.event.enddate).format('HH:mm')}
      </div>
    </div>
    <div className='event-popup-row'>
      <Assignment style={style} />
      <div>
        {props.event.name}
      </div>
    </div>
    <div className='event-popup-row'>
      <Description style={style} />
      <div>
        {props.event.theme}
      </div>
    </div>
    <div className='event-popup-row'>
      <Person style={style} />
      <div>
        {props.event.teacher}
      </div>
    </div>
    <div className='event-popup-row'>
      <ViewModule style={style} />
      <div>
        {props.event.modulename}
      </div>
    </div>
    <div className='event-popup-row'>
      <LocationOn style={style} />
      <div>
        {props.event.place}
      </div>
    </div>
  </>
}