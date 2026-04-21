import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-3">
      <h1 className="text-8xl text-[#244d3f] font-medium">404</h1>
      <p className="text-base-content/60">Page not found</p>
     <NavLink to='/'className='btn bg-[#244d3f] text-white font-semibold'><RiHome2Line /> Home</NavLink>
    </div>
  );
};
export  default NotFound;