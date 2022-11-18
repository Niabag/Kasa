import { Link } from 'react-router-dom'

//import image
import logo from '../../assets/image/logo.svg'

//import scss
import '../../utils/styles/GlobalStyle.scss'

//import composant
import './Navbar.scss'


function Navbar({accueil, about}) {
  return (
    <div className='align-page'>
    <nav className='container-nav'>
      <Link to="/kasa">
        <img className='logo-nav' src={logo} alt="Logo" />
      </Link>
      <div>
        <Link className={accueil}to="/kasa">Accueil</Link>
        <Link className={about} to="/about">A Propos</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
