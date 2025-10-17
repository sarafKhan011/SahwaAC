import React from 'react';

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className=" text-white text-2xl h-10 w-10 border rounded-full flex items-center justify-center  hover:text-emerald-500 transition-all duration-300"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;