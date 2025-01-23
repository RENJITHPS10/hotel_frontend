import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="bg-black w-full ">
        <div className="flex justify-between items-center">
          <div className='flex justify-center items-center p-3'>
            <img src="/logo.png" alt="" className="w-14 h-14"  />
            <p className='text-white text-xl ms-3'>DEEPNET SOLUTIONS</p>
          </div>
          <div className="justify-center text-white items-center text-sky font-bold text-xl hidden md:flex">
            <Link to={'/'} className="mx-10">Home</Link>
            <Link to={'/menu'} className="mx-10" >Menu</Link>
            <Link to={'/reservation'} className="mx-10">Make a Reservation</Link>
            <Link to={'/contact'} className="mx-10">Contact Us</Link>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-white fa-xl me-5" />
                    </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`fixed top-16 right-0 lg:hidden bg-black font-semibold w-40 h-screen shadow-lg transition-transform duration-500 z-50 ease-in-out transform ${show ? 'translate-x-0' : 'translate-x-full'}`}
        ref={menuRef}
      >
        <div className="p-5">
          <Link to={'/'} className="text-white text-lg block mb-4" onClick={toggleMenu}>
            Home
          </Link>
          <Link to={'/menu'} className="text-white text-lg block mb-4" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to={'/reservation'} className="text-lg block mb-4 text-white " onClick={toggleMenu}>Make a Reservation</Link>
          <Link to={'/contact'} className="text-lg block mb-4 text-white " onClick={toggleMenu}>Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;