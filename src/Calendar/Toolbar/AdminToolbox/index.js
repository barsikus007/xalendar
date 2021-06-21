import './index.sass'
import ViewAsList from './ViewAsList/ViewAsList'
import CreateEventModal from "../../../Modals/CreateEventModal"

export default function AdminToolbox() {

  return (
    <div className='admin-toolbox'>
      <CreateEventModal/>
      <ViewAsList />
    </div>
  )
}