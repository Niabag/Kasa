import '../../utils/styles/GlobalStyle.scss'
import './Lodging.scss'
import { useParams, useHistory  } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import { useEffect } from 'react'
import logementData from '../../assets/data/logements.json'



function Lodging() {
  const history = useHistory();
  const { id } = useParams()
  console.log(id)
  useEffect(() => {

  function toto() {
    const match = logementData.find(logement => logement.id === id)
   
    if (!match){  
      return history.push("/404")
    }

  }
  toto()
  }, [history, id]);



  return (
    <div className="align-page">
      <header className="container-about">

      </header>
      <section>
        <Dropdown dropdownBtnSmall="dropdown-btn-small" />
      </section>
    </div>
  )
}

export default Lodging
