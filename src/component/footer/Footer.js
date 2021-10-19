import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 pt-2 '>
        <div
          className='flex pb-5 px-3 mx-auto pt-5 border-t text-gray-800 text-sm 
      md:flex-row max-w-6xl'
        >
          <h1 className='mt-2 block mx-20 text-center text-xl font-semibold'>
            Hair Loss Clinic
          </h1>
          <div className='pl-20'>
            <p className='block'>
              <span className='text-bold text-red-400'> Street </span> 73
              Helland Bridge
            </p>
            <p className='block'>
              <span className='text-bold text-red-400'>City </span> UPPER
              CLATFORD
            </p>
            <p className='block'>
              <span className='text-bold text-red-400'>
                Zip Code/Postal code{' '}
              </span>{' '}
              SP11 3WA
            </p>
            <p className='block'>
              <span className='text-bold text-red-400'>Phone Number </span> 079
              0497 8293
            </p>
          </div>
          <div className='pl-20'>
            <label className='text-grey-900 my-3 py-3'>
              Subscribe to our Newsletter
            </label>
            <input
              className='block my-3 px-2 py-2'
              type='email'
              placeholder='Enter Your Email'
            />
            <input
              className='block my-3 text-white bg-purple-600 p-2 rounded-lg'
              type='button'
              value='Submit'
            />
          </div>
        </div>
        <div className='mt-2 text-center'>
          © Copyright 2020. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
