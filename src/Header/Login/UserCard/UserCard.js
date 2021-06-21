import icon from "../../../img/img.png";

export default function UserCard(props){
  const toggleAuthenticationVisibility =() =>{
    props.setAuthenticationMenuState((visible)=>!visible)
  }
  const toggleAdmin =() =>{
    if (localStorage.getItem('isAdmin') === 'true') {
      localStorage.setItem('isAdmin', 'false')
    } else {
      localStorage.setItem('isAdmin', 'true')
    }
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
          Change User
        </button>
        <button type="button" onClick={() => {toggleAdmin()}}>
          Become Admin
        </button>
      </ul>
    </div>
  )
}
