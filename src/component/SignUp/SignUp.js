import {
  createUserWithEmailAndPassword,
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

  const registerNewUser = (email, password,event) => {

    console.log('enter the function');
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError('');

        // setUserName();
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
      });
  };

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    
      registerNewUser(email, password);
    }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className='text-2xl'> This is SignUP Component</h1>
      <form onSubmit={handleRegistration}>
        <h1 className='text-3xl'>
          {' '}
          Enter Your name{' '}
          <input
            type='text'
            onBlur={handleNameChange}
            className='form-control'
            id='inputName'
            placeholder='Your Name'
          />
        </h1>
        <h1 className='text-3xl'>
          {' '}
          Enter Your E-mail{' '}
          <input
            className='border-2 form-control'
            type='email'
            onChange={handleEmailChange}
          />
        </h1>
        <h1 className='text-3xl'>
          {' '}
          Enter Your Password{' '}
          <input
            className='border-2 form-control'
            type='password'
            onChange={handlePasswordChange}
          />
        </h1>
        <button type='submit'>Submit</button>
      </form>
      <p>
        Already Have an Account <Link to='/login'> log In </Link>
      </p>
    </div>
  );
};

export default SignUp;
