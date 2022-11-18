//import image
import banerHome from '../../assets/image/banerHome.png'

//import data
import logementData from '../../assets/data/logements.json'

//import scss
import '../../utils/styles/GlobalStyle.scss'
import './Home.scss'

//import composant
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div className='align-page'>
       <Navbar about= 'about-decoration-none'
              accueil='accueil-decoration-up'/>
      <header className='header-home'>
        <h1 className='title-home'>Chez vous, partout et ailleurs</h1>
        <img className='banner-home' src={banerHome} alt="Baniere" />
      </header>
      <section className='card-container-home'>
        {logementData.map((logement, index) => (  
          <Card
            key={`${logement.title}-${index}`}
            id={logement.id}
            title={logement.title}
            picture ={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}
export default Home
