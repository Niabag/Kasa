import logo from '../../assets/image/logoFooter.png'
import './Footer.scss'


function Footer() {
  return (
    <footer className='background'>
      <img className='logo' src={logo} alt="logo" />
      <p className='copyrate'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
