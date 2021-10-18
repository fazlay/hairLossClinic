import React from 'react';

const DetailsCard = (props) => {
  const { title, description, img } = props.show;
  return (
    <>
      <div class='relative pt-12 bg-blueGray-50'>
        <div class='items-center flex flex-wrap'>
          <div class='w-full md:w-4/12 ml-auto mr-auto px-4'>
            <img alt='...' class='max-w-full rounded-lg shadow-lg' src={img} />
          </div>
          <div class='w-full md:w-5/12 ml-auto mr-auto px-4 pb-10'>
            <div class='md:pr-12'>
              <div class='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8'></div>
              <h3 class='text-3xl font-semibold'>{title}</h3>
              <p class='mt-4 text-lg leading-relaxed text-blueGray-500'>
                {description}
              </p>
              <div class='flex flex-col  mt-10  space-y-2 w-3/4 bg-gray-100 py-7 px-10 rounded-lg'>
                <label
                  for='success'
                  class='text-gray-700 select-none font-bold'
                >
                  MAKE AN APPOINMENT
                </label>
                <input
                  type='email'
                  placeholder='Enter Your E-mail'
                  class='px-4 py-2 rounded-lg border border-pink-500 text-pink-600 placeholder-pink-600 focus:outline-none focus:ring-2 focus:ring-green-200'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
