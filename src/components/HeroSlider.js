// src/components/HeroSlider.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../images/stock.jpg'

const HeroSlider = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} showThumbs={false}>
      <div>
        <img src={slide1} style={{height: "540px"}} alt="Slider 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/path/to/your/image2.jpg" alt="Slider 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/path/to/your/image3.jpg" alt="Slider 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
