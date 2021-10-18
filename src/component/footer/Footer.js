import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 pt-2 '>
        <div
          className='flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl'
        >
          <div className='mt-2'>© Copyright 2020. All Rights Reserved.</div>
          <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
