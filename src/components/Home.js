// src/components/Home.js

import React from 'react';
import HeroSlider from '../components/HeroSlider'; // Use 'HeroSlider' with an uppercase 'H'


const Home = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'Right',
      alignItems: 'Right',
      height: '100vh'
    }}
  >
      
      <HeroSlider />
      

    </div>
  );
};

export default Home;
