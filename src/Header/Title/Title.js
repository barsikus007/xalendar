import logo from "../../img/logo.png";

export default function Title() {
  return(
    <div className="header-title">
      <a href="/"> <img src={logo} alt="logo"/></a>
      <h3>Xalendar</h3>
    </div>
  )
}