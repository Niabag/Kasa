import '../../utils/styles/GlobalStyle.scss'
import './Lodging.scss'
import { useParams, useHistory } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import { useEffect } from 'react'
import logementData from '../../assets/data/logements.json'
import Carousel from '../../components/Carousel/index'
import Navbar from '../../components/Navbar'

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
            <img key={index} src={logement} alt="" />
          ))}
        </Carousel>
      </header>
      <section className="container-section">
        <Dropdown
          title="Description"
          btnLodging="dropdown-btn-lodging"
          containeurLodging="dropdown-lodging"
        >
               <p>{logement.description}</p>   
        </Dropdown>
        <Dropdown
          title="Équipements"
          btnLodging="dropdown-btn-lodging"
          containeurLodging="dropdown-lodging"
        >
          {logement.equipments.map((logement, index) => (
            <p key={index}>{logement}</p>
          ))}
        </Dropdown>
      </section>
    </div>
  )
}

export default Lodging
