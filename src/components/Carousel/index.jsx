import { useState } from 'react'

//import scss
import './Carousel.scss'

//import image
import vectorLef from '../../assets/image/vectorLeft.png'
import vectorRight from '../../assets/image/vectorRight.png'



function Carousel({ imagesLogement }) {
  //useSate initialisé a 0
  const [sliderPosition, setSliderPosition] = useState(0)

  //Total des images
  const length = imagesLogement.length

  //import des images
  const images = imagesLogement

  //Image precedente
  const prevSlideHandler = () => {
    let newPosition = sliderPosition
    setSliderPosition(newPosition === 0 ? length - 1 : newPosition - 1)
  }

  //Image suivante
  const nextSlideHandler = () => {
    let newPosition = sliderPosition
    setSliderPosition(newPosition === length - 1 ? 0 : newPosition + 1)
  }

  const prevClickHandler = () => {
    prevSlideHandler()
  }

  const nextClickHandler = () => {
    nextSlideHandler()
  }
 

  return (
    <div className="Container">
      <img
        src={vectorLef}
        alt=""
        className={length > 1 ? "LeftArrow" : "arrowNone"}
        onClick={prevClickHandler}
      />
      <div className="DisplayFrame">
        {images.map((images, index) => (
          <div
            className={index === sliderPosition ? 'silde active' : 'slide'}
            key={index}
          >
            <img className="styledImage" src={images} alt="logement" />
          </div>
        ))}

        <p className="slide-count">
          {sliderPosition + 1}/{length}
        </p>
      </div>
      <img
        src={vectorRight}
        alt=""
        className={length > 1 ? "RightArrow" : "arrowNone"}
        onClick={nextClickHandler}
      />
    </div>
  )
}

export default Carousel
