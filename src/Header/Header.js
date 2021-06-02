import './Header.css';
import Title from './Title/Title';
import Selector from './Selector/Selector';
import Login from './Login/Login'

export default function Header(props) {
  return(
    <header className="section-outer header">
      <div className="section-inner">
        <div className="header-wrapper">
          <Title/>
          <Selector setType={props.setType}/>
          <Login/>
        </div>
      </div>
    </header>
  )
}