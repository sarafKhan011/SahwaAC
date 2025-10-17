// SubnevbarLogo.jsx
import React from 'react'
import LogoImage from '../../assets/Images/Logo.png'

function SubnevbarLogo() {
  return (
    <div className='flex items-center gap-2'>
      {/* Full name on medium+ screens */}
      <h1 className='text-white flex items-center font-serif font-bold hidden sm:flex'>
        <img src={LogoImage} alt="Logo" className='w-6 h-6 mr-1 object-cover' /> 
        Islamic College
      </h1>

      {/* Abbreviated name on small screens */}
      <h1 className='text-white flex items-center font-serif font-extrabold text-4xl sm:hidden'>
        <img src={LogoImage} alt="Logo" className='w-6 h-6 mr-1 object-cover' /> 
        I College
      </h1>
    </div>
  )
}

export default SubnevbarLogo
