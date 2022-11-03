import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'
import '../../utils/styles/GlobalStyle.scss'
import './Navbar.scss'


function Navbar() {
  return (
    <div className='align-page'>
    <nav className='container-nav'>
      <Link to="/">
        <img className='logo-nav' src={logo} alt="Logo" />
      </Link>
      <div>
        <Link className='styled-link-nav' to="/kasa">Accueil</Link>
        <Link className='styled-link-nav' to="/about">A Propos</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
