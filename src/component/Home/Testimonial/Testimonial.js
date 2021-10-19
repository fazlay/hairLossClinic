import React from 'react';

const Testimonial = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center py-10'>
        <h1 className='text-3xl text-gray-600 leading-relaxed text-center w-4/5'>
          "I am so very grateful to Hair Loss Clinic. I’m a female physician who
          had a hair transplant with ACell & PRP treatment in November 2012 for
          extensive hair loss and thinning. I now have a beautiful head of hair
          far beyond my wildest dreams and feel so much more
          attractive – like a new person!"
        </h1>
        <div className='flex items-center gap-4'>
          <div className='rounded-full w-12 h-12 bg-black overflow-hidden'>
            <img alt ="user review" src='https://images.unsplash.com/photo-1594819043778-2382e859f56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
          </div>
          <div className='flex flex-col tracking-wider'>
            <label className='text-gray-600 font-bold text-base'>
              Railey F.
            </label>
            <label className='text-gray-400 font-normal text-sm'>
              Female physician
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
