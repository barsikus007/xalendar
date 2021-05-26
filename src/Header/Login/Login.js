import icon from "../../img/img.png"

function Login() {
let imageClick = () => {
  console.log("click")
}

return(
  <div className="header__login">
    <h3>Иванов И.И</h3>
    <img src={icon} onClick={() => imageClick()} alt="icon"/>
  </div>
);
}
export default Login;
