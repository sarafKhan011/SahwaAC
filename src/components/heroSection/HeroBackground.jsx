import React from 'react';
import heroImage2 from '../../assets/heroImage2.jpg';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 top-0 w-full h-full">
      <img
        src={heroImage2}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default HeroBackground;
