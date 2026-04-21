import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Banner = () => {
    return (
        <div className='text-center mt-15 bg-[#f8fafc]'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                <h2 className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</h2>
            <button className='btn bg-[#244d3f] text-white font-semibold'><BiPlus></BiPlus> Add a friend</button>
            </div>
            
        </div>
    );
};

export default Banner;