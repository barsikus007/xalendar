import icon from "../../img/img.png"
import {useState, useRef} from "react";
import UserCard from "./UserCard/UserCard";
import useOnClickOutside from '../Utilities/useOnClickOutside'
import UserAuthentication from "./UserAuthentication/UserAuthentication";
import {shortName} from "../../Utils";

export default function Login() {
  const [isModalOpen,setModalOpen] = useState(false);
  const [isAuthenticationMenuOpen,setAuthenticationMenuOpen] = useState(false);

  const modalRef = useRef(null);

  const authenticationMenuRef = useRef(null);

  const _userName = localStorage.getItem('userName');
  const userName = (typeof _userName) ? shortName(_userName) : 'Log In';

  useOnClickOutside(modalRef, () => setModalOpen(false));

  useOnClickOutside(authenticationMenuRef, ()=> setAuthenticationMenuOpen(false))

  const toggleUserCardVisibility =() => {
    setModalOpen((visible)=>!visible)
  };

  return(
    <div className="header-login">
      <h3>{userName}</h3>
      <img className="header-login__icon" src={icon} onClick={() => {toggleUserCardVisibility()}} alt="icon"/>
      {isModalOpen &&
      <div ref={modalRef} className="header-login-menu">
        <UserCard userName={userName} setAuthenticationMenuState={setAuthenticationMenuOpen} />
      </div>
      }
      {isAuthenticationMenuOpen &&
      <div ref={authenticationMenuRef} className="header-login-authentication" >
        <UserAuthentication authenticationMenuState={isAuthenticationMenuOpen} setAuthenticationMenuState={setAuthenticationMenuOpen}/>
      </div>
      }
    </div>
  );
}

