export default function EventModal(props) {
  return (
    <div className="event-popup">
      <div>
        {props.event.id}
      </div>
      <br/>
      <div>
        {props.event.name}
      </div>
      <br/>
      <div>
        {props.event.theme}
      </div>
      <br/>
      <div>
        {props.event.teacher}
      </div>
      <br/>
      <div>
        {props.event.modulename}
      </div>
      <br/>
      <div>
        {props.event.place}
      </div>
    </div>
  )
}