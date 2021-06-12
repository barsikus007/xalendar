import './Header.scss';
import Title from './Title/Title';
import Selector from './Selector/Selector';
import Login from './Login/Login'


export default function Header(props) {
  return(
    <header className="section-outer header">
      <div className="section-inner">
        <div className="header-wrapper">

          <Title isSideMenuOpen={props.isSideMenuOpen} setSideMenuState={props.setSideMenuState} />
          <Selector currentType={props.currentType} selectType={props.selectType}/>
          <Login/>
        </div>
      </div>
    </header>
  )
}