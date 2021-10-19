import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <div className='bg-cover bg-center  h-auto text-dark py-24 px-10 object-fill fillBack'>
        <div className='md:w-1/2'>
          <p className='text-3xl font-bold pb-3'>Hair Restoration Solutions</p>
          <p className='text-xl mb-10 leading-none'>
            Learn about your hair loss options, from FUE and FUT transplant
            procedures, scalp injections (ACell, and PRP), eyebrow and beard
            restoration, as well as nonsurgical treatments like medication,
            laser therapy, and nutritional supplements.
          </p>
          <Link to="/" className='bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800'
       > LEARN MORE</Link>
         
        </div>
      </div>
    </>
  );
};

export default Banner;
