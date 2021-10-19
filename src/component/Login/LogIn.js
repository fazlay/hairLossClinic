import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { processLogin } = useAuth(email, password);
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
    <div className='container p-10'>
      <h1 className='text-2xl'> This is Login Component</h1>

      <button onClick={signInUsingGoogle} className='bg-gray-500  p-5'>
        Sign In Usign Goolegle
      </button>

      <br />
      <br />
      <br />
      <form onSubmit={handleLogIn}>
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
        <button type='submit'>Log In</button>
      </form>

      <p>
        Don't Have Account <Link to='/signup'> Create A New Account </Link>
      </p>
    </div>
  );
};

export default LogIn;
