import '../../utils/styles/GlobalStyle.scss'
import './Lodging.scss'
import { useParams, useHistory } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import { useEffect } from 'react'
import logementData from '../../assets/data/logements.json'
import Carousel from '../../components/Carousel/index'
import Navbar from '../../components/Navbar'
import Rating from '../../components/Rating'

function Lodging() {
  const history = useHistory()
  const { id } = useParams()

  const logement = logementData.find((logement) => logement.id === id)

  useEffect(() => {
    function matchUrlId() {
      if (!logement) {
        return history.push('/404')
      }
    }
    matchUrlId()
  }, [history, logement])

  return (
    <div className="align-page">
      <Navbar about="about-decoration-none" accueil="accueil-decoration-none" />
      <header className="container-header--lodging">
        <Carousel>
          {logement.pictures.map((logement, index) => (
            <img key={index} src={logement}  alt="" />
          ))}
        </Carousel>
      </header>
      <section className="container-section">
        <div className="container-logement">
          <div>
            <h1 className="title">{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="container-tags">
              {logement.tags.map((logement, index) => (
                <p className="tags" key={index}>
                  {logement}
                </p>
              ))}
            </div>
          </div>
          <div className="container-global-profil">
            <div className="container-profil">
              <p className="profil-title">{logement.host.name}</p>
              <img
                className="profil-image"
                src={logement.host.picture}
                alt="profil"
              />
            </div>
            <div className="container-notation">
                <Rating
                rating={logement.rating}
                />
            </div>
          </div>
        </div>
        <div className="container-dropdown">
          {' '}
          <Dropdown
            title="Description"
            btnLodging="dropdown-btn-lodging"
            containeurLodging="dropdown-lodging"
            content="dropdown-content"
          >
            <p className="dropdown-item">{logement.description}</p>
          </Dropdown>
          <Dropdown
            title="Équipements"
            btnLodging="dropdown-btn-lodging"
            containeurLodging="dropdown-lodging"
            content="dropdown-content"
          >
            {logement.equipments.map((logement, index) => (
              <p className="dropdown-item" key={index}>{logement}</p>
            ))}
          </Dropdown>
        </div>
      </section>
    </div>
  )
}

export default Lodging
