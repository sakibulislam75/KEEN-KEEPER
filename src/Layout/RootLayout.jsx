import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const RootLayout = () => {
    return (
    
        <div className='bg-[#f8fafc]'>
             <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
       
    );
};

export default RootLayout;