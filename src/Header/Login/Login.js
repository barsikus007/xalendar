import icon from "../../img/img.png"
import {useState, useRef} from "react";
import UserCard from "./UserCard";

export default function Login() {
  const [isCardVisible,setIsCardVisible] = useState(false);
  const toggleVisibleCard =() => {
    setIsCardVisible((visible)=>!visible);
  };
  const dropdownRef = useRef(null);
  const userName = "Иванов И.И.";
  const showUserCard = "active";
  const hideUserCard = "inactive";

  return(

    <div className="header__login">
      <h3>{userName}</h3>
      <img className="header__login__icon" src={icon} onClick={() => {toggleVisibleCard()}} alt="icon"/>
      <div ref={dropdownRef}
           className={`header__login__menu__${isCardVisible ? showUserCard : hideUserCard}`}>
        {UserCard(userName)}
      </div>
    </div>
  );
}

