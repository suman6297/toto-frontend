import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";

import { menuItems } from './layout/projectData';
import { Button } from "./layout/Button";
import useScrollDirection from './hooks/useScrollDirection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenuAndDropdown = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'text-callto-action' : 'text-gray-700 hover:text-callto-action';
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto w-full flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8 xl:px-0">
        
        {/*Site Logo*/}
        <Link to="/" className="inline-flex items-center space-x-2 cursor-pointer">
          <span>
            <img
              src="/logo/logo.PNG"
              alt="totojan logo"
              className="w-8 md:w-10 lg:w-12"
            />
          </span>
          <span className="font-bold font-lato text-xl md:text-2xl lg:text-3xl text-callto-action ml-2">
            totojan
          </span>
        </Link>
        
        {/*Nav Links*/}
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium font-poppins ${getNavLinkClass(item.href)} pb-2`}
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-7 rounded-md left-0 w-full h-1 bg-callto-action transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              </li>
            ))}
          </ul>
          <div className="relative inline-block text-left">
            <Link to='/login'>
              <Button
                type="button"
                onClick={toggleDropdown}
                onMouseEnter={toggleDropdown}
                className="ml-6 px-5 py-1.5"
              >
                Log in
              </Button>
            </Link>
            {isDropdownOpen && (
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute right-0 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div>
                  <Link
                    to="/signup"
                    className="block px-4 py-3 text-sm font-medium font-lato text-gray-700 hover:bg-gray-100"
                  >
                    New user in totojan? <span className='text-callto-action font-poppins pl-1'>Sign up</span>
                  </Link>
                  <Link
                    to="/delete"
                    className="block px-4 py-3 text-sm font-medium font-lato text-gray-700 hover:bg-gray-100"
                  >
                    Existing user? <span className='text-red-700 font-poppins pl-1'>Delete Account</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/*Mobile & Tab view*/}
        <div className="lg:hidden flex items-center">
          <Link to="#"><p className='mr-3 cursor-pointer font-medium font-poppins text-gray-700 hover:text-callto-action text-sm md:text-md'>Download App</p></Link>
          <MdMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-callto-action" />
        </div>

        {/*Mobile view menu*/}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-5">

                <div className="flex items-center justify-between">
                  {/*Mobile menu site logo*/}
                  <Link to="/" className="inline-flex items-center space-x-2 cursor-pointer">
                    <span className='pl-2'>
                      <img
                        src="/logo/logo.PNG"
                        alt="totojan logo"
                        className="w-10"
                      />
                    </span>
                    <span className="font-bold font-lato text-lg text-callto-action">totojan</span>
                  </Link>
                  <div className="-mr-2"> {/*menu close button*/}
                    <button
                      type="button"
                      onClick={closeMenuAndDropdown}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <MdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/*Mobile menu items*/}
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={toggleMenu}
                        className="-m-3 p-3 flex items-center rounded-md text-sm font-medium font-poppins hover:bg-gray-50"
                      >
                        <span className={`ml-3 ${getNavLinkClass(item.href)}`}>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="relative inline-block text-left w-full">
                  <Link to='/login'>
                    <Button
                      type="button"
                      onClick={toggleMenu}
                      onMouseEnter={toggleDropdown}
                      className="mt-4 w-full px-4 py-2"
                    >
                      Log in
                    </Button>
                  </Link>
                  {isDropdownOpen && (
                    <div
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="absolute right-0 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <div>
                        <Link
                          to="/signup"
                          className="block px-4 py-3 text-sm font-medium font-lato text-gray-700 hover:bg-gray-100"
                          onClick={toggleMenu}
                        >
                          New user in totojan? <span className='text-callto-action font-poppins pl-1'>Sign up</span>
                        </Link>
                        <Link
                          to="/delete"
                          className="block px-4 py-3 text-sm font-medium font-lato text-gray-700 hover:bg-gray-100"
                          onClick={toggleMenu}
                        >
                          Existing user? <span className='text-red-700 font-poppins pl-1'>Delete Account</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;