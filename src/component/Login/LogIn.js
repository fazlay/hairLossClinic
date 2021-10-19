import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { processLogin, error } = useAuth(email, password);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(email, password);

    processLogin(email, password);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className='container p-10 grid grid-cols-2 '>
        <div className='text-center'>
          <button
            onClick={signInUsingGoogle}
            className='bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline'
          >
            Login with Google
          </button>
        </div>

        <div className='w-1/2'>
          <form onSubmit={handleLogIn}>
            <div className='mb-4'>
              <label class='block text-md font-light mb-2' for='password'>
                Enter Your E-mail
              </label>
              <input
                className='w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline form-control'
                type='email'
                onChange={handleEmailChange}
              />
            </div>
            <div className='mb-4'>
              <label class='block text-md font-light mb-2' for='password'>
                Enter Password
              </label>
              <input
                className='w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline form-control'
                type='password'
                onChange={handlePasswordChange}
              />
            </div>

            <button
              className='bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Log In
            </button>
          </form>
          <div className='text-red-600'>{error && error}</div>
        </div>
      </div>
      <div>
        <p className='mb-8 text-sm text-center'>
          Don't Have Account ?          <Link
            className=' w-full mb-8 text-sm font-bold text-center text-blue-600 hover:text-blue-700'
            to='/signup'
          >
            Create A New Account
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
