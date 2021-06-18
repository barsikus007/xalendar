import './CreateEventMenu.sass';

export default function CreateEventMenu(){
  return(
    <div>
    <h3>Добавить Ивент</h3>
      <input type="text" placeholder="название"/>
      <input type="text" placeholder="тема"/>
      <input type="text" placeholder="аудитория"/>
      <input type="text" placeholder="преподаватель"/>
      <p>
        <input type="date" id="date" name="date"/>
        <input type="time" id="time" name="time"/>
      </p>
      <button type="button">Добавить ивент</button>

  </div>
  )
}