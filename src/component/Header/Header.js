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
              <Link to='/'>
                <img
                  className='h-9'
                  src='https://e7.pngegg.com/pngimages/799/970/png-clipart-pattern-hair-loss-%E3%81%84%E3%82%89%E3%81%99%E3%81%A8%E3%82%84-management-of-hair-loss-middle-hair-style-child-face-thumbnail.png'
                  alt=''
                />
              </Link>

              {/* <!-- Nav Links --> */}
              <ul className=' md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
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
                    to='/appoinment'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    MAKE AN APPOINMENT
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
              </ul>
              {/* <!-- Header Icons --> */}
              <div className=' xl:flex items-center space-x-5'>
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
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
