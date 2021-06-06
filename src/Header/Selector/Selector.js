export default function Selector(props){
  return(
    <div className="header__selector">
      <label>
        <select defaultValue={props.type} onChange={
          (e) => {
            props.setType(e.target.value)
          }}>
          <option value="week">Неделя</option>
          <option value="day">День</option>
          <option value="month">Месяц</option>
        </select>
      </label>
    </div>
  )
}
