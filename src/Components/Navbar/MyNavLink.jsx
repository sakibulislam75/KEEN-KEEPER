import React from 'react';
import { NavLink } from 'react-router-dom';

const MyNavLink = ({to,children}) => {
    return (
        <div>
        <NavLink to={to} className={(props)=>props.isActive? 'btn bg-[#244d3f] text-white font-semibold ':'btn text-gray-500'}>{children}</NavLink>
        </div>
    );
};

export default MyNavLink;