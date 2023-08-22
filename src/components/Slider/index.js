import React, { useState, useEffect } from 'react';
import './style.css';



const Slider = (props) => {
  const images=props.images
 
  //manage image slider
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  const goToImage = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
            
    </div>
    <div className="dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={index === currentSlide ? 'dot active' : 'dot'}
        onClick={() => goToImage(index)}
      ></span>
    ))}
  </div>
  </>
  );
};

export default Slider;
