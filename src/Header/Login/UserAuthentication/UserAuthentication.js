import './UserAuthentication.sass'
import {Service} from "../../../Service";

export default function UserAuthentication(){
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (event.target[0].value) {
      const name = event.target[0].value
      await Service.getAndSetUserId(name).catch(error => {
        console.error('TODO POP-IT ERROR')
        alert('error')
      })
      window.location.reload()
    }
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