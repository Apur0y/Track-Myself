import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" top-0 w-full z-30 pt-5 fixed flex justify-between bg-base-100 shadow-sm">
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
