import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="relative rounded-full py-3 px-6 bg-white/10 backdrop-blur-md text-white font-bold flex items-center gap-2 shadow-md hover:text-emerald-500 hover:scale-105 transition-all duration-300"
    >
      Get Certificate
      <LuArrowDownRight className="transition-colors duration-300" />
    </button>
  );
};

export default NavbarBtn;
