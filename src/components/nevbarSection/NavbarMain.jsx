// NavbarMain.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import LogoImage from "../../assets/Images/Logo.png"; // <-- Add your logo here

const links = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/course" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8" },
  { icon: FaFacebookSquare, link: "https://www.facebook.com/" },
  { icon: FaTwitterSquare, link: "https://twitter.com/" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com/saraf.musammil" },
];

const SingleContactSocial = ({ Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl h-10 w-10 border border-white/20 rounded-full flex items-center justify-center 
    hover:text-black hover:border-black transition-all duration-300"
  >
    <Icon />
  </a>
);

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  const linkClass =
    "font-medium text-white hover:text-black transition-all duration-200 cursor-pointer";

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-emerald-600/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={LogoImage} alt="Logo" className="w-10 h-10 object-cover" />
            <h1 className="text-white font-bold text-xl sm:text-2xl">Sahwa Arabic College</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link, idx) => (
              <RouterLink
                key={idx}
                to={link.path}
                onClick={handleLinkClick}
                className={linkClass}
              >
                {link.name}
              </RouterLink>
            ))}
          </div>

          {/* Desktop Button + Social */}
          <div className="hidden md:flex items-center gap-4">
            <RouterLink
              to="/contact"
              className="rounded-full py-2.5 px-5 bg-white text-emerald-600 font-semibold flex items-center gap-2 shadow-md hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </RouterLink>

            <div className="flex gap-2">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial key={idx} Icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl p-2"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-emerald-600/90 backdrop-blur-md flex flex-col gap-4 p-5 shadow-lg z-40">
            {links.map((link, idx) => (
              <RouterLink
                key={idx}
                to={link.path}
                onClick={handleLinkClick}
                className={linkClass}
              >
                {link.name}
              </RouterLink>
            ))}

            <RouterLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full py-2 px-4 bg-white text-emerald-600 font-semibold flex items-center gap-2 shadow-md hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </RouterLink>

            <div className="flex gap-3 mt-4 justify-center">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial key={idx} Icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default NavbarMain;
