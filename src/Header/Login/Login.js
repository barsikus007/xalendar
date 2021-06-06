import icon from "../../img/img.png"
import {useState, useRef, useEffect} from "react";
import UserCard from "./UserCard";


export default function Login() {
  const [isModalOpen,setModalOpen] = useState(false);
  const toggleUserCardVisibility =() => {

    setModalOpen((visible)=>!visible);
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

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mouseup", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mouseup", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}