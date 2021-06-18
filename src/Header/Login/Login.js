import icon from "../../img/img.png"
import {useState, useRef} from "react";
import UserCard from "./UserCard/UserCard";
import useOnClickOutside from '../Utilities/useOnClickOutside'
import CreateEventMenu from "./CreateEventMenu/CreateEventMenu";
import UserAuthentication from "./UserAuthentication/UserAuthentication";

export default function Login() {
  const [isModalOpen,setModalOpen] = useState(false);
  const [isCreateEventMenuOpen, setCreateEventMenuOpen] = useState(false);
  const [isAuthenticationMenuOpen,setAuthenticationMenuOpen] = useState(false);

  const modalRef = useRef(null);
  const createEventMenuRef = useRef(null);
  const authenticationMenuRef = useRef(null);

  const userName = "Иванов И.И.";

  useOnClickOutside(modalRef, () => setModalOpen(false));
  useOnClickOutside(createEventMenuRef, () => setCreateEventMenuOpen(false));
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
        <UserCard userName={userName} setCreateEventMenuOpen={setCreateEventMenuOpen} setAuthenticationMenuState={setAuthenticationMenuOpen} />
      </div>
      }

      {isCreateEventMenuOpen &&
      <div className="header-login-event-container" ref={createEventMenuRef}>
        <CreateEventMenu sideMenuState={isCreateEventMenuOpen} setSideMenuState={setCreateEventMenuOpen} />
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

