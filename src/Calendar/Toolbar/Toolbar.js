import './Toolbar.sass'
import {useRef, useState} from 'react';
import Pagination from './Pagination/Pagination';
import CreateEventMenu from './CreateEventMenu/CreateEventMenu';
import useOnClickOutside from '../../Header/Utilities/useOnClickOutside';
import AdminToolbox from "./AdminToolbox";

export default function Toolbar(props) {
  const isAdmin = true
  const [isCreateEventMenuOpen, setCreateEventMenuOpen] = useState(false)

  const createEventMenuRef = useRef(null)

  useOnClickOutside(createEventMenuRef, () => setCreateEventMenuOpen(false))

  return (
    <div className='calendar-toolbar'>
      <Pagination
        start={props.start}
        end={props.end}
        type={props.type}
        currentDate={props.currentDate}
        setCurrentDate={props.setCurrentDate} />
      {isAdmin &&
        <AdminToolbox setCreateEventMenuOpen={setCreateEventMenuOpen} />
        }
        {isCreateEventMenuOpen &&
      <div className='header-login-event-container' ref={createEventMenuRef}>
        <CreateEventMenu sideMenuState={isCreateEventMenuOpen} setSideMenuState={setCreateEventMenuOpen} />
      </div>
      }

    </div>
  )
}
