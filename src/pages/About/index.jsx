import aboutBaner from '../../assets/image/about-Baner.png'
import '../../utils/styles/GlobalStyle.scss'
import './About.scss'

function About() {
  return (
    <div className='align-page'>
      <header className='container-about'>
        <img className='banner-about' src={aboutBaner} alt="Baner" />
      </header>
    </div>
  )
}

export default About
