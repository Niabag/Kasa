import './Card.scss'


function Card({picture, title} ) {
  return (
      <div className='card-wrapper'>
        <img className='card-image' src={picture} alt="Logement" />
        <p className='card-title'>{title}</p>
      </div>
  )
}


export default Card
