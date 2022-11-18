import {Link} from 'react-router-dom'
//Import Scss
import './Card.scss'

function Card({picture, title, id} ) {


  return (
      <Link to={"/logment/" + id}className='card-wrapper'>
        <img className='card-image' src={picture} alt="Logement" />
        <p className='card-title'>{title}</p>
      </Link>
      
  )
}


export default Card
