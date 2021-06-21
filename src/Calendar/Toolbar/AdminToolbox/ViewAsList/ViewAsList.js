import {FormControl, InputLabel, ListSubheader, MenuItem, Select} from '@material-ui/core'
import {Service} from "../../../../Service"
import {useAsync} from "react-async-hook"
import {shortName} from "../../../../Utils";

export default function ViewAsList(props) {
  const {loading, error, result} = useAsync(Service.getAllViews, [])

  const handleChange = (e) => {
    console.log(e.target) // TODO listsubheader
    console.log(e.target.value)
    console.log(e)
    if (e.target.value) {

    }
  }

  if (error) {
    console.error('TODO POP-IT ERROR')
  }

  if (result) {
    result.teachers.sort((user1, user2) => user1.fullname.localeCompare(user2.fullname))
    result.students.sort((user1, user2) => user1.fullname.localeCompare(user2.fullname))
    // result.modules.sort((user1, user2) => user1.fullname.localeCompare(user2.fullname))
  }

  return (<div>
    <FormControl className='admin-toolbox-view'>
      <InputLabel htmlFor='grouped-select'>View as...</InputLabel>
      <Select defaultValue='' onChange={handleChange} >
        <MenuItem value={-4}>
          <em>Default</em>
        </MenuItem>
        <ListSubheader inset value={-1}>Student</ListSubheader>
          {loading && <MenuItem disabled>Loading...</MenuItem>}
          {error && <MenuItem disabled>Error...</MenuItem>}
          {!error && result && result.students.map(el => {
            return <MenuItem key={el.id} value={el.id} name='student'>{shortName(el.fullname)}</MenuItem>
          })}
        <ListSubheader inset value={-2}>Teacher</ListSubheader>
          {loading && <MenuItem disabled>Loading...</MenuItem>}
          {error && <MenuItem disabled>Error...</MenuItem>}
          {!error && result && result.teachers.map(el => {
            return <MenuItem key={el.id} value={el.id} name='teacher'>{el.fullname}</MenuItem>
          })}
        <ListSubheader inset value={-3} unselectable='on'>Module</ListSubheader>
        <MenuItem disabled value={1337} name='module'>WIP</MenuItem>
      </Select>
    </FormControl></div>
  )
}