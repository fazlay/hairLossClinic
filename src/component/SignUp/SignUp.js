import {

  getAuth,
  GoogleAuthProvider,
} from '@firebase/auth';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const SignUp = () => {
  const auth = getAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerNewUser, error } = useAuth(name, email, password);

  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(email, password);

    registerNewUser(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className=' mt-10 mx-auto w-1/4'>
      <div>
        <form onSubmit={handleRegistration}>
          <div>
            <label class='block text-md font-light mb-2' for='password'>
              Full Name
            </label>
            <input
              type='text'
              onBlur={handleNameChange}
              className=' w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline form-control form-control'
              id='inputName'
              placeholder=' Enter Your Name'
            />
          </div>

          <div>
            <label class='block text-md font-light mb-2' for='password'>
              E-mail
            </label>
            <input
              className='w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline form-control form-control form-control'
              type='email'
              placeholder=' Enter Your Email'
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label class='block text-md font-light mb-2' for='password'>
              Password
            </label>
            <input
              className='w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline form-control form-control form-control form-control'
              type='password'
              placeholder=' Enter Your Password'
              onChange={handlePasswordChange}
            />
          </div>

          <button
            className='bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline mt-5'
            type='submit'
          >
            Sign Up
          </button>
        </form>
        <div className='text-red-600'> {error && error.message}</div>
        <p className='mb-8 text-sm text-center mt-10'>
          Already Have an Account{' '}
          <Link
            className=' w-full mb-8 text-sm font-bold text-center text-blue-600 hover:text-blue-700'
            to='/login'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
