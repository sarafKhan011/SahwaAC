import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

// Navbar Links
const links = [
  { name: "Home", path: "/home" },
  { name: "Courses", path: "/course" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

// Social Icons
const socialLinks = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8" },
  { icon: FaFacebookSquare, link: "https://www.instagram.com/saraf.musammil" },
  { icon: FaTwitterSquare, link: "https://www.instagram.com/saraf.musammil" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com/saraf.musammil" },
];

// Single Social Icon Component
const SingleContactSocial = ({ Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 text-2xl h-10 w-10 border border-gray-300 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 bg-white/30 backdrop-blur-md"
  >
    <Icon />
  </a>
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
      <header className="w-full fixed  top-0 left-0 z-50">
        {/* Main navbar */}
        <nav className="max-w-7xl mx-auto  bg-emerald-600/80 flex items-center justify-between px-4 py-3 md:py-4 backdrop-blur-md shadow-md rounded-b-xl">
          {/* Logo */}
          <div className="text-gray-800 font-extrabold text-xl tracking-wide">Sahwa Arabic College</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link, idx) => (
              <RouterLink key={idx} to={link.path} onClick={handleLinkClick} className={linkClass}>
                {link.name}
              </RouterLink>
            ))}
          </div>

          {/* Desktop Button + Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={scrollToContact}
              className="rounded-full py-2.5 px-5 bg-green-500 text-white font-semibold flex items-center gap-2 shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </button>

            <div className="flex gap-2">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial key={idx} Icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-3xl p-2">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-emerald-600/80 backdrop-blur-md flex flex-col gap-5 p-6 shadow-lg z-40 rounded-b-xl">
            {links.map((link, idx) => (
              <RouterLink key={idx} to={link.path} onClick={handleLinkClick} className={linkClass}>
                {link.name}
              </RouterLink>
            ))}

            {/* Mobile Button */}
            <button
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
              className="mt-4 rounded-full py-2.5 px-5 bg-green-500 text-white font-semibold flex items-center gap-2 shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Get Certificate
              <LuArrowDownRight className="text-lg" />
            </button>

            {/* Mobile Social Icons */}
            <div className="flex gap-2 mt-4">
              {socialLinks.map((item, idx) => (
                <SingleContactSocial key={idx} Icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar2;
