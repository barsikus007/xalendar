import './Toolbar.sass'
import Pagination from './Pagination/Pagination';
import AdminToolbox from "./AdminToolbox";

export default function Toolbar(props) {
  const isAdmin = (localStorage.getItem('isAdmin') === 'true')

  return (
    <div className='calendar-toolbar'>
      <Pagination
        start={props.start}
        end={props.end}
        type={props.type}
        currentDate={props.currentDate}
        setCurrentDate={props.setCurrentDate} />
      {
        isAdmin &&
        <AdminToolbox />
      }
    </div>
  )
}
