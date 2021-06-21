import './index.sass'
import {Fab} from '@material-ui/core'
import {Add} from '@material-ui/icons'
import ViewAsList from './ViewAsList/ViewAsList'

export default function AdminToolbox(props) {
  const toggleCreateEventMenuVisibility = () =>{
    props.setCreateEventMenuOpen(visible=>!visible)
  }

  return (
    <div className='admin-toolbox'>
      <Fab
        color='primary'
        aria-label='Add'
        size='small'
        onClick={() => { toggleCreateEventMenuVisibility() }}>
        <Add style={{ color: 'black' }} />
      </Fab>

      <ViewAsList />
    </div>
  )
}