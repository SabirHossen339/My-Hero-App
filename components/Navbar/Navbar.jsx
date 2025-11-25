import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = <>
    <Link to='/'><li className="m-2 text-xl font-semibold">Home</li></Link>
    <Link to=''><li className="m-2 text-xl font-semibold">Apps</li ></Link>
    <Link to=''><li className="m-2 text-xl font-semibold">Installation</li ></Link>

  </>
  return (
    <div className="navbar bg-base-100 shadow-sm p-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img className='w-[50px]' src="/assets/logo.png" alt="" />
        <a className="font-bold md:text-2xl lg:text-2xl">Hero.IO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a href='https://github.com/SabirHossen339/My-Hero-App' className="btn rounded-xl text-white bg-linear-to-l from-purple-400 via-purple-500 to-purple-600"><FaGithub />Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;