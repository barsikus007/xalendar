import icon from "../../../img/img.png";

export default function UserCard(props){
  const toggleAuthenticationVisibility =() =>{
    props.setAuthenticationMenuState((visible)=>!visible)
  }
  // const isAdmin = false
  // const adminStyle ="header-login-menu_admin"
  const userStyle ="header-login-menu_user"

  return(
    <div className={isAdmin?adminStyle:userStyle}>
      <ul>
        <li><img src={icon} alt="icon"/></li>
        <li><h2>{props.userName}</h2></li>
        {isAdmin &&
          <div>
            <button type="button" onClick={() => {toggleEventMenuVisibility()}} > Добавить ивент </button>
            <button type="button">Создать модуль</button>
          </div>
        }
        <button type="button" onClick={() => {toggleAuthenticationVisibility()}}>
          Сменить пользователя
        </button>
      </ul>
    </div>
  )
}
