import React from 'react'
import SingleContactSocial from './SingleContactSocial'

import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function ContactSocial() {
  return (
    <div className='flex gap-2 '>
      <SingleContactSocial link="https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8" Icon={FaLinkedin} />
      <SingleContactSocial link="https://www.instagram.com/saraf.musammil" Icon={FaFacebookSquare} />
      <SingleContactSocial link="https://www.instagram.com/saraf.musammil" Icon={FaTwitterSquare} />
      <SingleContactSocial link="https://www.instagram.com/saraf.musammil" Icon={FaInstagramSquare } />
    </div>
  )
}

export default ContactSocial