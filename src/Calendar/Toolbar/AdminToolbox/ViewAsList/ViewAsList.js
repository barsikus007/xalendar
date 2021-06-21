import {FormControl, InputLabel, ListSubheader, MenuItem, Select} from '@material-ui/core'
import {Service} from "../../../../Service"
import {useAsync} from "react-async-hook"

export default function ViewAsList(props) {
  const {loading, error, result} = useAsync(Service.getAllViews, [])

  const handleChange = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    console.log(e)
  }

  if (error) {
    console.error('TODO POP-IT ERROR')
    result.teachers = []
    result.students = []
    result.modules = []
  }

  return (<div>
    <FormControl className='admin-toolbox-view'>
      <InputLabel htmlFor='grouped-select'>View as...</InputLabel>
      <Select defaultValue='' onChange={handleChange}>
        <MenuItem value={-4}>
          <em>Default</em>
        </MenuItem>
        <ListSubheader>Student</ListSubheader>
        <MenuItem value={256720} name='student'>Решетников В.П.</MenuItem>
        <MenuItem value={269788} name='student'>Дьяков С.В.</MenuItem>
        <ListSubheader>Teacher</ListSubheader>
        {loading && <MenuItem value={-2}>Loading...</MenuItem>}
        {result && result.teachers.map(el => {
          return <MenuItem key={el.id} value={el.id} name='teacher'>{el.fullname}</MenuItem>
        })}
        <ListSubheader>Module</ListSubheader>
        <MenuItem value={1337} name='module'>WIP</MenuItem>
      </Select>
    </FormControl></div>
  )
}