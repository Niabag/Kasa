import aboutBanner from '../../assets/image/aboutBaner.png'

//import scss
import './About.scss'
import '../../utils/styles/GlobalStyle.scss'

//import composant
import Dropdown from '../../components/Dropdown'
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
          content="dropdown-content-about"
        >
          <p className="dropdown-item-about">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Dropdown>
        <Dropdown
          title="Respect"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          content="dropdown-content-about"
        >
          <p className="dropdown-item-about">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Dropdown>
        <Dropdown
          title="Service"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          content="dropdown-content-about"
        >
          <p className="dropdown-item-about">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Dropdown>
        <Dropdown
          title="Sécurité"
          btnAbout="dropdown-btn-about"
          containeurAbout="dropdown-about"
          content="dropdown-content-about"
        >
          <p className="dropdown-item-about">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Dropdown>
      </section>
    </div>
  )
}

export default About
