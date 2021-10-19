import React from 'react';

const Contact = () => {
  return (
    <div className=' mx-auto w-1/2'>
      <h3 class='text-3xl text-red-600 font-extrabold text-center pt-10 '>
        CAN'T CHOOSE THE APPROPRIATE TREATMENT ??
      </h3>
      <form action='' class='form bg-white p-6 my-10 relative'>
        <h3 class='text-2xl text-gray-900 font-semibold'>Let us call you!</h3>
        <p class='text-gray-600'> To help you choose the right Treatment</p>
        <div class='flex space-x-5 mt-3'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Your Name'
            class='border p-2  w-1/2'
          />
          <input
            type='tel'
            name=''
            id=''
            placeholder='Your Number'
            class='border p-2 w-1/2'
          />
        </div>
        <input
          type='email'
          name=''
          id=''
          placeholder='Your Email'
          class='border p-2 w-full mt-3'
        />
        <textarea
          name=''
          id=''
          cols='10'
          rows='3'
          placeholder='Tell us about the problem you are facing'
          class='border p-2 mt-3 w-full'
        ></textarea>

        <input
          type='submit'
          value='Submit'
          class='w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3'
        />
      </form>
    </div>
  );
};

export default Contact;
