import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className='container p-10'>
      <h1 className='text-2xl'> This is Login Component</h1>

      <button onClick={signInUsingGoogle} className='bg-gray-500  p-5'>
        Sign In Usign Goolegle
      </button>

      <br/>

      <p>
        Don't Have Account <Link to='/signup'> Create A New Account </Link>
      </p>
    </div>
  );
};

export default LogIn;
