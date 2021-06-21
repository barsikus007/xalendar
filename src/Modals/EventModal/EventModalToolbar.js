import {Close, Delete, Edit} from "@material-ui/icons";
import {Fab} from "@material-ui/core";

export default function EventModalToolbar(props) {
  return (
    <div className='event-popup-toolbar'>
      <Fab
        color='primary'
        aria-label='Edit'
        size='small'
        onClick={()=>props.setIsEdit(!props.isEdit)}>
        {props.isEdit ?
          <Close style={{color: 'black'}} /> :
          <Edit style={{color: 'black'}} />}>
      </Fab>
      <Fab
        color='primary'
        aria-label='Delete'
        size='small'
        onClick={()=>props.setIsDelete(!props.isDelete)}>
        {props.isDelete ?
          <Close style={{color: 'black'}} /> :
          <Delete style={{color: 'black'}} />}>
      </Fab>
    </div>
  )
}