import React from 'react';

const HeroText = () => {
  return (
    <div className="text-white mb-6">
      <h1
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold 
          mb-3 
          leading-snug sm:leading-tight md:leading-tight lg:leading-[1.1]
        "
      >
        Welcome to <br />Sahwa Arabic College
      </h1>

      <p
        className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-white/90 
          mt-2 sm:mt-3 md:mt-4
        "
      >
        Providing quality education and values
      </p>
    </div>
  );
};

export default HeroText;
