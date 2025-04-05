import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [top,setTop]=useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Run once to set initial state
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div>
      <div className= {`top-0 w-full ${top?"bg-transparent " : "bg-teal-600" } z-30 pt-5 fixed flex justify-between  text-white`}>
        <div className="">
          <a className="btn btn-ghost text-xl">Track Myself</a>
        </div>
        <div className="flex gap-5">
            <Link to='/'>
            Work Entry
            </Link>
          <Link to='/overview'>
          Overview
          </Link>
          <Link>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
