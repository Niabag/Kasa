import banerHome from '../../assets/image/banerHome.png'
import Card from '../../components/Card'
import logementData from '../../assets/data/logements.json'
import '../../utils/styles/GlobalStyle.scss'
import './Home.scss'

function Home() {
  return (
    <div className='align-page'>
      <header className='header-home'>
        <h1 className='title-home'>Chez vous, partout et ailleurs</h1>
        <img className='banner-home' src={banerHome} alt="Baniere" />
      </header>
      <section className='card-container-home'>
        {logementData.map((logement, index) => (  
          <Card
            key={`${index}`}
            title={logement.title}
            picture ={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}
export default Home
