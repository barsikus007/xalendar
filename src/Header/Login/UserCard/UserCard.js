import icon from "../../../img/img.png";

export default function UserCard(props){
  const toggleAuthenticationVisibility =() =>{
    props.setAuthenticationMenuState((visible)=>!visible)
  }
  // const isAdmin = false
  // const adminStyle ="header-login-menu_admin"
  const userStyle ="header-login-menu_user"

  return(
    <div className={userStyle}>
      <ul>
        <li><img src={icon} alt="icon"/></li>
        <li><h2>{props.userName}</h2></li>
        <button type="button" onClick={() => {toggleAuthenticationVisibility()}}>
          Сменить пользователя
        </button>
      </ul>
    </div>
  )
}
