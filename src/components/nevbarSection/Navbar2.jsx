import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoImage from "../../assets/Images/Logo.png"
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

// Navbar Links
const links = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/course" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

// Social Icons
const socialLinks = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8",
  },
  { icon: FaFacebookSquare, link: "https://www.instagram.com/saraf.musammil" },
  { icon: FaTwitterSquare, link: "https://www.instagram.com/saraf.musammil" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com/saraf.musammil" },
];

// Single Social Icon Component
const SingleContactSocial = ({ Icon, link }) => (
  <motion.a
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 text-2xl h-10 w-10 border border-gray-300 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 bg-white/30 backdrop-blur-md"
  >
    <Icon />
  </motion.a>
);

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass =
    "font-medium text-gray-800 hover:text-white transition-all duration-200 cursor-pointer";

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed top-0 left-0 z-50"
      >
        {/* Main navbar */}
        <nav className="max-w-7xl mx-auto bg-emerald-600/80 flex items-center justify-between px-4 py-3 md:py-4 backdrop-blur-md shadow-md rounded-b-xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2 text-gray-800 font-extrabold text-xl tracking-wide"
          >
            <img src={LogoImage} alt="Logo" className="w-9 h-9 object-cover" />
            <span>Sahwa Arabic College</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx }}
              >
                <RouterLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={linkClass}
                >
                  {link.name}
                </RouterLink>
              </motion.div>
            ))}
          </div>

          {/* Desktop Button + Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="rounded-full py-2.5 px-5 bg-green-500 text-white font-semibold flex items-center gap-2 shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </motion.button>

            <div className="flex gap-2">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial
                  key={idx}
                  Icon={item.icon}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="md:hidden flex items-center"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 text-3xl p-2"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </motion.div>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-16 left-0 w-full bg-emerald-600/80 backdrop-blur-md flex flex-col gap-5 p-6 shadow-lg z-40 rounded-b-xl"
          >
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

            {/* Mobile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
              className="mt-4 rounded-full py-2.5 px-5 bg-green-500 text-white font-semibold flex items-center gap-2 shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </motion.button>

            {/* Mobile Social Icons */}
            <div className="flex gap-2 mt-4">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial
                  key={idx}
                  Icon={item.icon}
                  link={item.link}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar2;
