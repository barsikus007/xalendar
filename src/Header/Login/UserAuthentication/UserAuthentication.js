import './UserAuthentication.sass'
import {EventService} from "../../../Service";

export default function UserAuthentication(){
  const handleSubmit = async (event) => {
    if (event.target[0].value) {
      const name = event.target[0].value
      await EventService.getAndSetUserId(name)
      window.location.reload()
    }

    event.preventDefault()
  }

  return(
    <div>
      <h3>Введите своё имя</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Имя"/>
        <input type="password" placeholder="Пароль"/>
        <button type="submit">Войти</button>
      </form>
    </div>
  )

}