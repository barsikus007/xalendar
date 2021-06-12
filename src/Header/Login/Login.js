import icon from "../../img/img.png"
import {useState, useRef} from "react";
import UserCard from "./UserCard";
import useOnClickOutside from '../Utilities/useOnClickOutside'

export default function Login() {
  const [isModalOpen,setModalOpen] = useState(false);
  const toggleUserCardVisibility =() => {
    setModalOpen((visible)=>!visible)
  };

  const modalRef = useRef(null);
  const userName = "Иванов И.И.";
  useOnClickOutside(modalRef, () => setModalOpen(false));

  return(
    <div className="header-login">
      <h3>{userName}</h3>
      <img className="header-login__icon" src={icon} onClick={() => {toggleUserCardVisibility()}} alt="icon"/>
      {isModalOpen ? (
        <div ref={modalRef} className="header-login__menu">
          {UserCard(userName)}
        </div>
      ) :false
      }
    </div>
  );
}

