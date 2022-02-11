import React, {useState} from 'react'
import "./FeatureCard.css";
import { SliderData } from './SliderData';
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs';

const FeatureCard = ({product, slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextslide= () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevslide= () => {
    setCurrent(current === 0 ? length - 1  : current - 1)
}

console.log(current)

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <section className='Slider'>
            <BsFillArrowLeftSquareFill className='left-arrow' onClick={prevslide}/>
            <BsFillArrowRightSquareFill className='right-arrow' onClick={nextslide}/>
        {SliderData.map((slide, index)=> {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} alt="banners" className='image'/>)}
                    
                </div>
            )
            
        })}
        </section>
    )
} 

export default FeatureCard
