export default function Selector(){
  return(
    <div className="section-header__selector">
      <label>
        <select defaultValue={'DEFAULT'}>
          <option value="1">День</option>
          <option value="2">Неделя</option>
          <option value="3">Месяц</option>
        </select>
      </label>
    </div>
  )
}
