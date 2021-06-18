export default function Timeslot(props) {
  let name = props.name
  let classes = ''

  if (!props.name) {name = ''}
  if (props.type === 'gutter') {classes = 'calendar-timelabel'}

  return (
    <div className='timeslot'>
      <span className={classes}>{name}</span>
    </div>
  )
}
