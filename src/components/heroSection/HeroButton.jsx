import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function HeroButton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Primary Button */}
      <button
        className="px-6 py-3 rounded-full font-bold text-white bg-white/10 backdrop-blur-md border border-white/30
                   hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        Get Started
        <LuArrowDownRight />
      </button>

      {/* Secondary Button */}
      <button
        className="px-6 py-3 rounded-full font-bold text-emerald-400 border border-emerald-400 bg-transparent
                   hover:bg-emerald-400 hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        Learn More
        <LuArrowDownRight />
      </button>
    </div>
  );
}

export default HeroButton;
