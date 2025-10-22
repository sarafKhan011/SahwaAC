import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { fadeIn } from '@/framerMotion/variants';
import { motion } from 'framer-motion';

function HeroButton() {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
    className="flex flex-wrap gap-4 justify-center sm:justify-start">
    <button className="group px-6 py-3 rounded-full font-bold text-white bg-white/10 backdrop-blur-md border border-white/30
                       hover:bg-white/20 hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
      Get Started
      <LuArrowDownRight className="transition-transform duration-300 group-hover:rotate-45" />
    </button>
  
    <button className="group px-6 py-3 rounded-full font-bold text-emerald-400 border border-emerald-400 bg-transparent
                       hover:bg-emerald-400 hover:text-white hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
      Learn More
      <LuArrowDownRight className="transition-transform duration-300 group-hover:rotate-45" />
    </button>
  </motion.div>
  );
}

export default HeroButton;
