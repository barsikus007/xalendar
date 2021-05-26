import './Header.css';
import Title from './Title/Title';
import Selector from './Selector/Selector';
import Login from './Login/Login'

export default function Header() {
  return(
    <header className="section-outer header">
      <div className="section-inner">
        <div className="header-wrapper">
          <Title/>
          <Selector/>
          <Login/>
        </div>
      </div>
    </header>
  )
}