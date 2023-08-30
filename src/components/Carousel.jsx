import "./Carousel.css";
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from "react";


export const Carousel = ({ slides }) => {

  const [slide,setSlide]=useState(0);

  const nextSlide =()=>{
    setSlide(slide === slides.length - 1? 0:slide+1);
    
  }
  const prevSlide =()=>{
    setSlide(slide === 0 - 1? slides.length:slide- 1);
  }
 
  return <div className="Carousel">
  <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
  {
    slides.map((item,idx) => {
      return <img className={slide===idx ? "slide ": "slide slide-hidden"} src={item.src} alt={item.alt} key={idx} />
    })
  }
  <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
  <span className="indicator">
    {  slides.map((_,idx)=>{
        return <button key={idx} onClick={()=>setSlide(idx)} className={slide===idx?"indicator-btn":"indicator-btn indicator-btn-inactive"}></button>
      })
    }
  </span>
  </div>
};
