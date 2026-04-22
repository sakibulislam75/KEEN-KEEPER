import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
    
        <div className='bg-[#f8fafc]'>
             <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
          <ToastContainer />
        </div>
       
    );
};

export default RootLayout;