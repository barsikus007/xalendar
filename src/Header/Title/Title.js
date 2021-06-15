import logo from "../../img/logo.png";


export default function Title(props) {
  const toggleSideMenu =() => {
    props.setSideMenuState((isSideMenuOpen) => !isSideMenuOpen)
  }

  return(
    <div className="header-title">
       <img src={logo} alt="logo" onClick={() => {toggleSideMenu()}}/>
      <h3>Xalendar</h3>
    </div>
  )
}