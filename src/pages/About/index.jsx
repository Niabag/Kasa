import aboutBanner from '../../assets/image/aboutBaner.png'
import '../../utils/styles/GlobalStyle.scss'
import Dropdown from '../../components/Dropdown'
import './About.scss'
import Navbar from '../../components/Navbar'

function About() {
  return (
    <div className="align-page">
      <Navbar accueil="accueil-decoration-none" about="about-decoration-up" />
      <header className="container-header--about">
        <img className="banner-about" src={aboutBanner} alt="Banner" />
      </header>
      <section className="container-section--about">
        <Dropdown
          title="Fiabilité"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          item="dropdown-item-about"
          content="dropdown-content-about"
        >
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Dropdown>
        <Dropdown
          title="Respect"
          item="dropdown-item-about"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          content="dropdown-content-about"
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Dropdown>
        <Dropdown
          title="Service"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          item="dropdown-item-about"
          content="dropdown-content-about"
        >
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Dropdown>
        <Dropdown
          title="Sécurité"
          item="dropdown-item-about"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          content="dropdown-content-about"
        >
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Dropdown>
      </section>
    </div>
  )
}

export default About
