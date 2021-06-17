import {useRef} from "react";
import './SideMenu.scss'
import useOnClickOutside from '../Utilities/useOnClickOutside'

export default function SideMenu(props) {

  const toggleSideMenu =() => {
    props.setSideMenuState((isSideMenuOpen) => !isSideMenuOpen);

  }
  const sideMenu = useRef(null);
  useOnClickOutside(sideMenu, () => props.setSideMenuState((isSideMenuOpen) => !isSideMenuOpen));


  return (
    <div className="side-menu" ref={sideMenu}>
      <span onClick={() => {toggleSideMenu()}}> &times;</span>
      <ul>
        <li> <h3></h3></li>
        <li><h3>

        </h3></li>

      </ul>

    </div>
  );
}

