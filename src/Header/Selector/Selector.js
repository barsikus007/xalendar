export default function Selector(props){
  return(
    <div className="header-selector">
      <label>
        <select title="type-selector" defaultValue={props.currentType} onChange={
          (e) => {
            props.selectType(e.target.value)
          }}>
          <option value="week">Неделя</option>
          <option value="day">День</option>
          <option value="month">Месяц</option>
        </select>
      </label>
    </div>
  )
}
