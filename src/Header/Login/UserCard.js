import icon from "../../img/img.png";


export default function UserCard(userName){
  return(
    <ul>
      <li>
        <img src={icon} alt="icon"/>
      </li>
      <li>
        <h2>{userName}</h2>
      </li>
      <button type="button">
        Сменить пользователя
      </button>
    </ul>
  );
}
