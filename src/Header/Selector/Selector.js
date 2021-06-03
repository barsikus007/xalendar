export default function Selector(props){
  const handleChange = (e) => {
    props.setType(e.target.value)
  }

  return(
    <div className="header__selector">
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
