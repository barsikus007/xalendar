import {Info, Assignment, Description, Person, ViewModule, LocationOn} from '@material-ui/icons';

export default function EventModal(props) {
  const style = { fontSize: 20 }
  return (
    <div className="event-popup">
      <div>
        <Info style={style} />
        <div>
          {props.event.id}
        </div>
      </div>
      <div>
        <Assignment style={style} />
        <div>
          {props.event.name}
        </div>
      </div>
      <div>
        <Description style={style} />
        <div>
          {props.event.theme}
        </div>
      </div>
      <div>
        <Person style={style} />
        <div>
          {props.event.teacher}
        </div>
      </div>
      <div>
        <ViewModule style={style} />
        <div>
          {props.event.modulename}
        </div>
      </div>
      <div>
        <LocationOn style={style} />
        <div>
          {props.event.place}
        </div>
      </div>
    </div>
  )
}