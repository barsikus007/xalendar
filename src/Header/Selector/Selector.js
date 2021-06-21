export default function Selector(props){
  return(
    <div className="header-selector">
      <label>
        <select title="type-selector" defaultValue={props.currentType} onChange={
          (e) => {
            props.selectType(e.target.value)
          }}>
          <option value="week">Week</option>
          <option value="day">Day</option>
          <option value="month">Month</option>
        </select>
      </label>
    </div>
  )
}
