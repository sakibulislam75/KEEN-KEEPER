import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import logo from '../../assets/logo.png'
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
const Navbar = () => {
  return (
    <div className="bg-base-200 lg:shadow-sm w-full rounded-md">
      <div className="w-11/12 mx-auto">

    
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

   
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 z-10 hidden peer-checked:block lg:hidden"
        />

        <div className="navbar">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <span className="flex items-center gap-1">
              <img src={logo} alt="Logo" className="h-[30px] w-fit ml-1" />
            </span>
          </div>

      
          <div className="hidden lg:flex navbar-end gap-1.5">
            <MyNavLink to='/'><RiHome2Line /> Home</MyNavLink>
            <MyNavLink to='/Timeline'><RiTimeLine /> Timeline</MyNavLink>
            <MyNavLink to='/Stats'><GoGraph /> Stats</MyNavLink>
          </div>
        </div>

        
        <div className="hidden peer-checked:block lg:hidden z-20 relative">
          <ul className="menu bg-base-200 rounded-md p-2">
            <li><MyNavLink to='/'><RiHome2Line /> Home</MyNavLink></li>
            <li><MyNavLink to='/Timeline'><RiTimeLine /> Timeline</MyNavLink></li>
            <li><MyNavLink to='/Stats'><GoGraph /> Stats</MyNavLink></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;