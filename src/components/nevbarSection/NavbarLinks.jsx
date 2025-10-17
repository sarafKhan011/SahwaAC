import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/course" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const NavbarLinks = ({ onLinkClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    onLinkClick();
  };

  // ✅ White by default, turns black on hover
  const linkClass =
    "font-medium text-white hover:text-black transition-all duration-200 cursor-pointer";

  const renderLink = (link, idx) => (
    <RouterLink
      key={idx}
      to={link.path}
      onClick={handleLinkClick}
      className={linkClass}
    >
      {link.name}
    </RouterLink>
  );

  return (
    <nav className="relative">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl p-2"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {links.map((link, idx) => renderLink(link, idx))}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute top-14 left-0 bg-emerald-500/70 backdrop-blur-md
          flex flex-col gap-3 p-6 md:hidden shadow-lg z-50 
          max-h-[70vh] overflow-y-auto rounded-b-lg"
        >
          {links.map((link, idx) => renderLink(link, idx))}
        </div>
      )}
    </nav>
  );
};

export default NavbarLinks;




// import React from 'react'
// import { Link } from 'react-router-dom';



// function NavbarLinks() {
 
    

//   return (
//     <div>
      
//         <ul className='hidden md:flex gap-16'>
//         <Link to={'/'}>
//         <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Home</li>
//         </Link>
        
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Search</li>
               
             
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>New</li>
//             <Link to={'/Course'}>   
//             <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Perowned</li>
//             </Link> 
//         </ul>

       
//     </div>
//   )
// }

// export default NavbarLinks