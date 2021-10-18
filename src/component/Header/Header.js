import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='relative mx-auto'>
          {/* <!-- navbar --> */}
          <nav className='flex justify-between bg-gray-900 text-white w-screen'>
            <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
              <a className='text-3xl font-bold font-heading' href='#'>
                <img className='h-9' src='' alt='' />
              </a>
              {/* <!-- Nav Links --> */}
              <ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
                <li>
                  <NavLink
                    className='hover:text-gray-200'
                    to='/home'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='hover:text-gray-200'
                    to='/services'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='hover:text-gray-200'
                    to='/about'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='hover:text-gray-200'
                    to='/shop'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='hover:text-gray-200'
                    to='/contact'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className='hidden xl:flex items-center space-x-5'>
                {user?.email ? (
                  <div>
                    <button
                      onClick={logOut}
                      className='bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2'
                    >
                      LogOut
                    </button>
                    <span> {user.displayName}</span>
                  </div>
                ) : (
                  <div>
                    <Link to='/login'>
                      <button className='bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2'>
                        Log In
                      </button>
                    </Link>
                    <Link to='/signup'>
                      <button className='bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2'>
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}

                {/* <!-- Sign In / Register      --> */}
                <a className='flex items-center hover:text-gray-200' href='#'>
                  <svg
                    className='h-6 w-6 hover:text-gray-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className='xl:hidden flex mr-6 items-center' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 hover:text-gray-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
              <span className='flex absolute -mt-5 ml-4'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
              </span>
            </a>
            <a className='navbar-burger self-center mr-12 xl:hidden' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 hover:text-gray-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
