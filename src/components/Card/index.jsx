/* eslint-disable no-template-curly-in-string */
import {Link, useRouteMatch } from 'react-router-dom'
import './Card.scss'

function Card({picture, title, id} ) {
  let { path } = useRouteMatch()

  return (
      <Link to={path+"/"+id}className='card-wrapper'>
        <img className='card-image' src={picture} alt="Logement" />
        <p className='card-title'>{title}</p>
      </Link>
      
  )
}


export default Card
