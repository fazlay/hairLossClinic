import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className='flex overflow-hidden flex-wrap'>
        <div className='relative mx-auto'>
          {/* <!-- navbar --> */}
          <nav className='flex justify-between bg-gray-900 text-white w-screen'>
            <div className='px-5 py-6 flex w-full items-center'>
              <Link to='/'>
                <img
                  className='h-9'
                  src='https://e7.pngegg.com/pngimages/23/757/png-clipart-hair-follicle-hair-transplantation-surgery-hair-loss-hair-cosmetics-people-thumbnail.png'
                  alt=''
                />
              </Link>

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
              <div className='hidden md:flex items-center space-x-5'>
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
          {/* ------------Responsive item show case--------------------------------------------------------------------- */}

          <div className=' text-center  bg-gray-900 text-white mx-auto'>
            <div className=''>
              {/* <!-- Nav Links --> */}
              <ul className='md:hidden px-4 font-semibold font-heading '>
                <li className="py-1">
                  <NavLink
                    className='hover:text-gray-200 py-4'
                    to='/home'
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red',
                    }}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="py-1">
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

                <li className="py-1">
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
                <li className="py-1">
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
                <li className="py-1">
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
              <div className='md:hidden '>
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
          </div>
          {/* --------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default Header;
