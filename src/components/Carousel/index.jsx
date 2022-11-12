import './Carousel.scss'
import vectorLef from '../../assets/image/vectorLeft.png'
import vectorRight from '../../assets/image/vectorRight.png'
import {Children, useState} from 'react'

const widthSpan = 100.1

function Carousel(props) {
    const [sliderPosition, setSliderPosition] = useState(0);
    const { children } = props;
    const prevSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const nextSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const prevClickHandler = () => {
        prevSlideHandler();
    }

    const nextClickHandler = () => {
        nextSlideHandler();
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < children.length; i++) {
            let elem = document.getElementById(i);
            elem.style.transform = `translateX(` + toTranslate +`%)`; 
        }
    }


    const displayItems = Children.map(children, (child, index) =>(
        <div className="CarouselItem" id={index}>{child}</div>
    ))
    

    return (
            <div className="Container">
                <img src={vectorLef} alt='' className="LeftArrow" onClick={prevClickHandler}/>
                <div className='DisplayFrame'>
                    {displayItems}
                    <p className='slide-count'>{sliderPosition+1}/{children.length}</p>
                </div>
                <img src={vectorRight} alt='' className="RightArrow" onClick={nextClickHandler}/>
            </div>
    )
}

export default Carousel;