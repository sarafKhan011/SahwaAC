import React from 'react'
import ContactSocial from './ContactSocial'
import SubnevbarLogo from './SubnevbarLogo'

function SubnavbarMain() {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      {/* Logo */}
      <SubnevbarLogo />

      {/* Social icons */}
      <ContactSocial />
    </div>
  )
}

export default SubnavbarMain
