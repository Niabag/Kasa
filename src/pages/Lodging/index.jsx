import '../../utils/styles/GlobalStyle.scss'
import './Lodging.scss'
import { useParams, useHistory } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import { useEffect } from 'react'
import logementData from '../../assets/data/logements.json'
import Carousel from '../../components/Carousel/index'

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
  console.log(logement)

  return (
    <div className="align-page">
      <header className="container-header">     
          <Carousel>
          {logement.pictures.map((logement, index) => (  
           <img src={logement} alt="" />
        ))}
          </Carousel>
      </header>
      <section>
        <Dropdown dropdownBtnSmall="dropdown-btn-small" />
      </section>
    </div>
  )
}

export default Lodging
