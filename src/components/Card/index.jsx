import { Link } from 'react-router-dom'
import './Card.scss'


function Card({picture, title, id} ) {
  return (
      <Link to={id} className='card-wrapper'>
        <img className='card-image' src={picture} alt="Logement" />
        <p className='card-title'>{title}</p>
      </Link>
      
  )
}


export default Card
