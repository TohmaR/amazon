import React, {useState} from 'react'
import {HomeCarouselData} from './HomeCarouselData'
import './HomeCarousel.css'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const HomeCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }


    const prevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? length - 1 : currentSlide - 1)  
    }

    const nextSlide = () => {
        setCurrentSlide( currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="homeCarousel">
            <ArrowBackIosIcon className="homeCarousel__leftArrowIcon" fontSize="large" onClick={prevSlide}/>
            <ArrowForwardIosIcon className="homeCarousel__rightArrowIcon" fontSize="large" onClick={nextSlide}/>
            {HomeCarouselData.map((slide, index) => {
                return(
                    <div className="homeCarousel__slide" key={index}>
                        {index === currentSlide && <img className="homeCarousel__image" src={slide.image} alt={slide.alt}/>}
                    </div>
                    
                )
            })}
        </div>
    )
}

export default HomeCarousel
