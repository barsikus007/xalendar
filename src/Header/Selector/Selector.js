export default function Selector(props){
  function handleChange(e) {
    props.setType(e.target.value)
  }

  return(
    <div className="section-header__selector">
      <label>
        <select defaultValue={'DEFAULT'} onChange={handleChange}>
          <option value="week">Неделя</option>
          <option value="day">День</option>
          <option value="month">Месяц</option>
        </select>
      </label>
    </div>
  )
}
