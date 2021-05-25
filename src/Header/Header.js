import './Header.css';
import Title from './Title/Title';
import Selector from './Selector/Selector';
import Login from './Login/Login'

export default function Header() {
  return(
    <header className="section-outer section-header">
      <div className="section-inner">
        <div className="section-header-wrapper">
          <Title/>
          <Selector/>
          <Login/>
        </div>
      </div>
    </header>
  )
}