import aboutBanner from '../../assets/image/aboutBaner.png'
import '../../utils/styles/GlobalStyle.scss'
import Dropdown from '../../components/Dropdown'
import './About.scss'
import Navbar from '../../components/Navbar'

function About() {
  return (
    <div className="align-page">
      <Navbar accueil="accueil-decoration-none"
              about="about-decoration-up" />
      <header className="container-header--about">
        <img className="banner-about" src={aboutBanner} alt="Banner" />
      </header>
      <section className="container-section">
          <Dropdown title="lol"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about">
            toto
          </Dropdown>
          <Dropdown title="lol"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about">
            toto
          </Dropdown>
      </section>
    </div>
  )
}

export default About
