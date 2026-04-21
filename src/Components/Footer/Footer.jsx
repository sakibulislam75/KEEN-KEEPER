import React from 'react';
import logo from '../../assets/logo-xl.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
  
      <footer className="bg-[#244d3f] mt-25 ">
      <div className='text-white w-10/12 mx-auto'>
      <div className="flex flex-col items-center text-center gap-3 py-10">
        <img src={logo} alt="KeenKeeper" className="h-16 w-auto" />
        
        <p className="text-sm text-white/60 ">
         Your personal shelf of meaningful connections. Browse, tend and nurture the relationships that matter most.
        </p>

        <p className="mt-3 text-lg font-semibold">Social Links</p>
        
        <div className="flex gap-3">
          <a href="#" className="btn btn-circle btn-sm bg-white border-none text-black">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="btn btn-circle btn-sm bg-white border-none text-black">
            <FaFacebook size={16} />
          </a>
          <a href="#" className="btn btn-circle btn-sm bg-white border-none text-black">
            <FaXTwitter size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 py-5 px-10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-2">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
  </div>
    </footer>

  );
};

export default Footer;