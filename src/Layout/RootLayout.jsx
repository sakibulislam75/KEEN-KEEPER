import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
    
        <div className='bg-[#f8fafc]'>
             <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
       
    );
};

export default RootLayout;