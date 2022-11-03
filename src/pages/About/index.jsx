import aboutBanner from '../../assets/image/about-Baner.png'
import '../../utils/styles/GlobalStyle.scss'
import Dropdown from '../../components/Dropdown'
import './About.scss'

function About() {
  return (
    <div className="align-page">
      <header className="container-header">
        <img className="banner-about" src={aboutBanner} alt="Banner" />
      </header>
      <section className='container-section'>
        <Dropdown 
        dropdownBtnWide = "dropdown-btn"
        />
      </section>
    </div>
  )
}

export default About
