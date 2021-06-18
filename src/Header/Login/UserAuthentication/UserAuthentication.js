import './UserAuthentication.sass'

export default function UserAuthentication(){
  return(
    <div>
      <h3>Введите своё имя</h3>
      <input type="text" placeholder="имя"/>
      <input type="password" placeholder="пароль"/>
      <button type="button">Войти</button>
    </div>
  )

}