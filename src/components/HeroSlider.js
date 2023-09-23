// src/components/HeroSlider.js

import React, { useState } from 'react';
import '../css/Heroslider.css'; // Create this CSS file for styling

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/path/to/your/image1.jpg',
      legend: 'Legend 1',
    },
    {
      image: '/path/to/your/image2.jpg',
      legend: 'Legend 2',
    },
    {
      image: '/path/to/your/image3.jpg',
      legend: 'Legend 3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="hero-slider">
      <button className="slider-btn" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider-content">
        <img src={slides[currentSlide].image} alt={`Slider ${currentSlide + 1}`} />
        <p className="legend">{slides[currentSlide].legend}</p>
      </div>
      <button className="slider-btn" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default HeroSlider;
