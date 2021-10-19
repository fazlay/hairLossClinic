import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { id, title, description, img } = props.service;
  console.log();
  return (
    <>
      <div className='bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200'>
        <div className='relative w-full h-80 md:h-64 lg:h-44'>
          <img
            src={img}
            alt='hair Product'
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div className='px-4 py-4'>
          <h2 className='text-xl py-3 text-center font-bold text-gray-900'>
            {title}
          </h2>

          <p className='text-base font-normal text-gray-900 group-hover:text-indigo-600'>
            {description.slice(0, 100)}
          </p>
          <Link to={`service/${id}`}>
            <button
              type='button'
              className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-1 my-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline'
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
