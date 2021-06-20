import './Toolbar.sass'
import {Fab} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {useRef, useState} from 'react';
import Pagination from './Pagination/Pagination';
import CreateEventMenu from './CreateEventMenu/CreateEventMenu';
import useOnClickOutside from '../../Header/Utilities/useOnClickOutside';

export default function Toolbar(props) {
  const isAdmin = true
  const [isCreateEventMenuOpen, setCreateEventMenuOpen] = useState(false)

  const toggleCreateEventMenuVisibility =() =>{
    setCreateEventMenuOpen((visible)=>!visible)
  }

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
          <div>
            <Fab color='primary' aria-label='Add' size='small' onClick={() => {toggleCreateEventMenuVisibility()}}><Add style={{ color: 'black' }} /></Fab>

            <button type='button'>Создать модуль</button>
          </div>
        }
        {isCreateEventMenuOpen &&
      <div className='header-login-event-container' ref={createEventMenuRef}>
        <CreateEventMenu sideMenuState={isCreateEventMenuOpen} setSideMenuState={setCreateEventMenuOpen} />
      </div>
      }

    </div>
  )
}
