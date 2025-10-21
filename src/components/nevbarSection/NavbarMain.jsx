// NavbarMain.jsx
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import LogoImage from "../../assets/Images/Logo.png";

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
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  // Detect scroll to change navbar size/color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-medium text-white relative group transition-all duration-300";

  return (
    <>
      {/* Animated Header */}
      <motion.header
  initial={{ y: -60, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-500 ${
    scrolled ? "bg-emerald-700/90 shadow-lg py-1.5" : "bg-emerald-600/70 py-2.5"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src={LogoImage} alt="Logo" className="w-9 h-9 object-cover" />
      <h1 className="text-white font-bold text-lg sm:text-xl">
        Sahwa Arabic College
      </h1>
    </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1 }}>
                <RouterLink to={link.path} onClick={handleLinkClick} className={linkClass}>
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </RouterLink>
              </motion.div>
            ))}
          </div>

          {/* Desktop Button + Social */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <RouterLink
                to="/contact"
                className="rounded-full py-2.5 px-5 bg-white text-emerald-600 font-semibold flex items-center gap-2 shadow-md hover:bg-white/90 transition-all duration-300"
              >
                Get Certificate
                <LuArrowDownRight className="text-lg" />
              </RouterLink>
            </motion.div>

            <div className="flex gap-2">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial key={idx} Icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl p-2">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-emerald-600/95 backdrop-blur-md flex flex-col gap-4 p-5 shadow-lg z-40"
            >
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <RouterLink
                    to={link.path}
                    onClick={handleLinkClick}
                    className="font-medium text-white hover:text-black transition-all duration-300"
                  >
                    {link.name}
                  </RouterLink>
                </motion.div>
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default NavbarMain;
