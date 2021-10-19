import React from 'react';

const ProductCard = (props) => {
  const { title, price, description, image } = props.product;
  return (
    <>
      <div>
        <div className='flex items-center p-5 w-full h-full bg-white'>
          <div className='border-t pt-16 grid grid-cols-2 gap-8'>
            <div className='flex flex-col justify-start'>
              <div className='flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={image} />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-col gap-4'>
                <h1 className='capitalize text-2xl font-extrabold'>{title}</h1>
                <h2 className='text-2xl'>${price}</h2>
                <p className='text-md text-gray-500	'>{description.slice(0,100)}</p>
                <div className='flex items-center gap-4 my-6 cursor-pointer '>
                  <div className='bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center'>
                    Add to bag
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
