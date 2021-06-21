import {Service} from '../../Service'

export default function EventModalDelete(props) {
  const handleClick = async () => {
    const response = await Service.deleteEvent(props.event.id)
    console.log(response)
    window.location.reload()
    props.setEvent({})
    props.setIsDelete(false)
  }

  return (
    <div className='edit-event-popup'>
      <h3>Are you sure?</h3>
      <button onClick={handleClick} type="button">Yes</button>
      <button type="button">No</button>
    </div>
  )
}