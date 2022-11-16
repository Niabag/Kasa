import './Carousel.scss'
import vectorLef from '../../assets/image/vectorLeft.png'
import vectorRight from '../../assets/image/vectorRight.png'
import { useState } from 'react'

function Carousel({ imagesLogement }) {
  const [sliderPosition, setSliderPosition] = useState(0)
  const length = imagesLogement.length
  const images = imagesLogement
  const prevSlideHandler = () => {
    let newPosition = sliderPosition
    setSliderPosition(newPosition === 0 ? length - 1 : newPosition - 1)
  }

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
